"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactCTA } from "@/components/ContactCTA";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
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

      // Story reveal
      gsap.fromTo(
        storyRef.current?.querySelectorAll(".story-reveal") || [],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
          },
        }
      );

      // Values reveal
      gsap.fromTo(
        valuesRef.current?.querySelectorAll(".value-reveal") || [],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: "Purpose Over Pretty",
      description:
        "Every design choice serves a goal. A beautiful site that doesn't convert is a failure.",
    },
    {
      title: "Built From Scratch",
      description:
        "No templates, no page builders. Every site is custom-coded for the client's exact needs.",
    },
    {
      title: "Obsessive Detail",
      description:
        "The difference between good and great is in the details — spacing, timing, micro-interactions.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="hero-reveal font-display text-4xl md:text-6xl lg:text-7xl text-text-primary mb-6"
            style={{ opacity: 0 }}
          >
            About{" "}
            <span className="text-gradient-clay">Ridley Web Works</span>
          </h1>
          <p
            className="hero-reveal text-text-muted text-lg md:text-xl max-w-xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            We&apos;re not an agency that churns out cookie-cutter sites.
            We&apos;re builders who care about the craft.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-20 px-6 bg-bg-alt">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="story-reveal md:col-span-2 aspect-[3/4] rounded-xl bg-bg-deep border border-border-subtle flex items-center justify-center" style={{ opacity: 0 }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="text-text-dim text-xs">Your Photo</p>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3">
              <h2
                className="story-reveal font-display text-2xl md:text-3xl text-text-primary mb-6"
                style={{ opacity: 0 }}
              >
                The Story
              </h2>
              <p
                className="story-reveal text-text-muted leading-relaxed mb-4"
                style={{ opacity: 0 }}
              >
                Ridley Web Works started with a simple frustration: most business
                websites are terrible. They&apos;re slow, ugly, and built from
                templates that make every business look the same.
              </p>
              <p
                className="story-reveal text-text-muted leading-relaxed mb-4"
                style={{ opacity: 0 }}
              >
                We decided to do it differently. Every site we build is
                custom-coded from scratch. No WordPress themes, no page builders,
                no shortcuts. Just clean code, thoughtful design, and attention to
                the details that make a site feel premium.
              </p>
              <p
                className="story-reveal text-text-muted leading-relaxed"
                style={{ opacity: 0 }}
              >
                We work with businesses that care about quality — the ones who
                understand that your website is often the first impression a
                customer gets, and first impressions matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="value-reveal font-display text-2xl md:text-3xl text-text-primary mb-10"
            style={{ opacity: 0 }}
          >
            What We Believe
          </h2>

          <div className="space-y-8">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="value-reveal flex gap-6 items-start"
                style={{ opacity: 0 }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center text-sage font-body text-sm font-medium">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
