'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

interface Summary {
  pickup?: string;
  dropoff?: string;
  when?: string;
  passengers?: string;
}

/**
 * Echoes back whatever the hero form carried into /book.
 *
 * Serves two purposes: it confirms to the visitor that their details made it
 * across, and if Moovs ever changes their prefill contract it leaves the entered
 * details visible on screen rather than silently losing them.
 *
 * Reads from the live query string on mount so the page stays static.
 */
export const BookingSummary: React.FC = () => {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pickup = params.get('pickup')?.trim();

    if (!pickup) return;

    const date = params.get('date');
    const time = params.get('time');

    let when: string | undefined;
    if (date) {
      const stamp = new Date(`${date}T${time && /^\d{2}:\d{2}$/.test(time) ? time : '00:00'}`);
      if (!Number.isNaN(stamp.getTime())) {
        when = stamp.toLocaleString(undefined, {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          ...(time ? { hour: 'numeric', minute: '2-digit' } : {}),
        });
      }
    }

    setSummary({
      pickup,
      dropoff: params.get('dropoff')?.trim() || undefined,
      when,
      passengers: params.get('passengers')?.trim() || undefined,
    });
  }, []);

  if (!summary) return null;

  return (
    <div className="mb-8 border-y border-black/10 py-6 dark:border-white/10">
      <span className="mb-4 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
        Your details
      </span>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <span className="flex items-center gap-3">
          <MapPin className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="font-serif text-lg text-[#171717] sm:text-xl dark:text-[#F8F6F2]">
            {summary.pickup}
          </span>
        </span>

        {summary.dropoff && (
          <>
            <ArrowRight className="hidden h-4 w-4 text-[#888888] sm:block" />
            <span className="font-serif text-lg text-[#171717] sm:text-xl dark:text-[#F8F6F2]">
              {summary.dropoff}
            </span>
          </>
        )}

        {summary.when && (
          <span className="flex items-center gap-2 text-sm text-[#524E48] dark:text-[#CCCCCC]">
            <Calendar className="h-3.5 w-3.5 text-[#888888]" />
            {summary.when}
          </span>
        )}

        {summary.passengers && (
          <span className="flex items-center gap-2 text-sm text-[#524E48] dark:text-[#CCCCCC]">
            <Users className="h-3.5 w-3.5 text-[#888888]" />
            {summary.passengers} passengers
          </span>
        )}
      </div>
    </div>
  );
};
