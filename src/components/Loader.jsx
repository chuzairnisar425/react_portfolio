import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ease } from "./ease";

const COUNT_MS = 1400; // counter reaches 100 this long after the page started loading
const HOLD_MS = 150; // pause on 100 before the curtain lifts
const MAX_MS = 3000; // never keep anyone waiting longer than this

// Eased 0-100 progress for a moment in time (ms since the page started loading).
const progress = (now) => {
  const t = Math.min(now / COUNT_MS, 1);
  return { t, value: Math.round((1 - Math.pow(1 - t, 3)) * 100) };
};

// Intro screen: a counter runs to 100 while fonts load, then the curtain lifts.
export function Loader({ onDone }) {
  const [count, setCount] = useState(() => progress(performance.now()).value);
  const done = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (done.current) return;
      done.current = true;
      onDone();
    };

    // Counts from page load, not from when this mounts, so slow loads don't wait twice.
    let raf;
    const counted = new Promise((resolve) => {
      const tick = (now) => {
        const { t, value } = progress(now);
        setCount(value);
        if (t < 1) raf = requestAnimationFrame(tick);
        else resolve();
      };
      raf = requestAnimationFrame(tick);
    });
    const fonts = document.fonts?.ready ?? Promise.resolve();

    let hold;
    Promise.all([counted, fonts]).then(() => {
      hold = setTimeout(finish, HOLD_MS);
    });
    const cap = setTimeout(finish, MAX_MS);

    const html = document.documentElement;
    html.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hold);
      clearTimeout(cap);
      html.style.overflow = "";
    };
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading portfolio"
      initial={{ clipPath: "inset(0% 0 0% 0)" }}
      exit={{ clipPath: "inset(0% 0 100% 0)" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="loader__top mono">
        <span>Uzair Nisar</span>
        <span>Portfolio / 2026</span>
      </div>

      <motion.div
        className="loader__mark"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease }}
        aria-hidden="true"
      >
        UN
      </motion.div>

      <div className="loader__bottom">
        <motion.span
          className="loader__count"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          {String(count).padStart(3, "0")}
        </motion.span>
        <span className="mono loader__label">Full Stack Developer</span>
      </div>

      <span className="loader__bar" style={{ transform: `scaleX(${count / 100})` }} aria-hidden="true" />
    </motion.div>
  );
}
