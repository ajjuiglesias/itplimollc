'use client';

import { TextDispatchButton } from './ui/CallDispatchButton';


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '@/content/faqs';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);


  return (
    <section id="faq" className="py-20 sm:py-28 bg-white dark:bg-[#141414] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
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

        {/* FAQ Accordion List */}
        <div className="divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`py-6 sm:py-7 transition-all duration-300 rounded-2xl px-4 -mx-4 ${
                  isOpen
                    ? 'bg-black/[0.02] dark:bg-white/[0.03]'
                    : 'hover:bg-black/[0.015] dark:hover:bg-white/[0.015]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group gap-6"
                >
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#171717] dark:text-[#F8F6F2] font-medium tracking-tight group-hover:opacity-75 transition-opacity">
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
                      <p className="text-base text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed pt-4 pr-6 sm:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Concierge Assistance Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-[#181818] border border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-[#171717] dark:text-white">
                Have a unique itinerary or bespoke request?
              </h4>
              <p className="text-xs text-[#66625C] dark:text-[#A0A0A0] mt-0.5">
                Our 24/7 Raleigh dispatch desk is ready to assist with complex itineraries and multi-city roadshows.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
          <TextDispatchButton />
          <a
            href="tel:19194352157"
            className="shrink-0 px-6 py-2.5 rounded-full border border-black/15 dark:border-white/20 text-xs uppercase tracking-widest font-extrabold text-[#171717] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Call Dispatch Desk
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};
