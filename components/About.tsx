import { about } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="How I work"
            title="Product judgment, then the model."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="rounded-box border border-line bg-canvas p-8 shadow-card lg:col-span-7 lg:p-12">
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={80} className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {about.principles.map((item) => (
              <article
                key={item.title}
                className="rounded-box border border-line bg-canvas p-6 shadow-card"
              >
                <p className="font-serif text-2xl text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
