import React from 'react';
import { motion } from 'framer-motion';
import { ReservationWidget } from './ReservationWidget';

interface HeroProps {
  onOpenReservation: (data?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#FAF8F5] dark:bg-[#0F0F0F] transition-colors duration-500">
      {/* Background Video Layer — YouTube Embed (MY6KbNWHE2k) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/MY6KbNWHE2k?autoplay=1&mute=1&controls=0&loop=1&playlist=MY6KbNWHE2k&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
            title="ITP Chauffeur Luxury Background Video"
            className="w-[300vw] h-[300vh] min-w-[100%] min-h-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none filter brightness-[0.7] dark:brightness-[0.4] contrast-[1.1] transition-all duration-1000"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/75 dark:from-[#0F0F0F] dark:via-[#0F0F0F]/70 dark:to-black/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto flex flex-col items-center pt-4 pb-6">
        {/* Hero Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mb-10 sm:mb-14"
        >
          {/* Main Headline — PP Fragment Glare */}
          <h1 className="font-serif font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            Leading Private Chauffeur <br className="hidden sm:inline" />
            <span className="text-white font-light drop-shadow-md">Tracking &amp; Safety</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Dedicated RDU Airport Concierge, Real-Time FAA Flight Radar Synchronization, &amp; Bespoke Executive Mobility.
          </p>

          {/* Centered Pill Button CTA */}
          <button
            onClick={() => onOpenReservation()}
            className="px-9 py-3.5 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all shadow-2xl cursor-pointer hover:scale-105"
          >
            GET STARTED TODAY
          </button>
        </motion.div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full mt-2"
        >
          <ReservationWidget onSelectBooking={onOpenReservation} />
        </motion.div>
      </div>
    </section>
  );
};
