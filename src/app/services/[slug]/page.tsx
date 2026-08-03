import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { services, getService } from '@/content/services';
import { PageHero } from '@/components/ui/PageHero';
import { CallDispatchButton, BookingSoonNote } from '@/components/ui/CallDispatchButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: `${service.category} | Private Chauffeur | ITP Limo`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        subtitle={service.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.category },
        ]}
        image={service.image}
        ctaLabel="Arrange This Service"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base font-light leading-relaxed text-[#524E48] sm:text-lg dark:text-[#CCCCCC]">
                {service.detail.intro}
              </p>

              <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                How it works
              </h2>

              <ol className="mt-8 space-y-8">
                {service.detail.howItWorks.map((item, idx) => (
                  <li key={item.step} className="flex gap-6 border-b border-black/10 pb-8 dark:border-white/10">
                    <span className="font-mono text-sm font-bold text-[#888888]">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                        {item.step}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[28px] border border-black/10 bg-[#FAF8F5] p-8 dark:border-white/10 dark:bg-[#1A1A1A]">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  Included as standard
                </span>

                <ul className="mt-5 space-y-3.5">
                  {service.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex items-start gap-3 text-sm font-light text-[#524E48] dark:text-[#CCCCCC]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      {amenity}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col items-center gap-3">
                  <CallDispatchButton label="Arrange This Service" fullWidth />
                  <BookingSoonNote />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-20 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#66625C] dark:text-[#A0A0A0]">
            Other services
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-black/10 p-6 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04]"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {item.category}
                  </span>
                  <span className="mt-1 block font-serif text-xl font-medium text-[#171717] dark:text-[#F8F6F2]">
                    {item.title}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#171717] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-[#F8F6F2]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
