'use client';

import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { buildDudaTrip, withPrefill } from '@/lib/booking';

export const MOOVS_IFRAME_SRC = 'https://customer.moovs.app/itp-limo-llc/iframe';

interface MoovsBookingProps {
  className?: string;
}

/**
 * Moovs booking embed, with prefill carried through from our own forms.
 *
 * Two constraints from their implementation shape this component:
 *
 * 1. Moovs does not post its content height to the parent frame — there is no
 *    parent.postMessage in their bundle — so the iframe cannot auto-size. It
 *    gets a tall viewport-relative height and scrolls internally.
 * 2. Their bundle is ~4.5MB, so this must never sit on the homepage.
 *
 * The src is resolved on the client from the current query string rather than
 * during render. That keeps this page statically prerenderable and avoids the
 * iframe loading once without prefill and then reloading with it.
 */
export const MoovsBooking: React.FC<MoovsBookingProps> = ({ className = '' }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSrc(withPrefill(MOOVS_IFRAME_SRC, buildDudaTrip(params)));
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-white ${className}`}
      style={{ height: 'min(1100px, max(720px, 85vh))' }}
    >
      {(!src || !loaded) && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#FAF8F5]">
          <Loader2 className="h-6 w-6 animate-spin text-[#171717]" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C]">
            Loading reservation system
          </span>
        </div>
      )}

      {src && (
        <iframe
          src={src}
          title="ITP Limo reservation system"
          onLoad={() => setLoaded(true)}
          // Booking flows can take card details, so payment must be permitted.
          allow="payment; clipboard-write; geolocation"
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-full w-full border-0 bg-white"
        />
      )}
    </div>
  );
};
