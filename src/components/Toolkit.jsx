import { education, milestones, toolkit } from "../data/content";
import { Arrow, Reveal, SectionHead } from "./ui";
import { useCanHover, useHoverPreview } from "./hooks";

export function Toolkit() {
  return (
    <section id="toolkit" className="section toolkit">
      <div className="wrap">
        <SectionHead
          number="04"
          label="Toolkit"
          aside="Stack in use"
          title={<>What I reach for</>}
        />
        <div className="table" role="table" aria-label="Skills by category">
          {toolkit.map((row, i) => (
            <Reveal className="table__row" role="row" key={row.group} delay={i * 0.04}>
              <span className="table__group mono" role="rowheader">{row.group}</span>
              <span className="table__items" role="cell">
                {row.items.map((item) => (
                  <span key={item} className="table__item">{item}</span>
                ))}
              </span>
              <span className="table__count mono" role="cell" aria-label={`${row.items.length} items`}>
                {String(row.items.length).padStart(2, "0")}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Recognition() {
  const canHover = useCanHover();
  const { bind, preview } = useHoverPreview();

  return (
    <section id="recognition" className="section recognition">
      <div className="wrap">
        <SectionHead number="05" label="Education & recognition" title={<>Where it <em>started</em></>} />
        <div className="recog">
          <Reveal className="degree">
            <span className="mono">{education.years}</span>
            <p className="degree__title">{education.degree}</p>
            <p className="degree__school">{education.school}</p>
          </Reveal>
          <ul className="milestones">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 0.05}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="milestone"
                  {...(canHover ? bind(m) : {})}
                >
                  <span className="mono milestone__tag">{m.tag}</span>
                  <span className="milestone__title">{m.title}</span>
                  <Arrow />
                  <span className="sr-only">(LinkedIn post, opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      {canHover && preview}
    </section>
  );
}
