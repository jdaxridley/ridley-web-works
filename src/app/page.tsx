import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-glow pt-20">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-clay" />
                <span className="text-[11px] font-semibold uppercase tracking-[3px] text-clay">
                  Web Design &mdash; Kansas City
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-text mb-8">
                Your business deserves a website that{" "}
                <span className="text-clay">actually works.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Custom-built websites for local businesses. No templates, no
                page builders, no monthly retainers. Just fast, modern sites
                designed to turn visitors into customers.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="glow-btn px-8 py-4 bg-clay text-bg font-semibold text-sm rounded-lg hover:bg-clay-bright transition-all duration-300 inline-flex items-center gap-2"
                >
                  Start your project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 border border-text-muted/30 text-text-secondary font-semibold text-sm rounded-lg hover:border-clay/50 hover:text-text transition-all duration-300"
                >
                  See our work
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Trust indicators */}
          <FadeIn delay={0.6}>
            <div className="mt-20 pt-10 border-t border-bg-hover/30">
              <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-text-muted text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                  Next.js &amp; React
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                  Mobile-first design
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                  SEO optimized
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                  24-hour response time
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTag>Featured Work</SectionTag>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-6">
              Websites that drive real results
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mb-20">
              Every project is custom-built from scratch. Here&apos;s what that
              looks like in practice.
            </p>
          </FadeIn>

          <div className="space-y-24 md:space-y-32">
            <CaseStudyCard
              title="T-Spoon Cupcakes"
              industry="Bakery &bull; Custom Orders"
              description="A complete web presence for a Kansas City cupcake business. Custom ordering flow with event type selection, signature flavor gallery, and a warm editorial design that matches the brand's personality. Built to convert social media followers into paying customers."
              imageSrc="/images/portfolio/t-spoon-cupcakes.png"
              href="/work"
              liveUrl="https://t-spoon-cupcakes.vercel.app"
              tags={["Next.js", "Custom Ordering", "Responsive Design"]}
            />

            <CaseStudyCard
              title="Rhythm Cycle & Sculpt"
              industry="Fitness Studio &bull; Class Booking"
              description="A dynamic website for Shawnee's premier boutique fitness studio. Class schedule integration, instructor profiles, pricing tiers, and a bold visual identity that captures the energy of the studio. Custom domain connected and fully responsive."
              imageSrc="/images/portfolio/rhythm-cycle-sculpt.png"
              href="/work"
              liveUrl="https://rhythmcyclesculpt.com"
              tags={["Custom Domain", "Class Integration", "Brand Design"]}
              reversed
            />

            <CaseStudyCard
              title="Paradise Bakery & Caf&eacute;"
              industry="Restaurant &bull; Multi-Location"
              description="A warm, appetizing website for a scratch-made bakery cafe with locations in Nebraska and Dallas. Menu system, location pages, catering inquiry flow, and a design built around everyday comfort and repeat visits."
              imageSrc="/images/portfolio/paradise-bakery.png"
              href="/work"
              liveUrl="https://paradise-bakery-website.vercel.app"
              tags={["Multi-Location", "Menu System", "Catering Flow"]}
            />
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-16 text-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-clay text-sm font-semibold hover:text-clay-bright transition-colors"
              >
                View all case studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32 px-6 mesh-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTag>Services</SectionTag>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-6">
              Everything your business needs online
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mb-16">
              From design to deployment, we handle every detail so you can focus
              on running your business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <div className="group bg-bg-card rounded-xl p-8 border border-bg-hover/40 hover:border-clay/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-clay/10 flex items-center justify-center mb-6 group-hover:bg-clay/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionTag>How It Works</SectionTag>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-6">
              From first call to launch
            </h2>
            <p className="text-text-secondary text-lg mb-16">
              A straightforward process designed to get your business online
              without the headaches.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="flex gap-6 group step-connector">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-clay/10 flex items-center justify-center shrink-0 border border-clay/20 group-hover:bg-clay/20 transition-colors">
                      <span className="text-clay font-semibold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="pb-12">
                    <h3 className="font-heading text-xl text-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 mesh-bg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="stat-number font-heading text-4xl md:text-5xl mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-muted text-sm">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />
    </>
  );
}

const features = [
  {
    title: "Custom Design",
    description:
      "No templates. Every site is designed from scratch to match your brand, your customers, and your goals. Your business is unique — your website should be too.",
    icon: (
      <svg className="w-6 h-6 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Performance First",
    description:
      "Built with Next.js and modern web standards. Sub-second load times, perfect Lighthouse scores, and a site that works flawlessly on every device.",
    icon: (
      <svg className="w-6 h-6 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "SEO & Visibility",
    description:
      "Every site is built with search engines in mind. Proper meta tags, structured data, fast load times, and content architecture that helps customers find you.",
    icon: (
      <svg className="w-6 h-6 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Need updates, changes, or new features? We're here to keep your site working as your business grows.",
    icon: (
      <svg className="w-6 h-6 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We learn about your business, goals, customers, and competition. This shapes everything we build.",
  },
  {
    number: "02",
    title: "Design & build",
    description:
      "We design and develop your site from scratch. You'll see progress early and often — no surprises at launch.",
  },
  {
    number: "03",
    title: "Review & refine",
    description:
      "You review the site, give feedback, and we refine until it's exactly right. Your input drives the final product.",
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We deploy your site, connect your domain, and make sure everything works perfectly. Then we stick around for ongoing support.",
  },
];

const stats = [
  { value: "3+", label: "Sites launched" },
  { value: "100%", label: "Custom built" },
  { value: "<1s", label: "Load times" },
  { value: "24hr", label: "Response time" },
];
