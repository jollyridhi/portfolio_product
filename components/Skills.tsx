import { skills } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Can I sit in this room?"
            description="Product and AI product first. Engineering is fluency — not the identity."
          />
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-box border border-line bg-surface shadow-card">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <section
                key={group.category}
                aria-labelledby={`skill-${group.category}`}
                className="border-b border-line p-6 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <h3
                  id={`skill-${group.category}`}
                  className="text-sm font-medium uppercase tracking-[0.16em] text-accent"
                >
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
