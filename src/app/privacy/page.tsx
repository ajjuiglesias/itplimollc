import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/ui/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Privacy Policy | ITP Limo',
    description:
      'How ITP Limo collects, uses and protects passenger information for chauffeur bookings, flight tracking and corporate accounts.',
    path: '/privacy',
  }),
  robots: { index: true, follow: true },
};

/*
 * DRAFT — requires review by the client's own legal counsel before launch.
 * The structure and headings are standard for a US ground-transportation
 * operator, but the commitments below must be checked against how ITP actually
 * handles data, and against any state privacy laws that apply to them.
 */
const sections: LegalSection[] = [
  {
    heading: 'Information we collect',
    body: [
      'To arrange a journey we collect the details you provide to our dispatch desk: your name, telephone number, email address, pickup and drop-off locations, travel dates and times, passenger count, and any flight or tail number you share with us.',
      'Where you request specific accommodations — child safety seats, accessibility requirements or in-cabin preferences — we record those details so they can be met on the day.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'Your information is used to arrange and deliver the transportation you have requested, to contact you about your journey, and to bill for the service.',
      'Where you provide a flight or tail number, we use it to monitor publicly available flight status information so your chauffeur can be dispatched to match your actual arrival time.',
    ],
  },
  {
    heading: 'Sharing with third parties',
    body: [
      'We share journey details with the assigned chauffeur only to the extent needed to complete your trip.',
      'We do not sell your personal information. Information may be disclosed where required by law, or where necessary to establish or defend legal claims.',
    ],
  },
  {
    heading: 'Confidentiality and discretion',
    body: [
      'Our chauffeurs operate under a non-disclosure protocol. Passenger identities, destinations and any conversation occurring in the vehicle are treated as confidential.',
    ],
  },
  {
    heading: 'Data retention',
    body: [
      'Booking and billing records are retained for as long as necessary to provide the service, to meet tax and accounting obligations, and to resolve any disputes.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you by contacting our dispatch desk. Some records must be retained where the law requires it.',
    ],
  },
  {
    heading: 'Contacting us',
    body: [
      'Questions about this policy can be directed to ITP Limo at Reservations@itplimo.com or +1 (919) 435-2157.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Protocol"
      title="Your details, handled carefully."
      subtitle="What we collect when you travel with us, why we need it, and what we do with it."
      crumbLabel="Privacy"
      lastUpdated="3 August 2026"
      sections={sections}
    />
  );
}
