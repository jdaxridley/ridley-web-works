import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABand from "@/components/CTABand";
import BrowserFrame from "@/components/BrowserFrame";
import {
  FitnessPreview,
  HealthcarePreview,
  BakeryPreview,
} from "@/components/SitePreview";

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-ink-soft";
const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/40";

function PreviewBadge() {
  return (
    <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-paper/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted ring-1 ring-line backdrop-blur-sm">
      Design preview · placeholder
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ============================================================
          1 — HERO
      ============================================================ */}
      <section className="px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <FadeIn>
              <SectionTag>Founder-led websites for business owners</SectionTag>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="mt-5 text-balance text-4xl leading-[1.04] text-ink sm:text-5xl md:text-6xl">
                A better website takes time. The right partner saves it.
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
                I build custom websites for business owners who want to look
                sharper, explain their offer clearly, and stop settling for a
                site that feels generic or outdated.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/contact" className={btnPrimary}>
                  Start the Build
                </Link>
                <Link href="#work" className={btnSecondary}>
                  See the Work
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Hero visual — layered preview collage */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl pb-14 sm:pb-20 lg:max-w-none">
              <div className="card-lift relative">
                <BrowserFrame url="rhythmcycleandsculpt.com">
                  <div className="relative">
                    <PreviewBadge />
                    <div className="aspect-[16/10]">
                      <FitnessPreview />
                    </div>
                  </div>
                </BrowserFrame>
              </div>

              {/* Offset secondary card for depth (hidden on small screens) */}
              <div className="absolute -bottom-2 right-2 hidden w-1/2 sm:block lg:-right-4">
                <div className="card-lift">
                  <BrowserFrame url="tipleaoralsurgery.com">
                    <div className="aspect-[16/10]">
                      <HealthcarePreview />
                    </div>
                  </BrowserFrame>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          2 — SELECTED WORK
      ============================================================ */}
      <section
        id="work"
        className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionTag>Selected work</SectionTag>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl text-ink md:text-[2.75rem] md:leading-[1.05]">
              Work that looks good and does the job.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              A few websites, redesigns, and build studies shaped around real
              business needs — clearer offers, better first impressions, and
              less friction for the owner.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <div className="card-lift">
                    <BrowserFrame url={p.url}>
                      <div className="relative">
                        <PreviewBadge />
                        <div className="aspect-[16/10]">{p.preview}</div>
                      </div>
                    </BrowserFrame>
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <span className="rww-eyebrow">{p.industry}</span>
                    <h3 className="mt-2 text-xl text-ink">{p.name}</h3>
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                      <div>
                        <dt className="font-semibold text-ink">Needed</dt>
                        <dd className="text-body">{p.needed}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">Built</dt>
                        <dd className="text-body">{p.built}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3 — SERVICES
      ============================================================ */}
      <section
        id="services"
        className="scroll-mt-24 border-t border-line bg-surface px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionTag>Services</SectionTag>
            <h2 className="mt-5 text-3xl text-ink md:text-[2.75rem] md:leading-[1.05]">
              What I build
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-surface">
                  <span className="text-sm font-semibold text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {s.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — PROCESS
      ============================================================ */}
      <section
        id="process"
        className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionTag>Process</SectionTag>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl text-ink md:text-[2.75rem] md:leading-[1.05]">
              A clear process that respects your time.
            </h2>
          </FadeIn>

          <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.title} className="border-t border-line pt-5">
                <FadeIn delay={(i % 3) * 0.06}>
                  <span className="text-sm font-semibold text-brass">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 text-xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {step.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          5 — FOUNDER / TRUST
      ============================================================ */}
      <section className="border-t border-line bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Founder photo placeholder */}
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-paper lg:max-w-none">
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_15%,rgba(182,120,76,0.10),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-muted"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0A17.9 17.9 0 0112 21.75c-2.7 0-5.2-.6-7.5-1.65z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-ink">Dax Ridley</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">
                  Founder photo · placeholder
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7">
            <SectionTag>Who you work with</SectionTag>
            <h2 className="mt-5 max-w-xl text-balance text-3xl text-ink md:text-[2.5rem] md:leading-[1.08]">
              Work directly with the person designing your site.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
              I&apos;m Dax, the person behind Ridley Web Works. I work with
              business owners who want a better website without getting passed
              around a bloated agency process. You get direct communication,
              faster decisions, and a site shaped around the way your business
              actually works.
            </p>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink">
              No account managers. No template handoffs. Just a better website
              built with the person responsible for the work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          6 — DIFFERENTIATION
      ============================================================ */}
      <section className="border-t border-line px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionTag>The difference</SectionTag>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl text-ink md:text-[2.75rem] md:leading-[1.05]">
              AI can make a page. Taste makes it a website.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              Cheap tools can generate something that looks like a website. The
              difference is knowing what to keep, what to remove, what your
              customers need to see first, and how to make the whole thing feel
              intentional.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                  Generated page
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {generated.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-body"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-px w-4 flex-none bg-muted"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="h-full rounded-2xl border border-ink/15 bg-ink p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brass">
                  Built website
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {built.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-paper/85"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 flex-none text-brass"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.3 3.3 6.8-6.8a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          7 — FINAL CTA
      ============================================================ */}
      <div className="border-t border-line">
        <CTABand />
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- data */

const projects = [
  {
    name: "Rhythm Cycle & Sculpt",
    industry: "Fitness studio",
    url: "rhythmcycleandsculpt.com",
    needed:
      "A clear class schedule, a strong first-class offer, and instant credibility.",
    built: "A bold, class-forward site that makes booking the obvious next step.",
    preview: <FitnessPreview />,
  },
  {
    name: "Michael Tiplea Oral Surgery",
    industry: "Healthcare · Oral surgery",
    url: "tipleaoralsurgery.com",
    needed: "Trust, credibility, and a clean, professional first impression.",
    built: "A calm, credible site that reassures patients before they ever call.",
    preview: <HealthcarePreview />,
  },
  {
    name: "Teaspoon Cupcakes",
    industry: "Bakery · Brand-forward",
    url: "teaspooncupcakes.com",
    needed: "Visual warmth, brand personality, and real product appeal.",
    built: "A brand refresh that makes the product look as good as it tastes.",
    preview: <BakeryPreview />,
  },
];

const services = [
  {
    title: "Custom Websites",
    description:
      "Sites built from scratch around your offer, your customers, and the way you actually work — never a template.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused, single-goal pages built to convert a specific campaign, offer, or audience.",
  },
  {
    title: "Brand Refreshes",
    description:
      "A sharper visual identity and a site that finally looks as good as the work you do.",
  },
  {
    title: "Website Systems",
    description:
      "Forms, booking flows, content structure, and a clean handoff so the site keeps working after launch.",
  },
  {
    title: "Motion & Interaction",
    description:
      "Tasteful interaction and premium details that make the whole thing feel intentional and considered.",
  },
];

const process = [
  {
    title: "Find the friction",
    description:
      "We start with what's not working — where visitors get lost, what's unclear, and what it's costing you.",
  },
  {
    title: "Shape the message",
    description:
      "We get the offer and the words right before a single pixel is designed.",
  },
  {
    title: "Design the experience",
    description:
      "A custom design built around your message, your customers, and a clear path to act.",
  },
  {
    title: "Build and launch",
    description:
      "Fast, responsive, and tested — built to load quickly and look right on every screen.",
  },
  {
    title: "Keep it useful",
    description:
      "After launch I'm still here for updates and changes, so the site keeps earning its place.",
  },
];

const generated = [
  "Generic, interchangeable copy",
  "Random sections in no real order",
  "No business-specific flow",
  "Weak polish on mobile",
  "No thinking about the owner's workflow",
];

const built = [
  "A clear, specific offer up front",
  "Custom structure built for your business",
  "A strong, intentional first impression",
  "A practical path to real leads",
  "Thoughtful motion and considered detail",
];
