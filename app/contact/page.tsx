import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { APP_LINK, EMAIL, SUPPORT_DISPLAY, SUPPORT_TEL, WHATSAPP, WHATSAPP_DISPLAY, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Instaclean",
  description: "Call or email support. New bookings go through the booking flow, priced in Ghana cedis.",
};

const quoteServices = [
  "Regular home cleaning",
  "Deep cleaning",
  "Office cleaning",
  "Move-in / move-out",
  "Post-construction",
  "Airbnb turnover",
  "Household staffing",
];

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Talk to the Instaclean team" lede="Call or email support. New bookings go through the booking flow, priced in Ghana cedis.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="/book-a-service">Book a service</YellowButton>
          <a href="/services" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">See services</a>
        </div>
      </PageHero>
      <Container className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <a href={`tel:${SUPPORT_TEL}`} className="rounded-2xl bg-white p-6 no-underline">
          <p className="text-sm font-semibold text-muted">Customer support</p>
          <p className="mt-2 text-xl font-bold text-ink">{SUPPORT_DISPLAY}</p>
        </a>
        <a href={WHATSAPP} className="rounded-2xl bg-white p-6 no-underline">
          <p className="text-sm font-semibold text-muted">WhatsApp assistant</p>
          <p className="mt-2 text-xl font-bold text-ink">{WHATSAPP_DISPLAY}</p>
          <p className="mt-2 text-sm text-muted">Automated. It is not the support line.</p>
        </a>
        <a href={`mailto:${EMAIL}?subject=Instaclean%20support`} className="rounded-2xl bg-white p-6 no-underline">
          <p className="text-sm font-semibold text-muted">Email</p>
          <p className="mt-2 text-xl font-bold text-ink">{EMAIL}</p>
        </a>
        <div className="rounded-2xl bg-white p-6">
          <p className="text-sm font-semibold text-muted">Where we are</p>
          <p className="mt-2 text-xl font-bold">Accra, Ghana</p>
        </div>
      </Container>
      <section id="quote" className="scroll-mt-24 bg-yellow">
        <Container className="grid items-start gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Ask for a free quote</h2>
            <p className="mt-4 text-lg">WhatsApp is automated. Call support if you want to reach a person.</p>
            <img src={images.kitchen} alt="Instaclean professional cleaning a residential kitchen" className="mt-8 aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
          <div className="lg:col-span-7">
            <QuoteForm idPrefix="contact" services={quoteServices} submitLabel="Get a free quote" />
          </div>
        </Container>
      </section>
      <section className="bg-navy text-white">
        <Container className="py-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Book from your phone</h2>
          <p className="mt-4 max-w-xl text-lg text-mist">The Instaclean app is where new bookings happen while web booking is rebuilt.</p>
          <div className="mt-8"><YellowButton href={APP_LINK}>Get the app</YellowButton></div>
        </Container>
      </section>
    </main>
  );
}
