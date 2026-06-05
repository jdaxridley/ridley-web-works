import { ReactNode } from "react";

interface BrowserFrameProps {
  /** Address-bar label, e.g. a project domain. */
  url?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A restrained browser-window chrome. Presentational only — wraps a
 * preview/mock in a polished frame (traffic-light dots + address bar).
 */
export default function BrowserFrame({
  url = "ridleywebworks.com",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-surface ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-3 border-b border-line/80 bg-paper/70 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <span className="max-w-full truncate rounded-md bg-surface px-3 py-1 text-[11px] font-medium text-muted ring-1 ring-line/70">
            {url}
          </span>
        </div>
        {/* balances the dots so the address bar stays centered */}
        <div className="w-[42px]" aria-hidden />
      </div>

      {children}
    </div>
  );
}
