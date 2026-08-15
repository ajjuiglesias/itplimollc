'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { AmbientVideo } from './ui/AmbientVideo';

/**
 * The client's own footage, shown in the aspect ratio it was shot in.
 *
 * These are 9:16 phone clips. Rather than crop them into a landscape band —
 * which throws away most of the frame and needs a ~1.8x upscale — they run as
 * upright panels, which is also the shape that reads as "filmed on location"
 * rather than "stock". Trimmed and encoded by scripts/encode-video.mjs.
 *
 * Captions describe only what is visibly in each shot.
 */
const clips = [
  {
    src: '/video/fleet-lineup.mp4',
    poster: '/video/fleet-lineup-poster.jpg',
    alt: 'ITP Limo SUVs staged outside a glass office tower',
    label: 'The Fleet',
    caption: 'Five 2026 vehicles, staged and ready.',
  },
  {
    src: '/video/arrival-luggage.mp4',
    poster: '/video/arrival-luggage-poster.jpg',
    alt: 'A chauffeur loading luggage into an ITP Limo Suburban at a hotel entrance',
    label: 'The Arrival',
    caption: 'Door held, luggage handled.',
  },
  {
    src: '/video/airport-transfer.mp4',
    poster: '/video/airport-transfer-poster.jpg',
    alt: 'An ITP Limo vehicle on approach to the airport terminal',
    label: 'The Airport Run',
    caption: 'Scheduled around your flight.',
  },
];

export const InMotionSection: React.FC = () => {
  return (
    <section className="border-t border-black/5 bg-[#FAF8F5] py-28 transition-colors duration-500 sm:py-36 dark:border-white/5 dark:bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Filmed On Location"
          title="ITP in motion."
          subtitle="Our own vehicles and our own chauffeurs — no stock footage."
          className="mb-16 sm:mb-20"
        />

        {/*
          Scroll-snap rail below sm so the panels keep their height instead of
          being squeezed three-across; a plain grid from sm upward.
        */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0">
          {clips.map((clip, idx) => (
            <motion.figure
              key={clip.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[78vw] shrink-0 snap-center sm:w-auto"
            >
              <AmbientVideo
                src={clip.src}
                poster={clip.poster}
                alt={clip.alt}
                lazy
                className="aspect-[9/16] rounded-[28px] border border-black/10 shadow-2xl dark:border-white/10"
                mediaClassName="brightness-[0.95]"
              />

              <figcaption className="mt-5">
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  {String(idx + 1).padStart(2, '0')} — {clip.label}
                </span>
                <p className="mt-1.5 font-serif text-xl text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                  {clip.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
