import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Car, Plane, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Globe,
      title: 'Available across the Carolinas',
      subtitle: 'Expert local chauffeurs',
      desc: 'Dedicated private chauffeurs serving Raleigh, RDU Airport, Research Triangle Park, Pinehurst, Charlotte, and regional private airports.',
    },
    {
      icon: Car,
      title: 'High-end executive fleet',
      subtitle: 'Pristine recent models',
      desc: 'Travel exclusively in Mercedes-Maybach S-Class, Cadillac Escalade ESV, and custom Executive Jet Sprinters maintained to showroom standards.',
    },
    {
      icon: Plane,
      title: 'Real-time flight tracking',
      subtitle: '60 minutes free wait time',
      desc: 'Delayed or early flight? Our dispatch system continuously monitors FAA flight radar, adjusting your chauffeur arrival with zero delay penalties.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent all-inclusive rates',
      subtitle: 'No unexpected surprises',
      desc: 'All quotes include taxes, tolls, gratuity, and wait time flexibility. Clear pricing with direct corporate billing portal access.',
    },
  ];

  return (
    <section id="why-us" className="py-28 bg-[#FAF8F5] dark:bg-[#0F0F0F] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#66625C] dark:text-[#A0A0A0]">
              Uncompromising Quality
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#171717] dark:text-[#F8F6F2] font-normal leading-tight mt-2 tracking-tight">
              Expect excellence.
            </h2>
            <p className="text-lg sm:text-xl text-[#66625C] dark:text-[#B8B8B8] font-light mt-3">
              Leave the car refreshed and ready for what&apos;s next.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#161616] p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-black/30 dark:hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 flex items-center justify-center text-[#171717] dark:text-white mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#66625C] dark:text-[#A0A0A0]">
                    {item.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F8F6F2] font-normal mt-1 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#171717] dark:text-white font-medium">
                  <span>Standard Privilege</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
