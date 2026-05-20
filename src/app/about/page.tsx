import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 hero-glow">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-clay" />
              <SectionTag>About</SectionTag>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text mb-6">
              Hey, I&apos;m Dax.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              I build websites for local businesses that actually want to grow.
              Based in Overland Park, serving the KC metro and beyond.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="space-y-6 text-text-secondary leading-relaxed text-base">
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
                  Every project starts with a conversation. I learn about your
                  business, your customers, and your goals. Then I design and
                  build something that actually gets results — not just a pretty
                  page that sits there.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Stats card */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-2">
            <div className="bg-bg-card rounded-2xl p-8 border border-bg-hover/40">
              <h3 className="font-heading text-xl text-text mb-6">
                By the numbers
              </h3>
              <div className="space-y-6">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-clay/10 flex items-center justify-center shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-text font-semibold">{stat.value}</div>
                      <div className="text-text-muted text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 mesh-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTag>How we work</SectionTag>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-6">
              Our approach
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mb-16">
              Four principles that guide every project we take on.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-xl border border-bg-hover/40 bg-bg-card hover:border-clay/20 transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-clay/10 flex items-center justify-center mb-5">
                    {value.icon}
                  </div>
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

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6">
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
                <div className="flex gap-6 group step-connector">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-clay shrink-0 mt-1.5" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-bg-hover mt-2" />
                    )}
                  </div>
                  <div className="pb-10">
                    <span className="text-xs font-semibold text-clay uppercase tracking-wider">
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

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-6">
              Ready to work together?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Let&apos;s talk about your business and what you need. Free
              consultation, no pressure.
            </p>
            <Link
              href="/contact"
              className="glow-btn inline-flex items-center gap-2 px-8 py-4 bg-clay text-bg font-semibold text-sm rounded-lg hover:bg-clay-bright transition-all duration-300"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const aboutStats = [
  {
    value: "3+",
    label: "Client sites launched",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Custom code, zero templates",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    value: "Overland Park",
    label: "Based in Kansas City metro",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2025",
    title: "Founded Ridley Web Works",
    description:
      "Started building websites for local businesses after seeing how many were stuck with outdated, template-based sites that didn't work.",
  },
  {
    year: "2026",
    title: "First clients, real results",
    description:
      "Built custom sites for T-Spoon Cupcakes, Rhythm Cycle & Sculpt, and Paradise Bakery — each designed from scratch to match the brand and convert visitors into customers.",
  },
  {
    year: "Now",
    title: "Growing with the KC metro",
    description:
      "Continuing to take on projects, refine the craft, and help local businesses look their best online.",
  },
];

const values = [
  {
    title: "Quality over speed",
    description:
      "We'd rather spend an extra day getting it right than ship something that's just okay. Your website is your first impression.",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "No templates",
    description:
      "Every site is built from scratch. No drag-and-drop builders. No recycled layouts. Your business is unique — your website should be too.",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Long-term partnerships",
    description:
      "We don't disappear after launch. We're here for updates, changes, and making sure your site keeps working for you.",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Local business focus",
    description:
      "We specialize in local service businesses because we understand what they need: a professional online presence that brings in customers.",
    icon: (
      <svg className="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
];
