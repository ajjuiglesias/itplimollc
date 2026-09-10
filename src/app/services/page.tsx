import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/content/services';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBanner } from '@/components/ui/EditorialBanner';
import { PillarColumns } from '@/components/ui/PillarColumns';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = pageMetadata({
  title: 'Chauffeur Services | Airport, Hourly & Corporate | ITP Limo',
  description:
    'Airport transfers with live flight tracking, hourly and full-day chauffeur hire, city-to-city travel and corporate accounts across NC and Boston.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke Mobility"
        title="Every journey, covered."
        subtitle="Airport transfers, hourly hire, city-to-city executive travel and managed corporate accounts — each with the same chauffeur standard."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        image="/images/fleet-lineup.jpg"
        ctaLabel="Discuss Your Journey"
      />

      {/* Each service gets a full editorial row with alternating image side */}
      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="space-y-16 sm:space-y-20">
            {services.map((service, idx) => (
              <article
                key={service.slug}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 p-5 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-[#181818] border border-black/5 dark:border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="relative h-[320px] overflow-hidden rounded-2xl border border-black/10 shadow-xl sm:h-[420px] dark:border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover brightness-[0.82] transition-transform duration-[1400ms] group-hover:scale-105 filter contrast-[1.05]"
                      />
                    </div>
                  </Link>
                </div>

                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge">
                      {service.number}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.08] text-emerald-600 dark:text-emerald-400">
                      <service.icon className="h-4 w-4" />
                    </div>
                  </div>

                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {service.category}
                  </span>

                  <h2 className="mt-1 font-serif text-3xl font-medium leading-[1.1] tracking-tight text-[#171717] sm:text-4xl lg:text-5xl dark:text-[#F8F6F2]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#524E48] dark:text-[#CCCCCC]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/20 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2] hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                  >
                    <span>Explore {service.category}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-16 sm:py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <EditorialBanner
            image="/images/chauffeur-door.jpg"
            alt="Executive cabin interior"
            eyebrow="Across Every Service"
            title="The same standard, whichever you book."
            body="Licensed professional chauffeurs, spotless modern vehicles and a dispatch desk that answers around the clock."
            size="tall"
            className="mb-20"
          />

          <PillarColumns
            columns={3}
            pillars={[
              {
                eyebrow: 'Punctuality',
                title: 'Always on time',
                body: 'Pickups are staged ahead of your requested time, and airport arrivals are tracked so a delay never becomes your problem.',
              },
              {
                eyebrow: 'Chauffeurs',
                title: 'Licensed professionals',
                body: 'Every chauffeur is licensed, vetted and briefed on your itinerary before the vehicle leaves the yard.',
              },
              {
                eyebrow: 'Availability',
                title: 'Answered 24/7',
                body: 'The dispatch desk is staffed around the clock, including holidays, for changes made at short notice.',
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-[#141414]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeader
            eyebrow="Something more specific?"
            title="Tell us the brief."
            subtitle="Weddings, multi-vehicle roadshows and standing corporate arrangements are all handled by the same desk."
            className="mb-10"
          />
          <div className="flex flex-col items-center gap-4">
            <BookNowButton label="Book Your Ride" />
            <OrCallNote />
          </div>
        </div>
      </section>
    </>
  );
}
