import { motion } from "motion/react";
import "../CSS/ProjectCard.css";
import vocabpic from "/src/Components/assets/vocab.png"

export default function ProjectCard({ project, index, onPreview }) {
  const {
    title,
    description,
    technologies,
    image,
    liveUrl,
    githubUrl,
  } = project;

  return (
    <motion.li
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.12,
        ease: "easeOut",
      }}
    >
      <article className="glass project-card">
        <div className="project-image-wrap">
          <img
            src={vocabpic}
            alt={`${title} preview`}
            loading="lazy"
            className="card-img"
          />

          <div className="card-fade" aria-hidden="true" />

          {liveUrl && (
            <button
              type="button"
              onClick={() => onPreview(project)}
              className="btn btn-primary live-preview-btn"
            >
              ▶ Live Preview
            </button>
          )}
        </div>

        <div className="project-content">
          <h3 className="project-title">{title}</h3>

          <p className="project-description">
            {description}
          </p>

          <ul aria-label="Technologies" className="tech-list">
            {technologies.map((tech) => (
              <li key={tech} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>

          <div className="project-actions">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Open Live Demo{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Source Code{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.li>
  );
}
