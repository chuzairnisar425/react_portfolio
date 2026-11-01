import { MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Toolkit, Recognition } from "./components/Toolkit";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main id="main">
        <Hero />
        <Profile />
        <Experience />
        <Work />
        <Toolkit />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
