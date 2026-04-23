import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl text-text mb-6">
              Hey, I&apos;m Dax.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
              I build websites for local businesses that actually want to grow.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  I started Ridley Web Works because I kept seeing the same
                  thing: local businesses with websites that looked like they
                  were built in 2009. Outdated designs. Broken layouts. Mobile
                  sites that didn&apos;t work.
                </p>
                <p>
                  The thing is, these businesses are great at what they do —
                  they&apos;re just not web designers. And they shouldn&apos;t
                  have to be.
                </p>
                <p>
                  That&apos;s where I come in. I build custom websites from
                  scratch — not templates, not page builders — so your business
                  looks as professional online as it does in person. Fast
                  loading. Easy to navigate. Built to convert visitors into
                  customers.
                </p>
                <p>
                  I&apos;m based in Overland Park, KS, and I work with
                  businesses across the Kansas City area and beyond.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Photo placeholder */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-2">
            <div className="bg-bg-subtle rounded-2xl aspect-[3/4] border border-bg-hover/40 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-sage/15 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="text-text-muted text-sm">Photo coming soon</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-bg-subtle/30">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionTag>The journey</SectionTag>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-12">
              How we got here
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 group">
                  {/* Dot + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-sage shrink-0 mt-1.5" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-bg-hover mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-10">
                    <span className="text-xs font-semibold text-sage uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl text-text mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionTag>How we work</SectionTag>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-12">
              Our approach
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-xl border border-bg-hover/40 bg-bg">
                  <h3 className="font-heading text-xl text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

const timeline = [
  {
    year: "The beginning",
    title: "Founded Ridley Web Works",
    description:
      "Started building websites for local businesses after seeing how many were stuck with outdated, template-based sites that didn't work.",
  },
  {
    year: "First clients",
    title: "Making it real",
    description:
      "Built custom sites for local businesses — each one designed from scratch to match the brand and convert visitors into customers.",
  },
  {
    year: "Now",
    title: "Growing the business",
    description:
      "Continuing to take on projects, refine the craft, and help local businesses look their best online.",
  },
];

const values = [
  {
    title: "Quality over speed",
    description:
      "We'd rather spend an extra day getting it right than ship something that's just okay. Your website is your first impression.",
  },
  {
    title: "No templates",
    description:
      "Every site is built from scratch. No drag-and-drop builders. No recycled layouts. Your business is unique — your website should be too.",
  },
  {
    title: "Long-term partnerships",
    description:
      "We don't disappear after launch. We're here for updates, changes, and making sure your site keeps working for you.",
  },
  {
    title: "Local business focus",
    description:
      "We specialize in local service businesses because we understand what they need: a professional online presence that brings in customers.",
  },
];
