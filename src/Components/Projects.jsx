import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import { projects } from "/src/Data/Projects.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";

export default function Projects() {
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Projects" subtitle="Things I've built — open any of them as a live preview right here." />
      <ul className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onPreview={setPreview} />
        ))}
      </ul>
      <AnimatePresence>
        {preview && <PreviewModal project={preview} onClose={closePreview} />}
      </AnimatePresence>
    </section>
  );
}
