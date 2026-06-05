import Link from "next/link";

interface CTABandProps {
  heading?: string;
  sub?: string;
}

export default function CTABand({
  heading = "Let's build something people remember — without wasting your time.",
  sub = "Tell me what your current website is not doing for you. I'll help you figure out what a better version should handle.",
}: CTABandProps) {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-ink px-8 py-16 text-center md:px-16 md:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl text-paper md:text-[2.75rem] md:leading-[1.05]">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
          {sub}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-brass-deep"
          >
            Start the Build
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-200 hover:border-paper/60"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
