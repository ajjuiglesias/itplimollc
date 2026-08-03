export interface Vehicle {
  slug: string;
  name: string;
  /** Shorter label for tabs and breadcrumbs. */
  shortName: string;
  category: string;
  tagline: string;
  passengers: string;
  luggage: string;
  image: string;
  description: string;
  specs: string[];
  /** Longer copy shown only on the vehicle detail page. */
  detail: {
    intro: string;
    bestFor: string[];
  };
}

export const fleet: Vehicle[] = [
  {
    slug: 'mercedes-maybach-s-class',
    name: 'Mercedes-Maybach S-Class',
    shortName: 'Maybach S-Class',
    category: 'First-Class Executive Sedan',
    tagline: 'The Pinnacle of Private Chauffeur Mobility',
    passengers: '3 Passengers',
    luggage: '3 Executive Cases',
    image: '/images/maybach.png',
    description:
      'Designed for discreet C-suite executives and VIP transfers. Features extended legroom, reclining executive lounge seating, rear massagers, and acoustic soundproof privacy glass.',
    specs: [
      'Acoustically insulated quiet cabin',
      'Hot-stone massage reclining rear seats',
      'Dedicated 5G Wi-Fi & device charging',
      'Private non-disclosure protocol chauffeur',
    ],
    detail: {
      intro:
        'The Maybach S-Class is the quietest cabin in our fleet. Acoustic laminated glass, an extended wheelbase and individually reclining rear lounge seats make it the default choice when the journey has to double as private working time.',
      bestFor: [
        'C-suite airport transfers at BOS and RDU',
        'Confidential client meetings in transit',
        'Evening and black-tie arrivals',
        'Single-executive city-to-city travel',
      ],
    },
  },
  {
    slug: 'cadillac-escalade-esv',
    name: 'Cadillac Escalade ESV',
    shortName: 'Escalade ESV',
    category: 'Luxury Executive SUV',
    tagline: 'Commanding Presence & Generous Capacity',
    passengers: '6 Passengers',
    luggage: '6 Large Luggage Cases',
    image: '/images/escalade.png',
    description:
      'The preferred choice for corporate delegations, family airport transfers, and luggage-heavy trips. Offers spacious leather captain chairs and rear climate control.',
    specs: [
      'Extended wheelbase ESV luggage capacity',
      'Individual heated leather captain chairs',
      'Tri-zone automatic climate control',
      'High-speed multi-device USB-C power',
    ],
    detail: {
      intro:
        'The extended-wheelbase ESV carries a full complement of passengers without sacrificing luggage space, which makes it the practical answer for arrivals where both the party and the baggage are substantial.',
      bestFor: [
        'Family airport transfers with full luggage',
        'Small corporate delegations',
        'Golf and Pinehurst trips',
        'Winter and adverse-weather travel',
      ],
    },
  },
  {
    slug: 'mercedes-sprinter-executive',
    name: 'Mercedes-Benz Sprinter Executive',
    shortName: 'Sprinter Executive',
    category: 'Private Jet Van (14 Passengers)',
    tagline: 'Mobile Office & Group Sanctuary',
    passengers: 'Up to 14 Passengers',
    luggage: '14 Large Luggage Cases',
    image: '/images/signature_sprinter.jpg',
    description:
      'Custom jet-converted executive cabin for financial roadshows, corporate teams, and private airport groups. Full stand-up headroom, conference seating, onboard Wi-Fi, and 110V AC power.',
    specs: [
      'Custom 14-passenger luxury executive seating',
      'Direct FBO Tarmac Access (Signature Aviation & TAC Air)',
      'Complimentary 5G Wi-Fi & multi-device AC power outlets',
      'Quiet-Ride soundproofing for undisturbed conference calls',
    ],
    detail: {
      intro:
        'Our Sprinter is a jet-converted executive cabin with full stand-up headroom and conference seating. It is the vehicle most often requested for financial roadshows, because the team can keep working between stops rather than losing the time.',
      bestFor: [
        'Multi-stop financial roadshows',
        'Private aviation group transfers from the tarmac',
        'Corporate offsites and team movement',
        'Wedding parties and large-group events',
      ],
    },
  },
];

export const getVehicle = (slug: string): Vehicle | undefined =>
  fleet.find((vehicle) => vehicle.slug === slug);
