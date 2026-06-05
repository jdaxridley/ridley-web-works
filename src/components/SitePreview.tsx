/**
 * Stylized, abstract project preview mocks shown inside a BrowserFrame.
 * These are intentional design placeholders — NOT screenshots — varied
 * per project so each work card reads like a distinct site.
 */

type PreviewProps = { className?: string };

/* Rhythm Cycle & Sculpt — fitness studio. Dark, energetic, schedule-led. */
export function FitnessPreview({ className = "" }: PreviewProps) {
  return (
    <div className={`flex h-full flex-col bg-[#16140f] p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4f1ea]">
          Rhythm
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden h-1.5 w-8 rounded-full bg-[#f4f1ea]/25 sm:block" />
          <span className="hidden h-1.5 w-8 rounded-full bg-[#f4f1ea]/25 sm:block" />
          <span className="h-5 w-16 rounded-full bg-[#b6784c]" />
        </div>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 flex flex-col justify-center">
          <span className="mb-3 h-1.5 w-14 rounded-full bg-[#b6784c]" />
          <span className="h-6 w-full rounded-md bg-[#f4f1ea]" />
          <span className="mt-2 h-6 w-4/5 rounded-md bg-[#f4f1ea]/55" />
          <span className="mt-4 h-7 w-24 rounded-full bg-[#b6784c]" />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <span className="flex-1 rounded-xl bg-[linear-gradient(140deg,#2a2723,#16140f)] ring-1 ring-[#f4f1ea]/10" />
          <div className="grid grid-cols-3 gap-1.5">
            <span className="h-6 rounded-md bg-[#f4f1ea]/10" />
            <span className="h-6 rounded-md bg-[#f4f1ea]/10" />
            <span className="h-6 rounded-md bg-[#b6784c]/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Michael Tiplea Oral Surgery — clean, trustworthy, light, professional. */
export function HealthcarePreview({ className = "" }: PreviewProps) {
  return (
    <div className={`flex h-full flex-col bg-[#fbfaf6] p-5 text-[#141310] ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
          Tiplea
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden h-1.5 w-8 rounded-full bg-[#141310]/15 sm:block" />
          <span className="hidden h-1.5 w-8 rounded-full bg-[#141310]/15 sm:block" />
          <span className="h-5 w-16 rounded-full bg-[#141310]" />
        </div>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 flex flex-col justify-center">
          <span className="mb-3 h-1.5 w-16 rounded-full bg-[#b6784c]" />
          <span className="h-6 w-full rounded-md bg-[#141310]" />
          <span className="mt-2 h-6 w-3/4 rounded-md bg-[#141310]/45" />
          <span className="mt-4 h-7 w-28 rounded-full bg-[#b6784c]" />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <span className="flex-1 rounded-xl bg-[#e7e1d6]" />
          <div className="grid grid-cols-3 gap-1.5">
            <span className="h-6 rounded-md bg-[#141310]/8" />
            <span className="h-6 rounded-md bg-[#141310]/8" />
            <span className="h-6 rounded-md bg-[#141310]/8" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Teaspoon Cupcakes — warm, brand-forward bakery, product grid. */
export function BakeryPreview({ className = "" }: PreviewProps) {
  return (
    <div className={`flex h-full flex-col bg-[#211712] p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f1ddcb]">
          Teaspoon
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden h-1.5 w-8 rounded-full bg-[#f1ddcb]/25 sm:block" />
          <span className="h-5 w-16 rounded-full bg-[#c98a5e]" />
        </div>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 flex flex-col justify-center">
          <span className="mb-3 h-1.5 w-14 rounded-full bg-[#c98a5e]" />
          <span className="h-6 w-full rounded-md bg-[#f1ddcb]" />
          <span className="mt-2 h-6 w-2/3 rounded-md bg-[#f1ddcb]/50" />
          <span className="mt-4 h-7 w-24 rounded-full bg-[#c98a5e]" />
        </div>
        <div className="col-span-2 grid grid-rows-2 gap-2">
          <span className="rounded-xl bg-[#c98a5e]/40" />
          <div className="grid grid-cols-2 gap-2">
            <span className="rounded-lg bg-[#f1ddcb]/30" />
            <span className="rounded-lg bg-[#c98a5e]/25" />
          </div>
        </div>
      </div>
    </div>
  );
}
