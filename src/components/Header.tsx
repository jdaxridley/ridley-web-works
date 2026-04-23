"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bg-hover/60 backdrop-blur-md bg-bg/95">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <RWWLogo />
          <span className="font-heading text-lg text-text hidden sm:block">
            Ridley <span className="text-sage">Web Works</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-sage"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-cta text-text text-sm font-semibold rounded-lg hover:bg-cta-hover transition-colors duration-200"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-text rounded"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-text rounded"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-text rounded"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-bg-hover/60 overflow-hidden bg-bg"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 text-base font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-sage"
                      : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-5 py-3 bg-cta text-text text-center text-sm font-semibold rounded-lg hover:bg-cta-hover transition-colors duration-200"
              >
                Get in touch
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
      viewBox="0 0 48 48"
      className="w-9 h-9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building / R shape */}
      <rect x="4" y="6" width="3" height="36" rx="1.5" fill="#7B8F6C" />
      <rect x="4" y="6" width="22" height="3" rx="1.5" fill="#7B8F6C" />
      <rect x="4" y="39" width="22" height="3" rx="1.5" fill="#7B8F6C" />
      <rect x="12" y="14" width="12" height="20" rx="2" fill="#E8DFD0" />
      <rect x="18" y="14" width="3" height="20" fill="#7B8F6C" />
    </svg>
  );
}
