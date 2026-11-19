import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers | Instaclean",
  description: "We hire people who care about trust, craft and systems built to last.",
};

export default function CareersPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Build better home care with us" lede="We hire people who care about trust, craft and systems built to last.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href={`mailto:${EMAIL}?subject=Careers%20inquiry`}>Email the team</YellowButton>
          <Link href="/join-as-cleaner" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">Join as a professional</Link>
        </div>
      </PageHero>
      <Container className="pb-12">
        <img src="/images/careers-office.webp" alt="Instaclean team in the office" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="grid gap-8 py-8 lg:grid-cols-2">
        <article className="overflow-hidden rounded-2xl bg-white">
          <img src="/images/careers-balcony.webp" alt="Cleaning professional wiping balcony glass" className="aspect-[16/9] w-full object-cover" />
          <div className="p-6">
            <h2 className="text-3xl font-bold">Service professionals</h2>
            <p className="mt-3 text-lg text-muted">Join our network of cleaners and household professionals. Meet clients in your area and choose when you work.</p>
            <Link href="/join-as-cleaner" className="mt-4 inline-flex h-12 items-center rounded-full bg-navy px-7 font-semibold text-white no-underline">Apply</Link>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl bg-white">
          <img src="/images/careers-whiteboard.webp" alt="Team working at a whiteboard" className="aspect-[16/9] w-full object-cover" />
          <div className="p-6">
            <h2 className="text-3xl font-bold">Team roles</h2>
            <p className="mt-3 text-lg text-muted">Product, operations, partnerships and engineering. There are no specific openings listed right now.</p>
            <a href={`mailto:${EMAIL}?subject=Careers%20inquiry`} className="mt-4 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">Email {EMAIL}</a>
          </div>
        </article>
      </Container>
      <section className="bg-navy text-white">
        <Container className="py-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Want to see where this is going?</h2>
          <div className="mt-8"><YellowButton href="/vision">Our vision</YellowButton></div>
        </Container>
      </section>
    </main>
  );
}
