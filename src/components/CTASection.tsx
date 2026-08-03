'use client';

import React from 'react';
import { Sparkles, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onOpenReservation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-28 bg-[#FAF8F5] dark:bg-[#0F0F0F] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="glass-panel p-10 sm:p-16 rounded-3xl relative overflow-hidden">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#66625C] dark:text-[#A0A0A0] font-semibold">
            Bespoke Private Mobility
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#171717] dark:text-[#F8F6F2] font-normal leading-tight mt-4 mb-6">
            Ready to Experience <br />
            <span className="text-gold-gradient font-light">Transportation Elevated?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#66625C] dark:text-[#B8B8B8] max-w-xl mx-auto font-light leading-relaxed mb-10">
            Reserve your private chauffeur today. Whether booking an RDU airport transfer, an executive roadshow, or a special evening out, we guarantee total discretion and five-star luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#333333] dark:hover:bg-[#E5E5EA] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-white dark:text-[#0F0F0F]" />
              <span>Reserve Your Ride Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:9195552662"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2] text-xs uppercase tracking-[0.25em] font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#171717] dark:text-white" />
              <span>Call Dispatch (919) 555-2662</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-8 border-t border-black/10 dark:border-white/10 text-xs text-[#66625C] dark:text-[#B8B8B8]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#171717] dark:text-white" />
              <span>All-Inclusive Flat Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#171717] dark:text-white" />
              <span>Live Flight Delay Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#171717] dark:text-white" />
              <span>24/7 Dispatch Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
