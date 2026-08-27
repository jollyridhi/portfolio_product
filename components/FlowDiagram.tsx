type FlowStep = {
  title: string;
  detail: string;
};

type FlowDiagramProps = {
  label: string;
  steps: FlowStep[];
};

export function FlowDiagram({ label, steps }: FlowDiagramProps) {
  return (
    <figure className="rounded-2xl border border-line bg-canvas p-5 sm:p-7">
      <figcaption className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
        {label}
      </figcaption>
      <ol className="mt-6 flex flex-col gap-0 lg:flex-row lg:items-stretch">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            <div className="flex flex-1 flex-col rounded-xl border border-line bg-surface px-5 py-5">
              <span className="font-serif text-3xl text-accent" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-serif text-2xl text-ink">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
            </div>
            {index < steps.length - 1 ? (
              <div
                className="flex items-center justify-center px-2 py-3 lg:px-3 lg:py-0"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6 rotate-90 text-accent lg:rotate-0"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
