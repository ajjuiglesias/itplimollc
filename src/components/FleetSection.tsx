'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Check } from 'lucide-react';
import { BookNowButton, OrCallNote } from './ui/CallDispatchButton';

export const FleetSection: React.FC = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  const fleet = [
    {
      id: 'maybach',
      name: 'Mercedes-Maybach S-Class',
      category: 'First-Class Executive Sedan',
      tagline: 'The Pinnacle of Private Chauffeur Mobility',
      passengers: '3 Passengers',
      luggage: '3 Executive Cases',
      image: '/images/maybach.png',
      description:
        'Designed for discreet C-suite executives and VIP transfers. Features extended legroom, reclining executive lounge seating, rear massagers, and acoustic soundproof privacy glass.',
      specs: [
        'Acoustically insulated quiet cabin',
        'Hot-stone massage reclining rear seats',
        'Dedicated 5G Wi-Fi & device charging',
        'Private non-disclosure protocol chauffeur',
      ],
    },
    {
      id: 'escalade',
      name: 'Cadillac Escalade ESV',
      category: 'Luxury Executive SUV',
      tagline: 'Commanding Presence & Generous Capacity',
      passengers: '6 Passengers',
      luggage: '6 Large Luggage Cases',
      image: '/images/escalade.png',
      description:
        'The preferred choice for corporate delegations, family airport transfers, and luggage-heavy trips. Offers spacious leather captain chairs and rear climate control.',
      specs: [
        'Extended wheelbase ESV luggage capacity',
        'Individual heated leather captain chairs',
        'Tri-zone automatic climate control',
        'High-speed multi-device USB-C power',
      ],
    },
    {
      id: 'sprinter',
      name: 'Mercedes-Benz Sprinter Executive',
      category: 'Private Jet Van (14 Passengers)',
      tagline: 'Mobile Office & Group Sanctuary',
      passengers: 'Up to 14 Passengers',
      luggage: '14 Large Luggage Cases',
      image: '/images/signature_sprinter.jpg',
      description:
        'Custom jet-converted executive cabin for financial roadshows, corporate teams, and private airport groups. Full stand-up headroom, conference seating, onboard Wi-Fi, and 110V AC power.',
      specs: [
        'Custom 14-passenger luxury executive seating',
        'Direct FBO tarmac access on request',
        'Complimentary 5G Wi-Fi & multi-device AC power outlets',
        'Quiet-Ride soundproofing for undisturbed conference calls',
      ],
    },
  ];

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
          <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-[#A0A0A0]">
            The Flagship Collection
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
            Crafted for absolute comfort.
          </h2>
          <p className="text-lg sm:text-xl text-[#B8B8B8] font-light mt-4 max-w-2xl mx-auto">
            Every vehicle in our fleet is meticulously maintained, sanitized, and spec’d with private luxury amenities.
          </p>
        </motion.div>

        {/* Minimal Vehicle Selector Tabs (No Cards!) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {fleet.map((item, index) => {
            const isActive = activeVehicle === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveVehicle(index)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-white text-[#0F0F0F] border-white shadow-xl scale-105'
                    : 'bg-white/5 text-[#A0A0A0] border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Vehicle Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Vehicle Media Stage */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[520px] rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={currentVehicle.image}
                  alt={currentVehicle.name}
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/70 block">
                      {currentVehicle.category}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-medium">
                      {currentVehicle.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Technical Specs & Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#A0A0A0] block mb-1">
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
                <div className="flex items-center gap-6 py-4 border-y border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>{currentVehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span>{currentVehicle.luggage}</span>
                  </div>
                </div>

                {/* Spec List */}
                <div className="space-y-3">
                  {currentVehicle.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/90 font-light">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
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
