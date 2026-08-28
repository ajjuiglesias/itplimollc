import type { LucideIcon } from 'lucide-react';
import { Plane, Building2, Clock, ShieldCheck, Heart, Users } from 'lucide-react';

export interface Service {
  slug: string;
  number: string;
  icon: LucideIcon;
  category: string;
  title: string;
  tagline: string;
  description: string;
  /**
   * Overrides the templated `${category} | Private Chauffeur | ITP Limo` title
   * where keyword research points somewhere more specific. Keep under 60 chars.
   */
  metaTitle?: string;
  metaDescription?: string;
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
    image: '/images/signature_sprinter.jpg',
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
    image: '/images/cockpit_tarmac.jpg',
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
    image: '/images/gulfstream_sprinter.jpg',
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
          body: 'Raleigh to Charlotte, Boston to New York, or any regional corridor between our markets.',
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
    image: '/images/signature_sprinter.jpg',
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
  /*
   * Weddings, added on the client's instruction (2026-08-23): they are
   * exhibiting at the Raleigh Bridal Expo on 18 October and want to become a
   * recognised full-service wedding transportation provider.
   *
   * Targeted at the generic service terms rather than city-qualified ones,
   * because that is where the demand actually sits: "wedding transportation
   * services" is 1,300/mo at difficulty 1, while "wedding transportation
   * raleigh" is 40 and "wedding limo raleigh" does not register at all.
   */
  {
    slug: 'wedding-transportation',
    number: '05',
    icon: Heart,
    category: 'Wedding Transportation',
    title: 'One timeline, every car on it.',
    tagline: 'Couple, party and guest shuttles',
    description:
      'Wedding transportation for the couple, the wedding party and the guests — planned as one timeline rather than three separate bookings.',
    // "wedding transportation services" is 1,300/mo at difficulty 1 - by far the
    // largest easy term found for this business, and worth the exact match.
    metaTitle: 'Wedding Transportation Services | Guest Shuttles | ITP Limo',
    metaDescription:
      'Wedding transportation services for the couple, wedding party and guests. Guest shuttles, a car held all day, and one timeline across Raleigh and coastal NC.',
    image: '/images/lincoln-aviator.jpg',
    amenities: [
      'Guest shuttles between hotel, ceremony and reception',
      'Dedicated car for the couple, held all day',
      'Wedding party transport in the 14-seat Sprinter',
      'One coordinator holding the run sheet, not the couple',
    ],
    detail: {
      intro:
        'Wedding transport fails in the gaps: the photographer runs long, the shuttle leaves without the grandparents, and somebody ends up on the phone in their wedding clothes. We plan the whole day as one schedule and hold it, so nobody in the wedding party is also running logistics.',
      howItWorks: [
        {
          step: 'Walk the day with us',
          body: 'Venues, timings, how many guests need moving and from where. We build a run sheet from it rather than a list of pickups.',
        },
        {
          step: 'We size the fleet to the day',
          body: 'The Sprinter carries fourteen, the Suburban seven. Larger guest counts run as multiple vehicles on a loop between the hotel and the venue.',
        },
        {
          step: 'One number on the day',
          body: 'Your coordinator or planner has a direct line to dispatch. Nobody in the wedding party has to chase a driver.',
        },
      ],
    },
  },
  /*
   * Group, prom and party transport. Positioned with care at the client's
   * explicit instruction: they do NOT operate party buses and will not market
   * as though they do, but they do want the group and prom leads, which their
   * Sprinter and SUVs genuinely serve.
   *
   * So the page targets prom, group and Sprinter terms, and answers the party
   * bus query honestly by naming what the fleet actually is. Nothing here may
   * imply ITP owns a party bus.
   */
  {
    slug: 'group-transportation',
    number: '06',
    icon: Users,
    category: 'Group & Prom Transportation',
    title: 'Everyone arrives together.',
    tagline: 'Sprinter and SUV group transport',
    description:
      'Prom, group events and party transportation in the 14-seat Mercedes Sprinter and Suburbans — one arrival time instead of a convoy of cars.',
    // Carries both clusters: "group transportation service" (390/mo, $11.97 CPC)
    // and the prom terms (480 + 210 + 170), all at difficulty 0-8.
    metaTitle: 'Group & Prom Transportation | 14-Seat Sprinter | ITP Limo',
    metaDescription:
      'Prom, group and party transportation in a 14-seat Mercedes Sprinter and Suburbans. Professional chauffeurs, one arrival time, across Raleigh and North Carolina.',
    image: '/images/signature_sprinter.jpg',
    amenities: [
      '14 passengers and 20 bags in a single Sprinter',
      'Multiple vehicles coordinated for larger groups',
      'Licensed, professional chauffeurs — every trip',
      'Fixed pickup and return times agreed in advance',
    ],
    detail: {
      intro:
        'The point of group transport is that the group stays together. Fourteen people in one Sprinter arrive at one time, in one mood, with one person responsible for getting them there — which is a different evening from four cars, four parking searches and four sets of directions.',
      howItWorks: [
        {
          step: 'Tell us the headcount and the stops',
          body: 'Group size, pickup points and what time you need to be there. Parents booking prom transport get the return time confirmed in writing.',
        },
        {
          step: 'We match vehicles to the number',
          body: 'Up to fourteen travels in the Sprinter. Beyond that we run additional vehicles on the same schedule so the group still moves as one.',
        },
        {
          step: 'A professional chauffeur drives',
          body: 'Every trip is driven by a licensed chauffeur, which is the part that matters most to the parents booking it.',
        },
      ],
    },
  },
];

/*
 * Stated plainly because visitors searching "party bus" land on the group page
 * and deserve a straight answer. The client was explicit: capture the intent,
 * never imply the vehicle. Surfaced on /services/group-transportation.
 */
export const PARTY_BUS_NOTE =
  'We do not operate party buses. For groups who would otherwise book one, the Mercedes Sprinter seats fourteen with a professional chauffeur, and larger parties run as several vehicles on one schedule.';

export const getService = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
