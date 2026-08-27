import { awards, education } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education & awards"
            title="School."
            description="Degree and Dean’s list. Coding contest scores are not the story."
          />
        </Reveal>

        <div className={`mt-12 grid gap-4 ${awards.length ? "lg:grid-cols-12" : ""}`}>
          <Reveal className={awards.length ? "lg:col-span-5" : ""}>
            <article className="flex h-full flex-col justify-between overflow-hidden rounded-box border border-line bg-ink p-8 text-canvas shadow-card sm:p-10">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-canvas/70">
                  {education.dates}
                </p>
                <h3 className="mt-4 font-serif text-4xl sm:text-5xl">{education.school}</h3>
                <p className="mt-3 text-lg text-canvas/85">{education.degree}</p>
              </div>
              <ul className="mt-10 space-y-2 text-base text-canvas/75">
                {education.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          {awards.length ? (
            <div className="grid gap-4 lg:col-span-7">
              {awards.map((award, index) => (
                <Reveal key={award.title} delayMs={index * 50}>
                  <article className="rounded-box border border-line bg-canvas p-6 shadow-card sm:p-8">
                    <h3 className="font-serif text-3xl text-ink">{award.title}</h3>
                    <p className="mt-2 text-base text-muted">{award.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
