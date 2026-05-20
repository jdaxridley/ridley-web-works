import Link from "next/link";

export default function CTABand() {
  return (
    <section className="py-24 md:py-32 px-6 mesh-bg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-text mb-6">
          Ready for a website that{" "}
          <span className="text-clay">actually works?</span>
        </h2>
        <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
          Let&apos;s talk about your business and what you need. Free
          consultation, custom quote within 48 hours.
        </p>
        <Link
          href="/contact"
          className="glow-btn inline-flex items-center gap-2 px-8 py-4 bg-clay text-bg font-semibold text-sm rounded-lg hover:bg-clay-bright transition-all duration-300"
        >
          Start your project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
