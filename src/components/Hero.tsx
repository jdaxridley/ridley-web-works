"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal on load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle gradient mesh background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(123, 143, 108, 0.15), transparent),
            radial-gradient(ellipse 40% 60% at 80% 30%, rgba(196, 149, 106, 0.1), transparent),
            radial-gradient(ellipse 80% 40% at 50% 80%, rgba(163, 59, 32, 0.05), transparent)
          `,
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        <h1
          ref={headingRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-6 leading-[0.95]"
          style={{ opacity: 0 }}
        >
          Ridley{" "}
          <span className="text-gradient-clay">Web Works</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ opacity: 0 }}
        >
          We build websites that actually work for your business.
        </p>

        <div ref={ctaRef} style={{ opacity: 0 }}>
          <Link href="/work" className="btn-cta">
            See Our Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-text-dim text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-text-dim to-transparent" />
      </div>
    </section>
  );
}
