import type { Metadata } from "next";
import Link from "next/link";
import { APP_LINK, SUPPORT_DISPLAY, SUPPORT_TEL } from "@/lib/content";
import { Container, PageHero, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book in the Instaclean app",
  description: "Web booking is being rebuilt. Book a cleaner, housekeeper, nanny or caregiver in the Instaclean app.",
};

export default function BookPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Web booking is being rebuilt" lede="You can still book a cleaner, housekeeper, nanny or caregiver in the Instaclean app.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href={APP_LINK}>Get the app</YellowButton>
          <a href="https://play.google.com/store/apps/details?id=com.tryinstaclean" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">Google Play</a>
        </div>
      </PageHero>
      <Container className="pb-16">
        <img src="/images/team-living-room.webp" alt="Instaclean team in a living room" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <section className="bg-white">
        <Container className="grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Quotes and support are still open</h2>
            <p className="mt-4 text-lg text-muted">You don&apos;t need the app to ask a question or get a price.</p>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="text-2xl font-bold">Want a price first?</h3>
              <p className="mt-2 text-muted">Tell us the service, the neighbourhood and how often. We follow up by phone.</p>
              <Link href="/contact#quote" className="mt-3 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">Get a free quote</Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Talk to a person</h3>
              <p className="mt-2 text-muted">Customer support answers the phone. WhatsApp is an automated assistant.</p>
              <a href={`tel:${SUPPORT_TEL}`} className="mt-3 inline-block text-xl font-bold underline decoration-yellow decoration-2 underline-offset-4">{SUPPORT_DISPLAY}</a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
