import { motion } from "motion/react";
import { skills } from "../Data/skills.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="What I Know" />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
          >
            <div className="skill glass flex flex-col items-center gap-3 rounded-2xl px-4 py-7 text-center">
              <span className="skill-icon font-display text-3xl font-bold text-[#7fb2ff]" aria-hidden="true">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
