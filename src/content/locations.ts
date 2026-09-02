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
  /** The airport most arrivals into this market use. */
  airport: string;
  airportCode: string;
  /**
   * Other airports genuinely served for this market. Pinehurst draws from
   * three and Wilmington from two, so a single field cannot describe them —
   * but every market still has one primary, which is what `airport` above is.
   */
  additionalAirports?: { name: string; code: string }[];
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
 * Empty, and that is the goal state: both markets it once held were promoted
 * into `locations` below once the client supplied real detail on 2026-08-17.
 * Kept in place because it is the correct landing spot for the next market the
 * client announces before we have content for it.
 */
export const announcedMarkets: AnnouncedMarket[] = [];

/**
 * Territory covered on request rather than marketed as a home market.
 *
 * This is a third tier, distinct from both of the above, and it exists because
 * the client's own framing was "and beyond if the work is there" — opportunistic
 * long-distance work, not somewhere they are trying to rank. Two consequences
 * follow, and both are deliberate:
 *
 *   - No pages. A page for a market nobody is actively working is the exact
 *     thin-content problem the location cluster was built to avoid, and
 *     "Virginia" is a state rather than a market a page could even describe.
 *   - Still listed in areaServed, because they genuinely do serve it. Coverage
 *     and a landing page are different claims.
 *
 * These read as an extension of the long-distance service the Triangle page
 * already sells, which is what they actually are.
 */
export interface ExtendedRegion {
  name: string;
  /** Drives the schema.org type; a city and a state are not interchangeable. */
  type: 'City' | 'State';
  stateAbbr?: string;
}

/* Source: client message, 2026-08-18. */
export const extendedCoverage: ExtendedRegion[] = [
  { name: 'Charlotte', type: 'City', stateAbbr: 'NC' },
  { name: 'Greensboro', type: 'City', stateAbbr: 'NC' },
  { name: 'Virginia', type: 'State' },
  { name: 'South Carolina', type: 'State' },
];

export const locations: Location[] = [
  {
    slug: 'raleigh',
    city: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    airport: 'Raleigh-Durham International Airport',
    airportCode: 'RDU',
    metaTitle: 'Raleigh Limo Service | RDU Airport Transfers | ITP Limo',
    metaDescription:
      'Chauffeur and black car service across Raleigh, Durham, Chapel Hill and Cary. RDU airport transfers with flight tracking, corporate travel, weddings and events.',
    image: '/images/fleet-lineup.jpg',
    hero: {
      title: 'Raleigh car service, on your schedule.',
      intro:
        'Chauffeur service across Raleigh and the Triangle — an early run to RDU, a full day through Durham, Chapel Hill and Research Triangle Park, or a car that simply waits until you are ready. Licensed chauffeurs, 2026 vehicles, and a schedule that holds. This is the market we dispatch from.',
    },
    serving: {
      title: 'Every corner of the Triangle.',
      intro:
        'Our Raleigh car service runs out of Wake Forest, which makes the Triangle home ground rather than a coverage area. We know which hotel entrances clear quickly, which RTP campuses need to be called ahead, and how long RDU really takes at seven in the morning. We serve:',
      keyLocations: [
        'Raleigh-Durham International Airport (RDU)',
        'Downtown Raleigh & the Raleigh Convention Center',
        'North Hills',
        'Research Triangle Park',
        'Duke University & Durham',
        'UNC-Chapel Hill',
        'NC State University',
        'Corporate campuses & hotel groups',
        'Concert, sports and entertainment venues',
        'Private aviation & FBO terminals',
      ],
      closing:
        'Corporate accounts, university families, wedding parties, and travellers who just want the early flight handled — the same chauffeur standard applies to every one of them.',
    },
    services: [
      {
        title: 'RDU Airport Transfers',
        desc: 'Your flight is tracked from the moment it leaves. An early landing or a three-hour delay changes nothing about who is waiting when you reach the curb.',
        image: '/images/mercedes-sprinter.jpg',
      },
      {
        title: 'Private Aviation & FBO Transfers',
        desc: 'Private arrivals are met at the FBO rather than the terminal, with the vehicle staged before the aircraft has finished taxiing.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Corporate & Executive Travel',
        desc: 'Standing accounts for Research Triangle Park campuses and downtown firms. One point of contact, consolidated billing, and chauffeurs who have driven the route before.',
        image: '/images/suburban-cockpit.jpg',
      },
      {
        title: 'Weddings',
        desc: 'One timeline, several vehicles, and someone whose only job that day is making sure nobody is left waiting.',
        image: '/images/lincoln-aviator.jpg',
      },
      {
        title: 'Concerts & Events',
        desc: 'Dropped at the door, collected where you left us. Convention centre, arena or stadium, without the car park at either end of the night.',
        image: '/images/chevrolet-suburban.jpg',
      },
      {
        title: 'University Transportation',
        desc: 'Move-in weekends, graduation, parents’ weekend and campus interviews across Duke, UNC-Chapel Hill and NC State.',
        image: '/images/mercedes-sprinter.jpg',
      },
      {
        title: 'Hourly Chauffeur Service',
        desc: 'Two hours or twelve. The vehicle stays with you between stops, and the itinerary can change while you are standing in it.',
        image: '/images/lincoln-aviator.jpg',
      },
      {
        title: 'Group & Sprinter Transportation',
        desc: 'Up to fourteen passengers in one vehicle, which means one arrival time instead of four and one conversation instead of a convoy.',
        image: '/images/mercedes-sprinter.jpg',
      },
      {
        title: 'Long-Distance Transportation',
        desc: 'Charlotte, Richmond, Washington D.C. or the coast — direct and door to door, with none of the airport in between.',
        image: '/images/gulfstream_sprinter.jpg',
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
        image: '/images/mercedes-sprinter.jpg',
      },
    ],
    whyChoose: [
      'Dispatched from Wake Forest — the Triangle is our home market, not an outpost',
      'Every vehicle in the fleet is a 2026 model',
      'Licensed, professional chauffeurs',
      'Flight tracking on every airport and FBO pickup',
      '24/7 booking and dispatch',
    ],
    areasServed: {
      intro:
        'Coverage across the Triangle and the towns that ring it.',
      areas: [
        'Raleigh',
        'Durham',
        'Chapel Hill',
        'Cary',
        'Wake Forest',
        'Morrisville',
        'Apex',
        'Holly Springs',
        'North Hills',
        'Research Triangle Park',
      ],
      closing:
        'If your pickup sits just outside this list, it is still worth asking — the edges of the Triangle are routine ground for us.',
    },
    transcribed: true,
  },
  {
    slug: 'pinehurst',
    city: 'Pinehurst',
    state: 'North Carolina',
    stateAbbr: 'NC',
    airport: 'Raleigh-Durham International Airport',
    airportCode: 'RDU',
    additionalAirports: [
      { name: 'Moore County Airport', code: 'SOP' },
      { name: 'Fayetteville Regional Airport', code: 'FAY' },
    ],
    metaTitle: 'Pinehurst Limo Service | Golf & Resort Transfers | ITP Limo',
    metaDescription:
      'Chauffeur service for Pinehurst, Southern Pines and Aberdeen. Golf group transfers, resort arrivals and airport pickups from RDU, Moore County and Fayetteville.',
    image: '/images/aviator-front.jpg',
    hero: {
      title: 'Pinehurst, from the airport to the first tee.',
      intro:
        'A golf group lands on three different flights, at three different airports, and still has to make one tee time. That is the problem worth solving here — RDU, Moore County or Fayetteville through to the resort, with the clubs accounted for rather than squeezed in.',
    },
    serving: {
      title: 'The Sandhills, covered.',
      intro:
        'Pinehurst runs on tee times, and tee times do not move. We plan backwards from yours: which airport the group lands at, how long the transfer really takes, and where the clubs and the luggage go. We serve:',
      keyLocations: [
        'Pinehurst Resort & The Carolina Hotel',
        'The Village of Pinehurst',
        'Raleigh-Durham International Airport (RDU)',
        'Moore County Airport (SOP)',
        'Fayetteville Regional Airport (FAY)',
        'Private aviation & FBO terminals',
      ],
      closing:
        'Golf groups, corporate outings, wedding parties and event weekends — all drawing on the same fleet and the same chauffeurs.',
    },
    services: [
      {
        title: 'Golf Group Transportation',
        desc: 'Four players, four sets of clubs, one vehicle and one arrival time. Bags are planned into the booking rather than discovered at the kerb.',
        image: '/images/chevrolet-suburban.jpg',
      },
      {
        title: 'Airport-to-Resort Transfers',
        desc: 'From RDU, Moore County or Fayetteville Regional straight to the resort door. Flights are tracked, so a delay upstream does not cost you the afternoon round.',
        image: '/images/mercedes-sprinter.jpg',
      },
      {
        title: 'Corporate Outings & Tournament Transfers',
        desc: 'Multi-vehicle scheduling for company outings and event weekends, coordinated to a single run sheet rather than a group chat.',
        image: '/images/lincoln-aviator.jpg',
      },
      {
        title: 'Weddings',
        desc: 'The Sandhills are a destination for good reason. We move the party between ceremony, hotel and reception on one timeline that somebody else is watching.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Private Aviation & Executive Transfers',
        desc: 'Moore County sees a great deal of private traffic. We meet it at the FBO with the vehicle already staged, and cover executive travel across the Sandhills the rest of the week.',
        image: '/images/suburban-cockpit.jpg',
      },
      {
        title: 'Group & Sprinter Transportation',
        desc: 'Fourteen passengers and twenty bags in a single vehicle — a full golf party or wedding group reaching the same place at the same time.',
        image: '/images/mercedes-sprinter.jpg',
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
        image: '/images/mercedes-sprinter.jpg',
      },
    ],
    whyChoose: [
      'Served from three airports — RDU, Moore County and Fayetteville Regional',
      'Clubs and luggage planned into the vehicle from the start',
      'Every vehicle in the fleet is a 2026 model',
      'Licensed, professional chauffeurs',
      'One operation with Raleigh — the same fleet and the same standard',
    ],
    areasServed: {
      intro: 'Coverage across Moore County and the wider Sandhills.',
      areas: [
        'Pinehurst',
        'Southern Pines',
        'Aberdeen',
        'Whispering Pines',
        'Seven Lakes',
        'Carthage',
      ],
      closing:
        'Pinehurst is a service area rather than a second depot — vehicles and chauffeurs come from our Wake Forest operation. Book a little further ahead here than you would in the Triangle and you get exactly the same cars and the same people.',
    },
    transcribed: true,
  },
  {
    slug: 'wilmington',
    city: 'Wilmington',
    state: 'North Carolina',
    stateAbbr: 'NC',
    airport: 'Wilmington International Airport',
    airportCode: 'ILM',
    additionalAirports: [
      { name: 'Raleigh-Durham International Airport', code: 'RDU' },
    ],
    metaTitle: 'Wilmington Limo Service | ILM Airport & Beaches | ITP Limo',
    metaDescription:
      'Chauffeur service across Wilmington, Wrightsville Beach and Carolina Beach. ILM airport transfers, weddings, corporate travel and Raleigh-to-coast journeys.',
    image: '/images/sprinter-branded.jpg',
    hero: {
      title: 'Wilmington, from the runway to the shoreline.',
      intro:
        'ILM is a short walk from gate to kerb, which is precisely why the car should already be there. We cover the coast from downtown out to Figure Eight Island — and drive the long stretch from Raleigh when the flight lands there instead.',
    },
    serving: {
      title: 'The Cape Fear coast.',
      intro:
        'A small airport and a long coastline both change how transport works here. Arrivals clear quickly, so waiting is the failure mode; and the run from the terminal out to a beach house is the part that rewards planning. We serve:',
      keyLocations: [
        'Wilmington International Airport (ILM)',
        'Downtown Wilmington',
        'Wrightsville Beach',
        'Carolina Beach & Kure Beach',
        'Figure Eight Island',
        'Leland',
        'Private aviation & FBO terminals',
      ],
      closing:
        'Airport runs, wedding weekends, corporate travel and the long haul back to Raleigh — one operation, one standard.',
    },
    services: [
      {
        title: 'ILM Airport Transfers',
        desc: 'Wilmington International clears quickly, so the vehicle is staged before you reach the doors. Flights tracked in both directions.',
        image: '/images/mercedes-sprinter.jpg',
      },
      {
        title: 'Raleigh & Long-Distance Transfers',
        desc: 'The run between the Triangle and the coast, door to door. For flights that land at RDU rather than ILM, and for journeys that never involve an airport at all.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Weddings',
        desc: 'Coastal ceremonies run on tide and light rather than on the hour. We build the timeline around when you actually need to be standing there.',
        image: '/images/lincoln-aviator.jpg',
      },
      {
        title: 'Corporate & Executive Transportation',
        desc: 'Downtown offices and coastal business travel, with standing accounts, consolidated billing and a chauffeur who knows the route.',
        image: '/images/suburban-cockpit.jpg',
      },
      {
        title: 'Beach & Vacation Transportation',
        desc: 'Wrightsville, Carolina Beach, Kure Beach and Figure Eight Island. Arrive without a hire car, and without spending the first hour of the holiday looking for parking.',
        image: '/images/chevrolet-suburban.jpg',
      },
      {
        title: 'Private Aviation & FBO Transfers',
        desc: 'Private arrivals met on the FBO side rather than at the terminal, with the vehicle in place before you are off the aircraft.',
        image: '/images/suburban-cockpit.jpg',
      },
      {
        title: 'Group & Sprinter Transportation',
        desc: 'Fourteen passengers and twenty bags — a wedding party or a full family reaching the same house at the same time.',
        image: '/images/mercedes-sprinter.jpg',
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
        image: '/images/mercedes-sprinter.jpg',
      },
    ],
    whyChoose: [
      'ILM transfers with flight tracking in both directions',
      'Raleigh-to-coast long-distance runs as a routine service, not an exception',
      'Every vehicle in the fleet is a 2026 model',
      'Licensed, professional chauffeurs',
      'One operation with Raleigh — the same fleet and the same standard',
    ],
    areasServed: {
      intro: 'Coverage across Wilmington and the Cape Fear coast.',
      /*
       * Extended 2026-08-23 on the client's instruction: "We want to service
       * Hampstead, Pender County and Brunswick County […] Please add those
       * areas where the search data supports them."
       *
       * Taking the qualifier seriously, the additions are the ones that
       * register: Bald Head Island (210/mo), Brunswick County (50/mo) and
       * Pender County (20/mo). Hampstead is named because they asked for it by
       * name even though it does not register on its own. The individual beach
       * towns - Oak Island, Topsail, Southport, Holden Beach, Ocean Isle,
       * Shallotte - all returned no measurable volume and are deliberately
       * left out rather than padding the list.
       */
      areas: [
        'Downtown Wilmington',
        'Wrightsville Beach',
        'Carolina Beach',
        'Kure Beach',
        'Figure Eight Island',
        'Bald Head Island',
        'Hampstead',
        'Leland & Brunswick County',
        'Pender County',
      ],
      closing:
        'Wilmington is a service area rather than a second depot — vehicles and chauffeurs come from our Wake Forest operation. Book a little further ahead here than you would in the Triangle and you get exactly the same cars and the same people.',
    },
    transcribed: true,
  },
  {
    slug: 'boston',
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    airport: 'Logan International Airport',
    airportCode: 'BOS',
    metaTitle: 'Boston Limo Service | Logan Airport Transfers | ITP Limo',
    metaDescription:
      'Professional, on-time limo and black car service across Boston. Logan Airport transfers with flight tracking, corporate travel, weddings and special events.',
    image: '/images/suburban-front.jpg',
    hero: {
      title: 'Boston car service, Logan and everything after it.',
      intro:
        'Logan is the hard part of Boston. Terminals that back up, a tunnel that decides your morning, and a pickup window that closes whether or not your bag arrived. We track the aircraft rather than the schedule, then handle the rest of the city the same way — Back Bay, the Seaport, Cambridge and the sixteen towns around them.',
    },
    serving: {
      title: 'Logan, the harbour and the river.',
      intro:
        'Boston rewards knowing which approach to take at which hour, and punishes guessing. Our chauffeurs work the city on that basis — which terminal door clears fastest, when the tunnel is worth avoiding, and which Cambridge addresses are genuinely easier from the far side of the river. We serve:',
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
        title: 'Logan Airport Transfers',
        desc: 'Your flight is tracked from wheels-up, so an early landing or a two-hour hold changes nothing about who is waiting. Met inside at baggage claim, not circling the terminal.',
        image: '/images/mercedes-sprinter.jpg',
      },
      {
        title: 'Corporate & Financial District Travel',
        desc: 'Standing accounts for downtown firms and Seaport offices, with consolidated billing and chauffeurs who already know the building.',
        image: '/images/suburban-cockpit.jpg',
      },
      {
        title: 'Roadshows to New York & Washington',
        desc: 'Multi-stop financial roadshows run out of Boston down the corridor, on one schedule with one chauffeur rather than a new car in every city.',
        image: '/images/gulfstream_sprinter.jpg',
      },
      {
        title: 'Cruise Terminal Transfers',
        desc: 'Boarding day and disembarkation, with luggage handled and enough vehicle for a family that has packed for two weeks at sea.',
        image: '/images/chevrolet-suburban.jpg',
      },
      {
        title: 'Weddings',
        desc: 'The couple, the wedding party and the guests on one timeline — including shuttle loops between hotel, ceremony and reception.',
        image: '/images/lincoln-aviator.jpg',
      },
      {
        title: 'Convention & Event Transport',
        desc: 'The Boston Convention & Exhibition Center, the universities and the venues between them, moved in Sprinter-sized groups rather than a queue of separate cars.',
        image: '/images/mercedes-sprinter.jpg',
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
        image: '/images/mercedes-sprinter.jpg',
      },
    ],
    whyChoose: [
      'Logan arrivals tracked by flight number, not by your booking time',
      'Sixteen surrounding towns covered as standard, not as an add-on',
      'Every vehicle in the fleet is a 2026 model',
      'Licensed, professional chauffeurs',
      'One operation with our North Carolina markets — the same standard either end of a roadshow',
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
