import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "../CSS/PreviewModal.css";

export default function PreviewModal({ project, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);

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
      className="preview-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} live preview`}
        className="glass preview-dialog"
        initial={{ scale: 0.94, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="preview-header">
          <p className="preview-title">{project.title}</p>

          <div className="preview-header-actions">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Open Live Project{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              autoFocus
              className="btn btn-ghost btn-sm"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="preview-body">
          {!loaded && (
            <div role="status" className="preview-loading">
              <div>
                <div className="spinner" />

                <p className="preview-loading-copy">
                  {slow
                    ? "This is taking a while — the site may block embedding."
                    : "Loading preview…"}
                </p>

                {slow && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary preview-loading-action"
                  >
                    Open Live Project{" "}
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
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
            className={`preview-iframe ${loaded ? "is-loaded" : ""}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
