'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, MapPin } from 'lucide-react';
import { buildBookingHref } from '@/lib/booking';

/**
 * Single-field booking entry.
 *
 * Deliberately asks for one thing. The full trip is collected by the Moovs
 * embed on /book, so mirroring its fields here would mean a visitor filling the
 * same form twice whenever prefill degrades — an unresolvable address, or Moovs
 * changing their `dudaTrip` contract. One field keeps the commitment effect of
 * starting the booking without creating anything meaningful to lose.
 *
 * An empty field is not an error; it simply routes to /book unfilled.
 */
export const HeroBookingBar: React.FC = () => {
  const router = useRouter();
  const [pickup, setPickup] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(buildBookingHref({ pickup }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-2 rounded-[28px] border border-white/25 bg-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 sm:flex-row sm:items-center sm:rounded-full">
        <label className="flex flex-1 items-center gap-3 px-4 py-3 sm:px-5 sm:py-0">
          <MapPin className="h-4 w-4 shrink-0 text-white/70" />
          <span className="sr-only">Pickup location</span>
          <input
            type="text"
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            placeholder="Pickup location — address, airport or hotel"
            autoComplete="off"
            className="w-full bg-transparent text-sm font-medium text-white placeholder:text-white/55 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0F0F0F] transition-all duration-300 hover:bg-[#F2EFE9] hover:scale-[1.02] active:scale-100 cursor-pointer"
        >
          <span>Book Your Ride</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
};
