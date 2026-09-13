"use client";

import { FormEvent, useId, useState } from "react";
import { contact, links } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

const empty: FormState = { name: "", email: "", message: "", company: "" };

export function Contact() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      setStatus("Please fix the errors in the form.");
      return;
    }

    if (values.company.trim()) {
      setSent(true);
      setValues(empty);
      setStatus("Sent. Ridhi will reply to the email you entered.");
      return;
    }

    setSending(true);
    setStatus("");
    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        company: values.company,
      };

      const apiResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const apiResult = (await apiResponse.json()) as { ok?: boolean; error?: string };

      if (apiResponse.ok && apiResult.ok) {
        setSent(true);
        setValues(empty);
        setStatus("Sent. Ridhi will reply to the email you entered.");
        return;
      }

      const submit = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(links.email)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          _subject: `Portfolio inquiry from ${payload.name}`,
          _template: "table",
          _captcha: "false",
          _replyto: payload.email,
        }),
      });
      const submitResult = (await submit.json()) as { success?: boolean | string; message?: string };
      const ok = submitResult.success === true || submitResult.success === "true";
      const activate = (submitResult.message ?? "").toLowerCase().includes("activat");
      if (activate) {
        setSent(true);
        setValues(empty);
        setStatus(
          "Almost. Ridhi’s inbox has a one-time “Activate Form” link from FormSubmit. After that click, every message lands.",
        );
        return;
      }
      if (!ok) {
        throw new Error(submitResult.message || "Send failed.");
      }
      setSent(true);
      setValues(empty);
      setStatus("Sent. Ridhi will reply to the email you entered.");
    } catch (error) {
      setSent(false);
      setStatus(
        error instanceof Error
          ? `${error.message} You can also email ${links.email}.`
          : `Could not send just now. Email ${links.email}.`,
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-mist">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title={contact.heading}
            description={contact.intro}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal>
            <address className="not-italic">
              <ul className="space-y-4 text-base">
                <li>
                  <span className="block text-sm uppercase tracking-[0.14em] text-muted">Phone</span>
                  <a href={links.phoneHref} className="mt-1 inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                    {links.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-[0.14em] text-muted">Email</span>
                  <a href={`mailto:${links.email}`} className="mt-1 inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                    {links.email}
                  </a>
                </li>
                <li className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium text-ink hover:border-accent"
                  >
                    LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium text-ink hover:border-accent"
                  >
                    GitHub<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium text-ink hover:border-accent"
                  >
                    Coding profile<span className="sr-only"> on LeetCode (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
              <a
                href={links.resume}
                className="magnetic mt-8 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
              >
                Download Resume
              </a>
            </address>
          </Reveal>

          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-box border border-line bg-surface p-6 shadow-card sm:p-8"
            >
              <p className="text-sm text-muted">{contact.formNote}</p>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor={`${formId}-company`}>Company</label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
                />
              </div>

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
                    className="mt-2 w-full rounded-xl border border-line bg-canvas px-3 py-3 text-ink"
                  />
                  {errors.message ? (
                    <p id={`${formId}-message-error`} className="mt-2 text-sm text-ink" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="magnetic mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
              {status ? (
                <div
                  className={`mt-5 rounded-2xl border p-4 ${
                    sent ? "border-accent/40 bg-accent/15" : "border-line bg-canvas"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <p className="text-sm text-ink">{status}</p>
                  {!sent ? (
                    <a
                      href={`mailto:${links.email}`}
                      className="mt-3 inline-flex min-h-11 items-center text-sm font-medium underline-offset-4 hover:underline"
                    >
                      {links.email}
                    </a>
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
        className="mt-2 w-full rounded-xl border border-line bg-canvas px-3 py-3 text-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-ink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
