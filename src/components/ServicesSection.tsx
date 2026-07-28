import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Building2, Clock, ShieldCheck, ArrowRight, Check, Plus, Minus } from 'lucide-react';

interface ServicesSectionProps {
  onOpenReservation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenReservation }) => {
  const [openId, setOpenId] = useState<string>('airport');

  const services = [
    {
      id: 'airport',
      icon: Plane,
      number: '01',
      category: 'Airport Transfers',
      title: 'Smooth landings, every time.',
      tagline: 'Live delay radar & 60-min airport wait time',
      description:
        'Delayed flight? Chauffeurs track arrivals automatically in real time and adjust pickup schedules so you are never stranded.',
      image: '/images/hero.png',
      amenities: [
        'Live Flight Delay Radar Synchronization',
        'Baggage Claim Meet & Greet with Name Sign',
        'Complimentary 60-Minute Airport Wait Time',
        'Direct FBO Tarmac Access (TAC Air / Signature)',
      ],
    },
    {
      id: 'hourly',
      icon: Clock,
      number: '02',
      category: 'Hourly & Full Day Hire',
      title: 'Seize the day.',
      tagline: 'Dedicated vehicle on standby',
      description:
        'Reserve a dedicated chauffeur from 2 to 24 hours. Your vehicle remains on standby outside every venue for as long as you need.',
      image: '/images/escalade.png',
      amenities: [
        'Unlimited Stops & Instant Itinerary Adjustments',
        'Chauffeur On Standby Outside Every Venue',
        'Confidential & Soundproof Work Environment',
        'Customized In-Cabin Fiji Water & Refreshments',
      ],
    },
    {
      id: 'city-to-city',
      icon: Building2,
      number: '03',
      category: 'City-to-City Executive',
      title: 'Between cities, done better.',
      tagline: 'Private door-to-door regional travel',
      description:
        'Turn long-distance journeys into calm, productive time. Direct private travel between Raleigh, Charlotte, Richmond, and Washington D.C.',
      image: '/images/maybach.png',
      amenities: [
        'Direct Door-to-Door Regional Highway Travel',
        'High-Speed Onboard 5G Wi-Fi & Device Charging',
        'Reclining Executive Seats with Heating & Massage',
        'Zero Airport TSA Hassles or Connecting Delays',
      ],
    },
    {
      id: 'enterprise',
      icon: ShieldCheck,
      number: '04',
      category: 'Enterprise Solutions',
      title: 'Corporate travel, simplified.',
      tagline: 'Dedicated concierge & roadshows',
      description:
        'One dedicated concierge platform for companies and executive assistants to book, track, and account for every journey.',
      image: '/images/sprinter.png',
      amenities: [
        'Centralized Monthly Billing & Expense Invoicing',
        'Multi-Stop Financial Roadshow Coordination',
        'Dedicated Executive Account Manager',
        '100% Non-Disclosure & Privacy Assurance',
      ],
    },
  ];

  return (
    <section id="services" className="py-28 sm:py-36 bg-white dark:bg-[#0F0F0F] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-[#66625C] dark:text-[#A0A0A0]">
            Bespoke Mobility
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171717] dark:text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
            Every journey, covered.
          </h2>
          <p className="text-lg sm:text-xl text-[#524E48] dark:text-[#CCCCCC] font-normal mt-4 max-w-2xl mx-auto">
            Airport transfers, hourly hire, and city-to-city executive travel.
          </p>
        </motion.div>

        {/* Minimal Hairline Accordion Service List (No Cards!) */}
        <div className="divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
          {services.map((service) => {
            const isOpen = openId === service.id;
            const Icon = service.icon;

            return (
              <div key={service.id} className="py-6 sm:py-8 transition-colors duration-300">
                <button
                  onClick={() => setOpenId(isOpen ? '' : service.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-sm font-mono font-bold text-[#888888]">
                      {service.number}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#66625C] dark:text-[#A0A0A0] block mb-1">
                        {service.category}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] dark:text-[#F8F6F2] font-medium tracking-tight group-hover:opacity-75 transition-opacity">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-xs text-[#66625C] dark:text-[#A0A0A0] font-light">
                      {service.tagline}
                    </span>
                    <div className="p-3 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white group-hover:bg-[#171717] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Row */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 pb-4 pl-0 sm:pl-16">
                        <div className="lg:col-span-7 space-y-6">
                          <p className="text-base text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/10 dark:border-white/10">
                            {service.amenities.map((amenity, i) => (
                              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#524E48] dark:text-[#CCCCCC]">
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span>{amenity}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4">
                            <button
                              onClick={onOpenReservation}
                              className="px-8 py-3.5 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all duration-300 flex items-center gap-2 shadow-md cursor-pointer"
                            >
                              <span>Reserve {service.category}</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover filter brightness-[0.8] dark:brightness-[0.6]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
