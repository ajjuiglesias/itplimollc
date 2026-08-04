/**
 * Prefill bridge between our own forms and the Moovs reservation system.
 *
 * Moovs reads a JSON-encoded `dudaTrip` query parameter (their Duda website
 * builder integration) and hydrates the booking form from it. Their handler is:
 *
 *   JSON.parse(searchParams.get("dudaTrip"))
 *
 * with no try/catch — malformed JSON would throw inside their app — so every
 * value we emit here must be valid, encoded JSON. An absent parameter is safe,
 * because JSON.parse(null) yields null rather than throwing.
 *
 * Recognised shape, derived from their bundle's useDudaTrip hook:
 *   { stops: [{ description }], dateTime, totalGroupSize, tripNote }
 * Only the first stop receives the dateTime; the rest are left undefined.
 */

export interface DudaTrip {
  stops: { description: string }[];
  dateTime?: string;
  totalGroupSize?: number;
  tripNote?: string;
}

/** Fields our own hero form collects. */
export interface BookingFields {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
  flightNumber?: string;
  childSeat?: string;
  serviceType?: string;
  hours?: number;
}

/** Query keys used on our own /book URL. Kept readable for shareable links. */
const KEYS = {
  pickup: 'pickup',
  dropoff: 'dropoff',
  date: 'date',
  time: 'time',
  passengers: 'passengers',
  flight: 'flight',
  childSeat: 'childSeat',
  service: 'service',
  hours: 'hours',
} as const;

/** Builds the /book href our forms navigate to. */
export function buildBookingHref(fields: Partial<BookingFields>): string {
  const params = new URLSearchParams();

  const set = (key: string, value: unknown) => {
    if (value === undefined || value === null) return;
    const str = String(value).trim();
    if (str) params.set(key, str);
  };

  set(KEYS.pickup, fields.pickup);
  set(KEYS.dropoff, fields.dropoff);
  set(KEYS.date, fields.date);
  set(KEYS.time, fields.time);
  set(KEYS.passengers, fields.passengers);
  set(KEYS.flight, fields.flightNumber);
  set(KEYS.childSeat, fields.childSeat);
  set(KEYS.service, fields.serviceType);
  set(KEYS.hours, fields.hours);

  const query = params.toString();
  return query ? `/book?${query}` : '/book';
}

/**
 * Combines a `YYYY-MM-DD` date and `HH:MM` time into an ISO timestamp in the
 * visitor's own timezone. Returns undefined rather than an Invalid Date, so a
 * partial form never produces a broken value for Moovs.
 */
function toIsoDateTime(date?: string | null, time?: string | null): string | undefined {
  if (!date) return undefined;

  const stamp = new Date(`${date}T${time && /^\d{2}:\d{2}$/.test(time) ? time : '00:00'}`);
  return Number.isNaN(stamp.getTime()) ? undefined : stamp.toISOString();
}

/**
 * Turns our /book query parameters into Moovs' trip payload. Returns null when
 * there is nothing worth prefilling, so the embed loads its default state.
 */
export function buildDudaTrip(params: URLSearchParams): DudaTrip | null {
  const pickup = params.get(KEYS.pickup)?.trim();
  const dropoff = params.get(KEYS.dropoff)?.trim();

  // Without at least a pickup there is nothing for their address lookup to do.
  if (!pickup) return null;

  const stops: { description: string }[] = [{ description: pickup }];
  if (dropoff) stops.push({ description: dropoff });

  const passengers = Number(params.get(KEYS.passengers));

  // Details Moovs has no dedicated field for still reach dispatch as a note.
  const noteParts: string[] = [];
  const flight = params.get(KEYS.flight)?.trim();
  const childSeat = params.get(KEYS.childSeat)?.trim();
  const service = params.get(KEYS.service)?.trim();
  const hours = params.get(KEYS.hours)?.trim();

  if (service) noteParts.push(`Service: ${service}`);
  if (hours) noteParts.push(`Duration: ${hours} hours`);
  if (flight) noteParts.push(`Flight: ${flight}`);
  if (childSeat) noteParts.push(`Child seat: ${childSeat}`);

  const trip: DudaTrip = { stops };

  const dateTime = toIsoDateTime(params.get(KEYS.date), params.get(KEYS.time));
  if (dateTime) trip.dateTime = dateTime;

  if (Number.isFinite(passengers) && passengers > 0) trip.totalGroupSize = passengers;
  if (noteParts.length) trip.tripNote = noteParts.join(' · ');

  return trip;
}

/** Appends the encoded trip to the Moovs embed URL. */
export function withPrefill(baseSrc: string, trip: DudaTrip | null): string {
  if (!trip) return baseSrc;

  try {
    const encoded = encodeURIComponent(JSON.stringify(trip));
    return `${baseSrc}${baseSrc.includes('?') ? '&' : '?'}dudaTrip=${encoded}`;
  } catch {
    // Never risk handing Moovs a value their unguarded JSON.parse would throw on.
    return baseSrc;
  }
}
