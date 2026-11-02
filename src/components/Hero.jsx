import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroBuilds, marquee, profile } from "../data/content";
import { Arrow } from "./ui";
import { ease } from "./ease";

function Letters({ text, delay = 0, ready }) {
  return (
    <span className="letters" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span className="letters__mask" key={i}>
          <motion.span
            className="letters__ch"
            initial={{ y: "105%" }}
            animate={{ y: ready ? "0%" : "105%" }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.04 }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function CyclingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % heroBuilds.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="cycle">
      <AnimatePresence mode="wait">
        <motion.em
          key={heroBuilds[i]}
          className="cycle__word"
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {heroBuilds[i]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}

const spec = [
  ["Role", profile.role],
  ["Currently", `${profile.current.title}, ${profile.current.company}`],
  ["Stack", "Next.js · React · Vue / Nuxt · TypeScript"],
  ["Based", profile.location],
];

// Everything waits for `ready`, so the intro plays after the loader lifts.
export function Hero({ ready = true }) {
  const fade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <section id="top" className="hero">
      <div className="wrap">
        <motion.div className="hero__meta mono" {...fade(0.1)}>
          <span>Portfolio / 2026</span>
          <span>{profile.role}</span>
          <span className="hero__meta-loc">{profile.location}</span>
        </motion.div>

        <div className="hero__body">
          <div className="hero__text">
            <h1 className="hero__name">
              <span className="sr-only">{profile.name}</span>
              <motion.span className="hero__first" aria-hidden="true" {...fade(0.15)}>
                <em>Muhammad</em>
              </motion.span>
              <span className="hero__line">
                <Letters text="Uzair" delay={0.2} ready={ready} />
                <span className="hero__space" aria-hidden="true" />
                <Letters text="Nisar" delay={0.35} ready={ready} />
                <motion.span className="hero__dot" aria-hidden="true" {...fade(0.9)}>.</motion.span>
              </span>
            </h1>

            <motion.p className="hero__lede" {...fade(0.8)}>
              Full stack developer. I build <CyclingWord />
              with React, Next.js and Vue. Right now that means healthcare SaaS
              at <strong>31 Green</strong>.
            </motion.p>

            <motion.div className="hero__actions" {...fade(1)}>
              <a href="#work" className="btn btn--signal">
                See the work <Arrow />
              </a>
              <a href="#contact" className="link-underline">Get in touch</a>
            </motion.div>
          </div>

          <motion.figure
            className="hero__portrait"
            initial={{ opacity: 0, y: 40 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
          >
            <span className="hero__frame">
              <motion.span
                className="hero__reveal"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: ready ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
                transition={{ duration: 1.1, ease, delay: 0.5 }}
              >
                <img
                  src="/images/work/uzair.jpg"
                  alt="Portrait of Muhammad Uzair Nisar"
                  width="900"
                  height="900"
                />
              </motion.span>
            </span>
            <figcaption className="mono">
              <span>Fig. 01</span>
              <span>Uzair, {profile.location.split(" /")[0]}</span>
            </figcaption>
          </motion.figure>
        </div>

        <motion.dl className="spec" {...fade(1.1)}>
          {spec.map(([k, v]) => (
            <div className="spec__row" key={k}>
              <dt className="mono">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="ticker" aria-label="Technologies I work with">
        <div className="ticker__track">
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1 ? "true" : undefined}>
              {marquee.map((t) => (
                <li key={t}>
                  {t}
                  <span className="ticker__sep" aria-hidden="true">✳</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
