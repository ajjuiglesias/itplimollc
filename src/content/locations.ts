/*
 * Location content transcribed from the client's existing site.
 *
 * Raleigh leads, per the client. Boston is complete and verbatim-sourced;
 * Raleigh is NOT yet transcribed —
 * only the facts repeated across the old site's nav and footer are recorded
 * below. Do not invent Raleigh coverage areas, venues or service lists; they
 * must come from the client's Limo Raleigh page.
 *
 * Two kinds of market live in this file, deliberately as two different types:
 *
 *   locations[]        markets with enough sourced content to justify a page
 *   announcedMarkets[] markets the client has told us they serve, but for which
 *                      we have no content yet
 *
 * They are separate types rather than one type with a published flag so that an
 * announced market CANNOT carry invented venues, airports or coverage lists —
 * there are no fields to put them in. A market is promoted by hand once the
 * client supplies the detail, which is the point at which it earns a page.
 *
 * Why not ship the pages now with the shared fleet/services blocks: near-
 * duplicate pages differing only by place name are doorway pages under Google's
 * spam policies, and that risk attaches to the whole cluster, not just the new
 * pages. An announced market is named honestly on /locations and nowhere else.
 */

export interface LocationService {
  title: string;
  desc: string;
  image: string;
}

export interface LocationVehicle {
  name: string;
  passengers: number;
  luggage: number;
  image: string;
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  airport: string;
  airportCode: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  /** Opening pitch. */
  hero: { title: string; intro: string };
  /** "Serving X with Style and Precision" block. */
  serving: { title: string; intro: string; keyLocations: string[]; closing: string };
  services: LocationService[];
  vehicles: LocationVehicle[];
  whyChoose: string[];
  areasServed: { intro: string; areas: string[]; closing: string };
  /** False until the client's page for this market has been transcribed. */
  transcribed: boolean;
}

/**
 * A market the client has stated they serve but for which we hold no sourced
 * content. Named on /locations; deliberately has no page, no sitemap entry and
 * no nav link. The `needs` list is what must come back from the client before
 * this can be promoted into `locations` above.
 */
export interface AnnouncedMarket {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  /** Why the client says they want this market — their words, for copy later. */
  focus: string;
  /** Outstanding questions, surfaced in the client brief. */
  needs: string[];
}

/*
 * Source: client message, 2026-08-17 — "we'd like to add Pinehurst and
 * Wilmington as additional service locations […] It would still all be ITP Limo
 * and the same company/fleet". That message is the only thing establishing
 * these markets, so it is the only thing recorded here.
 */
export const announcedMarkets: AnnouncedMarket[] = [
  {
    slug: 'pinehurst',
    city: 'Pinehurst',
    state: 'North Carolina',
    stateAbbr: 'NC',
    focus: 'Golf and resort transportation',
    needs: [
      'Which airport(s) they actually serve this market from — RDU, Moore County (SOP) or Fayetteville (FAY)',
      'Key destinations: resorts, clubs and venues they genuinely serve',
      'Surrounding coverage towns',
      'Whether tournament and event transfers are an offered service',
    ],
  },
  {
    slug: 'wilmington',
    city: 'Wilmington',
    state: 'North Carolina',
    stateAbbr: 'NC',
    focus: 'Coastal transportation',
    needs: [
      'Confirm Wilmington International (ILM) is served, and any others',
      'Key destinations: downtown, riverfront, beaches, venues',
      'Surrounding coverage towns',
      'Whether weddings or film-industry work are a named service here',
    ],
  },
];

export const locations: Location[] = [
  {
    slug: 'raleigh',
    city: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    airport: 'Raleigh-Durham International Airport',
    airportCode: 'RDU',
    metaTitle: 'Raleigh Limo Service | Premium Chauffeur & Black Car | ITP Limo LLC',
    metaDescription:
      'Professional, on-time limo and black car service across Raleigh and the Triangle, including RDU Airport transfers, corporate travel and special events.',
    image: '/images/signature_sprinter.jpg',
    hero: {
      title: 'Premium Chauffeur & Black Car Services in Raleigh',
      intro:
        'ITP Limo offers professional, on-time, and stylish transportation across Raleigh and surrounding areas, from RDU Airport transfers to corporate travel and special events.',
    },
    serving: {
      title: 'Serving Raleigh with Style and Precision',
      intro: 'We serve Raleigh’s key locations including:',
      keyLocations: ['Raleigh-Durham International Airport (RDU)'],
      closing:
        'From business travelers to wedding guests, our clients trust us for reliable and elegant transportation.',
    },
    services: [
      {
        title: 'Airport Transfer',
        desc: 'Timely pickups and drop-offs at RDU Airport with flight tracking, meet & greet service, and luggage assistance.',
        image: '/images/signature_sprinter.jpg',
      },
      {
        title: 'Wedding Transportation',
        desc: 'Arrive in style on your special day with our luxury wedding transportation packages.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Meet & Greet',
        desc: 'Perfect for guests or clients arriving at the airport — we welcome them with courtesy and care.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Corporate Transfer',
        desc: 'Professional black car service for meetings, conferences, roadshows, and executive travel.',
        image: '/images/cockpit_tarmac.jpg',
      },
      {
        title: 'Chauffeur Services',
        desc: 'Hire a personal chauffeur by the hour for flexible, private travel around the city.',
        image: '/images/cockpit_tarmac.jpg',
      },
      {
        title: 'Special Events',
        desc: 'Book us for proms, parties, concerts, sports events, and more — make every occasion memorable.',
        image: '/images/signature_sprinter.jpg',
      },
    ],
    vehicles: [
      {
        name: '2026 Chevrolet Suburban',
        passengers: 7,
        luggage: 6,
        image: '/images/chevrolet-suburban.jpg',
      },
      {
        name: '2026 Lincoln Aviator',
        passengers: 3,
        luggage: 3,
        image: '/images/lincoln-aviator.jpg',
      },
      {
        name: '2026 Mercedes Sprinter',
        passengers: 14,
        luggage: 20,
        image: '/images/signature_sprinter.jpg',
      },
    ],
    whyChoose: [
      'Always On Time — Guaranteed punctual pickups',
      'Professional, Licensed Chauffeurs',
      'Spotless, Modern Vehicles',
      '24/7 Booking & Customer Support',
      'Local Knowledge of Raleigh Streets & Venues',
    ],
    areasServed: {
      intro:
        'ITP Limo serves locations throughout the Greater Raleigh area and the Triangle.',
      areas: [],
      closing:
        "Whether you're heading to RDU Airport, a business meeting, or a special event, our chauffeurs provide smooth, on-time transportation.",
    },
    transcribed: false,
  },
  {
    slug: 'boston',
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    airport: 'Logan International Airport',
    airportCode: 'BOS',
    metaTitle: 'Boston Limo Service | Premium Chauffeur & Black Car | ITP Limo LLC',
    metaDescription:
      'Professional, on-time limo and black car service across Boston. Logan Airport transfers with flight tracking, corporate travel, weddings and special events.',
    image: '/images/gulfstream_sprinter.jpg',
    hero: {
      title: 'Premium Chauffeur & Black Car Services in Boston',
      intro:
        'Looking for a luxury limo service in Boston? ITP Limo offers professional, on-time, and stylish transportation across Boston and surrounding areas. Whether you need a ride to Logan Airport, a corporate event in downtown, or a limousine for your wedding day, our experienced chauffeurs and pristine fleet ensure every journey is smooth and comfortable.',
    },
    serving: {
      title: 'Serving Boston with Style and Precision',
      intro:
        "With years of local experience, ITP Limo provides premium transportation tailored to your schedule and destination. We serve Boston's key locations including:",
      keyLocations: [
        'Logan International Airport (BOS)',
        'Downtown Boston & Back Bay',
        'Seaport District',
        'Cambridge & MIT/Harvard areas',
        'Boston Convention & Exhibition Center',
        'Hotels, event venues, and cruise terminals',
      ],
      closing:
        'From business travelers to wedding guests, our clients trust us for reliable and elegant transportation.',
    },
    services: [
      {
        title: 'Airport Transfer',
        desc: 'Timely pickups and drop-offs at Logan Airport with flight tracking, meet & greet service, and luggage assistance.',
        image: '/images/signature_sprinter.jpg',
      },
      {
        title: 'Wedding Transportation',
        desc: 'Arrive in style on your special day with our luxury wedding transportation packages in Boston.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Meet & Greet',
        desc: 'Perfect for guests or clients arriving at the airport — we welcome them with courtesy and care.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Corporate Transfer',
        desc: 'Professional black car service for meetings, conferences, roadshows, and executive travel.',
        image: '/images/cockpit_tarmac.jpg',
      },
      {
        title: 'Chauffeur Services',
        desc: 'Hire a personal chauffeur by the hour for flexible, private travel around the city.',
        image: '/images/cockpit_tarmac.jpg',
      },
      {
        title: 'Special Events',
        desc: 'Book us for proms, parties, concerts, sports events, and more — make every occasion memorable.',
        image: '/images/signature_sprinter.jpg',
      },
    ],
    vehicles: [
      {
        name: '2026 Chevrolet Suburban',
        passengers: 7,
        luggage: 6,
        image: '/images/chevrolet-suburban.jpg',
      },
      {
        name: '2026 Lincoln Aviator',
        passengers: 3,
        luggage: 3,
        image: '/images/lincoln-aviator.jpg',
      },
      {
        name: '2026 Mercedes Sprinter',
        passengers: 14,
        luggage: 20,
        image: '/images/signature_sprinter.jpg',
      },
    ],
    whyChoose: [
      'Always On Time — Guaranteed punctual pickups',
      'Professional, Licensed Chauffeurs',
      'Spotless, Modern Vehicles',
      '24/7 Booking & Customer Support',
      'Local Knowledge of Boston Streets & Venues',
    ],
    areasServed: {
      intro:
        'ITP Limo proudly serves a wide range of locations throughout the Greater Boston area. In addition to downtown Boston, we offer reliable limo and black car services in:',
      areas: [
        'Cambridge',
        'Brookline',
        'Newton',
        'Quincy',
        'Somerville',
        'Chelsea',
        'Revere',
        'Everett',
        'Medford',
        'Malden',
        'Watertown',
        'Waltham',
        'Arlington',
        'Belmont',
        'Milton',
        'Dedham',
      ],
      closing:
        "Whether you're heading to Logan Airport, a business meeting, or a special event, our chauffeurs provide smooth, on-time transportation across all major neighborhoods and surrounding suburbs.",
    },
    transcribed: true,
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((location) => location.slug === slug);
