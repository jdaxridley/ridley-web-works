"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".about-reveal") || [],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-bg-alt"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="about-reveal font-display text-3xl md:text-5xl text-text-primary mb-6"
          style={{ opacity: 0 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-clay">Dax</span>
        </h2>

        <p
          className="about-reveal text-text-muted text-lg leading-relaxed mb-4"
          style={{ opacity: 0 }}
        >
          I build websites that don&apos;t just look good — they actually work
          for your business. Every pixel, every animation, every word serves a
          purpose.
        </p>

        <p
          className="about-reveal text-text-dim text-base leading-relaxed mb-8"
          style={{ opacity: 0 }}
        >
          No templates. No shortcuts. Just clean, premium websites built from
          scratch for people who care about quality.
        </p>

        <div className="about-reveal" style={{ opacity: 0 }}>
          <Link
            href="/about"
            className="nav-link text-sm uppercase tracking-widest text-clay inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Learn more about us
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
