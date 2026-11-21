import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Vision: The Operating System for Homes",
  description: "Making it easier to manage homes, empower workers, and unlock financial opportunities across Africa.",
};

const pillars = [
  {
    badge: "Available now",
    title: "Better Home Services",
    body: "Easy access to trusted household professionals.",
    detail: "Vetted cleaners, nannies, caregivers, cooks and drivers, booked with clear prices and real support.",
    href: "/services",
    cta: "Explore services",
    image: "/images/living-room-mopping.webp",
    alt: "Instaclean professional mopping a bright living room floor",
  },
  {
    badge: "Coming soon",
    title: "Smarter Workforce Management",
    body: "Tools for managing workers, schedules, salaries, and records.",
    detail: "Instaclean Manage gives households and businesses one place to onboard, schedule and pay the people they employ.",
    href: "/manage",
    cta: "Explore Instaclean Manage",
    image: "/images/manage-team-briefing.webp",
    alt: "Property supervisor briefing a cleaning team in an apartment lobby",
  },
  {
    badge: "In development",
    title: "Worker Empowerment",
    body: "Training, skills development, professional identities, and verified work histories.",
    detail: "Every job should add to a worker's skills and to a record they own and can take to their next employer.",
    href: "/careers",
    cta: "Careers at Instaclean",
    image: "/images/worker-training.webp",
    alt: "Senior professional showing two new team members how to fold towels",
  },
  {
    badge: "In development",
    title: "Financial Inclusion",
    body: "Pay2own-enabled device ownership and future access to financial services through responsible partnerships.",
    detail: "Starting with smartphones on clear installment plans, offered with partners, never as a bank or lender.",
    href: "/pay2own",
    cta: "Discover Pay2own",
    image: "/images/demfi-education.webp",
    alt: "Service workers taking notes in a financial education session",
  },
];

export default function VisionPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Building the operating system for homes" lede="Making it easier to manage homes, empower workers, and unlock financial opportunities across Africa.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="/book-a-service">Book a service</YellowButton>
          <Link href="/about" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">About Instaclean</Link>
        </div>
      </PageHero>
      <Container className="pb-8">
        <img src="/images/vision-apartment.webp" alt="Property owner checking a tablet while two Instaclean professionals lay out towels and water plants in an Accra apartment" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="grid gap-10 py-12 lg:grid-cols-12">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl lg:col-span-5">A home runs on more than one service</h2>
        <dl className="grid gap-6 lg:col-span-7">
          {[
            ["Getting help", "Finding reliable help for a home should be easy."],
            ["Employing people well", "Agreements, schedules and pay should be clear for the household and the worker alike."],
            ["Work that adds up", "Steady, documented work should count for something when a worker wants to grow."],
          ].map(([title, body]) => (
            <div key={title} className="border-t-2 border-ink pt-4">
              <dt className="text-xl font-bold">{title}</dt>
              <dd className="mt-2 text-lg text-muted">{body}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <Container className="pb-8">
        <p className="max-w-3xl text-lg text-muted">Our ambition is to build essential infrastructure for homes and household workers across Africa, starting in Ghana with home services.</p>
      </Container>
      <section className="bg-white">
        <Container className="py-20">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Four pillars, one home platform</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Home services are live today. The other three are the direction we are building in, not features you can use yet.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="overflow-hidden rounded-2xl bg-paper">
                <img src={pillar.image} alt={pillar.alt} className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-muted">{pillar.badge}</p>
                  <h3 className="mt-2 text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 font-semibold">{pillar.body}</p>
                  <p className="mt-2 leading-relaxed text-muted">{pillar.detail}</p>
                  <Link href={pillar.href} className="mt-4 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">{pillar.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy text-white">
        <Container className="py-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Be part of what comes next</h2>
          <p className="mt-4 max-w-2xl text-lg text-mist">Whether you book a service today, join as a professional or want to explore a partnership, you&apos;re part of the bigger mission.</p>
          <div className="mt-8"><YellowButton href="/careers">Explore careers</YellowButton></div>
        </Container>
      </section>
    </main>
  );
}
