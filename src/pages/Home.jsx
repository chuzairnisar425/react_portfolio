import {  Contact, Hero, Portfolio, Resume, Service, Skill, Blog } from "../utils/Router";



import React from "react";

const Home = () => {
  return (
    <div>
      <section id="hero">
      <Hero />
      </section>
      <section id="service">
      <Service />
      </section>
      <section id="portfolio">
      <Portfolio />
      </section>
      <section id="resume">
      <Resume />
      </section>
      <section id="skill">
      <Skill />
      </section>
      <section id="blog">
      <Blog />
      </section>
      <section id="contact">
      <Contact />
      </section>
    </div>
  );
};

export { Home };


















