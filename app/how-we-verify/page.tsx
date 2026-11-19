import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { EMAIL, SUPPORT_DISPLAY, SUPPORT_TEL } from "@/lib/content";

export const metadata: Metadata = {
  title: "How we verify professionals | Instaclean",
  description: "Our application checks today. They aren't a guarantee, a police certificate or a public record.",
};

export default function VerifyPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="How we verify professionals" lede="Our application checks today. They aren't a guarantee, a police certificate or a public record.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="#checks">See the checks</YellowButton>
          <a href="#support" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">If something goes wrong</a>
        </div>
      </PageHero>
      <Container className="pb-12">
        <img src="/images/verify-gate.webp" alt="Instaclean professional welcomed at a compound gate" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <section id="checks" className="scroll-mt-24">
        <Container className="py-8">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">What we check before someone is approved</h2>
          <dl className="mt-10 grid gap-8">
            {[
              ["Ghana Card", "Required before an application can be submitted. We don't publish the document or the result."],
              ["Facial check", "When we ask for one, the photos are not shown on a profile and it is not a public badge."],
              ["A past client", "At least one client reference: a name, a Ghana phone number and how they know the applicant. More are optional. This is not a published rating."],
              ["Background-check consent", "Required to apply. It is not a completed police clearance on every profile."],
              ["Profile review", "Our team reviews the application. Experience on the profile is written by the applicant."],
            ].map(([title, body]) => (
              <div key={title} className="border-t-2 border-ink pt-4">
                <dt className="text-2xl font-bold">{title}</dt>
                <dd className="mt-2 max-w-3xl text-lg text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <Container className="py-8">
        <img src="/images/verify-glass-door.webp" alt="Instaclean professional at a glass door" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <section id="limits" className="bg-navy text-white">
        <Container className="py-20">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">What these checks are not</h2>
          <ul className="mt-8 grid max-w-3xl gap-4 text-lg text-mist">
            <li>We do not claim a police clearance for every professional, including housekeepers, nannies, caregivers, drivers and cooks.</li>
            <li>Booking cover, where it is offered, is an optional add-on. It is not insurance.</li>
            <li>Household staffing uses the same checks. We do not promise a replacement if a placement does not work out.</li>
          </ul>
          <Link href="/household-staffing" className="mt-8 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">Household staffing</Link>
        </Container>
      </section>
      <section id="support" className="scroll-mt-24">
        <Container className="py-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">If something goes wrong</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Call support or email us about the visit. Please don&apos;t send identity documents through this website.</p>
          <p className="mt-6 text-xl font-bold">
            <a href={`tel:${SUPPORT_TEL}`} className="underline decoration-yellow decoration-2 underline-offset-4">{SUPPORT_DISPLAY}</a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${EMAIL}?subject=Visit%20concern`} className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">{EMAIL}</a>
          </p>
        </Container>
      </section>
    </main>
  );
}
