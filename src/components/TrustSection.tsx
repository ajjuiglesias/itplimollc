'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trustMetrics = [
    {
      label: 'On-Time Guarantee',
      value: '99.9%',
      desc: 'Precision flight & traffic tracking protocol',
    },
    {
      label: 'Average Client Rating',
      value: '4.98 ★',
      desc: 'Based on 2,500+ verified corporate trips',
    },
    {
      label: 'Executive Discretion',
      value: '100%',
      desc: 'Non-disclosure & privacy compliance',
    },
  ];

  const testimonials = [
    {
      quote:
        'The level of professionalism and discretion is unparalleled. Flight delay tracking at BOS Logan saved our schedule after a 2-hour tarmac hold.',
      author: 'Marcus Vance',
      role: 'Managing Director, Private Equity',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      quote:
        'Having a Maybach waiting steps from our private charter at Signature Aviation RDU makes regional executive travel completely effortless.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Executive Officer, Biotech',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      quote:
        'The Sprinter Jet Van is a mobile sanctuary. Our executive board conducted confidential meetings on the 5G Wi-Fi uninterrupted.',
      author: 'Jonathan Hayes',
      role: 'Head of Operations, Tech Enterprise',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      quote:
        'Seamless city-to-city transfers between Boston and Washington D.C. No airport TSA delays, pure quiet-ride productivity.',
      author: 'David Sterling',
      role: 'Senior Partner, Capital Group',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ];

  const maxVisible = 3;
  const maxIndex = Math.max(0, testimonials.length - maxVisible);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="trust" className="py-28 sm:py-36 bg-[#FAF8F5] dark:bg-[#070707] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-[#66625C] dark:text-[#A0A0A0]">
              Proof of Excellence
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171717] dark:text-[#F8F6F2] font-normal tracking-tight leading-[1.08] mt-2">
              Trusted by global leaders.
            </h2>
            <p className="text-lg sm:text-xl text-[#524E48] dark:text-[#CCCCCC] font-normal mt-4 max-w-2xl">
              Discreet, reliable mobility relied upon by executives, founders, and private aviation travelers.
            </p>
          </motion.div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-black/15 dark:border-white/20 flex items-center justify-center text-[#171717] dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Previous testimonial slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-black/15 dark:border-white/20 flex items-center justify-center text-[#171717] dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Next testimonial slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Multi-Card Testimonial Carousel Track */}
        <div className="overflow-hidden pb-8 mb-20">
          <motion.div
            className="flex gap-8 items-stretch pb-4"
            animate={{ x: `-${currentIndex * (100 / maxVisible)}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(33.333%-1.33rem)] shrink-0 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#161616] border border-black/10 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[360px] sm:min-h-[380px]"
              >
                {/* Top Quote Content */}
                <div className="flex-1 flex flex-col justify-between mb-6">
                  {/* Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#171717] dark:text-white opacity-25" />
                  </div>

                  <p className="font-serif text-lg sm:text-xl text-[#171717] dark:text-[#F8F6F2] font-normal leading-relaxed my-auto">
                    “{t.quote}”
                  </p>
                </div>

                {/* Author Info Footer (Aligned at Bottom) */}
                <div className="pt-5 border-t border-black/10 dark:border-white/10 flex items-center gap-3.5 mt-auto shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-black/10 dark:border-white/20 shadow-md shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif text-base sm:text-lg font-medium text-[#171717] dark:text-[#F8F6F2] truncate">
                      {t.author}
                    </h4>
                    <span className="text-xs text-[#524E48] dark:text-[#CCCCCC] font-normal block mt-0.5 truncate">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3 Metric Dividers Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-black/10 dark:border-white/10 py-12">
          {trustMetrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="text-center"
            >
              <div className="font-serif text-5xl sm:text-6xl font-medium text-[#171717] dark:text-[#F8F6F2] mb-2 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-extrabold text-[#171717] dark:text-white mb-1">
                {m.label}
              </div>
              <div className="text-xs text-[#524E48] dark:text-[#CCCCCC] font-normal">
                {m.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
