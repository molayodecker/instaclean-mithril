import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { RoomShowcase } from "@/components/room-showcase";
import { Container, YellowButton } from "@/components/ui";
import {
  APP_LINK,
  checks,
  EMAIL,
  faqs,
  images,
  staff,
  steps,
  SUPPORT_DISPLAY,
  SUPPORT_TEL,
  WHATSAPP,
  WHATSAPP_DISPLAY,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper text-ink">
      <section className="relative bg-navy text-white">
        <Container className="flex flex-col items-center pt-32 pb-12 text-center md:pt-40 md:pb-16">
          <h1 className="hero-rise max-w-[16ch] text-balance text-[2.75rem] font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-7xl md:leading-none">
            Your Home. Your People. One Platform.
          </h1>
          <p className="hero-in mt-6 max-w-[40rem] text-lg leading-relaxed text-mist [--hero-at:0.15s] md:text-xl">
            Find trusted home professionals, manage your household workforce, and simplify everyday life. Instaclean brings home services, worker management, and payments together in one place.
          </p>
          <div className="hero-in mt-9 flex flex-wrap items-center justify-center gap-3 [--hero-at:0.3s]">
            <YellowButton href="/book-a-service">Find Home Help</YellowButton>
            <Link
              href="/manage"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-7 text-base font-semibold text-white no-underline hover:border-white hover:bg-white/10"
            >
              Explore Instaclean Manage
            </Link>
          </div>
        </Container>
        <div className="relative h-[52vh] min-h-[320px] w-full overflow-hidden md:h-[68vh] md:max-h-[760px]">
          <img
            src={images.hero}
            alt="Five Instaclean professionals in uniform smiling outside an Accra home with a cleaning cart and fresh towels"
            width={2048}
            height={880}
            className="hero-settle absolute inset-0 h-full w-full object-cover object-[50%_35%]"
          />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy to-transparent" />
        </div>
      </section>

      <section id="platform" className="bg-paper text-ink">
        <Container className="py-24 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] md:text-6xl md:leading-none">
              Three connected products, one home platform
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Booking home help is live today. Managing and paying your workers, and Demfi for the workers themselves, are on the way.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                href: "/services",
                badge: "Available now",
                title: "Instaclean Services",
                body: "Trusted help for everyday living.",
                detail: "Book vetted cleaners, nannies, caregivers, chefs, drivers, and other home professionals.",
                image: images.kitchen,
                alt: "Instaclean professional cleaning a bright home kitchen in Accra",
              },
              {
                href: "/manage",
                badge: "Coming soon",
                title: "Instaclean Manage",
                body: "Smarter management for households and businesses.",
                detail: "Onboard workers, manage schedules, organize payments, and maintain employment and earning records.",
                image: "/images/manage-nanny-kitchen.webp",
                alt: "Father handing a lunchbox to the family nanny, who holds their toddler",
              },
              {
                href: "/demfi",
                badge: "Coming soon",
                title: "Demfi",
                body: "Financial opportunities built around work.",
                detail: "Our financial technology initiative aims to make smartphones and other financial opportunities more accessible to service workers through installment plans and responsible financial partnerships.",
                image: "/images/worker-between-jobs.webp",
                alt: "Instaclean professional smiling at his phone between jobs",
              },
            ].map((product) => (
              <Link key={product.title} href={product.href} className="group overflow-hidden rounded-2xl bg-white">
                <img src={product.image} alt={product.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{product.badge}</p>
                  <h3 className="mt-2 text-2xl font-bold">{product.title}</h3>
                  <p className="mt-3 font-semibold text-ink">{product.body}</p>
                  <p className="mt-2 leading-relaxed text-muted">{product.detail}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="bg-paper text-ink">
        <Container className="pt-24 md:pt-32">
          <div className="max-w-3xl">
            <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl md:leading-none">
              Cleaning for every room you live and work in
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Choose a vetted professional whose profile, schedule and rates suit you. Starting prices in cedis are on the{" "}
              <Link href="/services" className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink">
                services page
              </Link>
              , and checkout sets the final amount.
            </p>
          </div>
        </Container>
        <Container className="pb-16 md:pb-0">
          <RoomShowcase />
        </Container>
      </section>

      <section id="staffing" className="bg-white text-ink">
        <Container className="py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] text-ink md:col-span-7 md:text-6xl md:leading-none">
              Household staff, introduced with care
            </h2>
            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-muted">
                Book housekeeper, nanny and caregiver visits when they&apos;re listed. Cooks and drivers are arranged by quote. We don&apos;t promise a police clearance or a replacement.
              </p>
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {staff.map((person) => (
              <li key={person.title}>
                <Link href="/household-staffing" className="group block">
                  <div className="overflow-hidden rounded-2xl bg-line">
                    <img
                      src={person.image}
                      alt={person.alt}
                      width={1632}
                      height={2048}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-3">
                    <h3 className="text-[1.1875rem] font-bold text-ink underline-offset-4 group-hover:underline md:text-xl">
                      {person.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-paper px-3 py-1 text-xs font-semibold text-muted">
                      {person.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{person.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <YellowButton href="/household-staffing#quote">Request a placement</YellowButton>
          </div>
        </Container>
      </section>

      <section id="trust" className="relative overflow-hidden bg-navy text-white">
        <div className="grid lg:grid-cols-12">
          <div className="relative h-[60vw] max-h-[560px] lg:col-span-5 lg:h-auto lg:max-h-none">
            <img
              src={images.trust}
              alt="Two Instaclean professionals vacuuming a rug and folding towels in a bright living room"
              className="absolute inset-0 h-full w-full object-cover object-[40%_50%]"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="mx-auto w-full max-w-[760px] px-5 py-20 md:px-8 md:py-28 lg:px-16">
              <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-6xl md:leading-none">
                We check who walks through your door
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                Who comes into your home matters as much as how well they clean. Here is what every applicant goes through before they can join.
              </p>
              <dl className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
                {checks.map((check) => (
                  <div key={check.title}>
                    <dt className="text-lg font-bold text-white">{check.title}</dt>
                    <dd className="mt-2 leading-relaxed text-mist">{check.body}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/how-we-verify" className="mt-12 inline-block font-semibold text-white underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-white">
                How we verify professionals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-paper text-ink">
        <Container className="py-24 md:py-32">
          <h2 className="max-w-3xl text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl md:leading-none">
            Ask first, book when you&apos;re ready
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <li key={step.title} className="border-t-2 border-ink pt-6">
                <h3 className="text-[1.5625rem] font-bold text-ink md:text-3xl">{step.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-20 rounded-3xl bg-white p-8 md:mt-28 md:p-14">
            <p className="text-lg font-semibold text-muted">Customer support. A person answers.</p>
            <a href={`tel:${SUPPORT_TEL}`} className="mt-3 block w-fit text-[2rem] font-bold leading-none tracking-[-0.03em] whitespace-nowrap text-ink decoration-yellow decoration-4 underline-offset-8 hover:underline sm:text-6xl md:text-8xl">
              {SUPPORT_DISPLAY}
            </a>
            <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
              <p className="leading-relaxed text-muted">
                <a href={WHATSAPP} className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink">
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>{" "}
                is our automated booking assistant, not the support line.
              </p>
              <p className="leading-relaxed text-muted">
                Prefer to book on your phone? Get the Instaclean app on the{" "}
                <a href={APP_LINK} className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink">App Store</a>{" "}
                or{" "}
                <a href={APP_LINK} className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink">Google Play</a>.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="business" className="bg-paper text-ink">
        <Container className="pb-24 md:pb-32">
          <div className="relative grid lg:grid-cols-12 lg:items-center">
            <div className="overflow-hidden rounded-2xl lg:col-span-8">
              <img src={images.shortlet} alt="Instaclean housekeeper smoothing fresh white bedding in a short-let bedroom" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="relative z-10 mx-4 -mt-16 rounded-2xl bg-white p-8 shadow-[0_24px_60px_-30px_rgba(2,8,23,0.35)] md:mx-10 md:p-12 lg:col-span-5 lg:col-start-8 lg:mx-0 lg:mt-0">
              <h2 className="text-balance text-[2rem] font-bold leading-[1.05] tracking-[-0.025em] text-ink md:text-5xl md:leading-none">
                Cleaning and staff for offices, short-lets and estates
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Ask for a recurring quote. Tell us the site, how often you need us and what each visit should cover.
              </p>
              <p className="mt-5 leading-relaxed text-ink">
                For offices, Airbnb hosts, property managers, short-let operators, residential estates and commercial facilities.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                Read about{" "}
                <Link href="/services/office-cleaning" className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink">office cleaning</Link>{" "}
                and{" "}
                <Link href="/services/airbnb-turnover" className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink">Airbnb turnovers</Link>.
              </p>
              <div className="mt-8">
                <YellowButton href="/business#quote">Get a business quote</YellowButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faq" className="bg-white text-ink">
        <Container className="grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl md:leading-none">
              Questions people ask first
            </h2>
            <Link href="/faq" className="mt-8 inline-block font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-ink">
              See all questions
            </Link>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-line py-8 first:pt-0">
                <dt className="text-xl font-bold text-ink md:text-2xl">{item.q}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="quote" className="scroll-mt-20 bg-yellow text-ink">
        <Container className="grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] md:text-6xl md:leading-none">
              Get a free quote
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">Tell us what needs doing and where. No account needed.</p>
            <dl className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="text-sm font-semibold">Customer support</dt>
                <dd className="mt-1"><a className="text-xl font-bold underline-offset-4 hover:underline" href={`tel:${SUPPORT_TEL}`}>{SUPPORT_DISPLAY}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">WhatsApp assistant, automated</dt>
                <dd className="mt-1"><a className="text-xl font-bold underline-offset-4 hover:underline" href={WHATSAPP}>{WHATSAPP_DISPLAY}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">Email</dt>
                <dd className="mt-1"><a className="text-xl font-bold underline-offset-4 hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">Location</dt>
                <dd className="mt-1 text-xl font-bold">Accra, Ghana</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </Container>
      </section>

      <section id="join" className="relative isolate overflow-hidden bg-navy text-white">
        <div className="relative h-[70vw] max-h-[480px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%] lg:max-h-none">
          <img src={images.join} alt="Instaclean professional in uniform holding cleaning supplies, ready for her next job" className="absolute inset-0 h-full w-full object-cover object-[70%_30%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/40 lg:to-transparent" />
        </div>
        <Container className="relative py-16 lg:py-28">
          <div className="max-w-md lg:max-w-lg">
            <h2 className="text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-6xl md:leading-none">
              Clean for Instaclean, on your terms
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              Pick when you work and set your own rates. Get steady jobs, secure payouts and repeat clients who find you through your reviews.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <YellowButton href="/join-as-cleaner">Start your application</YellowButton>
              <a href="https://help.tryinstaclean.com/help/category/instacleaners/" className="font-semibold text-white underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-white">
                Cleaner resources
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
