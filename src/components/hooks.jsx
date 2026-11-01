import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ease } from "./ease";

// True on devices with a real pointer that can hover (not touch screens).
export function useCanHover() {
  const [can, setCan] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCan(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return can;
}

// Floating image that follows the cursor while a list row is hovered.
export function useHoverPreview() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });
  const [active, setActive] = useState(null);

  const bind = (item) => ({
    onMouseEnter: () => setActive(item),
    onMouseLeave: () => setActive(null),
    onMouseMove: (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    },
  });

  const preview = (
    <AnimatePresence>
      {active && (
        <motion.div
          className="hover-preview"
          style={{ left: sx, top: sy }}
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25, ease }}
          aria-hidden="true"
        >
          <img src={active.image} alt="" />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return { bind, preview };
}
