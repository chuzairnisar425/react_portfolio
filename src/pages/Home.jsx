import React from "react";
import { Contact, Hero, Portfolio, Resume, Service, Skill, Blog } from "../utils/Router";

const Section = ({ id, children }) => {


  return (
    <section
      id={id}
      className='section'  >
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
