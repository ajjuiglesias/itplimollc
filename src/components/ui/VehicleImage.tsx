import React from 'react';
import { Car } from 'lucide-react';

interface VehicleImageProps {
  src?: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Vehicle imagery, or an honest placeholder when none exists.
 *
 * The client's vehicle shots are cutouts on transparency, not location
 * photography, so they are contained rather than cropped and are never
 * darkened — a filter that suits a photograph would just dull the paint. They
 * sit on a soft radial pedestal so the silhouette has something to stand on.
 */
export const VehicleImage: React.FC<VehicleImageProps> = ({
  src,
  alt,
  className = '',
  children,
}) => (
  <div
    className={`relative overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-b from-[#F2EFE9] to-[#E4DFD6] dark:border-white/10 dark:from-[#1E1E1E] dark:to-[#0C0C0C] ${className}`}
  >
    {src ? (
      <>
        {/* Pedestal glow, so the cutout does not float on a flat panel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_70%,rgba(0,0,0,0.10)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_60%_70%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="relative h-full w-full object-contain p-6 transition-transform duration-[1200ms] group-hover:scale-[1.03] sm:p-10"
        />
      </>
    ) : (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <Car className="h-8 w-8 text-black/25 dark:text-white/25" />
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-black/35 dark:text-white/35">
          Photography to follow
        </span>
      </div>
    )}

    {children}
  </div>
);
