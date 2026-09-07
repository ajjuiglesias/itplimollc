export interface WeddingVenueRegion {
  slug: string;
  label: string;
  area: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  intro: string;
  serviceArea: string[];
  venues: string[];
  planning: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
}

/*
 * Venue names were supplied by the client in September 2026. These pages do
 * not claim a partnership, preferred-vendor relationship or prior service at
 * any venue. They describe ITP Limo's transportation service around each
 * market. Keep that distinction intact unless the client supplies proof of an
 * official relationship.
 */
export const weddingVenueRegions: WeddingVenueRegion[] = [
  {
    slug: 'raleigh-wake-forest',
    label: 'Raleigh & Wake Forest',
    area: 'Raleigh and Wake Forest, NC',
    eyebrow: 'Raleigh Wedding Transportation',
    title: 'The whole wedding moves as one.',
    subtitle:
      'Private cars, wedding-party transportation and guest shuttles for celebrations across Raleigh, Wake Forest and greater Wake County.',
    metaTitle: 'Raleigh Wedding Venue Transportation | ITP Limo',
    metaDescription:
      'Wedding transportation in Raleigh and Wake Forest, NC. Private cars, Sprinter shuttles, RDU transfers and coordinated hotel-to-venue service.',
    image: '/images/chauffeur-door.jpg',
    intro:
      'A wedding day rarely has one pickup and one destination. Guests arrive through RDU, the wedding party gets ready in separate places, and the final departure happens hours after the first vehicle moves. ITP Limo brings those pieces under one transportation plan, with professional chauffeurs and a single dispatch contact from first arrival to final send-off.',
    serviceArea: ['Raleigh', 'Wake Forest', 'North Hills', 'Cary', 'RDU Airport'],
    venues: [
      'The Sutherland',
      'The Historic Wakefield Barn',
      'The Merrimon-Wynne House',
      'The Maxwell',
      'The Meadows at Firefly Farm Preserve',
      'The Pavilion at the Angus Barn',
      'Market Hall',
      'Melrose Knitting Mill',
      'All Saints Chapel',
      'Haywood Hall & Gardens',
      'Morris Peaceland Farm',
      'The Laurelbrook',
      'The Fairview Raleigh',
    ],
    planning: [
      {
        title: 'RDU arrivals before the wedding',
        body: 'We can coordinate airport pickups for family, the wedding party and VIP guests, then connect those arrivals with hotels in Downtown Raleigh, North Hills, Wake Forest and the surrounding Triangle.',
      },
      {
        title: 'One timeline for every vehicle',
        body: 'The couple’s private car, wedding-party Sprinter and guest shuttle loops are planned together, with practical buffers for portraits, ceremony timing and the final departure.',
      },
      {
        title: 'A clear ride home',
        body: 'Return transportation can run in scheduled waves so early departures, hotel guests and the wedding party are not competing for the same vehicle at the end of the night.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide wedding transportation throughout Raleigh and Wake Forest?',
        answer: 'Yes. ITP Limo serves wedding venues, hotels, homes and RDU Airport throughout Raleigh, Wake Forest and the surrounding Triangle.',
      },
      {
        question: 'Can you transport both the wedding party and guests?',
        answer: 'Yes. We can combine a private SUV for the couple with Sprinter service for the wedding party and scheduled shuttle loops for guests. Larger groups can be moved with multiple vehicles on one timeline.',
      },
      {
        question: 'Are you affiliated with the venues listed on this page?',
        answer: 'No venue affiliation is implied. The list identifies venues within the areas ITP Limo serves. Venue access, staging and loading details are confirmed for each reservation.',
      },
    ],
  },
  {
    slug: 'cary-apex-holly-springs',
    label: 'Cary, Apex & Holly Springs',
    area: 'Cary, Apex and Holly Springs, NC',
    eyebrow: 'Western Wake Weddings',
    title: 'A polished arrival, wherever the day begins.',
    subtitle:
      'Coordinated wedding cars and guest transportation across Cary, Apex, Holly Springs and western Wake County.',
    metaTitle: 'Cary & Apex Wedding Transportation | ITP Limo',
    metaDescription:
      'Wedding transportation for Cary, Apex and Holly Springs venues. Private SUVs, Sprinter shuttles, hotel loops and coordinated service from ITP Limo.',
    image: '/images/chauffeur-suburban.jpg',
    intro:
      'Western Wake weddings often spread across several addresses: a hotel in Cary, a getting-ready location in Apex, a ceremony or reception farther south, and guests flying into RDU. We turn that geography into a clear schedule, assigning the right vehicle to each group and keeping dispatch responsible for the transitions.',
    serviceArea: ['Cary', 'Apex', 'Holly Springs', 'New Hill', 'RDU Airport'],
    venues: [
      'Chatham Station',
      'Chandelier Event Venue',
      'The Evermore',
      'The Bradford',
      'The Matthews House',
      'The Upchurch',
      'The Oaks at Salem',
    ],
    planning: [
      {
        title: 'Connect hotels, homes and the venue',
        body: 'We build pickups around where people are actually staying, then account for loading time and the drive between Cary, Apex, Holly Springs and New Hill.',
      },
      {
        title: 'Keep the wedding party together',
        body: 'A 14-passenger Mercedes-Benz Sprinter can move the wedding party as one group, while an SUV remains available for the couple or family members who need a separate schedule.',
      },
      {
        title: 'Plan the return before the reception',
        body: 'Staggered hotel returns give guests a dependable option without forcing everyone to leave at once. Dispatch holds the timing as the evening changes.',
      },
    ],
    faqs: [
      {
        question: 'Do you serve wedding venues in Cary, Apex and Holly Springs?',
        answer: 'Yes. ITP Limo provides wedding transportation throughout western Wake County, including Cary, Apex, Holly Springs and New Hill.',
      },
      {
        question: 'Can you provide shuttle loops between a hotel and the venue?',
        answer: 'Yes. We can schedule pre-ceremony departures and return waves using the Sprinter and additional vehicles when the guest count requires them.',
      },
      {
        question: 'Can you collect out-of-town guests at RDU?',
        answer: 'Yes. RDU airport transfers can be coordinated with hotel arrivals and the wider wedding transportation schedule.',
      },
    ],
  },
  {
    slug: 'durham-chapel-hill-hillsborough',
    label: 'Durham, Chapel Hill & Hillsborough',
    area: 'Durham, Chapel Hill and Hillsborough, NC',
    eyebrow: 'Durham & Chapel Hill Weddings',
    title: 'Three cities. One carefully held schedule.',
    subtitle:
      'Wedding transportation connecting Durham, Chapel Hill, Hillsborough, local hotels and RDU Airport.',
    metaTitle: 'Durham & Chapel Hill Wedding Transportation | ITP Limo',
    metaDescription:
      'Wedding transportation in Durham, Chapel Hill and Hillsborough. Venue transfers, hotel shuttles, RDU pickups and private chauffeur service.',
    image: '/images/sprinter-interior.jpg',
    intro:
      'Weddings across Durham, Chapel Hill and Hillsborough can involve downtown hotels, university-area lodging, rural venues and guests arriving at RDU from different flights. ITP Limo coordinates those movements as one operation, so the run sheet remains clear even when the celebration crosses city lines.',
    serviceArea: ['Durham', 'Chapel Hill', 'Hillsborough', 'Carrboro', 'RDU Airport'],
    venues: [
      'The Barn of Chapel Hill',
      'Union Grove Farm',
      'The Parlour at Manns Chapel',
      'Chapel Hill Carriage House',
      'The Cookery',
      'The Cotton Room',
      'Bay 7 at American Tobacco Campus',
      'The Rickhouse',
      'The Durham Hotel',
      'The Carolina Inn',
      'Washington Duke Inn & Golf Club',
      'The Cloth Mill at Eno River',
      'The Barn at Valhalla',
      'Lavender Oaks Farm',
    ],
    planning: [
      {
        title: 'Coordinate a multi-city guest list',
        body: 'We group guests by hotel or pickup area, then build departures around the actual drive between Durham, Chapel Hill, Hillsborough and the venue.',
      },
      {
        title: 'Protect the ceremony timeline',
        body: 'Pickup windows include boarding and traffic buffers, while the couple and wedding party can remain on separate schedules without losing contact with dispatch.',
      },
      {
        title: 'Bring airport arrivals into the plan',
        body: 'Commercial and private aviation pickups can feed directly into hotels or wedding events, with flight monitoring used for airport reservations.',
      },
    ],
    faqs: [
      {
        question: 'Can ITP Limo cover a wedding across Durham and Chapel Hill?',
        answer: 'Yes. We coordinate transportation across Durham, Chapel Hill, Hillsborough, Carrboro and RDU as one schedule.',
      },
      {
        question: 'What vehicle works best for a wedding party?',
        answer: 'The 14-passenger Mercedes-Benz Sprinter is the main group vehicle. Chevrolet Suburbans and the Lincoln Aviator can be added for the couple, family or smaller groups.',
      },
      {
        question: 'Can guests leave the reception at different times?',
        answer: 'Yes. Return service can be planned in waves, with the exact number of runs based on the guest count, hotel locations and event timeline.',
      },
    ],
  },
  {
    slug: 'clayton-johnston-county-fuquay-varina',
    label: 'Clayton, Johnston County & Fuquay-Varina',
    area: 'Clayton, Johnston County and Fuquay-Varina, NC',
    eyebrow: 'South & East of Raleigh',
    title: 'The distance disappears into the plan.',
    subtitle:
      'Wedding transportation for celebrations across Clayton, Johnston County, Fuquay-Varina and the communities between them.',
    metaTitle: 'Clayton Wedding Transportation | Johnston County | ITP',
    metaDescription:
      'Wedding transportation for Clayton, Johnston County and Fuquay-Varina. Guest shuttles, private cars and coordinated Raleigh-area transfers.',
    image: '/images/sprinter-branded.jpg',
    intro:
      'Venues south and east of Raleigh reward good planning. Hotels may be miles from the ceremony, rideshare availability can change late in the evening, and a rural entrance takes longer to load than a downtown curb. We plan from the guest’s door to the final return—not only the time printed on the invitation.',
    serviceArea: ['Clayton', 'Johnston County', 'Fuquay-Varina', 'Garner', 'Raleigh'],
    venues: [
      'The Farm at 42',
      'The Farm at 95',
      'Donovan Manor',
      'The Distillery',
      'The Clayton Center',
      'Portofino Equestrian Center',
      'The Pavilion at Carriage Farm',
    ],
    planning: [
      {
        title: 'Account for the full drive',
        body: 'The schedule starts with hotel and home locations, not a generic mileage estimate. We plan loading, road time and arrival buffers for every passenger group.',
      },
      {
        title: 'Use the fleet as one system',
        body: 'The Sprinter handles larger groups, while SUVs can move the couple, family and VIP guests on independent timelines that still connect at the venue.',
      },
      {
        title: 'Give guests a dependable return',
        body: 'Planned return waves provide a clear alternative to last-minute rideshare searches, especially for celebrations outside central Raleigh.',
      },
    ],
    faqs: [
      {
        question: 'Does ITP Limo provide wedding transportation outside Raleigh?',
        answer: 'Yes. We serve weddings in Clayton, Fuquay-Varina, Johnston County and surrounding communities from the Wake Forest/Raleigh operation.',
      },
      {
        question: 'Can you shuttle guests to rural wedding venues?',
        answer: 'Yes. We plan pickup points, boarding time and return waves around the venue and lodging locations supplied for the event.',
      },
      {
        question: 'How many guests can the Sprinter carry?',
        answer: 'The 2026 Mercedes-Benz Sprinter seats up to 14 passengers. Larger groups can be served with multiple vehicles on one schedule.',
      },
    ],
  },
  {
    slug: 'pittsboro-chatham-county',
    label: 'Pittsboro & Chatham County',
    area: 'Pittsboro and Chatham County, NC',
    eyebrow: 'Chatham County Weddings',
    title: 'From the Triangle to the venue, beautifully timed.',
    subtitle:
      'Private wedding cars and group transportation for Pittsboro, Chatham County and guests arriving from across the Triangle.',
    metaTitle: 'Pittsboro Wedding Transportation | Chatham County | ITP',
    metaDescription:
      'Wedding transportation in Pittsboro and Chatham County. Private SUVs, Sprinter guest shuttles and coordinated transfers from across the Triangle.',
    image: '/images/fleet-lineup-wide.jpg',
    intro:
      'A Chatham County wedding may draw guests from Raleigh, Durham, Chapel Hill and beyond. The transportation plan has to work across that whole map. ITP Limo coordinates pickup zones, wedding-party movements and return trips so guests experience one calm journey even when their hotels are in different parts of the Triangle.',
    serviceArea: ['Pittsboro', 'Chatham County', 'Chapel Hill', 'Cary', 'Raleigh-Durham'],
    venues: [
      'Fearrington Village',
      'The Bradford',
      'Forest Hall at Chatham Mills',
    ],
    planning: [
      {
        title: 'Build around where guests stay',
        body: 'Instead of forcing every guest to one distant pickup, we can create practical hotel zones and time each departure for the route into Pittsboro or greater Chatham County.',
      },
      {
        title: 'Keep the day flexible',
        body: 'Hourly service keeps a vehicle and chauffeur available when portraits run long, the reception shifts, or the couple needs a private departure between group movements.',
      },
      {
        title: 'End with a clear return plan',
        body: 'Scheduled hotel returns are set before the event and managed through dispatch, giving guests a known ride back across the Triangle.',
      },
    ],
    faqs: [
      {
        question: 'Do you serve weddings in Pittsboro and Chatham County?',
        answer: 'Yes. ITP Limo serves Pittsboro and Chatham County, including transportation from Raleigh, Cary, Chapel Hill, Durham and RDU Airport.',
      },
      {
        question: 'Can you collect guests from more than one hotel?',
        answer: 'Yes. We can build separate pickup zones or shuttle runs based on hotel locations, guest count and the event timeline.',
      },
      {
        question: 'Do you provide a private car for the couple?',
        answer: 'Yes. A chauffeured SUV can be held for the couple while the Sprinter and other vehicles manage the wedding party or guests.',
      },
    ],
  },
];

export const getWeddingVenueRegion = (slug: string) =>
  weddingVenueRegions.find((region) => region.slug === slug);
