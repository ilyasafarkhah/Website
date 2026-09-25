import { motion } from "motion/react";
import { skills } from "../Data/Skills.js";
import SectionHeading from "./SectionHeading.jsx";
import "../CSS/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <SectionHeading title="What I Know" />

      <ul className="skills-grid">
        {skills.map((skill, i) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: "easeOut",
            }}
          >
            <div className="glass skill">
              <span className="skill-icon" aria-hidden="true">
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
