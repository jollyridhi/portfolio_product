import { heroStrip } from "@/data/content";

export function Ticker() {
  const items = [...heroStrip, ...heroStrip];

  return (
    <div className="relative overflow-hidden border-y border-line bg-surface">
      <p className="sr-only">Shipped surfaces: {heroStrip.join(", ")}.</p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]" aria-hidden="true">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-6 py-4 font-serif text-xl text-ink sm:text-2xl"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
