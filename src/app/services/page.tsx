import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/content/services';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBanner } from '@/components/ui/EditorialBanner';
import { PillarColumns } from '@/components/ui/PillarColumns';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

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
        image="/images/signature_sprinter.jpg"
        ctaLabel="Discuss Your Journey"
      />

      {/* Each service gets a full editorial row with alternating image side */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="space-y-24 sm:space-y-32">
            {services.map((service, idx) => (
              <article
                key={service.slug}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="relative h-[300px] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl sm:h-[400px] dark:border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover brightness-[0.78] transition-transform duration-[1400ms] group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1 lg:col-start-2' : 'lg:col-start-8'}`}>
                  <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-3 dark:border-white/15">
                    <span className="font-mono text-xs font-bold text-[#888888]">
                      {service.number}
                    </span>
                    <service.icon className="h-4 w-4 text-[#171717] dark:text-[#F8F6F2]" />
                  </div>

                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {service.category}
                  </span>

                  <h2 className="mt-1 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#171717] sm:text-5xl dark:text-[#F8F6F2]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                    {service.description}
                  </p>

                  <ul className="mt-8">
                    {service.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="border-b border-black/10 py-3 text-sm text-[#524E48] dark:border-white/10 dark:text-[#CCCCCC]"
                      >
                        {amenity}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
                  >
                    Explore {service.category}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <EditorialBanner
            image="/images/cockpit_tarmac.jpg"
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

      <section className="bg-white py-24 dark:bg-[#141414]">
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
