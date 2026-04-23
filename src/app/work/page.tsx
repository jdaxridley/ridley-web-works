import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";

export default function Work() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionTag>Portfolio</SectionTag>
            <h1 className="font-heading text-4xl md:text-5xl text-text mb-6">
              Our work
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
              Custom websites built for real businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <article className="bg-bg-subtle rounded-2xl overflow-hidden border border-bg-hover/40 group">
                {/* Screenshot */}
                <div className="aspect-[16/9] bg-bg-hover/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-xl bg-sage/15 mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-sage"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                          />
                        </svg>
                      </div>
                      <p className="text-text-muted text-sm">
                        Screenshot coming soon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[2px] text-sage">
                    {project.industry}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl text-text mt-2 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage text-sm font-semibold hover:text-clay transition-colors"
                    >
                      View live site →
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

const projects = [
  {
    title: "T-spoon Cupcakes",
    industry: "Bakery",
    description:
      "Taylor's cupcake business. Custom ordering flow, flavor gallery, and a design that's as sweet as her cupcakes. Built with Next.js and deployed on Vercel.",
    href: "https://t-spoon-cupcakes-v2.vercel.app",
  },
  {
    title: "Dr. Tiplea",
    industry: "Healthcare — Oral Surgery",
    description:
      "A clean, trustworthy website for an oral surgery practice. Easy appointment booking, patient information, and a professional look that puts patients at ease.",
    href: null, // Will be updated when the site is live
  },
];
