'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { locations as markets } from '@/content/locations';
import { BookNowButton, OrCallNote } from './ui/CallDispatchButton';

export const LocationsSection: React.FC = () => {
  const locations = markets.map((m) => ({
    city: m.city,
    state: m.state,
    airport: `${m.airport} (${m.airportCode})`,
    desc: m.hero.intro,
    image: m.image,
    routes: m.serving.keyLocations.slice(0, 4),
    slug: m.slug,
  }));

  return (
    <section className="bg-white dark:bg-[#141414] py-28 sm:py-36 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-[#66625C] dark:text-[#A0A0A0]">
            Primary Markets
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171717] dark:text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
            Arrive at your best.
          </h2>
          <p className="text-lg sm:text-xl text-[#524E48] dark:text-[#CCCCCC] font-normal mt-4 max-w-2xl mx-auto">
            Effortless journeys, tailored to you across our premier market hubs.
          </p>
        </motion.div>

        {/* Clean Editorial Split Grid - 50% Each */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between w-full"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#171717] dark:text-white" />
                    <span className="text-xs uppercase tracking-widest font-extrabold text-[#66625C] dark:text-[#A0A0A0]">
                      {loc.state}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#888888]">
                    HUB 0{idx + 1}
                  </span>
                </div>

                {/* City Title */}
                <h3 className="font-serif text-5xl sm:text-6xl text-[#171717] dark:text-[#F8F6F2] font-medium tracking-tight mb-3">
                  {loc.city}
                </h3>

                <p className="text-sm sm:text-base text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed mb-8 lg:line-clamp-4 lg:min-h-[7rem]">
                  {loc.desc}
                </p>

                {/* Editorial Image Banner (Frameless) */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-8 group">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-[0.75] dark:brightness-[0.6] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                      {loc.airport}
                    </span>
                  </div>
                </div>

                {/* Route List — hidden until a market has enough entries to justify it */}
                <div className={`mb-8 ${loc.routes.length > 1 ? '' : 'hidden'}`}>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#66625C] dark:text-[#A0A0A0] block mb-3">
                    Featured Service Corridors
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {loc.routes.map((route: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-[#F8F6F2] font-medium"
                      >
                        {route}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col items-center gap-3">
                <BookNowButton
                  label={`Arrange ${loc.city} Transfer`}
                  fullWidth
                />
                <OrCallNote />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
