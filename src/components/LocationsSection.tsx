import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';

interface LocationsSectionProps {
  onOpenReservation: (data?: any) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenReservation }) => {
  const locations = [
    {
      city: 'Boston',
      state: 'Massachusetts',
      airport: 'Boston Logan International (BOS)',
      desc: 'First-class private chauffeur service serving Greater Boston, Back Bay, Financial District, and Logan Airport.',
      image: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=1200&q=80',
      pickupDefault: 'Boston Logan International Airport (BOS)',
      routes: ['Back Bay Concierge', 'Financial District', 'Cambridge & Harvard', 'Cape Cod & Islands'],
    },
    {
      city: 'Raleigh',
      state: 'North Carolina',
      airport: 'Raleigh-Durham International (RDU)',
      desc: 'Bespoke executive transportation covering Raleigh, Durham, Chapel Hill, Research Triangle Park, and RDU Airport.',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
      pickupDefault: 'RDU International Airport (RDU)',
      routes: ['Research Triangle Park (RTP)', 'Duke & Chapel Hill', 'North Hills Executive', 'Pinehurst Mobility'],
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0F0F0F] py-28 sm:py-36 transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
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

        {/* Clean Editorial Split Grid (No Cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col justify-between ${idx === 1 ? 'lg:pl-24 pt-12 lg:pt-0' : 'pr-0'}`}
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

                <p className="text-sm sm:text-base text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed mb-8">
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

                {/* Route List */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#66625C] dark:text-[#A0A0A0] block mb-3">
                    Featured Service Corridors
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {loc.routes.map((route, i) => (
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
              <div>
                <button
                  onClick={() => onOpenReservation({ pickupLocation: loc.pickupDefault })}
                  className="w-full py-4 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer group"
                >
                  <span>Reserve in {loc.city}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
