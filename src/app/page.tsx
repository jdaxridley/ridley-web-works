import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-[3.5rem] leading-[1.1] text-text mb-6">
                Websites that{" "}
                <span className="text-sage">actually work</span> for your
                business.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Custom-built websites for local businesses. No templates. No
                monthly retainers. Just results.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-cta text-text font-semibold text-sm rounded-lg hover:bg-cta-hover transition-colors duration-200"
                >
                  Let&apos;s talk
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-3.5 border border-sage/30 text-sage font-semibold text-sm rounded-lg hover:border-sage/60 hover:text-sage transition-all duration-200"
                >
                  See our work
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Hero visual — project preview */}
          <FadeIn delay={0.4} direction="right" className="lg:col-span-2">
            <div className="bg-bg-subtle rounded-2xl overflow-hidden border border-bg-hover/60 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-xl bg-sage/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
                <p className="text-text-muted text-sm">
                  T-spoon Cupcakes — featured project
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionTag>Recent work</SectionTag>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-12">
              What we&apos;ve been building
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <FadeIn key={project.title}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8">
              <Link
                href="/work"
                className="text-sage text-sm font-semibold hover:text-clay transition-colors"
              >
                View all work →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-bg-subtle/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionTag>Services</SectionTag>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-12">
              What we do
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <div className="bg-bg rounded-xl p-8 border border-bg-hover/40">
                  <div className="w-10 h-10 rounded-lg bg-sage/15 flex items-center justify-center mb-5">
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

      {/* CTA Band */}
      <CTABand />
    </>
  );
}

interface Project {
  title: string;
  subtitle: string;
  industry: string;
  description: string;
  href: string;
}

function ProjectCard({ title, subtitle, industry, description, href }: Project) {
  return (
    <Link href={href} className="group block">
      <div className="bg-bg-subtle rounded-2xl overflow-hidden border border-bg-hover/40 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:shadow-black/20 group-hover:border-bg-hover">
        {/* Screenshot placeholder */}
        <div className="aspect-[16/10] bg-bg-hover/40 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-lg bg-sage/15 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
            </div>
            <p className="text-text-muted text-xs">Screenshot coming soon</p>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-sage">
            {industry}
          </span>
          <h3 className="font-heading text-xl text-text mt-2 mb-2 group-hover:text-sage transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

const projects: Project[] = [
  {
    title: "T-spoon Cupcakes",
    subtitle: "Taylor's bakery",
    industry: "Bakery",
    description:
      "Custom cupcake business website with ordering flow, flavor gallery, and a design that matches the brand.",
    href: "/work",
  },
  {
    title: "Dr. Tiplea",
    subtitle: "Oral surgery",
    industry: "Healthcare",
    description:
      "Clean, trustworthy website for an oral surgery practice. Easy booking and professional patient experience.",
    href: "/work",
  },
];

const features = [
  {
    title: "Custom Design",
    description:
      "No templates. Every site is built from scratch to match your business and your customers.",
    icon: (
      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Fast & Modern",
    description:
      "Built with the latest tech. Loads fast. Looks great on every device — phones, tablets, desktops.",
    icon: (
      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Easy Contact",
    description:
      "Contact forms, booking links, phone numbers — whatever makes it easiest for your customers to reach you.",
    icon: (
      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];
