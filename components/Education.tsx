import { awards, education } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Bennett University."
            description="B.Tech CSE. The rest is on the resume."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <article>
              <p className="text-sm uppercase tracking-[0.16em] text-muted">{education.dates}</p>
              <h3 className="mt-2 font-serif text-3xl text-ink">{education.school}</h3>
              <p className="mt-2 text-muted">{education.degree}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted">
                {education.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-3">
            {awards.map((award) => (
              <li key={award.title} className="border-t border-line pt-4">
                <h3 className="font-serif text-xl text-ink">{award.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
