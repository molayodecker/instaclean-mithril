import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { Container, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pay2own: Financial Inclusion for Service Workers in Ghana",
  description: "Planned Instaclean initiative for service worker financial inclusion. Not a bank or lender. Waitlist open.",
};

export default function Pay2ownPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <section className="bg-navy pt-32 text-white md:pt-40">
        <Container className="pb-12">
          <h1 className="max-w-[16ch] text-balance text-[2.75rem] font-bold leading-[1.05] tracking-[-0.025em] md:text-7xl md:leading-none">
            Your Work Should Open More Doors.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mist md:text-xl">We believe consistent work and documented earnings should help create better financial opportunities.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <YellowButton href="#waitlist">Join the Pay2own Waitlist</YellowButton>
            <a href="#journey" className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 font-semibold no-underline hover:bg-white/10">See how it works</a>
          </div>
          <p className="mt-6 text-sm text-mist">Pay2own is an Instaclean initiative in development. It is not a bank or lender.</p>
        </Container>
        <img src="/images/demfi-hero.webp" alt="Two Instaclean professionals in navy polos smiling at a smartphone outside a compound gate in Accra" className="h-[48vh] min-h-[280px] w-full object-cover" />
      </section>

      <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Built for the people who keep homes running</h2>
          <p className="mt-5 text-lg text-muted">Pay2own is an Instaclean initiative for cleaners, nannies, caregivers, chefs, drivers and other service workers. A smartphone comes first, because work on Instaclean runs through one.</p>
          <dl className="mt-8 grid gap-5">
            {[
              ["Smartphone and device financing", "Pay for a phone over time instead of all at once, through plans offered with partners."],
              ["Transparent installment plans", "The full cost, every payment date and the total you'll pay, shown before you agree."],
              ["Verified employment and income histories", "Work done through Instaclean becomes a record you can show, not just a story you tell."],
              ["Financial education", "Practical help with budgeting, saving and reading the terms of any offer."],
              ["Future savings and lending partnerships", "Over time, we plan to connect workers with licensed savings and lending partners."],
              ["Responsible financial inclusion", "Plans sized to what a worker earns, so a phone never turns into a burden."],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-line pt-4">
                <dt className="font-bold">{title}</dt>
                <dd className="mt-1 text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img src="/images/demfi-education.webp" alt="Service workers in navy polos taking notes while a facilitator talks with them in a bright Accra community room" className="aspect-[4/5] w-full rounded-2xl object-cover" />
      </Container>

      <section id="journey" className="scroll-mt-24 bg-white">
        <Container className="py-20">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">From Employment to Opportunity</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Steady work should leave a trail you can use. Here is the path Pay2own is being built around, and where each part stands today.</p>
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              ["Live today", "Find Work", "Get jobs through Instaclean as a vetted cleaner or household professional.", "/join-as-cleaner", "Join as a professional"],
              ["Coming soon", "Build Employment History", "Each job and each employer adds to a record of where you worked and for how long.", "", ""],
              ["Coming soon", "Receive Documented Payments", "Payments logged through Instaclean show what you earn and how regularly.", "", ""],
              ["Planned", "Access Eligible Financial Products", "Use that record when you apply for products such as a phone installment plan, offered with partners.", "", ""],
            ].map(([badge, title, body, href, cta]) => (
              <li key={title} className="rounded-2xl bg-paper p-6">
                <p className="text-sm font-semibold text-muted">{badge}</p>
                <h3 className="mt-2 text-2xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
                {href ? <Link href={href} className="mt-4 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">{cta}</Link> : null}
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-lg text-muted">Documented earnings can support an affordability assessment. They don&apos;t automatically create a formal credit score, and they don&apos;t guarantee financing. Every application will still be reviewed on its own terms by the provider offering it.</p>
        </Container>
      </section>

      <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
        <img src="/images/worker-between-jobs.webp" alt="Instaclean professional smiling at his phone between jobs outside an Accra compound" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What Pay2own is, and what it isn&apos;t</h2>
          <p className="mt-4 text-muted">Money decisions deserve plain answers. Here is where we stand.</p>
          <dl className="mt-8 grid gap-5">
            {[
              ["Not a bank or lender", "Pay2own is an Instaclean initiative. It is not a bank, and it does not lend money."],
              ["Nothing to apply for yet", "No device plans, loans or credit services are offered today. The waitlist is how we'll tell you when that changes."],
              ["Clear terms first", "Any plan will show the full cost and every payment date before you agree to it."],
              ["Your record, your choice", "Your work and payment history goes to a partner only if you agree."],
              ["Licensed partners only", "Where a financial product needs a licence, we intend to offer it only with a partner who holds one."],
              ["Sized to your earnings", "We would rather offer a smaller plan you can manage than a bigger one that strains you."],
            ].map(([title, body]) => (
              <div key={title}>
                <dt className="font-bold">{title}</dt>
                <dd className="mt-1 text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <section id="waitlist" className="scroll-mt-24 bg-yellow">
        <Container className="grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Join the Pay2own Waitlist</h2>
            <dl className="mt-8 grid gap-6">
              <div>
                <dt className="font-bold">Joining isn&apos;t applying</dt>
                <dd className="mt-1">There is no credit check, and no one will ask you for money to join.</dd>
              </div>
              <div>
                <dt className="font-bold">Looking for work now?</dt>
                <dd className="mt-1">Cleaners and household professionals can <Link href="/join-as-cleaner" className="font-semibold underline decoration-ink decoration-2 underline-offset-4">apply to join Instaclean</Link> today.</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <WaitlistForm
              idPrefix="pay2own"
              roleLabel="I am"
              roles={["A service worker", "An employer of household staff", "A business", "A potential financial or device partner"]}
              consent="Instaclean may contact me by phone, WhatsApp or email about Pay2own. I understand this is not an application for credit."
              submitLabel="Join the Pay2own Waitlist"
              successMessage="You're on the Pay2own waitlist. This is not a credit application."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
