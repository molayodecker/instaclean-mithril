import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Customer stories | Instaclean",
  description: "We're collecting stories from our customers. None are published yet.",
};

export default function TestimonialsPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Customer stories" lede="We're collecting stories from our customers. None are published yet.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="/book-a-service">Book a service</YellowButton>
          <Link href="/contact#quote" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">Get a quote</Link>
          <Link href="/how-we-verify" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">How we verify</Link>
        </div>
      </PageHero>
      <Container className="pb-16">
        <img src="/images/testimonials-living-room.webp" alt="A tidy living room after a visit" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <section className="bg-white">
        <Container className="py-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Questions before you book?</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Read what each service includes, or talk to the team.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/services" className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">Services</Link>
            <Link href="/contact" className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">Contact</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
