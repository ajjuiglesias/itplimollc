import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialList } from '@/components/ui/EditorialList';
import { FlightTrackerWidget } from '@/components/FlightTrackerWidget';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = {
  title: 'Live Flight Tracking | Delay-Proof Airport Pickups | ITP Limo',
  description:
    'Every ITP airport pickup is synchronised to live FAA flight radar. We track your flight or tail number and move your chauffeur to match the actual landing time — with no delay fees.',
  alternates: { canonical: '/flight-tracking' },
};

const guarantees = [
  {
    number: '01',
    title: 'We watch the aircraft, not the clock',
    body: 'Dispatch monitors your flight number or tail number against live radar from the moment it departs, and recalculates your chauffeur’s staging time as the arrival moves.',
  },
  {
    number: '02',
    title: 'Delays cost you nothing',
    body: 'If your flight is late, your pickup simply moves with it. There are no delay surcharges and no re-booking, however long the hold.',
  },
  {
    number: '03',
    title: '60 minutes of complimentary wait',
    body: 'Commercial arrivals include a full hour of wait time from wheels-down. FBO tarmac arrivals include wait time until you disembark.',
  },
  {
    number: '04',
    title: 'Early arrivals are covered too',
    body: 'Landing ahead of schedule is handled the same way — your chauffeur is pulled forward rather than leaving you waiting at the curb.',
  },
];

export default function FlightTrackingPage() {
  return (
    <>
      <PageHero
        eyebrow="Flight Radar Synchronization"
        title="Your flight moves. So do we."
        subtitle="Real-time FAA radar tracking on every airport pickup, so a delayed or early landing never becomes your problem."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Flight Tracking' }]}
        image="/images/cockpit_tarmac.jpg"
        ctaLabel="Arrange an Airport Pickup"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Live Dispatch View"
            title="What our desk sees."
            subtitle="A sample of the tracking view our dispatch team works from on every airport assignment."
            className="mb-16"
          />

          <FlightTrackerWidget />
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The Guarantee"
            title="No delay fees. Ever."
            align="left"
            className="mb-14"
          />

          <EditorialList
            items={guarantees.map((item) => ({ title: item.title, body: item.body }))}
          />

          <div className="mt-16 flex flex-col items-center gap-4">
            <BookNowButton label="Arrange an Airport Pickup" />
            <OrCallNote />
          </div>
        </div>
      </section>
    </>
  );
}
