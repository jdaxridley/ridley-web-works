import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-deep">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-lg text-text-primary">
              Ridley Web Works
            </span>
            <p className="text-text-muted text-sm max-w-xs">
              We build websites that actually work for your business.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-text-dim text-xs uppercase tracking-widest mb-1">
                Navigate
              </span>
              <Link href="/work" className="nav-link text-sm">
                Work
              </Link>
              <Link href="/about" className="nav-link text-sm">
                About
              </Link>
              <Link href="/contact" className="nav-link text-sm">
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-text-dim text-xs uppercase tracking-widest mb-1">
                Connect
              </span>
              <a
                href="mailto:dax@ridleywebworks.com"
                className="nav-link text-sm"
              >
                Email
              </a>
              <a
                href="https://twitter.com/jdaxridley"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
              >
                Twitter
              </a>
              <a
                href="https://github.com/jdaxridley"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-dim text-xs">
            &copy; {new Date().getFullYear()} Ridley Web Works. All rights
            reserved.
          </p>
          <p className="text-text-dim text-xs">
            Designed &amp; built by{" "}
            <span className="text-sage">Ridley Web Works</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
