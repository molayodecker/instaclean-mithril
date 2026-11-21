import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us | Home and Workforce Management for Africa",
  description: "Founding story and why Instaclean serves both households and workers.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Better home care, built for Africa" lede="Trusted professionals and smart technology, so every home gets peace of mind.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="/book-a-service">Book a service</YellowButton>
          <Link href="/careers" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">Join our team</Link>
        </div>
      </PageHero>
      <Container className="pb-10">
        <img src="/images/about-family-home.webp" alt="Instaclean nanny reading a picture book with a young boy on the sofa while a colleague wipes the dining table" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="grid items-center gap-10 py-10 lg:grid-cols-2">
        <img src="/images/about-kids-room.webp" alt="Instaclean housekeeper arranging soft toys on a shelf in a child's bedroom in Accra" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">It began with our own search for help</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">We moved to Ghana in 2025 and assumed settling in would be the hard part. It wasn&apos;t. Finding cleaners we could trust, and caregivers for our children, turned out to be one of the toughest jobs we faced.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">Nobody offered an easy way to find vetted professionals, weigh up the options or book with confidence. Families leaned on referrals, scattered phone numbers and a lot of guesswork.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">We were sure it could be done better.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">So we started Instaclean to bring trust, technology and transparency to home services, and to help skilled professionals grow businesses that thrive.</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">Home services are where we start. Our vision goes much further.</p>
        </div>
      </Container>
      <Container className="grid items-center gap-10 py-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Then we saw the other side of the door</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">The more professionals we met, the clearer a second problem became. Many cleaners, nannies, caregivers and drivers have years of steady work behind them and almost nothing to show for it.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">Pay arrives in cash. Agreements are verbal. References live in an old employer&apos;s phone. Without formal employment records or a payment history, it is hard to prove what you earn, and harder still to buy a phone on installments, open savings or get credit.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">A good household and a good worker need each other. We want to build for both.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">So Instaclean is growing from a home services marketplace into technology for the whole relationship: finding help, then <Link href="/manage" className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">managing and paying workers</Link> with clear records, and through <Link href="/pay2own" className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">Pay2own</Link>, helping workers turn that record into fairer access to smartphones and, over time, other financial opportunities.</p>
        </div>
        <img src="/images/about-worker-notebook.webp" alt="Housekeeper reading a worn paper notebook on a veranda at the end of her work day" className="aspect-[4/5] w-full rounded-2xl object-cover" />
      </Container>
      <section className="bg-navy text-white">
        <Container className="py-20">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Better homes. Better work. Better opportunities.</h2>
          <p className="mt-5 max-w-2xl text-lg text-mist">Our mission is to make it easier to manage homes, empower workers, and unlock financial opportunities across Africa, starting in Ghana.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["/services", "Instaclean Services", "Live now", "Helping households book trusted, vetted professionals."],
              ["/manage", "Instaclean Manage", "Coming soon", "Helping households and businesses onboard, schedule and pay their workers, with records both sides can keep."],
              ["/pay2own", "Pay2own", "Coming soon", "Helping service workers reach smartphones and, over time, other financial opportunities built on their work."],
            ].map(([href, title, badge, body]) => (
              <Link key={href} href={href} className="rounded-2xl border border-white/10 p-6 no-underline hover:bg-white/5">
                <p className="text-sm font-semibold text-yellow">{badge}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-mist">{body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <Container className="py-20">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What guides every booking</h2>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Trust", "Every professional is verified."],
            ["Simplicity", "Booking a service should take less than a minute."],
            ["Opportunity", "We help professionals build businesses that last."],
            ["Innovation", "We use AI to make running a home effortless."],
          ].map(([title, body]) => (
            <div key={title} className="border-t-2 border-ink pt-4">
              <dt className="text-xl font-bold">{title}</dt>
              <dd className="mt-2 text-muted">{body}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <Container className="grid items-center gap-10 pb-20 lg:grid-cols-2">
        <img src="/images/about-home-care.webp" alt="Two Instaclean professionals opening wooden shutters and dusting a sideboard in a furnished Accra villa" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <div>
          <p className="text-2xl font-bold leading-snug md:text-4xl">Home is more than where you live. It&apos;s the life we help people protect, wherever they happen to be.</p>
          <p className="mt-5 text-lg text-muted">Whether it&apos;s a family home in Accra or a property run from abroad, Instaclean keeps trust, care and reliability close by.</p>
        </div>
      </Container>
      <section className="bg-yellow">
        <Container className="py-16">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Ready for an easier way to look after your home?</h2>
          <p className="mt-4 max-w-2xl text-lg">Right now we help families book trusted professionals. Next come Instaclean Manage for the people who employ them and Pay2own for the workers themselves.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book-a-service" className="inline-flex h-12 items-center rounded-full bg-navy px-7 font-semibold text-white no-underline">Book now</Link>
            <Link href="/vision" className="inline-flex h-12 items-center rounded-full border border-ink/30 px-7 font-semibold no-underline">Our vision</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
