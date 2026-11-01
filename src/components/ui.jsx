import { motion } from "framer-motion";
import { ease } from "./ease";

// Fades and lifts content once as it enters the viewport.
export function Reveal({ children, delay = 0, y = 28, as = "div", className, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Numbered section header: "§02  Experience ———— Track record".
export function SectionHead({ number, label, title, aside }) {
  return (
    <header className="section-head">
      <Reveal className="section-head__meta">
        <span className="mono">§{number}</span>
        <span className="mono">{label}</span>
        <span className="section-head__rule" aria-hidden="true" />
        {aside && <span className="mono section-head__aside">{aside}</span>}
      </Reveal>
      <Reveal as="h2" className="section-head__title" delay={0.08}>
        {title}
      </Reveal>
    </header>
  );
}

export function Arrow({ className = "" }) {
  return (
    <svg className={`arrow ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
