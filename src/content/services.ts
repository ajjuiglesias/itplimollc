import type { LucideIcon } from 'lucide-react';
import { Plane, Building2, Clock, ShieldCheck } from 'lucide-react';

export interface Service {
  slug: string;
  number: string;
  icon: LucideIcon;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  amenities: string[];
  /** Longer copy shown only on the service detail page. */
  detail: {
    intro: string;
    howItWorks: { step: string; body: string }[];
  };
}

export const services: Service[] = [
  {
    slug: 'airport-transfers',
    number: '01',
    icon: Plane,
    category: 'Airport Transfers',
    title: 'Smooth landings, every time.',
    tagline: 'Live delay radar & 60-min airport wait time',
    description:
      'Delayed flight? Chauffeurs track arrivals automatically in real time and adjust pickup schedules so you are never stranded.',
    image: '/images/hero.png',
    amenities: [
      'Live Flight Delay Radar Synchronization',
      'Baggage Claim Meet & Greet with Name Sign',
      'Complimentary 60-Minute Airport Wait Time',
      'Direct FBO tarmac access on request',
    ],
    detail: {
      intro:
        'Airport work is where chauffeur services are actually tested. We monitor your flight number or tail number against live radar and move your chauffeur to match the aircraft, not the schedule you booked weeks ago.',
      howItWorks: [
        {
          step: 'Share your flight number',
          body: 'At booking you give us the flight or tail number. Nothing else is required from you.',
        },
        {
          step: 'We track the aircraft',
          body: 'Dispatch monitors live radar and recalculates your chauffeur’s departure as the arrival time moves.',
        },
        {
          step: 'Meet at baggage claim or the tarmac',
          body: 'Commercial arrivals are met inside with a name sign. FBO arrivals are met at the aircraft steps.',
        },
      ],
    },
  },
  {
    slug: 'hourly-chauffeur',
    number: '02',
    icon: Clock,
    category: 'Hourly & Full Day Hire',
    title: 'Seize the day.',
    tagline: 'Dedicated vehicle on standby',
    description:
      'Reserve a dedicated chauffeur from 2 to 24 hours. Your vehicle remains on standby outside every venue for as long as you need.',
    image: '/images/escalade.png',
    amenities: [
      'Unlimited Stops & Instant Itinerary Adjustments',
      'Chauffeur On Standby Outside Every Venue',
      'Confidential & Soundproof Work Environment',
      'Customized In-Cabin Fiji Water & Refreshments',
    ],
    detail: {
      intro:
        'As-directed hire keeps the same vehicle and the same chauffeur with you for the whole booking. There is no re-booking between stops and no waiting for a new car to arrive.',
      howItWorks: [
        {
          step: 'Choose your duration',
          body: 'From three hours to a full day. The vehicle is yours for the window you reserve.',
        },
        {
          step: 'Direct the day as it happens',
          body: 'Add, drop or reorder stops in the moment. Your chauffeur adjusts without renegotiating the booking.',
        },
        {
          step: 'The vehicle waits with you',
          body: 'Your chauffeur stays staged outside each venue, so there is never a gap between leaving and departing.',
        },
      ],
    },
  },
  {
    slug: 'city-to-city',
    number: '03',
    icon: Building2,
    category: 'City-to-City Executive',
    title: 'Between cities, done better.',
    tagline: 'Private door-to-door regional travel',
    description:
      'Turn long-distance journeys into calm, productive time. Direct private travel between Raleigh, Charlotte, Richmond, and Washington D.C.',
    image: '/images/maybach.png',
    amenities: [
      'Direct Door-to-Door Regional Highway Travel',
      'High-Speed Onboard 5G Wi-Fi & Device Charging',
      'Reclining Executive Seats with Heating & Massage',
      'Zero Airport TSA Hassles or Connecting Delays',
    ],
    detail: {
      intro:
        'On regional distances, driving privately is frequently faster door to door than flying once security, boarding and connections are counted — and the travel time stays usable.',
      howItWorks: [
        {
          step: 'Set your route',
          body: 'Boston to New York, Raleigh to Charlotte, or any regional corridor between our markets.',
        },
        {
          step: 'Work or rest in transit',
          body: 'Onboard 5G Wi-Fi, power at every seat and a soundproofed cabin for calls.',
        },
        {
          step: 'Arrive at the door',
          body: 'No terminals, no transfers, no connecting risk. You arrive where you are actually going.',
        },
      ],
    },
  },
  {
    slug: 'corporate-accounts',
    number: '04',
    icon: ShieldCheck,
    category: 'Enterprise Solutions',
    title: 'Corporate travel, simplified.',
    tagline: 'Dedicated concierge & roadshows',
    description:
      'One dedicated concierge platform for companies and executive assistants to book, track, and account for every journey.',
    image: '/images/sprinter.png',
    amenities: [
      'Centralized Monthly Billing & Expense Invoicing',
      'Multi-Stop Financial Roadshow Coordination',
      'Dedicated Executive Account Manager',
      '100% Non-Disclosure & Privacy Assurance',
    ],
    detail: {
      intro:
        'Corporate accounts consolidate every journey under one billing relationship, with a named account manager who already knows your executives’ preferences and your assistants’ standing instructions.',
      howItWorks: [
        {
          step: 'Open an account',
          body: 'We set up billing terms, authorised bookers and traveller profiles.',
        },
        {
          step: 'Book through one desk',
          body: 'Your assistants work with a dedicated account manager rather than a general queue.',
        },
        {
          step: 'Reconcile monthly',
          body: 'One consolidated invoice with per-trip cost coding instead of scattered receipts.',
        },
      ],
    },
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
