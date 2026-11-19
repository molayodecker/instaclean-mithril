import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, YellowButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cleaning Services in Ghana",
  description: "Pick a service, see where prices start and book a vetted professional in Accra.",
};

const services = [
  ["Regular home cleaning", "Routine visits that keep floors, surfaces and shared rooms in order.", "/services/regular-home-cleaning", "/images/living-room-mopping.webp", "Instaclean cleaner mopping a bright Accra living room"],
  ["Deep cleaning", "A top-to-bottom reset for kitchens, bathrooms and the corners a routine visit skips.", "/services/deep-cleaning", "/images/kitchen-cleaning.webp", "Instaclean cleaner wiping a marble kitchen counter"],
  ["Office cleaning", "Keeps your workplace tidy for the people who work there and the people who visit.", "/services/office-cleaning", "/images/office-cleaning.webp", "Instaclean cleaner wiping a glass meeting table"],
  ["Move-in / move-out cleaning", "For the empty home you are handing back or the one you are about to unpack in.", "/services/move-in-move-out", "/images/services-move-out.webp", "Cleaner wiping an empty wardrobe beside moving boxes"],
  ["Post-construction cleaning", "Clears the dust and mess builders leave behind so the new space is ready to use.", "/services/post-construction", "/images/services-post-construction.webp", "Cleaner vacuuming construction dust from a new tiled floor"],
  ["Airbnb turnover cleaning", "Gets a short-let ready between one guest checking out and the next checking in.", "/services/airbnb-turnover", "/images/shortlet-bed.webp", "Housekeeper smoothing fresh white bedding"],
] as const;

const prices = [
  ["Indoor Cleaning", "Price when you book"],
  ["Laundry", "From ₵70"],
  ["Laundry & Ironing", "From ₵50"],
  ["Airbnb Turnover", "From ₵120"],
  ["Quick Tasks", "Price when you book"],
] as const;

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Cleaning for homes and offices" lede="Pick a service, see where prices start and book a vetted professional in Accra.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="/book-a-service">Book a service</YellowButton>
          <a href="#prices" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">See starting prices</a>
        </div>
      </PageHero>
      <Container className="pb-8">
        <img src="/images/services-hero.webp" alt="Three Instaclean professionals washing a window, vacuuming a rug and arranging cushions in a bright Accra living room" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="pb-16">
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Choose the clean the job needs</h2>
        <p className="mt-4 max-w-xl text-lg text-muted">Six cleaning services for homes, offices and short-lets. Open any of them to read more before you book.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, body, href, image, alt]) => (
            <Link key={href} href={href} className="group overflow-hidden rounded-2xl bg-white">
              <img src={image} alt={alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <section id="prices" className="scroll-mt-24 bg-white">
        <Container className="py-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Where prices start</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Each figure is the lowest list price in that category of the catalog. Your amount is worked out at checkout from the service, your home and any add-ons you choose.</p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {prices.map(([name, price]) => (
              <li key={name}>
                <Link href="/book-a-service" className="flex items-baseline justify-between gap-4 py-5 no-underline">
                  <span className="text-xl font-bold">{name}</span>
                  <span className="font-semibold text-muted">{price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Container className="grid gap-10 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">Found your service? Book it.</h2>
          <p className="mt-4 text-lg text-muted">Start a booking now, or ask for a free quote first if the job needs a closer look.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <YellowButton href="/book-a-service">Book a service</YellowButton>
            <Link href="/contact#quote" className="inline-flex h-12 items-center font-semibold underline decoration-yellow decoration-2 underline-offset-4">Get a free quote</Link>
          </div>
          <p className="mt-6 text-muted">Questions first? Call customer support on <a className="font-semibold text-ink" href="tel:+233544415766">+233 54 441 5766</a>.</p>
        </div>
        <div className="rounded-3xl bg-navy p-8 text-white">
          <h2 className="text-3xl font-bold">Do you clean for a living?</h2>
          <p className="mt-3 text-mist">Choose when you work, set your own rates and take jobs through Instaclean.</p>
          <div className="mt-6"><YellowButton href="/join-as-cleaner">Become a cleaner</YellowButton></div>
        </div>
      </Container>
    </main>
  );
}
