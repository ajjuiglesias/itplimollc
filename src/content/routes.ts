/*
 * Long-distance route pages.
 *
 * These exist because the demand for these journeys sits on the ROUTE, not on
 * either endpoint: "rdu to pinehurst" is 210/mo at difficulty 0 with an $8.41
 * CPC — the highest of any North Carolina term measured — while "car service
 * pinehurst nc" is 10/mo. Same story for the coast: "rdu to wilmington" is
 * 210/mo at difficulty 0.
 *
 * The first page of results for both is held by booking aggregators rather than
 * by operators, which is the opening. A real operator page with genuine journey
 * times, airport detail and honest booking guidance beats a generic listing.
 *
 * Every factual claim below traces to something checked:
 *   - Journey times: published drive times, stated as approximate.
 *   - Airports served: the client's own list (RDU, SOP, FAY for Pinehurst;
 *     ILM plus the RDU run for Wilmington).
 *   - Pinehurst Resort's shuttle terms: the resort's own published FAQ.
 * Nothing here claims a partnership with the resort or any venue.
 */
export interface Route {
  slug: string;
  from: string;
  to: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  hero: { title: string; intro: string };
  /** Hard facts, rendered as a spec strip. */
  facts: { label: string; value: string }[];
  /** The argument for taking this privately. */
  reasons: { title: string; body: string }[];
  /** Longer prose under the fold. */
  detail: { title: string; body: string }[];
  /** The market pages this route connects, for internal linking. */
  relatedLocations: string[];
}

export const routes: Route[] = [
  {
    slug: 'rdu-to-pinehurst',
    from: 'RDU',
    to: 'Pinehurst',
    metaTitle: 'RDU to Pinehurst Car Service | Private Transfer | ITP Limo',
    metaDescription:
      'Private car service from RDU to Pinehurst — roughly 1 hour 15 minutes door to door, with golf clubs planned into the booking. Also serving Moore County and Fayetteville.',
    image: '/images/lincoln-aviator.jpg',
    hero: {
      title: 'RDU to Pinehurst, door to door.',
      intro:
        'The drive from Raleigh-Durham to Pinehurst is about an hour and a quarter, and it is the part of a golf trip most likely to go wrong — three flights landing at three different times, clubs that will not fit whatever was booked, and a tee time that does not move. We take the whole transfer as one job.',
    },
    facts: [
      { label: 'Journey time', value: '≈ 1 hr 15 min' },
      { label: 'Airports served', value: 'RDU · SOP · FAY' },
      { label: 'Vehicles', value: 'Up to 14 passengers' },
      { label: 'Direction', value: 'Both ways' },
    ],
    reasons: [
      {
        title: 'Your clubs are part of the booking',
        body: 'Four players and four sets of clubs is a vehicle decision, not something to discover at the kerb. We size the car to the bags as well as the bodies.',
      },
      {
        title: 'The flight is tracked, so the transfer moves with it',
        body: 'A group rarely lands together. We watch each arrival and stage the pickup around the aircraft rather than the time somebody guessed at when booking.',
      },
      {
        title: 'One vehicle, one arrival',
        body: 'The Sprinter carries fourteen. A foursome, a company outing or a wedding party reaches the resort together instead of trickling in across an hour.',
      },
    ],
    detail: [
      {
        title: 'Which airport you should actually fly into',
        body: 'RDU has the most flights and is the usual answer, at roughly an hour and a quarter from the village. Moore County (SOP) sits about ten minutes away and takes most of the private traffic. Fayetteville Regional (FAY) is the third option and is sometimes the better connection. We drive all three, so the choice can be made on flights rather than on ground transport.',
      },
      {
        title: 'Booking ahead, and why it matters here',
        body: 'Pinehurst Resort runs its own airport shuttle, and it asks for 72 hours notice. That is a long window when a flight moves the night before. We are a private operator dispatching from Wake Forest, so we ask for reasonable notice rather than three days — but the Sandhills are a service area rather than a second depot, and a booking made early is a booking held.',
      },
      {
        title: 'The return leg',
        body: 'The run works in both directions, and the return is the one people forget. A morning tee time and an afternoon flight is a tight sequence; we build the departure back from the gate rather than forward from the clubhouse.',
      },
    ],
    relatedLocations: ['pinehurst', 'raleigh'],
  },
  {
    slug: 'raleigh-to-wilmington',
    from: 'Raleigh',
    to: 'Wilmington',
    metaTitle: 'Raleigh to Wilmington Car Service | RDU Transfer | ITP Limo',
    metaDescription:
      'Private car service from Raleigh and RDU to Wilmington and the coast — roughly 2 hours door to door, for beach houses, weddings and corporate travel. Both directions.',
    image: '/images/gulfstream_sprinter.jpg',
    hero: {
      title: 'Raleigh to Wilmington, in one car.',
      intro:
        'Two hours of coastal highway, door to door. It is the run people take when the flight lands at RDU instead of ILM, when the beach house is the destination rather than a hotel, or when a wedding party needs to reach the coast together and nobody wants to drive.',
    },
    facts: [
      { label: 'Journey time', value: '≈ 2 hrs' },
      { label: 'Airports served', value: 'RDU · ILM' },
      { label: 'Vehicles', value: 'Up to 14 passengers' },
      { label: 'Direction', value: 'Both ways' },
    ],
    reasons: [
      {
        title: 'No hire car at the other end',
        body: 'A beach week rarely needs a car once you arrive, and a rental sits on a driveway for six days earning parking tickets. Arrive driven, leave driven.',
      },
      {
        title: 'Luggage for a fortnight, not an afternoon',
        body: 'Coastal trips travel heavy. The Sprinter takes fourteen passengers and twenty bags, which is the difference between one vehicle and three.',
      },
      {
        title: 'The whole party arrives together',
        body: 'Wedding groups and families reach the house at one time, in one mood, without a convoy of cars trying to hold formation on the highway.',
      },
    ],
    detail: [
      {
        title: 'When RDU beats ILM',
        body: 'Wilmington International is small, quick to clear and often the right answer. But it has fewer routes, and a connection through RDU is frequently cheaper or simply the only sensible option — at which point the ground leg becomes two hours rather than fifteen minutes. We run that leg as a normal service rather than an exception.',
      },
      {
        title: 'Where on the coast we go',
        body: 'Downtown Wilmington, Wrightsville Beach, Carolina Beach and Kure Beach, Figure Eight Island, Bald Head Island, Leland and across Brunswick and Pender counties, including Hampstead. If the address is on that stretch of coast, the run is routine.',
      },
      {
        title: 'Weddings and long weekends',
        body: 'Coastal weddings move people in waves — the party on Friday, the guests on Saturday, everyone home on Sunday. We plan those as one schedule rather than as separate bookings that happen to share a postcode.',
      },
    ],
    relatedLocations: ['wilmington', 'raleigh'],
  },
];

export const getRoute = (slug: string): Route | undefined =>
  routes.find((route) => route.slug === slug);
