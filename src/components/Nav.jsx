import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { nav, profile, socials } from "../data/content";
import { ease } from "./ease";

function usePakistanTime() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Karachi",
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const t = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(t);
  }, []);
  return time;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = nav.map((n) => n.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const time = usePakistanTime();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
        <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
        <div className="nav__inner">
          <a href="#top" className="nav__mark" aria-label="Uzair Nisar, back to top">
            <span className="nav__monogram">UN</span>
            <span className="nav__name">Uzair Nisar</span>
          </a>

          <nav className="nav__links" aria-label="Sections">
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : ""}
                aria-current={active === item.id ? "true" : undefined}
              >
                <span className="mono">0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <span className="mono nav__time" title="Local time in Pakistan">PKT {time}</span>
            <a href={profile.cv} download className="btn btn--ink btn--sm">
              Résumé <span aria-hidden="true">↓</span>
            </a>
            <button
              className="nav__toggle"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu"
            >
              <span className="mono">{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease }}
          >
            <nav className="menu__links" aria-label="Menu">
              {nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease }}
                >
                  <span className="mono">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="menu__foot">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="menu__socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
