import { marquee } from "@/data/content";

export function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <div className="relative overflow-hidden border-y border-line bg-mist/40">
      <p className="sr-only">Shipped: {marquee.join(", ")}.</p>
      <div className="marquee-track flex w-max" aria-hidden="true">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-6 py-3 font-serif text-xl text-ink sm:text-2xl"
          >
            {item}
            <span className="size-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
