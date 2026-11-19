import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { SUPPORT_DISPLAY, SUPPORT_TEL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Household staffing in Accra | Instaclean",
  description: "Ask for a housekeeper, nanny, caregiver, cook or driver. No account needed.",
};

const roles = [
  {
    title: "Housekeepers",
    body: "Regular upkeep of the home: floors, surfaces, laundry and the rooms you use every day. When a housekeeping visit is listed in the app, you can book it there too.",
    image: "/images/staffing-housekeeper-bed.webp",
    alt: "Housekeeper making a bed in an Accra home",
  },
  {
    title: "Nannies",
    body: "Childcare arranged as a placement, not handed out on the spot to someone unnamed.",
    image: "/images/staffing-nanny-veranda.webp",
    alt: "Nanny with a child on a veranda",
  },
  {
    title: "Elderly caregivers",
    body: "Companionship and day-to-day support for an older relative, agreed before anyone is introduced.",
    image: "/images/staffing-caregiver-walk.webp",
    alt: "Caregiver walking with an older person",
  },
  {
    title: "Personal drivers",
    body: "Arranged by quote. Drivers aren't part of the standard cleaning catalog.",
    image: "/images/staffing-driver-groceries.webp",
    alt: "Driver helping with groceries",
  },
  {
    title: "Cooks",
    body: "Agree on the meals, kitchen access and days before anyone is introduced.",
    image: "/images/staffing-cook-plantain.webp",
    alt: "Home cook preparing plantain",
  },
];

export default function StaffingPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Household staff for Accra homes" lede="Ask for a housekeeper, nanny, caregiver, cook or driver. No account needed.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href="#quote">Ask for a placement</YellowButton>
          <Link href="/how-we-verify" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">How we verify</Link>
        </div>
      </PageHero>
      <Container className="pb-12">
        <img src="/images/staffing-living-room.webp" alt="Household staff in a living room in Accra" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="py-8">
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">How a placement works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Send your request", "Tell us the role, the neighbourhood and the days you have in mind."],
            ["Screening", "The same checks described on the verification page, before anyone is introduced."],
            ["Placement", "You agree the fit, the timing and the price. One-off visits that are listed in the app can still be booked there."],
            ["Support once it starts", `Call customer support on ${SUPPORT_DISPLAY} if something needs to change.`],
          ].map(([title, body], index) => (
            <li key={title} className="rounded-2xl bg-white p-6">
              <p className="text-sm font-semibold text-muted">0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </Container>
      <section className="bg-white">
        <Container className="py-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Roles you can ask for</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {roles.map((role) => (
              <article key={role.title} className="overflow-hidden rounded-2xl bg-paper">
                <img src={role.image} alt={role.alt} className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{role.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{role.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="quote" className="scroll-mt-24 bg-yellow">
        <Container className="grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Ask for household staff</h2>
            <p className="mt-4 text-lg">No account needed. We follow up by phone. Or call <a href={`tel:${SUPPORT_TEL}`} className="font-semibold underline decoration-ink decoration-2 underline-offset-4">{SUPPORT_DISPLAY}</a>.</p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm
              idPrefix="staffing"
              submitLabel="Ask for a placement"
              services={["Housekeepers", "Nannies", "Elderly caregivers", "Personal drivers", "Cooks"]}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
