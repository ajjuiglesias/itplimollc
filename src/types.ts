export type ServiceType = 'airport' | 'point-to-point' | 'hourly' | 'events' | 'wedding';

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
  description: string;
  rateEstimate: string;
}

export interface FlightStatusDemo {
  flightNumber: string;
  airline: string;
  origin: string;
  scheduledArrival: string;
  estimatedArrival: string;
  status: 'On Time' | 'In Air' | 'Early Arrival' | 'Land Approach';
  gate: string;
  chauffeurStatus: string;
}

export interface ReservationState {
  serviceType: ServiceType;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: number;
  flightNumber: string;
  selectedVehicleId: string;
  childSeatRequired: boolean;
  childSeatType: 'none' | 'infant' | 'convertible' | 'booster';
  hourlyDuration: number;
  specialNotes: string;
  fullName: string;
  email: string;
  phone: string;
}
