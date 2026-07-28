import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Clock, MapPin, Users, Plane, ShieldCheck, ArrowRight, ArrowLeft, Baby } from 'lucide-react';
import { ServiceType, Vehicle } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, initialData }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceType, setServiceType] = useState<ServiceType>('airport');
  const [pickup, setPickup] = useState('RDU International Airport (RDU)');
  const [dropoff, setDropoff] = useState('Downtown Raleigh');
  const [date, setDate] = useState('2026-07-28');
  const [time, setTime] = useState('14:30');
  const [passengers, setPassengers] = useState(2);
  const [flightNum, setFlightNum] = useState('DL 1842');
  const [childSeat, setChildSeat] = useState(false);
  const [childSeatType, setChildSeatType] = useState<'infant' | 'convertible' | 'booster'>('infant');
  const [selectedVehicle, setSelectedVehicle] = useState('maybach-s580');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (initialData.serviceType) setServiceType(initialData.serviceType);
      if (initialData.pickupLocation) setPickup(initialData.pickupLocation);
      if (initialData.dropoffLocation) setDropoff(initialData.dropoffLocation);
      if (initialData.date) setDate(initialData.date);
      if (initialData.time) setTime(initialData.time);
      if (initialData.passengers) setPassengers(initialData.passengers);
      if (initialData.flightNumber) setFlightNum(initialData.flightNumber);
      if (initialData.childSeatRequired !== undefined) setChildSeat(initialData.childSeatRequired);
      if (initialData.childSeatType) setChildSeatType(initialData.childSeatType);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const vehicles: Vehicle[] = [
    {
      id: 'maybach-s580',
      name: 'Mercedes-Maybach S 580',
      category: 'First-Class Sedan',
      tagline: 'Pinnacle Luxury',
      passengers: 3,
      luggage: 3,
      image: '/images/maybach.png',
      rateEstimate: '$145 / hr',
      description: 'Extended wheelbase, executive recline seats, Burmester® 4D audio, starlight ceiling.',
      features: ['Executive Captain Seats', 'Burmester® 4D Sound', 'Child Seat Anchors'],
    },
    {
      id: 'escalade-esv',
      name: 'Cadillac Escalade ESV Onyx',
      category: 'Executive Luxury SUV',
      tagline: 'Commanding Space',
      passengers: 6,
      luggage: 6,
      image: '/images/escalade.png',
      rateEstimate: '$135 / hr',
      description: 'Extended VIP SUV, quad-zone climate, supreme legroom and baggage space.',
      features: ['Extended Luggage Bay', 'Quad Climate', 'Child Safety Seats'],
    },
    {
      id: 'sprinter-jet',
      name: 'Mercedes Sprinter Jet Edition',
      category: 'Ultra-VIP Jet Van',
      tagline: 'Private Jet On Wheels',
      passengers: 10,
      luggage: 10,
      image: '/images/sprinter.png',
      rateEstimate: '$195 / hr',
      description: 'Starlight ceiling, Maybach captain chairs, beverage bar, 43" Smart TV.',
      features: ['Starlight Ceiling', 'Bar Refreshments', 'Conference Desk'],
    },
  ];

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#FAF8F5] dark:bg-[#161616] border border-black/15 dark:border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-[#F8F6F2] hover:bg-[#171717] dark:hover:bg-white hover:text-white dark:hover:text-[#0F0F0F] transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 px-4 space-y-6">
            <div className="w-20 h-20 rounded-full bg-black/5 dark:bg-white/10 border border-black/20 dark:border-white/20 text-[#171717] dark:text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-[0.3em] text-[#66625C] dark:text-[#A0A0A0] font-semibold">
              Reservation Dispatched
            </span>

            <h3 className="font-serif text-4xl text-[#171717] dark:text-[#F8F6F2]">
              Thank You, {name || 'Valued Client'}
            </h3>

            <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] max-w-md mx-auto font-light leading-relaxed">
              Your chauffeur reservation request has been dispatched to our 24/7 Concierge Control. A confirmation itinerary and chauffeur assignment SMS will arrive at <span className="text-[#171717] dark:text-white font-medium">{email || 'your email'}</span> shortly.
            </p>

            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 max-w-sm mx-auto text-xs text-[#171717] dark:text-[#F8F6F2] space-y-1 text-left border border-black/5 dark:border-white/5">
              <p><span className="text-[#66625C] dark:text-[#A0A0A0]">Selected Vehicle:</span> <span className="font-semibold text-[#171717] dark:text-white">{vehicles.find((v) => v.id === selectedVehicle)?.name}</span></p>
              <p><span className="text-[#66625C] dark:text-[#A0A0A0]">Pickup Location:</span> {pickup}</p>
              <p><span className="text-[#66625C] dark:text-[#A0A0A0]">Date & Time:</span> {date} at {time}</p>
              {flightNum && <p><span className="text-[#66625C] dark:text-[#A0A0A0]">Flight #:</span> {flightNum}</p>}
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-8 py-3.5 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all cursor-pointer shadow-md"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <div>
            {/* Header Stepper */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#66625C] dark:text-[#A0A0A0] font-semibold">
                Step {step} of 3 • Direct Concierge Portal
              </span>
              <h3 className="font-serif text-3xl text-[#171717] dark:text-[#F8F6F2] mt-1">
                {step === 1 && 'Trip Itinerary & Details'}
                {step === 2 && 'Select Your Flagship Vehicle'}
                {step === 3 && 'Passenger Contact & Confirmation'}
              </h3>

              {/* Progress Bar */}
              <div className="flex items-center gap-2 mt-4">
                <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#171717] dark:bg-white' : 'bg-black/10 dark:bg-white/10'}`} />
                <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#171717] dark:bg-white' : 'bg-black/10 dark:bg-white/10'}`} />
                <div className={`h-1 flex-1 rounded-full ${step >= 3 ? 'bg-[#171717] dark:bg-white' : 'bg-black/10 dark:bg-white/10'}`} />
              </div>
            </div>

            {/* Step 1: Itinerary */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <button
                    type="button"
                    onClick={() => setServiceType('airport')}
                    className={`py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      serviceType === 'airport' ? 'bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F]' : 'text-[#66625C] dark:text-[#B8B8B8]'
                    }`}
                  >
                    Airport Transfer
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('point-to-point')}
                    className={`py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      serviceType === 'point-to-point' ? 'bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F]' : 'text-[#66625C] dark:text-[#B8B8B8]'
                    }`}
                  >
                    Point to Point
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('hourly')}
                    className={`py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      serviceType === 'hourly' ? 'bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F]' : 'text-[#66625C] dark:text-[#B8B8B8]'
                    }`}
                  >
                    Hourly Charter
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Drop-off Location
                    </label>
                    <input
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Passengers / Guests
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm cursor-pointer"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={4}>4 Guests (Sedan / SUV)</option>
                      <option value={6}>6 Guests (Large SUV)</option>
                      <option value={10}>10 Guests (Executive Jet Van)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Flight # (Radar Tracking)
                    </label>
                    <input
                      type="text"
                      value={flightNum}
                      onChange={(e) => setFlightNum(e.target.value)}
                      placeholder="e.g. DL 1842"
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>
                </div>

                {/* Child Seat Section */}
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Baby className="w-5 h-5 text-[#171717] dark:text-white" />
                    <div>
                      <p className="text-xs font-semibold text-[#171717] dark:text-[#F8F6F2]">Require Luxury Child Safety Seat?</p>
                      <p className="text-[11px] text-[#66625C] dark:text-[#B8B8B8]">Sanitized Nuna / Cybex seats pre-installed by chauffeur</p>
                    </div>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={childSeat}
                      onChange={(e) => setChildSeat(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-black/10 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#171717] dark:peer-checked:bg-white" />
                  </label>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-8 py-3 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Choose Vehicle</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Vehicle Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {vehicles.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedVehicle === v.id
                          ? 'bg-black/5 dark:bg-white/10 border-[#171717] dark:border-white shadow-md'
                          : 'bg-white dark:bg-[#0F0F0F] border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold">{v.category}</span>
                        <h4 className="font-serif text-xl text-[#171717] dark:text-[#F8F6F2] font-normal mt-1">{v.name}</h4>
                        <img src={v.image} alt={v.name} className="w-full h-28 object-cover rounded-xl my-3" />
                        <p className="text-xs text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed">{v.description}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                        <span className="font-serif text-lg text-[#171717] dark:text-[#F8F6F2]">{v.rateEstimate}</span>
                        {selectedVehicle === v.id && <CheckCircle2 className="w-5 h-5 text-[#171717] dark:text-white" />}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full border border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2] text-xs uppercase tracking-widest font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    onClick={() => setStep(3)}
                    className="px-8 py-3 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Contact Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="concierge@executive.com"
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Mobile Phone (For Dispatch SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (919) 555-0199"
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0] font-semibold mb-1.5 block">
                      Special Requests / Amenities
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Sparkling water, extra luggage help..."
                      className="w-full bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#171717] dark:text-[#F8F6F2] outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full border border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2] text-xs uppercase tracking-widest font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-10 py-3.5 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Dispatch Reservation Request</span>
                    <ShieldCheck className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
