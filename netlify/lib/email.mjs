// Email templates for the contact form. Table-based HTML with inline styles so it
// renders the same in Gmail, Outlook and Apple Mail, plus a plain-text version.

const C = {
  paper: "#EFEBE3",
  card: "#FFFFFF",
  ink: "#141412",
  muted: "#5F5B53",
  line: "#E2DDD2",
  signal: "#E2512B",
};
const SANS = "Helvetica, Arial, sans-serif";

export const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const firstName = (name) => name.trim().split(/\s+/)[0];

export function formatReceived(date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Karachi",
  }).format(date) + " PKT";
}

// Text shown next to the subject in the inbox list, hidden in the email itself.
const preheader = (text) => `
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all">
    ${escapeHtml(text.replace(/\s+/g, " ").slice(0, 140))}${"&#847;&zwnj;&nbsp;".repeat(40)}
  </div>`;

function layout({ preview, eyebrow, body, footer }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(eyebrow)}</title>
</head>
<body style="margin:0;padding:0;background:${C.paper};-webkit-text-size-adjust:100%">
${preheader(preview)}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.paper}">
  <tr>
    <td align="center" style="padding:32px 16px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:${C.card};border:1px solid ${C.line}">
        <tr>
          <td style="background:${C.ink};padding:18px 28px">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:${SANS};font-size:15px;font-weight:bold;color:${C.paper};letter-spacing:0.5px">
                  <span style="display:inline-block;background:${C.paper};color:${C.ink};padding:6px 8px;margin-right:10px;font-size:13px">UN</span>Uzair Nisar
                </td>
                <td align="right" style="font-family:${SANS};font-weight:bold;font-size:11px;color:#A8A397;text-transform:uppercase;letter-spacing:1.5px">
                  ${escapeHtml(eyebrow)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="height:4px;background:${C.signal};font-size:0;line-height:0">&nbsp;</td></tr>
        <tr>
          <td style="padding:32px 28px 8px;font-family:${SANS};color:${C.ink}">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 28px 28px;border-top:1px solid ${C.line};font-family:${SANS};font-size:12px;line-height:18px;color:${C.muted}">
            ${footer}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

const detailRow = (label, value) => `
  <tr>
    <td valign="top" style="padding:10px 0;border-bottom:1px solid ${C.line};width:110px;font-family:${SANS};font-weight:bold;font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px">${label}</td>
    <td valign="top" style="padding:10px 0;border-bottom:1px solid ${C.line};font-family:${SANS};font-size:15px;color:${C.ink}">${value}</td>
  </tr>`;

const messageBlock = (message) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px">
    <tr>
      <td style="background:${C.paper};border-left:4px solid ${C.signal};padding:18px 20px;font-family:${SANS};font-size:15px;line-height:24px;color:${C.ink}">
        ${escapeHtml(message).replace(/\r?\n/g, "<br>")}
      </td>
    </tr>
  </table>`;

const button = (href, label) => `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px">
    <tr>
      <td style="background:${C.ink};border-radius:999px">
        <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 26px;font-family:${SANS};font-size:15px;font-weight:bold;color:#FFFFFF;text-decoration:none;border-radius:999px">${escapeHtml(label)} &rarr;</a>
      </td>
    </tr>
  </table>`;

/** The email you receive for each contact form submission. */
export function inquiryEmail({ name, email, message, ref, receivedAt, site }) {
  const first = firstName(name);
  const replyHref = `mailto:${email}?subject=${encodeURIComponent("Re: Your message on my portfolio")}`;
  const received = formatReceived(receivedAt);

  const html = layout({
    preview: message,
    eyebrow: "New inquiry",
    body: `
      <p style="margin:0 0 6px;font-family:${SANS};font-weight:bold;font-size:11px;color:${C.signal};text-transform:uppercase;letter-spacing:1.5px">Contact form · ${ref}</p>
      <h1 style="margin:0 0 24px;font-family:${SANS};font-size:26px;line-height:32px;font-weight:bold;color:${C.ink}">${escapeHtml(name)} sent you a message</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;border-top:2px solid ${C.ink}">
        ${detailRow("Name", escapeHtml(name))}
        ${detailRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${C.ink};text-decoration:underline">${escapeHtml(email)}</a>`)}
        ${detailRow("Received", escapeHtml(received))}
      </table>
      <p style="margin:0 0 10px;font-family:${SANS};font-weight:bold;font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px">Message</p>
      ${messageBlock(message)}
      ${button(replyHref, `Reply to ${first}`)}`,
    footer: `Sent from the contact form on ${escapeHtml(site)}. Replying to this email goes straight to ${escapeHtml(first)} at ${escapeHtml(email)}.`,
  });

  const text = [
    `New inquiry · ${ref}`,
    "",
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Received: ${received}`,
    "",
    "Message",
    "-------",
    message,
    "",
    `Reply to this email to answer ${first} directly.`,
    `Sent from the contact form on ${site}.`,
  ].join("\n");

  return {
    subject: `New inquiry from ${name} · ${ref}`,
    html,
    text,
  };
}

/** Optional confirmation sent to the visitor (needs a verified sending domain). */
export function confirmationEmail({ name, message, ref, site }) {
  const first = firstName(name);

  const html = layout({
    preview: `Thanks ${first}, I've received your message and will get back to you soon.`,
    eyebrow: "Message received",
    body: `
      <h1 style="margin:0 0 16px;font-family:${SANS};font-size:26px;line-height:32px;font-weight:bold;color:${C.ink}">Thanks, ${escapeHtml(first)}.</h1>
      <p style="margin:0 0 24px;font-family:${SANS};font-size:15px;line-height:24px;color:${C.ink}">I've received your message and will get back to you soon. Here's a copy for your records:</p>
      ${messageBlock(message)}
      <p style="margin:0 0 24px;font-family:${SANS};font-size:15px;line-height:24px;color:${C.ink}">Muhammad Uzair Nisar<br><span style="color:${C.muted}">Full Stack Developer</span></p>`,
    footer: `You're receiving this because you used the contact form on ${escapeHtml(site)}. Reference ${ref}.`,
  });

  const text = [
    `Thanks, ${first}.`,
    "",
    "I've received your message and will get back to you soon. Here's a copy for your records:",
    "",
    message,
    "",
    "Muhammad Uzair Nisar",
    "Full Stack Developer",
    "",
    `Reference ${ref} · ${site}`,
  ].join("\n");

  return {
    subject: "Thanks for getting in touch",
    html,
    text,
  };
}
