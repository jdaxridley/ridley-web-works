"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Ridley Web Works home"
          onClick={() => setMobileOpen(false)}
        >
          <RWWLogo />
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
            Ridley Web Works
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-ink-soft"
          >
            Start the Build
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 -mr-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="block h-0.5 w-6 rounded bg-ink"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="block h-0.5 w-6 rounded bg-ink"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="block h-0.5 w-6 rounded bg-ink"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="border-t border-line bg-paper md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-lg font-medium text-ink transition-colors hover:text-brass"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-full bg-ink px-5 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
              >
                Start the Build
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function RWWLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1.5" y="1.5" width="37" height="37" rx="10" fill="#141310" />
      <path
        d="M12 28V12h7.6c3 0 5.2 1.9 5.2 4.6 0 1.9-1.1 3.4-2.8 4l3.4 3.4h-4.3l-2.9-3h-2.5V28H12Zm3.7-6h3.7c1.4 0 2.2-.7 2.2-1.8 0-1.2-.8-1.9-2.2-1.9h-3.7V22Z"
        fill="#f4f1ea"
      />
      <circle cx="28.5" cy="13" r="2" fill="#b6784c" />
    </svg>
  );
}
