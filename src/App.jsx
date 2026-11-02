import { useCallback, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Loader } from "./components/Loader";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Toolkit, Recognition } from "./components/Toolkit";
import { Contact, Footer } from "./components/Contact";

const INTRO_KEY = "intro-seen";

// Show the intro once per browser session, and never to people who prefer less motion.
function shouldShowIntro() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem(INTRO_KEY) !== "1";
  } catch {
    return true;
  }
}

export default function App() {
  const [intro, setIntro] = useState(shouldShowIntro);
  const [ready, setReady] = useState(!intro);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Private mode or blocked storage: the intro just plays again next time.
    }
    setIntro(false);
    setReady(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{intro && <Loader key="loader" onDone={finishIntro} />}</AnimatePresence>
      <Nav />
      <main id="main">
        <Hero ready={ready} />
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
