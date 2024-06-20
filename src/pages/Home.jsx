import React from "react";
import { Contact, Hero, Portfolio, Resume, Service, Skill, Blog } from "../utils/Router";
import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";

const Section = ({ id, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value based on when you want the animation to trigger
    triggerOnce: true,
  });

  return (
    <section
    id={id}
    ref={ref}
    className={`section ${inView ? "animate__animated animate__fadeInUp visible" : "hidden"}`}
  >
    {children}
  </section>
  );
};

const Home = () => {
  return (
    <div>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="service">
        <Service />
      </Section>
      <Section id="portfolio">
        <Portfolio />
      </Section>
      <Section id="resume">
        <Resume />
      </Section>
      <Section id="skill">
        <Skill />
      </Section>
      <Section id="blog">
        <Blog />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
};

export { Home };
