import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import { projects } from "/src/Data/Projects.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";
import "../CSS/Projects.css";

export default function Projects() {
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section id="projects" className="projects-section">
      <SectionHeading
        title="Projects"
        subtitle="Things I've built — open any of them as a live preview right here."
      />

      <ul className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onPreview={setPreview}
          />
        ))}
      </ul>

      <AnimatePresence>
        {preview && (
          <PreviewModal
            project={preview}
            onClose={closePreview}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
