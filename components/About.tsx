import Image from "next/image";
import { about, site } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Skills } from "@/components/Skills";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <Reveal>
              <SectionHeading id="about-heading" eyebrow="How I work" title="Product judgment, then the model." />
            </Reveal>
            <Reveal className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
          <Reveal className="justify-self-start lg:justify-self-end">
            <figure className="w-56 overflow-hidden rounded-3xl border border-line shadow-card sm:w-64">
              <Image
                src="/portrait.png"
                alt={site.name}
                width={512}
                height={640}
                className="aspect-[4/5] w-full object-cover object-[50%_18%]"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.principles.map((item) => (
            <Reveal key={item.title}>
              <p className="font-serif text-2xl text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Skills embedded />
      </div>
    </section>
  );
}
