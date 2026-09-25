import { useEffect, useState } from "react";
import "../CSS/Header.css";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="site-header"
    >
      <nav
        aria-label="Primary"
        className={`glass site-nav ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="site-nav-row">
          <a href="#home" className="site-brand">YOUR NAME</a>

          <ul className="desktop-nav">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "page" : undefined}
                  className="nav-link"
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-pill"
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="mobile-menu-button"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mobile-menu"
            >
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="mobile-nav-link">
                    {label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
