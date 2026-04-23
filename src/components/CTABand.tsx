import Link from "next/link";

export default function CTABand() {
  return (
    <section className="bg-bg-subtle py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
          Ready for a website that actually works?
        </h2>
        <p className="text-text-secondary text-lg mb-8">
          Let&apos;s talk about what your business needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 bg-cta text-text font-semibold text-sm rounded-lg hover:bg-cta-hover transition-colors duration-200"
        >
          Get in touch →
        </Link>
      </div>
    </section>
  );
}
