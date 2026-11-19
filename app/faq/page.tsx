import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { SUPPORT_DISPLAY, SUPPORT_TEL } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Instaclean",
  description: "What to expect from our cleaning services, booking and policies.",
};

const groups = [
  {
    id: "booking",
    title: "Booking",
    items: [
      ["How do I book?", "Tell us the service and the neighbourhood, or open the Instaclean app. Web booking is being rebuilt, so for the moment book in the Instaclean app."],
      ["Do I need to be home?", "No. Leave a key or an access code, or be there to let them in. Tell them which you prefer when you book."],
      ["Can I request the same cleaner?", "Yes, subject to availability."],
    ],
  },
  {
    id: "the-clean",
    title: "During the clean",
    items: [
      ["What does a regular clean include?", "Dusting accessible surfaces, vacuuming, mopping, kitchen counters and appliance exteriors, sanitizing bathrooms, making beds with fresh linens if you provide them, and emptying the trash."],
      ["How long does it take?", "A regular clean of a 2-bedroom home is usually 2–3 hours. A deep clean is usually 4–5 hours. You get an estimate when you book."],
      ["What products do you use?", "Professional-grade products. Eco-friendly and hypoallergenic products are available on request."],
      ["Do I need to provide supplies?", "No. Professionals bring what the visit needs."],
    ],
  },
  {
    id: "payment-and-policies",
    title: "Payment and policies",
    items: [
      ["How do I pay?", "Mobile money, cards or cash. Payment plans are available for regular clients."],
      ["What if I'm not satisfied?", "Contact us within 24 hours and we'll arrange a re-clean at no cost."],
      ["How do I cancel?", "Through your online account or by phone. Give 24 hours' notice to avoid fees."],
    ],
  },
];

export default function FaqPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Questions about Instaclean, answered" lede="What to expect from our cleaning services, booking and policies.">
        <div className="flex flex-wrap gap-3">
          <a href="#booking" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-6 font-semibold no-underline">Booking</a>
          <a href="#the-clean" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-6 font-semibold no-underline">The clean</a>
          <a href="#payment-and-policies" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-6 font-semibold no-underline">Payment and policies</a>
        </div>
      </PageHero>
      <Container className="space-y-16 py-8">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{group.title}</h2>
            <dl className="mt-8 grid gap-8">
              {group.items.map(([q, a]) => (
                <div key={q} className="border-t-2 border-ink pt-4">
                  <dt className="text-xl font-bold">{q}</dt>
                  <dd className="mt-2 max-w-3xl text-lg text-muted">
                    {q === "How do I book?" ? (
                      <>
                        Tell us the service and the neighbourhood, or open the Instaclean app. Web booking is being rebuilt, so for the moment{" "}
                        <Link href="/book-a-service" className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">book in the Instaclean app</Link>.
                      </>
                    ) : a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </Container>
      <Container className="pb-12">
        <img src="/images/household-team.webp" alt="Instaclean household team" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <section className="bg-navy text-white">
        <Container className="py-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Didn&apos;t find your answer?</h2>
          <p className="mt-4 text-lg text-mist">Contact the team, or call {SUPPORT_DISPLAY}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <YellowButton href="/contact">Contact us</YellowButton>
            <a href={`tel:${SUPPORT_TEL}`} className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 font-semibold no-underline">{SUPPORT_DISPLAY}</a>
          </div>
        </Container>
      </section>
    </main>
  );
}
