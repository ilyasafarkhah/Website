import { motion, MotionConfig } from "motion/react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import Footer from "./Components/Footer.jsx";
import "./CSS/App.css";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-background" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="grid-overlay" />
      </div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </MotionConfig>
  );
}
