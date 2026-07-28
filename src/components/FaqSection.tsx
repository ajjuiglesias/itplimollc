import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What happens if my commercial or private flight is delayed?',
      answer:
        'All chauffeur pickups include automated live flight radar tracking. We monitor your tail number or flight number in real time and automatically adjust your chauffeur’s dispatch time to match your actual landing. No delay fees apply.',
    },
    {
      question: 'How long is the complimentary wait time at the airport?',
      answer:
        'Commercial airline arrivals include 60 minutes of complimentary wait time from the moment the aircraft wheels touch down. Private aviation FBO tarmac arrivals include complimentary wait time until you disembark.',
    },
    {
      question: 'Can I request tarmac pickup at Signature Aviation or TAC Air?',
      answer:
        'Yes. We maintain active tarmac permits and security clearance at Signature Aviation, TAC Air, and regional FBO terminals in Boston and Raleigh. Your vehicle will be positioned directly by your aircraft stairs upon landing.',
    },
    {
      question: 'What is your cancellation and reservation modification policy?',
      answer:
        'Reservations can be modified or cancelled free of charge up to 24 hours prior to scheduled pick-up for sedan and SUV journeys, and up to 48 hours for Mercedes Sprinter jet vans and multi-vehicle roadshows.',
    },
    {
      question: 'Are all vehicles non-smoking and sanitized?',
      answer:
        'Every vehicle undergoes deep interior detailing, air purification, and sanitation prior to every dispatch. All vehicles are strictly 100% non-smoking.',
    },
  ];

  return (
    <section id="faq" className="py-28 sm:py-36 bg-white dark:bg-[#0F0F0F] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-[#66625C] dark:text-[#A0A0A0]">
            Concierge Clarification
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-normal text-[#171717] dark:text-[#F8F6F2] tracking-tight leading-[1.08] mt-2">
            Seamless answers.
          </h2>
          <p className="text-lg sm:text-xl text-[#66625C] dark:text-[#B8B8B8] font-light mt-4">
            Everything you need to know about our chauffeur protocol and reservation policies.
          </p>
        </motion.div>

        {/* FAQ Accordion List (No Cards!) */}
        <div className="divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div key={idx} className="py-6 sm:py-7">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group gap-6"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] dark:text-[#F8F6F2] font-medium tracking-tight group-hover:opacity-75 transition-opacity">
                    {faq.question}
                  </h3>

                  <div className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white shrink-0 group-hover:bg-[#171717] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed pt-4 pr-12">
                        {faq.answer}
                      </p>
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
