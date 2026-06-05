import { ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-brass/50" />
      {children}
    </span>
  );
}
