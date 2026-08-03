export interface Location {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  airport: string;
  airportCode: string;
  desc: string;
  image: string;
  routes: string[];
  /** Longer copy shown only on the location page. */
  detail: {
    intro: string;
    neighbourhoods: string[];
    fbos: string[];
  };
}

export const locations: Location[] = [
  {
    slug: 'boston',
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    airport: 'Boston Logan International (BOS)',
    airportCode: 'BOS',
    desc: 'First-class private chauffeur service serving Greater Boston, Back Bay, Financial District, and Logan Airport.',
    image:
      'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=1200&q=80',
    routes: ['Back Bay Concierge', 'Financial District', 'Cambridge & Harvard', 'Cape Cod & Islands'],
    detail: {
      intro:
        'Boston is our northern hub, covering Logan Airport, the Financial District and the Back Bay, plus the regional corridors south to Cape Cod and down to New York and Washington D.C.',
      neighbourhoods: [
        'Back Bay & Beacon Hill',
        'Financial District & Seaport',
        'Cambridge, Harvard & MIT',
        'Brookline & Newton',
        'Cape Cod & the Islands',
      ],
      fbos: ['Signature Aviation BOS', 'Jet Aviation BOS', 'Hanscom Field (BED)'],
    },
  },
  {
    slug: 'raleigh-durham',
    city: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    airport: 'Raleigh-Durham International (RDU)',
    airportCode: 'RDU',
    desc: 'Bespoke executive transportation covering Raleigh, Durham, Chapel Hill, Research Triangle Park, and RDU Airport.',
    image:
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
    routes: [
      'Research Triangle Park (RTP)',
      'Duke & Chapel Hill',
      'North Hills Executive',
      'Pinehurst Mobility',
    ],
    detail: {
      intro:
        'The Triangle is our home market. We cover RDU, Research Triangle Park, the universities and the North Hills executive corridor, along with regional runs to Charlotte, Pinehurst and Richmond.',
      neighbourhoods: [
        'Downtown Raleigh & North Hills',
        'Research Triangle Park (RTP)',
        'Durham & Duke University',
        'Chapel Hill & UNC',
        'Cary, Apex & Wake Forest',
      ],
      fbos: ['Signature Aviation RDU', 'TAC Air RDU', 'Landmark Aviation'],
    },
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((location) => location.slug === slug);
