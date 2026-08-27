"use client";

import { FormEvent, useId, useState } from "react";
import { contact, links } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const empty: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<string>("");
  const [draft, setDraft] = useState<{ mailto: string; gmail: string } | null>(null);
  const formId = useId();

  function validate(next: FormState) {
    const result: Partial<FormState> = {};
    if (!next.name.trim()) result.name = "Name is required.";
    if (!next.email.trim()) result.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      result.email = "Enter a valid email address.";
    }
    if (!next.message.trim()) result.message = "Message is required.";
    return result;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please fix the errors in the form.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    const mailto = `mailto:${links.email}?subject=${subject}&body=${body}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(links.email)}&su=${subject}&body=${body}`;

    const trigger = document.createElement("a");
    trigger.href = mailto;
    trigger.style.display = "none";
    document.body.appendChild(trigger);
    trigger.click();
    trigger.remove();

    void navigator.clipboard?.writeText(
      `To: ${links.email}\nSubject: Portfolio inquiry from ${values.name}\n\n${values.message}\n\n— ${values.name} (${values.email})`,
    );

    setDraft({ mailto, gmail });
    setStatus("Draft ready. If Mail did not open, use Gmail or the copied note.");
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-accent text-accent-fg">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title={contact.heading}
            description={contact.intro}
            tone="inverse"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal>
            <address className="not-italic">
              <ul className="space-y-4 text-base">
                <li>
                  <span className="block text-sm uppercase tracking-[0.14em] text-accent-fg/70">Phone</span>
                  <a href={links.phoneHref} className="mt-1 inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                    {links.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-[0.14em] text-accent-fg/70">Email</span>
                  <a href={`mailto:${links.email}`} className="mt-1 inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                    {links.email}
                  </a>
                </li>
                <li className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-accent-fg/30 px-4 text-sm font-medium hover:bg-accent-fg/10"
                  >
                    LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-accent-fg/30 px-4 text-sm font-medium hover:bg-accent-fg/10"
                  >
                    GitHub<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-accent-fg/30 px-4 text-sm font-medium hover:bg-accent-fg/10"
                  >
                    Coding profile<span className="sr-only"> on LeetCode (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
              <a
                href={links.resume}
                className="mt-8 inline-flex min-h-11 items-center rounded-full bg-accent-fg px-5 text-sm font-medium text-accent hover:opacity-90"
              >
                Download Resume
              </a>
            </address>
          </Reveal>

          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-box border border-accent-fg/20 bg-accent-fg/10 p-6 sm:p-8"
            >
              <p className="text-sm text-accent-fg/80">{contact.formNote}</p>

              <div className="mt-6 space-y-5">
                <Field
                  id={`${formId}-name`}
                  label="Name"
                  value={values.name}
                  error={errors.name}
                  autoComplete="name"
                  onChange={(name) => setValues((current) => ({ ...current, name }))}
                />
                <Field
                  id={`${formId}-email`}
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  autoComplete="email"
                  onChange={(email) => setValues((current) => ({ ...current, email }))}
                />
                <div>
                  <label htmlFor={`${formId}-message`} className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={5}
                    value={values.message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, message: event.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-accent-fg/25 bg-canvas px-3 py-3 text-ink"
                  />
                  {errors.message ? (
                    <p id={`${formId}-message-error`} className="mt-2 text-sm text-accent-fg" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent-fg px-5 text-sm font-medium text-accent hover:opacity-90"
              >
                Send message
              </button>
              {status ? (
                <div className="mt-5 rounded-2xl border border-accent-fg/25 bg-accent-fg/10 p-4" role="status" aria-live="polite">
                  <p className="text-sm text-accent-fg">{status}</p>
                  {draft ? (
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={draft.gmail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full bg-accent-fg px-4 text-sm font-medium text-accent hover:opacity-90"
                      >
                        Open in Gmail
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      <a
                        href={draft.mailto}
                        className="inline-flex min-h-11 items-center rounded-full border border-accent-fg/30 px-4 text-sm font-medium hover:bg-accent-fg/10"
                      >
                        Open Mail app
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={label.toLowerCase()}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-accent-fg/25 bg-canvas px-3 py-3 text-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent-fg" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
