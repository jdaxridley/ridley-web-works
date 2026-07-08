import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import BrowserFrame from "@/components/BrowserFrame";

// ---------------------------------------------------------------------------
// Ridley Web Works — homepage (DARK premium rebuild, 2026-07-08)
// Reference bar: 500 Designs (Dax's #1) — enormous LIGHT-weight headline,
// tight tracking (-0.035em), near-monochrome, brass as a single spark, and
// "let the work speak" (no invented stats). Near-black base, warm off-white.
// ---------------------------------------------------------------------------

const work = [
  {
    name: "Paradise Bakery & Café",
    year: "2026",
    tag: "Bakery & café",
    blurb:
      "An editorial rebuild for a beloved bakery-café — warm, appetite-first, and built to send people to the counter.",
    url: "paradise-bakery.com",
    href: "https://paradise-bakery.vercel.app",
    img: "/work/paradise.png",
  },
  {
    name: "Rhythm Cycle Sculpt",
    year: "2026",
    tag: "Boutique fitness studio",
    blurb:
      "A rebuild that made a Shawnee cycle studio look like the best in the metro — first class free, front and center.",
    url: "rhythmcyclesculpt.com",
    href: "https://rhythm-cycle-sculpt.vercel.app",
    img: "/work/rhythm.png",
  },
];

const services = [
  {
    label: "Custom design",
    line: "No templates, no themes. Every site is designed for one business and looks like nobody else's.",
  },
  {
    label: "Built to convert",
    line: "Clear offer, obvious next step, fast on every phone. The site does a job, not just looks good.",
  },
  {
    label: "Done for you",
    line: "I handle design, build, copy, and launch. You stay focused on running the business.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1 · HERO — 500 Designs DNA: huge, light, tight, monochrome */}
      <section className="mx-auto max-w-6xl px-6 md:px-8" style={{ paddingTop: "clamp(9rem, 17vh, 13rem)", paddingBottom: "clamp(6rem, 12vh, 9rem)" }}>
        <FadeIn>
          <p className="rww-eyebrow">
            <span className="text-brass">/ </span>
            Solo web studio · Overland Park, KS
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h1
            className="mt-7 max-w-[15ch] font-normal text-ink"
            style={{
              fontSize: "clamp(2.75rem, 7.2vw, 6rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
            }}
          >
            Independent web design for local businesses.
          </h1>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="mt-9 max-w-xl text-[17px] leading-relaxed text-body">
            I&apos;m Dax — a one-person studio building custom websites for
            local businesses that are tired of looking like everyone else. No
            templates. One client at a time.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center gap-5">
            <Link
              href="#work"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-90"
            >
              See the work
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              Start a project
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 2 · PROOF ROW — quiet named-work strip, no stats */}
      <section className="border-y border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="rww-eyebrow">Real client work — no stock, no demos</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-body">
            <span className="text-ink">Paradise Bakery <span className="text-muted">· 2026</span></span>
            <span className="hidden h-3 w-px bg-line sm:block" aria-hidden />
            <span className="text-ink">Rhythm Cycle Sculpt <span className="text-muted">· 2026</span></span>
            <span className="hidden h-3 w-px bg-line sm:block" aria-hidden />
            <span className="text-ink">Dr. Tiplea Oral Surgery <span className="text-muted">· 2026</span></span>
          </div>
        </div>
      </section>

      {/* 3 · FEATURED WORK — the work is the star */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-36">
        <FadeIn>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="rww-eyebrow">
                <span className="text-brass">/ </span>Selected work
              </p>
              <h2
                className="mt-4 max-w-[18ch] font-normal text-ink"
                style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
              >
                A few businesses that stopped looking generic.
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-16 md:gap-24">
          {work.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="block card-lift-sm">
                    <BrowserFrame url={p.url} className="img-zoom">
                      <Image
                        src={p.img}
                        alt={`${p.name} website`}
                        width={1024}
                        height={640}
                        className="h-auto w-full"
                      />
                    </BrowserFrame>
                  </a>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="rww-eyebrow">{p.tag} · {p.year}</p>
                  <h3
                    className="mt-4 font-normal text-ink"
                    style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body">
                    {p.blurb}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brass"
                  >
                    Visit the live site
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4 · WHAT I DO — restrained 3-column, brass hairline */}
      <section id="services" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
          <FadeIn>
            <p className="rww-eyebrow">
              <span className="text-brass">/ </span>What I do
            </p>
            <h2
              className="mt-4 max-w-2xl font-normal text-ink"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
            >
              Everything the website needs. Nothing it doesn&apos;t.
            </h2>
          </FadeIn>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {services.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div>
                  <span className="block h-px w-10 bg-brass" />
                  <h3 className="mt-6 text-lg font-medium tracking-[-0.01em] text-ink">
                    {s.label}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{s.line}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · ABOUT STRIP — founder "I" voice */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="rww-eyebrow">
              <span className="text-brass">/ </span>The studio
            </p>
            <p
              className="mt-7 font-normal text-ink"
              style={{ fontSize: "clamp(1.35rem, 2.8vw, 2rem)", lineHeight: 1.28, letterSpacing: "-0.015em" }}
            >
              I&apos;m a solo web designer in the Kansas City area. I take on a
              handful of local businesses at a time and build each site by hand —
              no template farms, no offshore assembly line, no agency markup.
              Just one person who cares whether your website is any good.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brass"
            >
              More about how I work
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 6 · CTA BAND — inverted card (the one light moment on a dark page) */}
      <section className="px-6 pb-24 md:px-8 md:pb-36">
        <FadeIn>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center md:px-16 md:py-24">
            <h2
              className="mx-auto max-w-2xl font-normal text-ink"
              style={{ fontSize: "clamp(2rem, 4.8vw, 3.4rem)", lineHeight: 1.03, letterSpacing: "-0.03em" }}
            >
              Let&apos;s build yours.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-body">
              Tell me about your business. I&apos;ll show you what a website
              built just for you could look like.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-brass px-8 py-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-brass-deep"
            >
              Start a project
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
