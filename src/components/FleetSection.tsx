'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Check, Car } from 'lucide-react';
import { fleet } from '@/content/fleet';
import { BookNowButton, OrCallNote } from './ui/CallDispatchButton';

export const FleetSection: React.FC = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  const currentVehicle = fleet[activeVehicle];

  return (
    <section id="fleet" className="py-28 sm:py-36 bg-[#070707] dark:bg-[#070707] text-white transition-colors duration-500 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold gold-accent-badge px-4 py-1.5 rounded-full inline-block mb-3">
            The Newest Fleet in the Triangle
          </span>
          <h2 className="font-serif text-[2.1rem] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
            Every vehicle is a 2026.
          </h2>
          <p className="text-lg sm:text-xl text-[#B8B8B8] font-light mt-4 max-w-2xl mx-auto">
            A fleet of five 2026 vehicles — Suburban, Aviator and Sprinter — seating three, seven or fourteen.
          </p>
        </motion.div>

        {/* Minimal Vehicle Selector Tabs with Capacity Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {fleet.map((item, index) => {
            const isActive = activeVehicle === index;
            return (
              <button
                key={item.slug}
                onClick={() => setActiveVehicle(index)}
                className={`group min-h-[46px] px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer border flex items-center gap-3 ${
                  isActive
                    ? 'bg-white text-[#0F0F0F] border-white shadow-[0_10px_25px_rgba(255,255,255,0.2)] scale-105'
                    : 'bg-white/5 text-[#A0A0A0] border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                {item.passengers && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold transition-colors ${
                      isActive
                        ? 'bg-black/10 text-[#0F0F0F]'
                        : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                    }`}
                  >
                    {item.passengers.split(' ')[0]} Pax
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Vehicle Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Vehicle Media Stage */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[520px] rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-black group">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-white/5 to-emerald-500/10 rounded-[42px] blur-2xl pointer-events-none opacity-40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.slug}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {currentVehicle.image ? (
                  <img
                    src={currentVehicle.image}
                    alt={currentVehicle.name}
                    className="w-full h-full object-cover brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
                    style={{ objectPosition: 'center 66%' }}
                  />
                ) : (
                  /* No stand-in imagery: only the Sprinter has genuine photography. */
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#1A1A1A] to-[#0B0B0B]">
                    <Car className="h-8 w-8 text-white/25" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/35">
                      Photography to follow
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 block mb-1">
                      {currentVehicle.category}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-medium">
                      {currentVehicle.name}
                    </h4>
                  </div>
                  {currentVehicle.passengers && (
                    <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-medium text-white/90 hidden sm:inline-flex">
                      2026 Spec
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Technical Specs & Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 block mb-1">
                    {currentVehicle.category}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight mb-2">
                    {currentVehicle.name}
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {currentVehicle.description}
                  </p>
                </div>

                {/* Capacity Badges */}
                {(currentVehicle.passengers || currentVehicle.luggage) && (
                  <div className="flex items-center gap-4 py-4 border-y border-white/10 text-xs">
                    {currentVehicle.passengers && (
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10">
                        <Users className="w-4 h-4 text-emerald-400" />
                        <span className="font-medium">{currentVehicle.passengers}</span>
                      </div>
                    )}
                    {currentVehicle.luggage && (
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10">
                        <Briefcase className="w-4 h-4 text-emerald-400" />
                        <span className="font-medium">{currentVehicle.luggage}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Spec List */}
                <div className="space-y-2.5">
                  {currentVehicle.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/90 font-light p-1.5 rounded-lg hover:bg-white/[0.03] transition-colors">
                      <div className="p-1 rounded-full bg-emerald-400/10 text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4 flex flex-col items-center gap-3">
                  <BookNowButton
                    label="Reserve This Vehicle"
                    variant="onDark"
                    fullWidth
                  />
                  <OrCallNote onDark />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
