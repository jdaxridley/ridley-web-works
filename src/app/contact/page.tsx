"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Page Header */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl text-text mb-6">
              Let&apos;s build something.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
              Tell me about your business and what you need. I&apos;ll get back
              to you within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            {submitted ? (
              <div className="bg-bg-subtle rounded-2xl p-12 text-center border border-bg-hover/40">
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
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
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
                    className="w-full bg-bg-subtle border border-bg-hover rounded-lg px-4 py-3 text-text text-sm placeholder-text-muted/50 outline-none focus:border-sage transition-colors"
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
                    className="w-full bg-bg-subtle border border-bg-hover rounded-lg px-4 py-3 text-text text-sm placeholder-text-muted/50 outline-none focus:border-sage transition-colors"
                    placeholder="you@example.com"
                  />
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
                    className="w-full bg-bg-subtle border border-bg-hover rounded-lg px-4 py-3 text-text text-sm placeholder-text-muted/50 outline-none focus:border-sage transition-colors"
                    placeholder="Your business"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-bg-subtle border border-bg-hover rounded-lg px-4 py-3 text-text text-sm placeholder-text-muted/50 outline-none focus:border-sage transition-colors resize-vertical min-h-[120px]"
                    placeholder="Tell me about your business and what you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-cta text-text font-semibold text-sm rounded-lg hover:bg-cta-hover transition-colors duration-200"
                >
                  Send message →
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
                  className="text-text text-lg hover:text-sage transition-colors"
                >
                  hello@ridleywebworks.com
                </a>
              </div>

              <div>
                <SectionTag>Location</SectionTag>
                <p className="text-text-secondary">Overland Park, KS</p>
              </div>

              <div>
                <SectionTag>Social</SectionTag>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/jdaxridley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary text-sm hover:text-sage transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-bg-hover/40">
                <p className="text-text-muted text-sm leading-relaxed">
                  Prefer email? Reach out directly at{" "}
                  <a
                    href="mailto:hello@ridleywebworks.com"
                    className="text-sage hover:text-clay transition-colors"
                  >
                    hello@ridleywebworks.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
