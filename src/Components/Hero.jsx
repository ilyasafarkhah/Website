import { motion } from "motion/react";
import "/src/CSS/Hero.css"
import heropic2 from "./assets/heropic2.jpg"

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 8) % 100}%`,
  top: `${(i * 53 + 12) % 100}%`,
  delay: `${(i % 7) * 0.9}s`,
  duration: `${6 + (i % 5)}s`,
}));

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div aria-hidden="true" className="hero-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
      <img src={heropic2} alt="heropic2"/>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="glass"
      >
        <motion.h1
          variants={item}
          className="hero-title"
        >
          Safarkhah
        </motion.h1>

        <motion.h2
          variants={item}
          className="hero-subtitle"
        >
          Aspiring Frontend Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="hero-description"
        >
          Frontend developer building interactive web experiences with React and modern technologies.
        </motion.p>

        <motion.div
          variants={item}
          className="hero-actions"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>

          <a
            href="mailto:YOUR_EMAIL"
            className="btn btn-ghost"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
