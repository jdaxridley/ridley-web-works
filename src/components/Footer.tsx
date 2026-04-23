import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-bg-hover/40">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-lg text-text">
              Ridley <span className="text-sage">Web Works</span>
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-xs">
              Custom websites for local businesses. No templates. Just results.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-4">
              Get in touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@ridleywebworks.com"
                className="text-sm text-text-secondary hover:text-sage transition-colors"
              >
                hello@ridleywebworks.com
              </a>
              <p className="text-sm text-text-muted">Overland Park, KS</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-bg-hover/40 pt-6">
          <p className="text-center text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Ridley Web Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
