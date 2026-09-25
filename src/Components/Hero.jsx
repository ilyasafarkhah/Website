import { motion } from "motion/react";
<<<<<<< HEAD
import "/src/Components/Hero.css"
import heropic2 from "./assets/heropic2.jpg"
=======
import "../CSS/Hero.css";
>>>>>>> e79677d5f9e25a3b9f272deb7fa99e498a76aed1

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
<<<<<<< HEAD
        className="glass relative z-10 rounded-[2rem] px-8 py-14 text-center"
=======
        className="glass hero-card"
>>>>>>> e79677d5f9e25a3b9f272deb7fa99e498a76aed1
      >
        <motion.h1
          variants={item}
          className="text-gradient hero-title"
        >
          YOUR NAME
        </motion.h1>

        <motion.h2
          variants={item}
          className="hero-subtitle"
        >
          Creative Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="hero-description"
        >
          I build modern, interactive and high-performance digital experiences.
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
