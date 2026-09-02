import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PillarColumns } from '@/components/ui/PillarColumns';
import { MoovsBooking } from '@/components/MoovsBooking';
import { BookingSummary } from '@/components/BookingSummary';
import { DISPATCH_PHONE, DISPATCH_PHONE_HREF } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = pageMetadata({
  title: 'Book a Ride | Reserve Your Chauffeur Online | ITP Limo',
  description:
    'Reserve your ITP Limo chauffeur online — airport transfers, hourly hire, weddings and corporate travel across North Carolina and Boston.',
  path: '/book',
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Reservations"
        title="Book your ride."
        subtitle="Enter your pickup, destination and time below. For anything complex — multi-vehicle, roadshows or same-day changes — our dispatch desk is faster."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Book' }]}
        ctaLabel="Call 24/7 Dispatch"
        cta="call"
      image="/images/sprinter-front.jpg"
      />

      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <BookingSummary />
          <MoovsBooking />

          <p className="mt-6 text-center text-xs font-light text-[#66625C] dark:text-[#B8B8B8]">
            Reservations are handled by our booking system. Having trouble? Call{' '}
            <a
              href={DISPATCH_PHONE_HREF}
              className="font-semibold text-[#171717] underline underline-offset-4 dark:text-[#F8F6F2]"
            >
              {DISPATCH_PHONE}
            </a>{' '}
            — the desk is staffed 24 hours a day.
          </p>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="What to expect"
            title="After you book."
            align="left"
            className="mb-14"
          />

          <PillarColumns
            columns={3}
            pillars={[
              {
                eyebrow: 'Confirmation',
                title: 'Written confirmation',
                body: 'You receive your reservation details in writing. Nothing is confirmed until you have it.',
              },
              {
                eyebrow: 'Flights',
                title: 'Arrival tracking',
                body: 'Add your flight number at booking and your pickup moves with the aircraft rather than the original schedule.',
              },
              {
                eyebrow: 'Changes',
                title: 'Amend by phone',
                body: 'Timings, stops and vehicle changes are fastest through the dispatch desk, day or night.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
