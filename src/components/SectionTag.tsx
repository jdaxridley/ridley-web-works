import { ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-sage mb-3">
      {children}
    </span>
  );
}
