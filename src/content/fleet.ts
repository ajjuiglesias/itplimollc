/*
 * Fleet content.
 *
 * Every entry here must be traceable to something the client actually
 * published or photographed:
 *   - SUV and Sedan, with their capacities, are taken verbatim from the
 *     client's own Limo Boston page.
 *   - The Mercedes-Benz Sprinter is named because their own photography shows
 *     it in ITP livery with the model badge visible.
 *
 * The previous contents of this file advertised a Mercedes-Maybach S-Class and
 * a Cadillac Escalade ESV illustrated with AI-generated images — including a
 * fictional hotel, "The Azure Grande Resort". ITP does not operate those
 * vehicles. Do not reintroduce a vehicle without a source.
 *
 * `image` is optional on purpose: it is better to ship a vehicle with no
 * photograph than with a photograph of a car the client does not own. Only the
 * Sprinter currently has genuine imagery.
 */

export interface Vehicle {
  slug: string;
  name: string;
  /** Shorter label for breadcrumbs and cross-links. */
  shortName: string;
  category: string;
  tagline: string;
  /** Omitted where the client has not published a figure. */
  passengers?: string;
  luggage?: string;
  /** Genuine ITP photography only. */
  image?: string;
  description: string;
  specs: string[];
  detail: {
    intro: string;
    bestFor: string[];
  };
}

export const fleet: Vehicle[] = [
  {
    slug: 'sprinter',
    name: 'Mercedes-Benz Sprinter',
    shortName: 'Sprinter',
    category: 'Executive Group Van',
    tagline: 'Our flagship vehicle for groups and private aviation',
    image: '/images/signature_sprinter.jpg',
    description:
      'A high-roof executive Sprinter with full stand-up headroom, used for group transfers, corporate movements and private aviation pickups.',
    specs: [
      'Full stand-up interior headroom',
      'Generous luggage capacity for group travel',
      'Used for FBO and private aviation transfers',
      'Professional licensed chauffeur',
    ],
    detail: {
      intro:
        'The Sprinter is the vehicle you will most often see arriving for group work. Its height and luggage space make it the practical answer when a party and its bags will not fit comfortably into an SUV, and it is the vehicle we take to private aviation terminals.',
      bestFor: [
        'Group airport transfers',
        'Private aviation and FBO pickups',
        'Corporate team movements',
        'Weddings and larger parties',
      ],
    },
  },
  {
    slug: 'suv',
    name: 'SUV',
    shortName: 'SUV',
    category: 'Executive SUV',
    tagline: 'Room for the party and the luggage',
    passengers: '7 Passengers',
    luggage: '6 Bags',
    description:
      'A modern black executive SUV for airport runs, corporate travel and family transfers where luggage space matters.',
    specs: [
      'Seats up to 7 passengers',
      'Room for 6 pieces of luggage',
      'Spotless, recent-model vehicle',
      'Professional licensed chauffeur',
    ],
    detail: {
      intro:
        'The SUV is the workhorse of the fleet. Seven seats and six bags covers the majority of airport transfers without moving up to the Sprinter.',
      bestFor: [
        'Airport transfers with full luggage',
        'Corporate and executive travel',
        'Family and small-group journeys',
        'Evening and event transport',
      ],
    },
  },
  {
    slug: 'sedan',
    name: 'Sedan',
    shortName: 'Sedan',
    category: 'Executive Sedan',
    tagline: 'Discreet travel for one to three',
    passengers: '3 Passengers',
    luggage: '3 Bags',
    description:
      'A black executive sedan for individual and small-party travel, meetings and point-to-point city journeys.',
    specs: [
      'Seats up to 3 passengers',
      'Room for 3 pieces of luggage',
      'Quiet cabin suited to calls in transit',
      'Professional licensed chauffeur',
    ],
    detail: {
      intro:
        'For a single executive or a pair of travellers, the sedan is the quietest and most discreet way to move between meetings, hotels and the airport.',
      bestFor: [
        'Single-executive airport transfers',
        'Meetings and point-to-point city travel',
        'Evening and black-tie arrivals',
        'Working quietly in transit',
      ],
    },
  },
];

export const getVehicle = (slug: string): Vehicle | undefined =>
  fleet.find((vehicle) => vehicle.slug === slug);
