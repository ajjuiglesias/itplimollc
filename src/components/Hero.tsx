'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AmbientVideo } from './ui/AmbientVideo';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88svh] sm:min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-20 sm:pb-16 overflow-hidden bg-[#FAF8F5] dark:bg-[#0F0F0F] transition-colors duration-500">
      {/*
        Background media. The client's footage is 9:16, so it is used where the
        viewport is portrait and nothing has to be cropped or upscaled — on
        narrow screens the chauffeur clip fills the frame natively. Wide screens
        get a landscape still lifted from the same shoot (see
        scripts/encode-video.mjs) rather than a 1.8x upscale of a vertical clip.

        <picture> gates the two posters by media so only one is ever fetched;
        AmbientVideo gates the 1.5MB clip the same way in JS.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/hero-fleet-tower.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/video/hero-chauffeur-poster.jpg"
            alt="An ITP Limo chauffeur opening the rear door of a black Chevrolet Suburban"
            className="absolute inset-0 h-full w-full object-cover filter brightness-[0.7] dark:brightness-[0.4] contrast-[1.1]"
          />
        </picture>

        <AmbientVideo
          src="/video/hero-chauffeur.mp4"
          poster="/video/hero-chauffeur-poster.jpg"
          alt=""
          media="(max-width: 1023px)"
          className="absolute inset-0 h-full w-full lg:hidden"
          mediaClassName="filter brightness-[0.7] dark:brightness-[0.4] contrast-[1.1]"
        />

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
            <span className="text-white font-light drop-shadow-md">Tracking & Safety</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Dedicated RDU Airport Concierge, Real-Time FAA Flight Radar Synchronization, & Bespoke Executive Mobility.
          </p>

          {/* No booking fields here by design. The Moovs embed on /book collects
              the whole trip, so any field repeated in the hero is a field the
              visitor fills twice. The embed itself stays off this page because
              its bundle is ~4.5MB and would wreck hero LCP. */}
          <div className="flex w-full flex-col items-center gap-5">
            <Link
              href="/book"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-[#0F0F0F] text-xs uppercase tracking-[0.25em] font-extrabold shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:bg-[#F2EFE9] hover:scale-[1.02] active:scale-100 transition-all duration-300"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href="tel:17818640618"
              className="inline-flex min-h-[44px] items-center gap-2.5 py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] font-semibold text-white/70 transition-opacity hover:opacity-100"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Or call 24/7 dispatch<span className="hidden sm:inline"> — +1 (781) 864-0618</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
