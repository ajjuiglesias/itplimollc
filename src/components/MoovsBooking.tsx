'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export const MOOVS_IFRAME_SRC = 'https://customer.moovs.app/itp-limo-llc/iframe';

interface MoovsBookingProps {
  /** Defer loading until the user opts in. Keeps the 4.5MB bundle off first paint. */
  deferred?: boolean;
  className?: string;
}

/**
 * Moovs booking embed.
 *
 * Moovs serves a client-rendered SPA and does NOT post its content height to the
 * parent frame — there is no parent.postMessage anywhere in their bundle — so the
 * iframe cannot auto-size. We give it a deliberately tall viewport-relative height
 * and let it scroll internally rather than clipping the flow.
 *
 * The bundle is ~4.5MB, so this should never sit on the homepage. loading="lazy"
 * keeps it out of the critical path even on the pages that do embed it.
 */
export const MoovsBooking: React.FC<MoovsBookingProps> = ({
  deferred = false,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-white ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#FAF8F5]">
          <Loader2 className="h-6 w-6 animate-spin text-[#171717]" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C]">
            Loading reservation system
          </span>
        </div>
      )}

      <iframe
        src={MOOVS_IFRAME_SRC}
        title="ITP Limo reservation system"
        onLoad={() => setLoaded(true)}
        loading={deferred ? 'lazy' : 'eager'}
        // Booking flows can take card details, so payment must be permitted.
        allow="payment; clipboard-write; geolocation"
        referrerPolicy="strict-origin-when-cross-origin"
        className="block w-full border-0 bg-white"
        // Tall enough that the multi-step flow is usable without the inner
        // scrollbar doing all the work.
        style={{ height: 'min(1100px, max(720px, 85vh))' }}
      />
    </div>
  );
};
