// Contact form endpoint: validates the submission and emails it through Resend.
// Runs as a Netlify Function in production and inside the Vite dev server locally
// (see vite.config.js). Settings come from environment variables; see .env.example.

import { randomBytes } from "node:crypto";
import { confirmationEmail, inquiryEmail } from "../lib/email.mjs";

const DEFAULT_TO = "uzair.nisar484@gmail.com";
// Resend's shared test sender only delivers to the email on your Resend account.
// Set CONTACT_FROM to an address on a domain verified in Resend for production.
const DEFAULT_FROM = "Uzair Nisar · Website <onboarding@resend.dev>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 200, message: 5000 };

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Short, readable reference like "INQ-7F3K2A" to find an inquiry later.
const newRef = () =>
  "INQ-" + randomBytes(4).toString("base64url").replace(/[^A-Za-z0-9]/g, "").slice(0, 6).toUpperCase();

function validate(data) {
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || name.length > LIMITS.name) return { error: "Please enter your name." };
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) return { error: "Please enter a valid email address." };
  if (!message || message.length > LIMITS.message) return { error: "Please enter a message (up to 5,000 characters)." };
  return { value: { name, email, message } };
}

async function sendEmail(apiKey, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  return res.json();
}

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

  const { value, error } = validate(data);
  if (error) return json(400, { error });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return json(500, { error: "Email is not configured yet." });
  }

  const from = process.env.CONTACT_FROM || DEFAULT_FROM;
  const to = process.env.CONTACT_TO || DEFAULT_TO;
  const site = (process.env.URL || "your portfolio").replace(/^https?:\/\//, "");
  const ref = newRef();
  const details = { ...value, ref, site, receivedAt: new Date() };

  const inquiry = inquiryEmail(details);
  try {
    await sendEmail(apiKey, {
      from,
      to: [to],
      reply_to: `${value.name} <${value.email}>`,
      subject: inquiry.subject,
      html: inquiry.html,
      text: inquiry.text,
      // A unique ID per inquiry stops Gmail from grouping them into one thread.
      headers: { "X-Entity-Ref-ID": ref },
      tags: [{ name: "type", value: "inquiry" }],
    });
  } catch (err) {
    console.error("contact: inquiry not sent", ref, err.message);
    return json(502, { error: "The message couldn't be sent." });
  }

  // Optional confirmation to the visitor. Needs CONTACT_FROM on a verified domain,
  // and never fails the request: the inquiry has already reached you.
  if (process.env.CONTACT_AUTOREPLY === "on" && process.env.CONTACT_FROM) {
    const confirmation = confirmationEmail(details);
    try {
      await sendEmail(apiKey, {
        from,
        to: [value.email],
        reply_to: to,
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
        headers: { "X-Entity-Ref-ID": `${ref}-confirm` },
        tags: [{ name: "type", value: "confirmation" }],
      });
    } catch (err) {
      console.error("contact: confirmation not sent", ref, err.message);
    }
  }

  return json(200, { ok: true, ref });
}

export const config = { path: "/api/contact" };
