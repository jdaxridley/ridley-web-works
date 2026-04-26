"use client";

import { WorkGrid } from "@/components/WorkGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".hero-reveal") || [],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="hero-reveal font-display text-4xl md:text-6xl lg:text-7xl text-text-primary mb-6"
            style={{ opacity: 0 }}
          >
            Our{" "}
            <span className="text-gradient-sage">Work</span>
          </h1>
          <p
            className="hero-reveal text-text-muted text-lg md:text-xl max-w-xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            Every project is built from scratch, designed for the client, and
            coded to perform.
          </p>
        </div>
      </section>

      <WorkGrid />
      <ContactCTA />
    </>
  );
}
