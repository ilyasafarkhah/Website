import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function PreviewModal({ project, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);

  // If the iframe hasn't loaded after 8s, the site may block embedding — offer the fallback.
  useEffect(() => {
    const t = setTimeout(() => setSlow(true), 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} live preview`}
        className="glass flex h-full max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl"
        initial={{ scale: 0.94, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <p className="truncate text-sm text-slate-300">{project.title}</p>
          <div className="flex shrink-0 gap-2">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              Open Live Project <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <button type="button" onClick={onClose} aria-label="Close preview" autoFocus className="btn btn-ghost btn-sm">
              ✕
            </button>
          </div>
        </div>

        <div className="relative flex-1 bg-black/40">
          {!loaded && (
            <div role="status" className="absolute inset-0 grid place-items-center p-6 text-center text-slate-400">
              <div>
                <div className="spinner mx-auto mb-4" />
                <p>{slow ? "This is taking a while — the site may block embedding." : "Loading preview…"}</p>
                {slow && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">
                    Open Live Project <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          )}
          <iframe
            title={`${project.title} live preview`}
            src={project.liveUrl}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
