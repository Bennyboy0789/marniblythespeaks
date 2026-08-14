"use client";

import { useState } from "react";

// Posts to /api/inquiry (Resend-backed once RESEND_API_KEY is set). If the
// endpoint isn't configured or the network fails, falls back to opening a
// pre-filled email draft so no inquiry is ever dead-ended.
const BOOKING_EMAIL = "hello@marniblythespeaks.com";

const eventTypes = [
  "Conference",
  "Corporate Retreat",
  "All-Staff Meeting",
  "Workshop",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-brand-bright focus:ring-2 focus:ring-brand-bright/30";

const labelClass =
  "mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/80";

type Status = "idle" | "sending" | "sent" | "fallback";
type Errors = Partial<Record<"name" | "email" | "eventType" | "message", string>>;

// Inline validation instead of browser bubbles: consistent across browsers,
// shows every problem at once, and stays visible until fixed.
function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  if (!data.name?.trim()) errors.name = "Please tell us your name.";
  if (!data.email?.trim()) errors.email = "We need an email to reply to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "That email doesn't look right — double-check it?";
  if (!data.eventType) errors.eventType = "Pick the closest event type.";
  if (!data.message?.trim())
    errors.message = "A sentence or two about your event helps us reply fast.";
  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const nextErrors = validate(data);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      throw new Error(`status ${res.status}`);
    } catch {
      // Endpoint not configured yet (or offline) — open a pre-filled draft.
      const subject = `Speaking inquiry — ${data.eventType} — ${data.organization || data.name}`;
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Organization: ${data.organization || "—"}`,
        `Event type: ${data.eventType}`,
        `Event date: ${data.eventDate || "TBD"}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("fallback");
    }
  }

const errClass = "mt-1.5 block text-xs font-medium text-[#ef8a8a]";
  const invalidClass = " border-[#ef8a8a]/70";

  if (status === "sent") {
    return (
      <div className="py-6 text-center">
        <p className="gold-text font-serif text-3xl font-semibold">
          Got it. You&apos;re on the list.
        </p>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/80">
          Your inquiry is in — check your inbox for a confirmation. You&apos;ll
          hear from us within 24 hours (usually faster) with clear next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input id="name" name="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={inputClass + (errors.name ? invalidClass : "")} />
          {errors.name && <span id="name-error" className={errClass}>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input id="email" name="email" type="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={inputClass + (errors.email ? invalidClass : "")} />
          {errors.email && <span id="email-error" className={errClass}>{errors.email}</span>}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization{" "}
          <span className="font-normal normal-case text-white/40">(optional)</span>
        </label>
        <input id="organization" name="organization" className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className={labelClass}>
            Event Type *
          </label>
          <select id="eventType" name="eventType" required aria-invalid={!!errors.eventType} aria-describedby={errors.eventType ? "eventType-error" : undefined} className={inputClass + (errors.eventType ? invalidClass : "")} defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && <span id="eventType-error" className={errClass}>{errors.eventType}</span>}
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event Date{" "}
            <span className="font-normal normal-case text-white/40">(optional)</span>
          </label>
          <input id="eventDate" name="eventDate" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your event *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass + (errors.message ? invalidClass : "")}
          placeholder="Audience, goals, what you want people saying on the way out…"
        />
        {errors.message && <span id="message-error" className={errClass}>{errors.message}</span>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        data-track="inquiry_submit"
        className="w-full rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-bright/25 transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>

      {status === "fallback" && (
        <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
          Your email app should have opened with everything filled in — just
          hit send. If it didn&apos;t, email us directly at{" "}
          <a href={`mailto:${BOOKING_EMAIL}`} className="font-bold underline">
            {BOOKING_EMAIL}
          </a>{" "}
          or call{" "}
          <a href="tel:+16464134872" className="font-bold underline">
            646.413.4872
          </a>
          .
        </p>
      )}
    </form>
  );
}
