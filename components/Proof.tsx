import { heroLoop, heroStats } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SignatureLoop } from "@/components/SignatureLoop";

export function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Proof</p>
          <h2 id="proof-heading" className="mt-3 font-serif text-[length:var(--title)] text-ink">
            The product bet
          </h2>
        </Reveal>
        <Reveal className="mt-8">
          <SignatureLoop steps={heroLoop} />
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((item, index) => (
            <li key={item.label}>
              <Reveal delayMs={index * 50}>
                <article
                  className={`h-full rounded-2xl px-5 py-6 ${
                    index === 0
                      ? "bg-accent text-accent-fg"
                      : index === 1
                        ? "bg-mist text-ink"
                        : "border border-line bg-surface"
                  }`}
                >
                  <p className="font-serif text-4xl sm:text-5xl">{item.value}</p>
                  <p className="mt-2 text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-sm opacity-80">{item.detail}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
