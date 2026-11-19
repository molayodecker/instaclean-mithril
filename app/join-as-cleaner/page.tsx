import type { Metadata } from "next";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { CLEANER_HELP, WHATSAPP } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join as a cleaner | Instaclean",
  description: "Apply as a cleaning professional, meet clients in your area and pick when and where you work.",
};

const PLAY = "https://play.google.com/store/apps/details?id=com.tryinstaclean";

export default function JoinPage() {
  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title="Find cleaning work near you" lede="Apply as a cleaning professional, meet clients in your area and pick when and where you work.">
        <div className="flex flex-wrap gap-3">
          <YellowButton href={`${WHATSAPP}?text=APPLY`}>Apply on WhatsApp</YellowButton>
          <a href={PLAY} className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">Google Play</a>
        </div>
        <p className="mt-4 text-sm text-muted">Both open in a new tab.</p>
      </PageHero>
      <Container className="pb-12">
        <img src="/images/join-phone.webp" alt="Cleaner checking jobs on a phone" className="aspect-[16/7] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="grid items-center gap-10 py-8 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Why professionals join</h2>
          <ul className="mt-6 grid gap-3 text-lg text-muted">
            <li>Choose your hours and the area you cover.</li>
            <li>Set your rates.</li>
            <li>See jobs on your phone.</li>
            <li>Steady demand from homes that book regularly.</li>
            <li>Good pay, paid securely and protected.</li>
            <li>Repeat clients when the fit is right.</li>
          </ul>
          <a href={CLEANER_HELP} className="mt-6 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">Cleaner resources</a>
        </div>
        <img src="/images/join-bathroom.webp" alt="Professional cleaning a bathroom" className="aspect-[4/5] w-full rounded-2xl object-cover" />
      </Container>
      <section className="bg-white">
        <Container className="py-20">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What you need to apply</h2>
          <ul className="mt-8 grid gap-4 text-lg text-muted md:grid-cols-2">
            <li className="rounded-2xl bg-paper p-5">Your own phone, not someone else&apos;s.</li>
            <li className="rounded-2xl bg-paper p-5">A smartphone that runs WhatsApp.</li>
            <li className="rounded-2xl bg-paper p-5">A clean criminal record.</li>
            <li className="rounded-2xl bg-paper p-5">You can work in Ghana: a work permit, refugee ID, or residency if you are not a citizen.</li>
          </ul>
          <p className="mt-8 text-lg text-muted">After you apply, have your Ghana Card ready and be somewhere you can take a camera selfie.</p>
        </Container>
      </section>
      <Container className="py-20">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What happens next</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {["Application review", "Ghana Card verification", "Interview — we email you to book a short video call", "Background check", "Go live"].map((step, index) => (
            <li key={step} className="border-t-2 border-ink pt-4">
              <p className="text-sm font-semibold text-muted">0{index + 1}</p>
              <p className="mt-2 font-bold">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
      <section className="bg-yellow">
        <Container className="py-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Apply</h2>
          <p className="mt-4 max-w-2xl text-lg">Send APPLY on WhatsApp, or download the app. Read the <a href="https://help.tryinstaclean.com/help/privacy" className="font-semibold underline">privacy policy</a> and <a href="https://help.tryinstaclean.com/help/terms" className="font-semibold underline">terms</a>.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${WHATSAPP}?text=APPLY`} className="inline-flex h-12 items-center rounded-full bg-navy px-7 font-semibold text-white no-underline">WhatsApp APPLY</a>
            <a href={PLAY} className="inline-flex h-12 items-center rounded-full border border-ink/30 px-7 font-semibold no-underline">Get the app</a>
          </div>
        </Container>
      </section>
    </main>
  );
}
