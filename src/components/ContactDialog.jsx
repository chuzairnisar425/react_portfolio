import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import { Arrow } from "./ui";

// Submissions go to Netlify Forms. The matching hidden form in index.html
// lets Netlify detect the "contact" form at deploy time.
const FORM_NAME = "contact";
const empty = { name: "", email: "", message: "", "bot-field": "" };

export function ContactDialog({ open, onClose }) {
  const ref = useRef(null);
  const [data, setData] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    onClose();
    if (status === "sent") {
      setData(empty);
      setStatus("idle");
    }
  };

  const update = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": FORM_NAME, ...data }).toString(),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={close}
      onClick={(e) => e.target === ref.current && close()}
    >
      <div className="dialog__panel">
        <button className="dialog__close mono" onClick={close} aria-label="Close">
          Close ✕
        </button>

        {status === "sent" ? (
          <div className="dialog__done" role="status">
            <span className="mono dialog__eyebrow">Message sent</span>
            <h2 id="dialog-title" className="dialog__title">
              Thanks, <em>{data.name.split(" ")[0] || "friend"}.</em>
            </h2>
            <p className="dialog__text">
              Your message is on its way. I&apos;ll reply to {data.email}.
            </p>
            <button className="btn btn--ink" onClick={close}>Done</button>
          </div>
        ) : (
          <>
            <span className="mono dialog__eyebrow">Send a message</span>
            <h2 id="dialog-title" className="dialog__title">
              Write to <em>Uzair</em>
            </h2>

            <form
              name={FORM_NAME}
              method="POST"
              onSubmit={submit}
              className="form"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="form__trap" aria-hidden="true">
                <label>
                  Leave this empty
                  <input name="bot-field" value={data["bot-field"]} onChange={update} tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="form__row">
                <label className="field">
                  <span className="mono field__label">Your name</span>
                  <input name="name" required autoComplete="name" value={data.name} onChange={update} />
                </label>
                <label className="field">
                  <span className="mono field__label">Your email</span>
                  <input name="email" type="email" required autoComplete="email" value={data.email} onChange={update} />
                </label>
              </div>

              <label className="field">
                <span className="mono field__label">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={data.message}
                  onChange={update}
                  placeholder="What are you building, and where could I help?"
                />
              </label>

              {status === "error" && (
                <p className="form__error" role="alert">
                  The message couldn&apos;t be sent just now. Please email me directly at{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}

              <div className="form__actions">
                <button type="submit" className="btn btn--signal" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"} <Arrow />
                </button>
                <span className="form__note">Goes straight to my inbox.</span>
              </div>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
