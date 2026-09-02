/*
 * Fleet content.
 *
 * Vehicles, model years and passenger counts are exactly as the client stated:
 *   2026 Chevrolet Suburban — 7 passengers
 *   2026 Lincoln Aviator    — 3 passengers
 *   2026 Mercedes Sprinter  — 14 passengers
 *
 * Luggage figures are the client's: 6, 3 and 20 respectively.
 *
 * Note the company runs five vehicles across these three models — they have
 * more than one Suburban — so copy should say five vehicles, not three.
 *
 * Photography: the Sprinter is the client's own shot at Signature Aviation;
 * the Suburban and Aviator are manufacturer photography they supplied.
 * Do not add a vehicle, a capacity or an
 * image without a source; the original scaffold advertised a Maybach and an
 * Escalade the company does not operate, illustrated with AI-generated images.
 */

export interface Vehicle {
  slug: string;
  name: string;
  /** Shorter label for breadcrumbs and cross-links. */
  shortName: string;
  category: string;
  tagline: string;
  passengers?: string;
  luggage?: string;
  image?: string;
  description: string;
  /**
   * Meta-only override. `description` doubles as visible body copy, so where
   * that copy runs past the ~160-char SERP limit this carries a shorter form
   * rather than truncating what the page actually says.
   */
  metaDescription?: string;
  specs: string[];
  detail: {
    intro: string;
    bestFor: string[];
  };
}

export const fleet: Vehicle[] = [
  {
    slug: 'chevrolet-suburban',
    metaDescription:
      'Chauffeured 2026 Chevrolet Suburban in black — seven passengers, six bags. The default for airport runs and corporate travel across Raleigh and the Triangle.',
    name: '2026 Chevrolet Suburban',
    shortName: 'Suburban',
    category: 'Full-Size Executive SUV',
    tagline: 'Room for the party and the luggage',
    passengers: '7 Passengers',
    luggage: '6 Bags',
    image: '/images/chevrolet-suburban.jpg',
    description:
      'A 2026 Chevrolet Suburban in black, seating seven with room for six bags — the default choice for airport runs where both the party and the luggage are full size.',
    specs: [
      '2026 model year',
      'Seats up to 7 passengers',
      'Room for 6 pieces of luggage',
      'Professional licensed chauffeur',
    ],
    detail: {
      intro:
        'The Suburban is the workhorse of the fleet. Seven seats and six bags covers the majority of airport transfers without moving up to the Sprinter, and the full-size body means nobody travels with a case on their lap.',
      bestFor: [
        'Airport transfers with full luggage',
        'Corporate and executive travel',
        'Family and small-group journeys',
        'Evening and event transport',
      ],
    },
  },
  {
    slug: 'lincoln-aviator',
    name: '2026 Lincoln Aviator',
    shortName: 'Aviator',
    category: 'Luxury Executive SUV',
    tagline: 'Discreet travel for one to three',
    passengers: '3 Passengers',
    luggage: '3 Bags',
    image: '/images/lincoln-aviator.jpg',
    description:
      'A 2026 Lincoln Aviator in black, configured for up to three passengers — the quietest way to move between meetings, hotels and the airport.',
    specs: [
      '2026 model year',
      'Seats up to 3 passengers',
      'Room for 3 pieces of luggage',
      'Professional licensed chauffeur',
    ],
    detail: {
      intro:
        'For a single executive or a pair of travellers, the Aviator is the most discreet vehicle in the fleet. Configured for three, it keeps the cabin quiet enough to work or take a call the whole way.',
      bestFor: [
        'Single-executive airport transfers',
        'Meetings and point-to-point city travel',
        'Evening and black-tie arrivals',
        'Working quietly in transit',
      ],
    },
  },
  {
    slug: 'mercedes-sprinter',
    metaDescription:
      'Chauffeured 2026 Mercedes-Benz Sprinter — fourteen passengers, twenty bags, full stand-up headroom. For groups, weddings and airport transfers across NC.',
    name: '2026 Mercedes-Benz Sprinter',
    shortName: 'Sprinter',
    category: 'Executive Group Van',
    tagline: 'Fourteen passengers, twenty bags',
    passengers: '14 Passengers',
    luggage: '20 Bags',
    image: '/images/signature_sprinter.jpg',
    description:
      'A 2026 Mercedes-Benz Sprinter in black with full stand-up headroom, seating fourteen — used for group transfers, corporate movements and private aviation pickups.',
    specs: [
      '2026 model year',
      'Seats up to 14 passengers',
      'Room for 20 pieces of luggage',
      'Full stand-up interior headroom',
      'Used for FBO and private aviation transfers',
    ],
    detail: {
      intro:
        'The Sprinter is the vehicle you will most often see arriving for group work. Fourteen seats and stand-up height make it the practical answer when a party and its bags will not fit into an SUV, and it is the vehicle we take to private aviation terminals.',
      bestFor: [
        'Group airport transfers',
        'Private aviation and FBO pickups',
        'Corporate team movements',
        'Weddings and larger parties',
      ],
    },
  },
];

export const getVehicle = (slug: string): Vehicle | undefined =>
  fleet.find((vehicle) => vehicle.slug === slug);
