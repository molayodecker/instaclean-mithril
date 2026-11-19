import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero, YellowButton } from "@/components/ui";
import { servicePage, servicePages } from "@/lib/service-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePage(slug);
  return { title: service?.title ?? "Service", description: service?.lede };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePage(slug);
  if (!service) notFound();

  return (
    <main id="main-content" className="bg-paper text-ink">
      <PageHero title={service.title} lede={service.lede}>
        <div className="flex flex-wrap gap-3">
          <YellowButton href="#quote">Get a free quote</YellowButton>
          <Link href="/book-a-service" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 font-semibold no-underline hover:border-ink">
            Book a service
          </Link>
        </div>
      </PageHero>
      <Container className="grid items-start gap-12 pb-16 lg:grid-cols-12">
        <img src={service.image} alt={service.alt} className="aspect-[4/3] w-full rounded-2xl object-cover lg:col-span-5" />
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Who it&apos;s for</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{service.audience}</p>
          <h2 className="mt-12 text-3xl font-bold tracking-tight md:text-5xl">What a visit can include</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {service.includes.map((item) => (
              <div key={item.title} className="border-t-2 border-ink pt-4">
                <dt className="font-bold">{item.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-3xl font-bold">{service.price}</p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{service.priceNote}</p>
          <Link href="/services#prices" className="mt-4 inline-block font-semibold underline decoration-yellow decoration-2 underline-offset-4">
            See every service and its starting price
          </Link>
          <h3 className="mt-10 text-2xl font-bold">Add-ons you can ask for</h3>
          <p className="mt-3 text-lg text-muted">{service.addons}</p>
        </div>
      </Container>
      <section className="bg-white">
        <Container className="py-16">
          <h2 className="text-3xl font-bold md:text-5xl">Good to know</h2>
          <dl className="mt-8 max-w-3xl">
            {service.faqs.map((item) => (
              <div key={item.q} className="border-b border-line py-6">
                <dt className="text-xl font-bold">{item.q}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-muted">
                  {item.a}{" "}
                  {item.href ? (
                    <Link href={item.href} className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4">{item.hrefLabel}</Link>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <section id="quote" className="scroll-mt-24 bg-yellow">
        <Container className="grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Get a free quote</h2>
            <p className="mt-4 text-lg">Tell us the rooms, where you are and how often. You don&apos;t need an account.</p>
            <p className="mt-4 text-lg">Already know what you want? <Link href="/book-a-service" className="font-semibold underline decoration-ink decoration-2 underline-offset-4">Book a service</Link>.</p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm idPrefix={service.slug} lockedService={service.serviceName} submitLabel="Get a free quote" />
          </div>
        </Container>
      </section>
    </main>
  );
}
