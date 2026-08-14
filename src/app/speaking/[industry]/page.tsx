import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaPair from "@/components/CtaPair";
import Reveal from "@/components/Reveal";
import { getIndustry, industries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/speaking/[industry]">): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) return {};
  return pageMetadata({
    title: ind.seoTitle,
    description: ind.seoDescription,
    path: `/speaking/${ind.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: PageProps<"/speaking/[industry]">) {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://marniblythespeaks.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Speaking & Programs",
        item: "https://marniblythespeaks.com/speaking",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ind.name,
        item: `https://marniblythespeaks.com/speaking/${ind.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="stage-glow text-white">
        <Reveal className="mx-auto max-w-4xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span aria-hidden className="mx-2 text-gold/60">/</span>
            <Link href="/speaking" className="hover:text-gold">Speaking &amp; Programs</Link>
            <span aria-hidden className="mx-2 text-gold/60">/</span>
            <span className="text-white/80">{ind.name}</span>
          </nav>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
            {ind.name} Keynote Speaker · Human Intelligence
          </p>
          <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            {ind.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {ind.intro}
          </p>
          <CtaPair on="dark" className="mt-10" />
        </Reveal>
      </section>

      {/* Pain points */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              What&apos;s really going on in{" "}
              <span className="gradient-text">{ind.name.toLowerCase()}</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ind.painPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <div className="card-lux h-full p-8">
                <h3 className="font-bold uppercase tracking-wide text-gold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {p.body}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keynote fit */}
      <section className="section-purple">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl shadow-brand/30">
            <Image
              src="/images/marni-conference.jpg"
              alt="Marni Blythe delivering a keynote on stage"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Talk
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              <span className="gradient-text">Human Intelligence</span> in the
              Age of AI
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Not another AI talk — and never a generic one. Every booking
              starts with a discovery call with your leadership, and the
              keynote gets rebuilt in {ind.name.toLowerCase()}&apos;s language:
              your scenarios, your pressures, your wins.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              <span className="font-bold uppercase tracking-[0.25em] text-gold">
                Where it fits:
              </span>{" "}
              {ind.fit}
            </p>
            <Link
              href="/contact"
              className="btn-shine mt-8 inline-block rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-bright/25 transition hover:brightness-110"
            >
              Book This Program
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Other industries */}
      <section className="section-dark border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
            Also Speaking To
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {industries
              .filter((i) => i.slug !== ind.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`/speaking/${i.slug}`}
                  className="rounded-md border-2 border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-gold hover:text-gold"
                >
                  {i.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
