import React from 'react';
import { Car } from 'lucide-react';

interface VehicleImageProps {
  src?: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Vehicle photograph, or an honest placeholder when none exists.
 *
 * These are environmental photographs rather than cutouts, so they fill the
 * frame and take a slight darkening to keep any overlaid label legible — the
 * same treatment the homepage gives its editorial imagery.
 */
export const VehicleImage: React.FC<VehicleImageProps> = ({
  src,
  alt,
  className = '',
  children,
}) => (
  <div
    className={`relative overflow-hidden rounded-[32px] border border-black/10 bg-[#111111] shadow-2xl dark:border-white/10 ${className}`}
  >
    {src ? (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover brightness-[0.88] contrast-[1.04] transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </>
    ) : (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#1A1A1A] to-[#0B0B0B]">
        <Car className="h-8 w-8 text-white/25" />
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/35">
          Photography to follow
        </span>
      </div>
    )}

    {children}
  </div>
);
