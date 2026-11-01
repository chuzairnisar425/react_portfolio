import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/content";
import { Reveal, SectionHead } from "./ui";
import { ease } from "./ease";

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="section experience theme-ink">
      <div className="wrap">
        <SectionHead
          number="02"
          label="Experience"
          aside="2023 — Now"
          title={<>Six teams, <em>one direction</em></>}
        />

        <ol className="ledger">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={job.company} className={`ledger__item ${isOpen ? "is-open" : ""}`} delay={i * 0.05}>
                <h3>
                  <button
                    className="ledger__row"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`job-${i}`}
                  >
                    <span className="ledger__period mono">{job.period}</span>
                    <span className="ledger__company">{job.company}</span>
                    <span className="ledger__role">{job.role}</span>
                    <span className="ledger__mode mono">{job.mode}</span>
                    <span className="ledger__icon" aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`job-${i}`}
                      className="ledger__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <div className="ledger__body">
                        <p className="ledger__summary">{job.summary}</p>
                        <ul className="ledger__points">
                          {job.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                        <ul className="tags" aria-label="Technologies">
                          {job.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
