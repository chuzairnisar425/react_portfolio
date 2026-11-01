import { capabilities, facts } from "../data/content";
import { Reveal, SectionHead } from "./ui";

export function Profile() {
  return (
    <section id="profile" className="section profile">
      <div className="wrap">
        <SectionHead number="01" label="Profile" aside="About" title={<>The short version</>} />

        <div className="profile__grid">
          <Reveal className="profile__statement">
            <p>
              I&apos;m Uzair, a software engineer who started on the frontend and moved
              toward the <em>whole product</em>. Most of my recent work is in
              healthcare and practice management: appointment diaries, clinic portals,
              payments that reconcile on their own.
            </p>
            <p className="profile__sub">
              I care about interfaces that stay fast and clear when the data behind
              them gets complicated. I work in Agile teams with backend, QA and design,
              and I like owning a feature from the Figma file to the API call.
            </p>
          </Reveal>

          <ul className="facts">
            {facts.map((f, i) => (
              <Reveal as="li" className="facts__item" key={f.value + i} delay={i * 0.08}>
                <span className="facts__value">{f.value}</span>
                <span className="facts__label">{f.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="caps">
          <Reveal className="caps__intro">
            <span className="mono">What I do</span>
          </Reveal>
          <ol className="caps__list">
            {capabilities.map((c, i) => (
              <Reveal as="li" className="caps__item" key={c.title} delay={i * 0.1}>
                <span className="caps__num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className="caps__proof">
                  {c.proof.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
