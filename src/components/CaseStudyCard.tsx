"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  imageSrc: string;
  href: string;
  liveUrl?: string;
  reversed?: boolean;
  tags?: string[];
}

export default function CaseStudyCard({
  title,
  industry,
  description,
  imageSrc,
  href,
  liveUrl,
  reversed = false,
  tags = [],
}: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Device mockup with screenshot */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="device-frame group">
          <div className="device-dots">
            <span /><span /><span />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg img-zoom">
            <Image
              src={imageSrc}
              alt={`${title} website screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={reversed ? "lg:order-1" : ""}>
        <span className="text-[11px] font-semibold uppercase tracking-[3px] text-clay">
          {industry}
        </span>
        <h3 className="font-heading text-3xl md:text-4xl text-text mt-3 mb-5">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-6 text-base">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-bg-hover/60 text-text-muted rounded-full border border-bg-hover"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay hover:text-clay-bright transition-colors"
            >
              View live site
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
