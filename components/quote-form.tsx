"use client";

import { useState } from "react";
import { frequencies, serviceOptions as defaultServices } from "@/lib/content";

const field =
  "h-12 w-full rounded-xl border border-ink/25 bg-white px-3.5 text-base text-ink outline-none placeholder:text-muted focus:border-ink";

export function QuoteForm({
  idPrefix = "q",
  submitLabel = "Get a Free Quote",
  services = defaultServices,
  lockedService,
  successMessage = "Thanks. We have your request and will follow up by phone.",
  companyLabel = "Company or property name (optional)",
  companyRequired = false,
}: {
  idPrefix?: string;
  submitLabel?: string;
  services?: readonly string[];
  lockedService?: string;
  successMessage?: string;
  companyLabel?: string;
  companyRequired?: boolean;
}) {
  const [status, setStatus] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("company_website") || "").trim()) return;
    setStatus(successMessage);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-2xl bg-white p-6 shadow-[0_30px_70px_-40px_rgba(2,8,23,0.5)] md:p-10">
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-company-website`}>Company website</label>
        <input id={`${idPrefix}-company-website`} tabIndex={-1} autoComplete="off" name="company_website" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-2 block text-sm font-semibold text-ink">Your name</label>
          <input id={`${idPrefix}-name`} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-company`} className="mb-2 block text-sm font-semibold text-ink">{companyLabel}</label>
          <input id={`${idPrefix}-company`} name="company" required={companyRequired} autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="mb-2 block text-sm font-semibold text-ink">Phone</label>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-2 block text-sm font-semibold text-ink">Email (optional)</label>
          <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-service`} className="mb-2 block text-sm font-semibold text-ink">Service</label>
          <div className="relative">
            <select
                id={`${idPrefix}-service`}
                name="serviceType"
                required
                defaultValue={lockedService ?? ""}
                className={`${field} appearance-none pr-11`}
              >
                {lockedService ? (
                  <option>{lockedService}</option>
                ) : (
                  <option value="" disabled>Choose a service</option>
                )}
                {(lockedService ? [] : services).map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            <Caret />
          </div>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-location`} className="mb-2 block text-sm font-semibold text-ink">Location</label>
          <input id={`${idPrefix}-location`} name="location" required placeholder="Neighbourhood in Accra" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-frequency`} className="mb-2 block text-sm font-semibold text-ink">How often</label>
          <div className="relative">
            <select id={`${idPrefix}-frequency`} name="frequency" defaultValue="Not sure yet" className={`${field} appearance-none pr-11`}>
              {frequencies.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <Caret />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-notes`} className="mb-2 block text-sm font-semibold text-ink">Anything else</label>
          <textarea id={`${idPrefix}-notes`} name="notes" rows={4} className="min-h-[120px] w-full resize-y rounded-xl border border-ink/25 bg-white px-3.5 py-2 text-base text-ink outline-none focus:border-ink" />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-7 text-base font-semibold text-white transition-colors hover:bg-navy-2 active:scale-[0.98]"
        >
          {submitLabel}
        </button>
        <p role="status" aria-live="polite" className="text-sm font-semibold text-ink">{status}</p>
      </div>
    </form>
  );
}

function Caret() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}
