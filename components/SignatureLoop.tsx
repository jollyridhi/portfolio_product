export function SignatureLoop({
  steps,
}: {
  steps: { title: string; detail: string }[];
}) {
  return (
    <ol className="grid gap-0 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
      {steps.map((step, index) => (
        <li key={step.title} className="contents">
          <div className="rounded-2xl border border-line bg-surface/90 px-5 py-5 backdrop-blur-sm">
            <p className="font-serif text-2xl text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-serif text-xl text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
          </div>
          {index < steps.length - 1 ? (
            <div className="flex items-center justify-center py-3 sm:px-2 sm:py-0" aria-hidden="true">
              <svg className="h-8 w-8 rotate-90 text-accent sm:rotate-0" viewBox="0 0 32 32" fill="none">
                <path
                  className="loop-line"
                  d="M4 16h20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M20 10l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
