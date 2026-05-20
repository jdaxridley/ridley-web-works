import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Work() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 hero-glow">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-clay" />
              <SectionTag>Portfolio</SectionTag>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text mb-6">
              Our work
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              Every project is custom-designed and built from scratch. No
              templates, no shortcuts. Here&apos;s what that looks like.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <CaseStudyCard
              key={project.title}
              {...project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Process callout */}
      <section className="py-20 px-6 mesh-bg">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-6">
              Every project starts the same way
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              A conversation about your business. We learn what you do, who your
              customers are, and what success looks like. Then we build something
              that gets you there.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}

const projects = [
  {
    title: "T-Spoon Cupcakes",
    industry: "Bakery &bull; Custom Orders",
    description:
      "A complete web presence for a Kansas City cupcake business. Custom ordering flow with event type selection, signature flavor gallery, and a warm editorial design that matches the brand's personality. Built to convert social media followers into paying customers.",
    imageSrc: "/images/portfolio/t-spoon-cupcakes.png",
    href: "/work",
    liveUrl: "https://t-spoon-cupcakes.vercel.app",
    tags: ["Next.js", "Custom Ordering", "Responsive Design", "Brand Identity"],
  },
  {
    title: "Rhythm Cycle & Sculpt",
    industry: "Fitness Studio &bull; Class Booking",
    description:
      "A dynamic website for Shawnee's premier boutique fitness studio. Class schedule integration, instructor profiles, pricing tiers, and a bold visual identity that captures the energy of the studio. Custom domain connected and fully responsive.",
    imageSrc: "/images/portfolio/rhythm-cycle-sculpt.png",
    href: "/work",
    liveUrl: "https://rhythmcyclesculpt.com",
    tags: ["Custom Domain", "Class Integration", "Brand Design", "SEO"],
  },
  {
    title: "Paradise Bakery & Caf&eacute;",
    industry: "Restaurant &bull; Multi-Location",
    description:
      "A warm, appetizing website for a scratch-made bakery cafe with locations in Nebraska and Dallas. Menu system, location pages, catering inquiry flow, and a design built around everyday comfort and repeat visits.",
    imageSrc: "/images/portfolio/paradise-bakery.png",
    href: "/work",
    liveUrl: "https://paradise-bakery-website.vercel.app",
    tags: ["Multi-Location", "Menu System", "Catering Flow", "Responsive"],
  },
];
