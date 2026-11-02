import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { builds, caseStudies } from "../data/content";
import { Arrow, Reveal, SectionHead } from "./ui";
import { useCanHover, useHoverPreview } from "./hooks";
import { ease } from "./ease";

function CaseFiles() {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <div className="cases">
      <Reveal className="cases__tabs" role="tablist" aria-label="Product work">
        {caseStudies.map((c, i) => (
          <button
            key={c.title}
            role="tab"
            id={`case-tab-${i}`}
            aria-selected={active === i}
            aria-controls="case-panel"
            className={`cases__tab ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="mono">{c.index}</span>
            <span className="cases__tab-title">{c.title}</span>
            <span className="cases__tab-kind">{c.kind}</span>
          </button>
        ))}
      </Reveal>

      <div className="cases__stage" id="case-panel" role="tabpanel" aria-labelledby={`case-tab-${active}`}>
        <AnimatePresence mode="wait">
          <motion.article
            key={cs.title}
            className="case"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="case__head">
              <span className="case__index" aria-hidden="true">{cs.index}</span>
              <div>
                <p className="mono case__context">{cs.context}</p>
                <h3 className="case__title">{cs.title}</h3>
                <p className="case__intro">{cs.intro}</p>
              </div>
            </div>
            <dl className="case__modules">
              {cs.modules.map(([name, text], i) => (
                <motion.div
                  className="case__module"
                  key={name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.1 + i * 0.05 }}
                >
                  <dt>
                    <span className="mono">{String(i + 1).padStart(2, "0")}</span> {name}
                  </dt>
                  <dd>{text}</dd>
                </motion.div>
              ))}
            </dl>
            <div className="case__foot">
              <ul className="tags tags--paper" aria-label="Technologies">
                {cs.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {cs.url && (
                <a href={cs.url} target="_blank" rel="noopener noreferrer" className="link-underline case__link">
                  Visit site <Arrow />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}

function BuildIndex() {
  const canHover = useCanHover();
  const { bind, preview } = useHoverPreview();

  return (
    <div className="builds">
      <Reveal className="builds__head">
        <h3 className="builds__title">Independent builds</h3>
        <p className="mono">{String(builds.length).padStart(2, "0")} projects · live links</p>
      </Reveal>
      <ol className="builds__list">
        {builds.map((b, i) => (
          <Reveal as="li" key={b.title} delay={Math.min(i * 0.04, 0.2)}>
            <a
              className="build"
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              {...(canHover ? bind(b) : {})}
            >
              <span className="build__num mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="build__thumb">
                <img src={b.image} alt="" loading="lazy" width="1400" height="640" />
              </span>
              <span className="build__main">
                <span className="build__name">{b.title}</span>
                <span className="build__desc">{b.desc}</span>
              </span>
              <span className="build__note mono">{b.note}</span>
              <span className="build__stack">{b.stack}</span>
              <Arrow className="build__arrow" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        ))}
      </ol>
      {canHover && preview}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <SectionHead
          number="03"
          label="Selected work"
          aside="Products & builds"
          title={<>Work that <em>shipped</em></>}
        />
        <CaseFiles />
        <BuildIndex />
      </div>
    </section>
  );
}
