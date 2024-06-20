import {  Contact, Hero, Portfolio, Resume, Service, Skill,onial } from "../utils/Router";



import React from "react";

const Home = () => {
  return (
    <div>
      <section id="hero">
      <Hero />
        {/* Your Hero section content */}
      </section>
      <section id="service">
      <Service />
        {/* Your Service section content */}
      </section>
      <section id="portfolio">
      <Portfolio />
        {/* Your Portfolio section content */}
      </section>
      <section id="resume">
      <Resume />
        {/* Your Resume section content */}
      </section>
      <section id="skill">
      <Skill />
        {/* Your Skill section content */}
      </section>
      <section id="contact">
      <Contact />
        {/* Your Contact section content */}
      </section>
    </div>
  );
};

export { Home };


















