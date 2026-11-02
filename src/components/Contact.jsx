import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, socials } from "../data/content";
import { Arrow, Reveal } from "./ui";
import { ContactDialog } from "./ContactDialog";

const channels = [
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  ...socials.map((s) => ({ label: s.label, value: s.handle, href: s.url, external: true })),
  { label: "Résumé", value: "Download PDF", href: profile.cv, download: true },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact theme-ink">
      <div className="wrap">
        <Reveal className="section-head__meta">
          <span className="mono">§06</span>
          <span className="mono">Contact</span>
          <span className="section-head__rule" aria-hidden="true" />
          <span className="mono">Say hello</span>
        </Reveal>

        <div className="contact__grid">
          <div className="contact__lead">
            <Reveal as="h2" className="contact__title">
              Let&apos;s build <br />
              something <br />
              <em>worth using.</em>
            </Reveal>
            <Reveal as="p" className="contact__text" delay={0.08}>
              A product role, a freelance build or just a question about my
              work. Tell me what you&apos;re building and where you need help.
            </Reveal>

            <Reveal className="contact__email" delay={0.14}>
              <span className="mono contact__label">Write to me</span>
              <a href={`mailto:${profile.email}`} className="contact__mail">
                {profile.email}
              </a>
              <div className="contact__actions">
                <button className="btn btn--signal" onClick={() => setFormOpen(true)} aria-haspopup="dialog">
                  Send an email <Arrow />
                </button>
                <button className="btn btn--line" onClick={copy}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "y" : "n"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      {copied ? "Copied ✓" : "Copy address"}
                    </motion.span>
                  </AnimatePresence>
                </button>
                <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="channels" delay={0.1}>
            <p className="mono contact__label">Elsewhere</p>
            <ul>
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    className="channel"
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(c.download ? { download: true } : {})}
                  >
                    <span className="mono channel__label">{c.label}</span>
                    <span className="channel__value">{c.value}</span>
                    <Arrow className="channel__arrow" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact__based mono">
              <span className="contact__dot" aria-hidden="true" />
              Based in {profile.location}
            </p>
          </Reveal>
        </div>
      </div>
      <ContactDialog open={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono footer__mid">Designed & built in React</span>
        <a href="#top" className="mono">Back to top ↑</a>
      </div>
    </footer>
  );
}
