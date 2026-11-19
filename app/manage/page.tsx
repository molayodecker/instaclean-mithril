import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { Container, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Instaclean Manage: Household Staff Management in Ghana",
  description: "Planned household staff and workforce management software for Ghana. Waitlist open; not yet launched.",
};

const capabilities = [
  ["Worker onboarding and profiles", "Add someone once: ID, contact details, role, start date and the terms you agreed."],
  ["Household and business directories", "See everyone who works for you, at home or across sites, in one list."],
  ["Work schedules and attendance", "Set the days and hours, then mark who came in and when."],
  ["Salary and payment tracking", "Log what you agreed, what you paid and when, so nothing rests on memory."],
  ["Digital payslips and payment records", "Each payment you log produces a payslip you and your worker can both keep."],
  ["Employment history and references", "Workers build a record of where they worked and for how long, with references attached."],
  ["Training and certifications", "Keep track of the courses and certificates each person has completed."],
  ["Performance and feedback", "Leave fair, specific feedback and keep notes on what is going well."],
  ["Multiple homes or locations", "Run staff for a second home, a parent's house or several properties from one account."],
];

const days = [
  ["Mon", "worked"],
  ["Tue", "worked"],
  ["Wed", "worked"],
  ["Thu", "scheduled"],
  ["Fri", "scheduled"],
  ["Sat", "off"],
  ["Sun", "off"],
] as const;

export default function ManagePage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <section className="bg-navy pt-32 text-white md:pt-40">
        <Container className="pb-12">
          <h1 className="max-w-[18ch] text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] md:text-7xl md:leading-none">
            Managing Your Household Shouldn&apos;t Feel Like Running a Company.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
            Everything you need to organize, manage, and support the people who make your home or business run smoothly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <YellowButton href="#waitlist">Join the waitlist</YellowButton>
            <Link href="/book-a-service" className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 font-semibold text-white no-underline hover:bg-white/10">Find home help today</Link>
          </div>
          <p className="mt-6 text-sm text-mist">Instaclean Manage is in development. Waitlist members get first access.</p>
        </Container>
        <img src="/images/manage-hero.webp" alt="Homeowner at her dining table in Accra talking through the week with her housekeeper and driver" className="h-[48vh] min-h-[280px] w-full object-cover object-[50%_30%]" />
      </section>

      <Container className="py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">One record for everyone who works in your home</h2>
          <p className="mt-5 text-lg text-muted">Most households track staff in their heads, on WhatsApp and in cash. Manage keeps the schedule, the pay and the paperwork together, and the worker sees the same record you do.</p>
        </div>
        <div className="mt-10 grid gap-6 rounded-3xl bg-white p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-muted">Your household</p>
            <ul className="mt-4 space-y-3">
              {[
                ["Ho", "Housekeeper", "Live-out, monthly pay"],
                ["Na", "Nanny", "Live-out, monthly pay"],
                ["Dr", "Driver", "Full-time, monthly pay"],
                ["Ca", "Caregiver", "Visits, paid weekly"],
              ].map(([initials, name, terms]) => (
                <li key={name} className="flex items-center gap-3 rounded-2xl border border-line px-3 py-3">
                  <span className="grid size-10 place-items-center rounded-full bg-navy text-sm font-bold text-white">{initials}</span>
                  <span>
                    <span className="block font-bold">{name}</span>
                    <span className="text-sm text-muted">{terms}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-baseline justify-between">
              <p className="font-bold">This week</p>
              <p className="text-sm text-muted">Hours 8:00 to 16:00</p>
            </div>
            <ul className="mt-4 grid grid-cols-7 gap-2 text-center text-xs font-semibold">
              {days.map(([day, state]) => (
                <li key={day}>
                  <p className="text-muted">{day}</p>
                  <span className={`mt-2 block rounded-full px-1 py-2 ${state === "worked" ? "bg-navy text-white" : state === "scheduled" ? "border border-navy text-navy" : "text-muted"}`}>
                    {state === "off" ? "off" : state}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">Navy: attended. Outlined: scheduled. Blank: day off.</p>
            <p className="mt-8 font-bold">Payments</p>
            <ul className="mt-3 space-y-2 text-sm">
              {["October salary", "September salary", "August salary"].map((item) => (
                <li key={item} className="flex justify-between border-b border-line py-2">
                  <span>{item}</span>
                  <span className="text-muted">Paid, payslip saved</span>
                </li>
              ))}
            </ul>
          </div>
          <dl className="lg:col-span-3">
            <p className="font-bold">Record</p>
            {[
              ["Identity", "Ghana Card checked"],
              ["References", "On file"],
              ["Training", "Deep-clean basics"],
            ].map(([title, body]) => (
              <div key={title} className="mt-4 border-t border-line pt-3">
                <dt className="text-sm font-semibold text-muted">{title}</dt>
                <dd className="font-bold">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-4 text-sm text-muted">Preview of a planned product with sample roles. Screens will change as we build.</p>
      </Container>

      <section className="bg-white">
        <Container className="py-20">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">What you&apos;ll be able to do</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">From the day someone starts to the day they move on, every part of employing them has a place.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-paper p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Built for homes and the businesses that run on people</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl bg-white">
            <img src="/images/manage-nanny-kitchen.webp" alt="Father handing a lunchbox to the family nanny, who holds their toddler, in an Accra kitchen" className="aspect-[16/9] w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold">For households</h3>
              <p className="mt-2 font-semibold">Manage nannies, cleaners, drivers, caregivers, and other household employees.</p>
              <p className="mt-2 text-muted">Keep each person&apos;s agreement, days and pay in one place, and hand them a payslip they can use.</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-white">
            <img src="/images/manage-team-briefing.webp" alt="Property supervisor briefing a cleaning team in navy polos in the lobby of an Accra apartment building" className="aspect-[16/9] w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold">For businesses</h3>
              <p className="mt-2 font-semibold">Manage cleaning teams, property staff, hospitality workers, and service personnel.</p>
              <p className="mt-2 text-muted">See attendance across sites, keep payment records per worker and onboard new staff the same way every time.</p>
            </div>
          </article>
        </div>
      </Container>

      <section className="bg-navy text-white">
        <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
          <img src="/images/worker-training.webp" alt="Senior Instaclean professional showing two new team members how to fold towels in an Accra kitchen" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Fair to the employer and the worker</h2>
            <p className="mt-4 text-mist">These are the rules we&apos;re building Instaclean Manage around.</p>
            <dl className="mt-8 grid gap-5">
              {[
                ["Identity and reference checks", "Professionals who join through Instaclean verify their Ghana Card and name a past client before they are approved."],
                ["Transparent management", "Workers will see the schedule, pay and notes their employer keeps about them. No hidden file."],
                ["Careful handling of data", "Personal and employment details will be visible only to the employer and the worker they belong to."],
                ["Clear payment records", "Every payment you log gets a date and a payslip that both sides can look back on."],
                ["Worker privacy and consent", "A worker's history goes to a new employer or partner only when the worker says yes."],
              ].map(([title, body]) => (
                <div key={title}>
                  <dt className="font-bold">{title}</dt>
                  <dd className="mt-1 text-mist">{body}</dd>
                </div>
              ))}
            </dl>
            <Link href="/how-we-verify" className="mt-8 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">How we verify professionals today</Link>
          </div>
        </Container>
      </section>

      <section id="waitlist" className="scroll-mt-24 bg-yellow">
        <Container className="grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Join the Instaclean Manage waitlist</h2>
            <dl className="mt-8 grid gap-6">
              <div>
                <dt className="font-bold">Need help at home now?</dt>
                <dd className="mt-1">Booking vetted cleaners and household staff is live today, separate from Manage.</dd>
              </div>
              <div>
                <dt className="font-bold">Nothing to pay</dt>
                <dd className="mt-1">Joining the waitlist doesn&apos;t commit you to anything.</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <WaitlistForm
              idPrefix="manage"
              roleLabel="I employ workers for"
              roles={["My household", "A business or property", "Both"]}
              countLabel="How many workers"
              counts={["Not sure yet", "1", "2 to 5", "6 to 20", "More than 20"]}
              consent="Instaclean may contact me by phone, WhatsApp or email about Instaclean Manage."
              submitLabel="Join the waitlist"
              successMessage="You're on the Instaclean Manage waitlist. We'll be in touch."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
