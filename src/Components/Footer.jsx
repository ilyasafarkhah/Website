import "../CSS/Footer.css";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ilyasafarkhah",
  },
  {
    label: "Email",
    href: "mailto:ilyasafarkhah@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <h3 className="footer-title">Ilya Safarkhah</h3>

      <p className="footer-description">
        Building digital experiences.
      </p>

      <ul className="social-list">
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="btn btn-ghost btn-sm"
              {...(
                href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Safarkhah.
      </p>
    </footer>
  );
}
