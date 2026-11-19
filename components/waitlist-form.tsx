"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";

const field =
  "h-12 w-full rounded-xl border border-ink/25 bg-white px-3.5 text-base text-ink outline-none placeholder:text-muted focus:border-ink";

export function WaitlistForm({
  idPrefix,
  roleLabel,
  roles,
  countLabel,
  counts,
  consent,
  submitLabel,
  successMessage,
}: {
  idPrefix: string;
  roleLabel: string;
  roles: string[];
  countLabel?: string;
  counts?: string[];
  consent: string;
  submitLabel: string;
  successMessage: string;
}) {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("company_website") || "").trim()) return;
    if (!data.get("consent")) {
      setStatus("Please confirm we may contact you.");
      return;
    }
    setStatus(successMessage);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 text-ink shadow-[0_30px_70px_-40px_rgba(2,8,23,0.5)] md:p-10">
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${idPrefix}-name`} label="Your name" name="name" required autoComplete="name" />
        <Field id={`${idPrefix}-phone`} label="Phone or WhatsApp" name="phone" type="tel" required placeholder="024 123 4567" autoComplete="tel" />
        <Field id={`${idPrefix}-email`} label="Email (optional)" name="email" type="email" autoComplete="email" />
        <Field id={`${idPrefix}-location`} label="Area or city (optional)" name="location" placeholder="East Legon, Accra" />
        <div className={counts ? "" : "sm:col-span-2"}>
          <label htmlFor={`${idPrefix}-role`} className="mb-2 block text-sm font-semibold">{roleLabel}</label>
          <select id={`${idPrefix}-role`} name="role" required defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>Choose one</option>
            {roles.map((role) => <option key={role}>{role}</option>)}
          </select>
        </div>
        {counts && countLabel ? (
          <div>
            <label htmlFor={`${idPrefix}-count`} className="mb-2 block text-sm font-semibold">{countLabel}</label>
            <select id={`${idPrefix}-count`} name="count" defaultValue="Not sure yet" className={`${field} appearance-none`}>
              {counts.map((count) => <option key={count}>{count}</option>)}
            </select>
          </div>
        ) : null}
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
        <input name="consent" type="checkbox" required className="mt-1 size-4" />
        <span>{consent}</span>
      </label>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-7 font-semibold text-white hover:bg-navy-2">{submitLabel}</button>
        <p role="status" className="text-sm font-semibold">{status}</p>
      </div>
    </form>
  );
}

function Field(props: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, id, ...rest } = props;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <input id={id} className={field} {...rest} />
    </div>
  );
}
