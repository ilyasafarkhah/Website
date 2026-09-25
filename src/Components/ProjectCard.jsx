import { motion } from "motion/react";

export default function ProjectCard({ project, index, onPreview }) {
  const { title, description, technologies, image, liveUrl, githubUrl } = project;

  return (
    // The motion wrapper handles the scroll reveal; the inner article handles CSS hover (keeps transforms from clashing).
    <motion.li
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: "easeOut" }}
    >
      <article className="card glass flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={image} alt={`${title} preview`} loading="lazy" className="card-img h-full w-full object-cover" />
          <div className="card-fade absolute inset-0" aria-hidden="true" />
          {liveUrl && (
            <button type="button" onClick={() => onPreview(project)} className="btn btn-primary absolute bottom-4 left-4">
              ▶ Live Preview
            </button>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="font-display text-xl font-bold">{title}</h3>
          <p className="text-slate-400">{description}</p>
          <ul aria-label="Technologies" className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li key={tech} className="rounded-full border border-[#5f9bff]/25 bg-[#2f6bff]/10 px-3 py-1 text-xs text-[#9cc2ff]">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Open Live Demo <span className="arrow" aria-hidden="true">↗</span>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Source Code <span className="arrow" aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.li>
  );
}
