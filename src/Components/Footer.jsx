const socials = [
  { label: "GitHub", href: "https://github.com/YOUR_GITHUB" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_LINKEDIN" },
  { label: "Twitter", href: "https://twitter.com/YOUR_TWITTER" },
  { label: "Email", href: "mailto:YOUR_EMAIL" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 text-center">
      <h3 className="font-display text-xl font-bold tracking-[0.2em]">YOUR NAME</h3>
      <p className="mt-2 text-slate-400">Building digital experiences.</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="btn btn-ghost btn-sm"
              {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-slate-500">© 2026 YOUR NAME. All rights reserved.</p>
    </footer>
  );
}
