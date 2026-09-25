import { motion } from "motion/react";
import "/src/Components/Hero.css"
import heropic2 from "./assets/heropic2.jpg"

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 8) % 100}%`,
  top: `${(i * 53 + 12) % 100}%`,
  delay: `${(i % 7) * 0.9}s`,
  duration: `${6 + (i % 5)}s`,
}));

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <span key={i} className="particle" style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }} />
        ))}
      </div>
      <img src={heropic2} alt="heropic2"/>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="glass relative z-10 rounded-[2rem] px-8 py-14 text-center"
      >
        <motion.h1 variants={item} className="text-gradient font-display text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          YOUR NAME
        </motion.h1>
        <motion.h2 variants={item} className="mt-4 font-display text-xl font-semibold text-slate-200 sm:text-2xl">
          Creative Developer
        </motion.h2>
        <motion.p variants={item} className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
          I build modern, interactive and high-performance digital experiences.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn btn-primary">
            View Projects <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="mailto:YOUR_EMAIL" className="btn btn-ghost">Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
