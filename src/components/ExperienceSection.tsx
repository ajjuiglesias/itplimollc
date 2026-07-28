import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Wifi } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const sanctuaryPillars = [
    {
      number: '01',
      title: 'Chauffeur Protocol',
      headline: 'A welcome like no other',
      icon: Shield,
      description:
        'The door is opened for you. Your luggage is stowed with care. Everything is handled seamlessly from your very first step onto the tarmac or curb.',
    },
    {
      number: '02',
      title: 'Cabin Tranquility',
      headline: 'You set the tone',
      icon: Sparkles,
      description:
        'Sit back and relax. Acoustic soundproofing, ambient lighting, temperature controls, and cabin audio are calibrated to your exact preference.',
    },
    {
      number: '03',
      title: 'Onboard Connectivity',
      headline: 'Recharge your journey',
      icon: Wifi,
      description:
        'Stay productive and refreshed with universal high-speed multi-device charging ports, dedicated onboard 5G Wi-Fi, and chilled Fiji water.',
    },
  ];

  return (
    <section id="experience" className="py-28 sm:py-36 bg-[#FAF8F5] dark:bg-[#0F0F0F] transition-colors duration-500 overflow-hidden">
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
            The Sanctuary Standard
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171717] dark:text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
            Step in. Breathe out.
          </h2>
          <p className="text-lg sm:text-xl text-[#524E48] dark:text-[#CCCCCC] font-normal mt-4 max-w-2xl mx-auto">
            Thoughtful details and discreet service transform every journey into your personal sanctuary.
          </p>
        </motion.div>

        {/* Hero Full-Bleed Editorial Media Banner (No Cards!) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-[36px] overflow-hidden mb-20 shadow-2xl border border-black/10 dark:border-white/10"
        >
          <img
            src="/images/cockpit_tarmac.jpg"
            alt="ITP Cockpit View Private Jet Tarmac"
            className="w-full h-full object-cover filter brightness-[0.8] dark:brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-8 sm:p-14 text-white">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/80 block mb-2">
                Executive Cabin Environment
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight mb-3">
                Rest, work, or reflect in complete privacy.
              </h3>
              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                Our fleet is custom-spec’d with acoustic glass soundproofing, executive reclining rear lounge seats, and private non-disclosure chauffeurs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Clean Horizontal Editorial Columns (No Cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-4">
          {sanctuaryPillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="pr-0"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-[#888888]">
                    {pillar.number}
                  </span>
                  <Icon className="w-4 h-4 text-[#171717] dark:text-white" />
                </div>

                <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#66625C] dark:text-[#A0A0A0] block mb-1">
                  {pillar.title}
                </span>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] dark:text-[#F8F6F2] font-medium tracking-tight mb-3">
                  {pillar.headline}
                </h4>

                <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
