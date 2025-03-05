import React from "react";
import { motion } from "framer-motion";
import { Contact, Hero, Portfolio, Resume, Service, Skill, Blog } from "../utils/Router";

const fadeInOnScroll = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Section = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInOnScroll}
    >
      {children}
    </motion.section>
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
