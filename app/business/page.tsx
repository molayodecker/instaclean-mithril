import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { SUPPORT_DISPLAY, SUPPORT_TEL, WHATSAPP_DISPLAY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business cleaning and staffing | Instaclean",
  description: "Recurring cleaning and staff for businesses. Share where your site is and how often you need a team there.",
};

const sites = [
  {
    title: "Airbnb hosts and short-let operators",
    body: "Set up Airbnb turnovers as a standing arrangement, so each checkout is covered without booking one visit at a time.",
    href: "/services/airbnb-turnover",
    image: "/images/business-shortlet.webp",
    alt: "Instaclean team turning over a short-let bedroom",
  },
  {
    title: "Offices and commercial facilities",
    body: "Office and facility cleaning, quoted for the site, the hours and how often you need a team there.",
    href: "/services/office-cleaning",
    image: "/images/business-lobby.webp",
    alt: "Instaclean team cleaning an office lobby",
  },
  {
    title: "Property managers and residential estates",
    body: "Estate cleaning for shared spaces, or a household staffing agreement for homes you look after.",
    href: "/household-staffing",
    image: "/images/business-estate.webp",
    alt: "Instaclean team cleaning a residential estate",
  },
];

export default function BusinessPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Recurring cleaning and staff for businesses" lede="Share where your site is and how often you need a team there.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="#quote">Get a free quote</YellowButton>
          <Link href="/services" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">See services</Link>
        </div>
      </PageHero>
      <Container className="pb-12">
        <img src="/images/business-office.webp" alt="Instaclean team cleaning a bright office" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <section id="who-we-serve" className="scroll-mt-24">
        <Container className="py-12">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Made for sites that need people there often</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Recurring agreements for offices, Airbnb hosts, property managers, short-let operators, residential estates and commercial facilities.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {sites.map((site) => (
              <article key={site.title} className="overflow-hidden rounded-2xl bg-white">
                <img src={site.image} alt={site.alt} className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{site.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{site.body}</p>
                  <Link href={site.href} className="mt-4 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">Learn more</Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy text-white">
        <Container className="py-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">The same checks, on a standing team</h2>
          <dl className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Ghana Card", "Checked before someone is approved, and a facial check when that step calls for it."],
              ["A past client to vouch", "At least one reference who can say they worked with them."],
              ["Background-check consent", "Required to apply. It is not a police clearance on every profile."],
              ["Profile review", "Reviewed by our team before anyone is introduced."],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-white/20 pt-4">
                <dt className="text-xl font-bold">{title}</dt>
                <dd className="mt-2 text-mist">{body}</dd>
              </div>
            ))}
          </dl>
          <Link href="/how-we-verify" className="mt-10 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">How we verify professionals</Link>
        </Container>
      </section>
      <Container className="py-20">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Before you ask for a quote</h2>
        <dl className="mt-10 grid gap-8">
          {[
            ["What can I ask you to quote?", "Office cleaning, Airbnb turnovers, estate or facility cleaning, household staffing, or another recurring arrangement."],
            ["Does it have to be regular?", "No. Ask for one visit, weekly, more than once a week, monthly, or say you are not sure yet."],
            ["Do I need an account?", "No. This form is not public, and you do not need an account to ask for a quote."],
            ["Which number reaches a person?", `Customer support on ${SUPPORT_DISPLAY}. WhatsApp ${WHATSAPP_DISPLAY} is an automated assistant.`],
          ].map(([q, a]) => (
            <div key={q} className="border-t-2 border-ink pt-4">
              <dt className="text-xl font-bold">{q}</dt>
              <dd className="mt-2 text-lg text-muted">{a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8">
          Call <a href={`tel:${SUPPORT_TEL}`} className="font-semibold underline decoration-yellow decoration-2 underline-offset-4">{SUPPORT_DISPLAY}</a> if you would rather talk it through.
        </p>
      </Container>
      <section id="quote" className="scroll-mt-24 bg-yellow">
        <Container className="grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Ask for a business quote</h2>
            <p className="mt-4 text-lg">Tell us the site, the service and how often. We follow up by phone.</p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm
              idPrefix="business"
              submitLabel="Get a Free Quote"
              companyLabel="Company or property name"
              companyRequired
              services={["Office cleaning", "Airbnb turnover", "Estate or facility cleaning", "Household staffing agreement", "Other recurring contract"]}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
