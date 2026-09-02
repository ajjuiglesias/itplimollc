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
    image: '/images/chauffeur-sprinter.jpg',
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
    image: '/images/suburban-cockpit.jpg',
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
    image: '/images/suburban-front.jpg',
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
    image: '/images/chauffeur-team.jpg',
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
    image: '/images/chauffeur-door.jpg',
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
      'Prom, group and party transportation across Raleigh in a 14-seat Mercedes Sprinter and Suburbans — the chauffeured alternative to a party bus rental.',
    image: '/images/sprinter-seats.jpg',
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
  /*
   * The second wedding landing page the client asked for, and the only other
   * one the search data justifies: "wedding guest shuttle service" (260/mo) and
   * "wedding shuttle service near me" (210/mo), both at difficulty 0.
   *
   * Deliberately not a rewrite of the main wedding page. That one is the
   * couple's day end to end; this is the guest-movement problem specifically,
   * which is a different question asked by a different person - usually the
   * planner, or whoever is being blamed for the shuttle running late.
   */
  {
    slug: 'wedding-guest-shuttles',
    number: '07',
    icon: Users,
    category: 'Wedding Guest Shuttles',
    title: 'Nobody stranded at the hotel.',
    tagline: 'Hotel to ceremony to reception, on a loop',
    description:
      'Wedding guest shuttle service running between hotel, ceremony and reception, so guests move on a schedule instead of on somebody’s phone.',
    metaTitle: 'Wedding Guest Shuttle Service | Hotel to Venue | ITP Limo',
    metaDescription:
      'Wedding guest shuttle service between hotel, ceremony and reception. Continuous loops, a 14-seat Sprinter, and one schedule the couple never has to think about.',
    image: '/images/sprinter-interior.jpg',
    amenities: [
      'Continuous loops rather than a single pickup',
      'Fourteen guests per run in the Sprinter',
      'Late loop after the reception, agreed in advance',
      'One dispatch number for the planner, not the couple',
    ],
    detail: {
      intro:
        'Guest transport quietly decides how a wedding feels. Move it well and nobody notices; move it badly and forty people are stood outside a hotel while somebody calls a driver who is already at the venue. The fix is a loop and a headcount, not a single pickup time and hope.',
      howItWorks: [
        {
          step: 'Give us the headcount and the hotels',
          body: 'How many guests, staying where, and how far to the ceremony. Two hotels and ninety guests is a different plan from one hotel and thirty.',
        },
        {
          step: 'We run it as a loop, not a trip',
          body: 'The Sprinter takes fourteen at a time and runs continuously across the pickup window, so guests leave when they are ready rather than all at once.',
        },
        {
          step: 'The last loop is agreed before the day',
          body: 'The end of the night is where guest transport usually fails. We set the final departure in advance and hold it, so nobody is negotiating a lift at midnight.',
        },
      ],
    },
  },
];

/*
 * "Party bus raleigh" is 720/mo at difficulty 0 — more than any executive term
 * in the market. The client's position on it was precise: capture the search if
 * it can be done honestly, but never let the site claim they own party buses.
 *
 * So the term appears in a real heading and in the meta description, and the
 * answer underneath it is that they do not have one. That is what makes it
 * legitimate rather than bait: the page ranks for the question and then answers
 * it truthfully, which is also what stops the visitor bouncing straight back.
 */
export const PARTY_BUS_SECTION = {
  heading: 'Looking for a party bus in Raleigh?',
  body: [
    'Straight answer: we do not operate party buses, and we are not going to tell you otherwise to win the booking.',
    'What we run is a 14-passenger Mercedes-Benz Sprinter and a fleet of Suburbans, each with a licensed professional chauffeur. For most of what people actually want a party bus for — a prom group, a birthday, a bachelorette weekend, a brewery run — that is the same fourteen people arriving together, on time, with somebody sober and insured at the wheel.',
    'What it is not is a lounge on wheels. There is no bar, no dance floor and no sound system to speak of. If that is the point of the evening, book a party bus company. If getting everyone there and back safely is the point, we are the better call.',
  ],
} as const;

export const getService = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
