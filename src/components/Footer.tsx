import Link from "next/link";

const footerLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[-0.02em] text-ink"
            >
              Ridley Web Works
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Founder-led websites for local service businesses in Plano, Texas
              and beyond.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-body transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="rww-eyebrow mb-3">Get in touch</p>
            <a
              href="mailto:dax@ridleywebworks.com"
              className="block text-sm text-body transition-colors hover:text-brass"
            >
              dax@ridleywebworks.com
            </a>
            <p className="mt-2 text-sm text-muted">Plano, TX</p>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Ridley Web Works. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
