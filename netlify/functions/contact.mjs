// Contact form endpoint. Sends the visitor's message to your inbox through Resend.
// Runs as a Netlify Function in production and inside the Vite dev server locally
// (see vite.config.js). Needs RESEND_API_KEY; CONTACT_TO and CONTACT_FROM are optional.

const DEFAULT_TO = "uzair.nisar484@gmail.com";
// Resend's shared test sender. It can only deliver to the email on your Resend account.
// Set CONTACT_FROM to an address on a domain you've verified in Resend to send from your own domain.
const DEFAULT_FROM = "Portfolio Contact <onboarding@resend.dev>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export default async function handler(req) {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  let data;
  try {
    data = await req.json();
  } catch {
    return json(400, { error: "Invalid request" });
  }

  // Spam bots fill the hidden field. Pretend it worked and send nothing.
  if (data["bot-field"]) return json(200, { ok: true });

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || name.length > 100) return json(400, { error: "Please enter your name." });
  if (!EMAIL_RE.test(email) || email.length > 200) return json(400, { error: "Please enter a valid email address." });
  if (!message || message.length > 5000) return json(400, { error: "Please enter a message (up to 5,000 characters)." });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return json(500, { error: "Email is not configured yet." });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#141412">
      <p style="margin:0 0 12px"><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt; sent a message from your portfolio:</p>
      <div style="padding:14px 16px;border-left:3px solid #e2512b;background:#efebe3;white-space:pre-wrap">${escapeHtml(message)}</div>
      <p style="margin:16px 0 0;color:#5f5b53">Reply to this email to answer ${escapeHtml(name)} directly.</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || DEFAULT_FROM,
      to: [process.env.CONTACT_TO || DEFAULT_TO],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${name} <${email}> sent a message from your portfolio:\n\n${message}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("contact: Resend error", res.status, await res.text());
    return json(502, { error: "The message couldn't be sent." });
  }

  return json(200, { ok: true });
}

export const config = { path: "/api/contact" };
