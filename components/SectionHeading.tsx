type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "inverse";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "default",
}: SectionHeadingProps) {
  const inverse = tone === "inverse";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-sm font-medium uppercase tracking-[0.16em] ${
            inverse ? "text-accent-fg/75" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`mt-3 font-serif text-4xl leading-tight text-balance sm:text-5xl ${
          inverse ? "text-accent-fg" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed ${inverse ? "text-accent-fg/80" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
