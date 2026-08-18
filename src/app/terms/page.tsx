import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Chauffeur Service | ITP Limo',
  description:
    'Booking, cancellation, wait time and conduct terms for ITP Limo private chauffeur and executive transportation services.',
  alternates: { canonical: '/terms' },
};

/*
 * DRAFT — requires review by the client's own legal counsel before launch.
 * The cancellation windows and wait-time allowances below are taken from the
 * homepage FAQ copy; confirm they match ITP's actual operating policy.
 */
const sections: LegalSection[] = [
  {
    heading: 'Reservations',
    body: [
      'All journeys are arranged through the ITP dispatch desk. A reservation is confirmed once we have acknowledged it directly; a request alone does not constitute a confirmed booking.',
      'Online reservations are not currently available. Until they are, bookings are taken by telephone or email.',
    ],
  },
  {
    heading: 'Cancellations and changes',
    body: [
      'Sedan and SUV journeys may be modified or cancelled without charge up to 24 hours before the scheduled pickup time.',
      'Mercedes Sprinter jet vans and multi-vehicle roadshows may be modified or cancelled without charge up to 48 hours before the scheduled pickup time.',
      'Cancellations inside these windows may be charged in full.',
    ],
  },
  {
    heading: 'Wait time',
    body: [
      'Commercial airline arrivals include 60 minutes of complimentary wait time from the moment the aircraft touches down.',
      'Private aviation FBO arrivals include complimentary wait time until you disembark.',
      'For all other pickups, complimentary wait time is 15 minutes, after which waiting time may be charged.',
    ],
  },
  {
    heading: 'Flight delays',
    body: [
      'Where you have provided a flight or tail number, we monitor live flight status and adjust your chauffeur’s dispatch time to match your actual landing. No delay surcharge applies in these circumstances.',
    ],
  },
  {
    heading: 'Vehicle condition and conduct',
    body: [
      'All vehicles are strictly non-smoking. Charges may apply for smoking, or for damage or soiling of the vehicle interior.',
      'The number of passengers must not exceed the stated seating capacity of the vehicle. Chauffeurs may decline to travel where capacity or safety requirements are not met.',
    ],
  },
  {
    heading: 'Child safety seats',
    body: [
      'Child safety seats are available on request and must be arranged at the time of booking so the correct seat type can be fitted.',
    ],
  },
  {
    heading: 'Liability',
    body: [
      'ITP Limo maintains commercial insurance for its vehicles and operations. We are not liable for delays arising from circumstances outside our reasonable control, including traffic, weather and road closures.',
      'Personal items left in a vehicle will be returned wherever possible, but we cannot accept responsibility for lost property.',
    ],
  },
  {
    heading: 'Contacting us',
    body: [
      'Questions about these terms can be directed to ITP Limo at itplimo.raleigh@gmail.com or +1 (919) 435-2157.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Chauffeur Service"
      title="The arrangement, plainly."
      subtitle="Booking, cancellation, wait time and conduct terms that apply to every ITP journey."
      crumbLabel="Terms"
      lastUpdated="3 August 2026"
      sections={sections}
    />
  );
}
