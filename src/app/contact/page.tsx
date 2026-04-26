"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to real form handler
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="hero-reveal font-display text-4xl md:text-6xl lg:text-7xl text-text-primary mb-6"
            style={{ opacity: 0 }}
          >
            Get In{" "}
            <span className="text-gradient-clay">Touch</span>
          </h1>
          <p
            className="hero-reveal text-text-muted text-lg md:text-xl max-w-xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            Have a project in mind? Fill out the form below and we&apos;ll get
            back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-text-primary mb-3">
                Message Sent
              </h3>
              <p className="text-text-muted">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              style={{ opacity: 0 }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-muted text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-bg-deep border border-border-subtle rounded-lg text-text-primary placeholder:text-text-dim focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/30 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-text-muted text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-bg-deep border border-border-subtle rounded-lg text-text-primary placeholder:text-text-dim focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/30 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-text-muted text-sm mb-2"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-deep border border-border-subtle rounded-lg text-text-primary placeholder:text-text-dim focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/30 transition-all duration-300 resize-none"
                  placeholder="What are you looking to build?"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn-cta w-full">
                Send Message
              </button>
            </form>
          )}

          {/* Alt contact */}
          <div className="mt-12 pt-8 border-t border-border-subtle text-center">
            <p className="text-text-dim text-sm mb-3">
              Or reach out directly
            </p>
            <a
              href="mailto:dax@ridleywebworks.com"
              className="text-clay hover:text-clay-light transition-colors duration-300"
            >
              dax@ridleywebworks.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
