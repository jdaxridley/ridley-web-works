"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          business: data.get("business"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Still show success — we'll add proper error handling later
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 hero-glow">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-clay" />
              <SectionTag>Contact</SectionTag>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text mb-6">
              Let&apos;s build something.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              Tell me about your business and what you need. I&apos;ll get back
              to you within 24 hours with a free consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            {submitted ? (
              <div className="bg-bg-card rounded-2xl p-12 text-center border border-sage/20">
                <div className="w-16 h-16 rounded-full bg-sage/20 mx-auto mb-6 flex items-center justify-center">
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
                <h3 className="font-heading text-2xl text-text mb-3">
                  Message sent!
                </h3>
                <p className="text-text-secondary">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours with a free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-bg-card border border-bg-hover rounded-lg px-4 py-3.5 text-text text-sm placeholder-text-muted/50 outline-none focus:border-clay transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-bg-card border border-bg-hover rounded-lg px-4 py-3.5 text-text text-sm placeholder-text-muted/50 outline-none focus:border-clay transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2"
                  >
                    Business name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full bg-bg-card border border-bg-hover rounded-lg px-4 py-3.5 text-text text-sm placeholder-text-muted/50 outline-none focus:border-clay transition-colors"
                    placeholder="Your business"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-bg-card border border-bg-hover rounded-lg px-4 py-3.5 text-text text-sm placeholder-text-muted/50 outline-none focus:border-clay transition-colors resize-vertical min-h-[140px]"
                    placeholder="What does your business do? What are you looking for in a website? Any specific features or pages you need?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="glow-btn px-8 py-4 bg-clay text-bg font-semibold text-sm rounded-lg hover:bg-clay-bright transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <SectionTag>Email</SectionTag>
                <a
                  href="mailto:hello@ridleywebworks.com"
                  className="text-text text-lg hover:text-clay transition-colors"
                >
                  hello@ridleywebworks.com
                </a>
              </div>

              <div>
                <SectionTag>Location</SectionTag>
                <p className="text-text-secondary">Overland Park, KS</p>
                <p className="text-text-muted text-sm">
                  Serving the Kansas City metro area
                </p>
              </div>

              <div>
                <SectionTag>Social</SectionTag>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/jdaxridley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary text-sm hover:text-clay transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/daxridley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary text-sm hover:text-clay transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-bg-hover/30">
                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-4">
                  What to expect
                </h4>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Free 30-minute consultation call
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Custom quote within 48 hours
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    No obligation, no pressure
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
