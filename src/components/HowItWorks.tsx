import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ShieldCheck, Radio, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: CalendarCheck,
      title: 'Curate Your Journey',
      desc: 'Select your vehicle, pickup location, flight details, or child seat requirements via our instant online concierge portal or 24/7 phone line.',
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: 'Chauffeur Matched & Prepped',
      desc: 'Your dedicated chauffeur receives your profile preferences, verifies vehicle detailing, pre-adjusts climate control, and prepares requested amenities.',
    },
    {
      num: '03',
      icon: Radio,
      title: 'Real-Time Radar Tracking',
      desc: 'Our dispatch team monitors live traffic and flight radar, ensuring your chauffeur is staged 15 minutes before your requested pickup time.',
    },
    {
      num: '04',
      icon: Sparkles,
      title: 'Flawless Arrival & Escort',
      desc: 'Enjoy white-glove luggage handling, quiet acoustic cabin comfort, high-speed Wi-Fi, and a seamless arrival at your final destination.',
    },
  ];

  return (
    <section className="py-28 bg-[#F2EFE9] dark:bg-[#1A1A1A] transition-colors duration-500 relative overflow-hidden border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#66625C] dark:text-[#A0A0A0] font-semibold">
            Seamless Process
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#171717] dark:text-[#F8F6F2] font-normal leading-tight mt-3">
            How It <span className="text-gold-gradient font-light">Works.</span>
          </h2>
          <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] font-light mt-4 leading-relaxed">
            Booking a private chauffeur experience should feel effortless. 4 steps to total peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-black/10 dark:border-white/10 relative group hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl font-light text-[#171717]/30 dark:text-white/30 group-hover:text-[#171717] dark:group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#0F0F0F] border border-black/10 dark:border-white/15 flex items-center justify-center text-[#171717] dark:text-white shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F8F6F2] font-normal mb-3 group-hover:text-[#171717] dark:group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] uppercase tracking-widest text-[#171717] dark:text-white font-semibold">
                  Step {step.num} of 04
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
