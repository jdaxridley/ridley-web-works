"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".cta-reveal") || [],
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
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Sage-tinted background */}
      <div className="absolute inset-0 bg-sage/[0.04]" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-sage/[0.06] blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2
          className="cta-reveal font-display text-3xl md:text-5xl text-text-primary mb-4"
          style={{ opacity: 0 }}
        >
          Let&apos;s build{" "}
          <span className="text-gradient-sage">something</span>
        </h2>

        <p
          className="cta-reveal text-text-muted text-lg mb-10"
          style={{ opacity: 0 }}
        >
          Ready to start your project? Get in touch and let&apos;s talk about
          what we can build together.
        </p>

        <div className="cta-reveal" style={{ opacity: 0 }}>
          <Link href="/contact" className="btn-cta">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
