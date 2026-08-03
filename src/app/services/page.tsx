import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/content/services';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CallDispatchButton, BookingSoonNote } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = {
  title: 'Chauffeur Services | Airport, Hourly & Corporate Travel | ITP Limo',
  description:
    'Airport transfers with live flight tracking, hourly and full-day chauffeur hire, city-to-city executive travel and corporate accounts across Boston and Raleigh-Durham.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke Mobility"
        title="Every journey, covered."
        subtitle="Airport transfers, hourly hire, city-to-city executive travel and managed corporate accounts — each with the same chauffeur standard."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        image="/images/hero.png"
        ctaLabel="Discuss Your Journey"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.slug} className="flex flex-col">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative mb-8 block h-64 overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover brightness-[0.7] transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <span className="absolute bottom-6 left-6 font-mono text-xs font-bold text-white/70">
                      {service.number}
                    </span>
                  </Link>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {service.category}
                  </span>

                  <h2 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-black/10 pt-6 dark:border-white/10">
                    {service.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-start gap-2.5 text-xs text-[#524E48] sm:text-sm dark:text-[#CCCCCC]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        {amenity}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-auto inline-flex items-center gap-2 pt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
                  >
                    Explore {service.category}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeader
            eyebrow="Something more specific?"
            title="Tell us the brief."
            subtitle="Weddings, multi-vehicle roadshows and standing corporate arrangements are all handled by the same desk."
            className="mb-10"
          />
          <div className="flex flex-col items-center gap-4">
            <CallDispatchButton label="Speak to Dispatch" />
            <BookingSoonNote />
          </div>
        </div>
      </section>
    </>
  );
}
