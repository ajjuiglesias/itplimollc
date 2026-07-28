import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plane, Baby, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ReservationWidgetProps {
  onSelectBooking: (data: any) => void;
}

export const ReservationWidget: React.FC<ReservationWidgetProps> = ({ onSelectBooking }) => {
  const [serviceType, setServiceType] = useState<'one-way' | 'hourly' | 'airport'>('airport');
  const [pickup, setPickup] = useState('RDU International Airport (RDU)');
  const [dropoff, setDropoff] = useState('Downtown Raleigh / North Hills');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('14:30');
  const [passengers, setPassengers] = useState(2);
  const [flightNum, setFlightNum] = useState('DL 1842');
  const [childSeat, setChildSeat] = useState(false);
  const [childSeatType, setChildSeatType] = useState<'none' | 'infant' | 'convertible' | 'booster'>('none');
  const [hours, setHours] = useState(4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectBooking({
      serviceType: serviceType === 'hourly' ? 'hourly' : 'airport',
      pickupLocation: pickup,
      dropoffLocation: serviceType === 'hourly' ? `${hours} Hours As-Directed` : dropoff,
      date,
      time,
      passengers,
      flightNumber: flightNum,
      childSeatRequired: childSeat,
      childSeatType,
      hourlyDuration: hours,
    });
  };

  const tabStyle = (active: boolean) =>
    `px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
      active
        ? 'bg-white/95 dark:bg-white text-[#0F0F0F] shadow-[0_8px_20px_rgba(0,0,0,0.25),inset_0_1.5px_1px_rgba(255,255,255,1)] border border-white'
        : 'text-[#171717]/80 dark:text-[#E0E0E0] hover:text-[#171717] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/15'
    }`;

  const inputWrapStyle = 'liquid-glass-input p-3 sm:p-3.5 rounded-2xl';

  return (
    <div
      className="w-full text-[#171717] dark:text-[#F8F6F2] rounded-[32px] p-5 sm:p-7 liquid-glass-container transition-all duration-500 relative overflow-hidden"
    >
      {/* Animated Liquid Refraction Background Blobs */}
      <div className="absolute -top-24 left-1/4 w-96 h-48 bg-white/40 dark:bg-white/10 rounded-full blur-3xl pointer-events-none animate-liquid-blob" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-40 bg-white/30 dark:bg-white/5 rounded-full blur-3xl pointer-events-none animate-liquid-blob" style={{ animationDelay: '-6s' }} />

      {/* Top Header & Service Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/50 dark:border-white/15 relative z-10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#171717]/80 dark:text-white/80">
            Instant Reservation Builder
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-[#171717] dark:text-[#F8F6F2] font-semibold mt-0.5 drop-shadow-sm">
            Book Your Chauffeur
          </h3>
        </div>

        {/* Tab Controls — Liquid Glass Segment */}
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/30 dark:bg-white/10 border border-white/60 dark:border-white/20 backdrop-blur-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
          <button type="button" onClick={() => setServiceType('airport')} className={tabStyle(serviceType === 'airport')}>
            Airport Transfer
          </button>
          <button type="button" onClick={() => setServiceType('one-way')} className={tabStyle(serviceType === 'one-way')}>
            Point to Point
          </button>
          <button type="button" onClick={() => setServiceType('hourly')} className={tabStyle(serviceType === 'hourly')}>
            By the Hour
          </button>
        </div>
      </div>

      {/* Main Form Fields — Dedicated 6-Column Grid Layout */}
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.3fr_1.3fr_0.8fr_0.8fr_0.8fr_auto] gap-3.5 items-stretch">
          {/* 1. Pickup Field */}
          <div className={inputWrapStyle}>
            <label className="text-[10px] uppercase tracking-widest text-[#171717]/80 dark:text-[#DDD] font-extrabold flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#171717] dark:text-[#F8F6F2]" />
              Pickup Location
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Address, RDU Airport, Hotel..."
              className="w-full bg-transparent text-sm font-semibold text-[#171717] dark:text-[#F8F6F2] focus:outline-none placeholder:text-[#555] dark:placeholder:text-[#AAA]"
            />
          </div>

          {/* 2. Dropoff / Duration Field */}
          {serviceType === 'hourly' ? (
            <div className={inputWrapStyle}>
              <label className="text-[10px] uppercase tracking-widest text-[#171717]/80 dark:text-[#DDD] font-extrabold flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#171717] dark:text-[#F8F6F2]" />
                Duration
              </label>
              <select
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-semibold text-[#171717] dark:text-[#F8F6F2] focus:outline-none cursor-pointer"
              >
                <option value={3} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">3 Hours As-Directed</option>
                <option value={4} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">4 Hours As-Directed</option>
                <option value={6} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">6 Hours As-Directed</option>
                <option value={8} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">Full Day (8+ Hours)</option>
              </select>
            </div>
          ) : (
            <div className={inputWrapStyle}>
              <label className="text-[10px] uppercase tracking-widest text-[#171717]/80 dark:text-[#DDD] font-extrabold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#171717] dark:text-[#F8F6F2]" />
                Drop-off Location
              </label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Destination Address..."
                className="w-full bg-transparent text-sm font-semibold text-[#171717] dark:text-[#F8F6F2] focus:outline-none placeholder:text-[#555] dark:placeholder:text-[#AAA]"
              />
            </div>
          )}

          {/* 3. Date */}
          <div className={inputWrapStyle}>
            <label className="text-[10px] uppercase tracking-widest text-[#171717]/80 dark:text-[#DDD] font-extrabold flex items-center gap-1 mb-1">
              <Calendar className="w-3 h-3 text-[#171717] dark:text-[#F8F6F2]" />
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-[#171717] dark:text-[#F8F6F2] focus:outline-none cursor-pointer"
            />
          </div>

          {/* 4. Time */}
          <div className={inputWrapStyle}>
            <label className="text-[10px] uppercase tracking-widest text-[#171717]/80 dark:text-[#DDD] font-extrabold flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-[#171717] dark:text-[#F8F6F2]" />
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-[#171717] dark:text-[#F8F6F2] focus:outline-none cursor-pointer"
            />
          </div>

          {/* 5. Guests */}
          <div className={inputWrapStyle}>
            <label className="text-[10px] uppercase tracking-widest text-[#171717]/80 dark:text-[#DDD] font-extrabold flex items-center gap-1 mb-1">
              <Users className="w-3 h-3 text-[#171717] dark:text-[#F8F6F2]" />
              Guests
            </label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-semibold text-[#171717] dark:text-[#F8F6F2] focus:outline-none cursor-pointer"
            >
              <option value={1} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">1 Guest</option>
              <option value={2} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">2 Guests</option>
              <option value={4} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">4 Guests</option>
              <option value={6} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">6 Guests</option>
              <option value={10} className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">10 Guests</option>
            </select>
          </div>

          {/* 6. Liquid Glass High-Contrast CTA Button */}
          <button
            type="button"
            disabled
            className="h-full min-h-[52px] px-7 py-3.5 rounded-2xl bg-[#0F0F0F]/60 dark:bg-white/60 text-white/80 dark:text-[#0F0F0F]/80 text-xs uppercase tracking-[0.2em] font-extrabold flex items-center justify-center gap-2 whitespace-nowrap cursor-not-allowed opacity-70 border border-white/20 dark:border-white/40"
          >
            <span>Coming soon</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Sub-details (Flight # & Child Seat) */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-[#171717] dark:text-[#E0E0E0]">
          <div className="flex flex-wrap items-center gap-4">
            {/* Flight number — liquid glass pill */}
            <label className="inline-flex items-center gap-2 cursor-pointer px-3.5 py-1.5 rounded-xl border border-white/70 dark:border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)] bg-white/55 dark:bg-white/10 backdrop-blur-xl">
              <Plane className="w-3.5 h-3.5 text-[#171717] dark:text-[#F8F6F2]" />
              <span className="text-[11px] font-bold text-[#171717] dark:text-[#F8F6F2]">Flight #:</span>
              <input
                type="text"
                value={flightNum}
                onChange={(e) => setFlightNum(e.target.value)}
                placeholder="e.g. DL 1842"
                className="bg-transparent border-none text-[#171717] dark:text-white text-xs focus:outline-none w-20 font-bold"
              />
            </label>

            {/* Child seat toggle — liquid glass pill */}
            <label className="inline-flex items-center gap-2 cursor-pointer px-3.5 py-1.5 rounded-xl border border-white/70 dark:border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)] bg-white/55 dark:bg-white/10 backdrop-blur-xl">
              <input
                type="checkbox"
                checked={childSeat}
                onChange={(e) => {
                  setChildSeat(e.target.checked);
                  if (!e.target.checked) setChildSeatType('none');
                  else setChildSeatType('infant');
                }}
                className="rounded accent-[#171717] dark:accent-white w-3.5 h-3.5"
              />
              <Baby className="w-3.5 h-3.5 text-[#171717] dark:text-[#F8F6F2]" />
              <span className="text-[11px] text-[#171717] dark:text-[#F8F6F2] font-semibold">Include Child Safety Seat</span>
            </label>

            {childSeat && (
              <select
                value={childSeatType}
                onChange={(e) => setChildSeatType(e.target.value as any)}
                className="border border-white/70 dark:border-white/20 text-[#171717] dark:text-[#F8F6F2] rounded-xl px-3 py-1.5 text-[11px] focus:outline-none font-semibold bg-white/70 dark:bg-white/15 backdrop-blur-xl"
              >
                <option value="infant" className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">Infant Rear-Facing</option>
                <option value="convertible" className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">Convertible Forward</option>
                <option value="booster" className="bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white">Luxury Booster</option>
              </select>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#171717] dark:text-[#F8F6F2] drop-shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>FAA Flight Delay Monitoring Included</span>
          </div>
        </div>
      </form>
    </div>
  );
};
