'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { BookNowButton, OrCallNote } from './ui/CallDispatchButton';

export const FboSection: React.FC = () => {
  const fboFeatures = [
    {
      title: 'Tarmac Direct Pickup',
      desc: 'Chauffeur and vehicle staged at the FBO terminal, ready as you step off the aircraft.',
    },
    {
      title: 'Tail Number Tracking',
      desc: 'Real-time flight tracking via FAA flight radar system so your chauffeur is ready regardless of early or late arrival.',
    },
    {
      title: 'Discreet Privacy Protocol',
      desc: 'Strict non-disclosure agreement (NDA) protocol for high-profile individuals, C-suite executives, and private charter clients.',
    },
  ];

  return (
    <section id="fbo" className="py-28 sm:py-36 bg-white dark:bg-[#141414] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
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
            Private Aviation Concierge
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171717] dark:text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
            Direct to the tarmac.
          </h2>
          <p className="text-lg sm:text-xl text-[#66625C] dark:text-[#B8B8B8] font-light mt-4 max-w-2xl mx-auto">
            Seamless private jet transfers at Raleigh-Durham (RDU), Boston Logan (BOS), and regional FBO terminals.
          </p>
        </motion.div>

        {/* Editorial Split Showcase (No Cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Full-Bleed FBO Tarmac Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative h-[420px] sm:h-[500px] rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl"
          >
            <img
              src="/images/gulfstream_sprinter.jpg"
              alt="ITP Sprinter Jet Van on FBO Tarmac Next to Gulfstream"
              className="w-full h-full object-cover filter brightness-[0.85] dark:brightness-[0.75] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/80 block mb-1">
                FBO Terminal Integration
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                Signature Aviation
              </h3>
            </div>
          </motion.div>

          {/* Right Column: Feature List & Concierge CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              {fboFeatures.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  className="space-y-2 border-b border-black/10 dark:border-white/10 pb-6"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <h4 className="font-serif text-xl sm:text-2xl text-[#171717] dark:text-[#F8F6F2] font-medium">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3">
              <BookNowButton label="Arrange FBO Pickup" fullWidth />
              <OrCallNote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
