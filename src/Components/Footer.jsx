import "../CSS/Footer.css";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YOUR_GITHUB",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_LINKEDIN",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/YOUR_TWITTER",
  },
  {
    label: "Email",
    href: "mailto:YOUR_EMAIL",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <h3 className="footer-title">YOUR NAME</h3>

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
        © 2026 YOUR NAME. All rights reserved.
      </p>
    </footer>
  );
}
