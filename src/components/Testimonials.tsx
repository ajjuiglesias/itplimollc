'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      quote:
        'ITP is not a limo company — they are our personal travel concierge. When flying into RDU on our Gulfstream, their chauffeur is staged at TAC Air before our jet engines even power down. Phenomenal discretion and service.',
      author: 'Marcus V. Sterling',
      title: 'Managing Director, Private Equity Firm',
      location: 'Raleigh & New York',
      rating: 5,
      service: 'Private Jet FBO & Corporate Escort',
    },
    {
      quote:
        'As an executive assistant organizing board roadshows across North Carolina, I reliance entirely on ITP. Their live flight monitoring automatically handles delays without frantic phone calls. The Maybach cabin is pristine.',
      author: 'Elena Rostova',
      title: 'VP of Corporate Operations',
      location: 'Research Triangle Park (RTP)',
      rating: 5,
      service: 'Corporate Roadshow Fleet',
    },
    {
      quote:
        'Finding a luxury chauffeur service that pre-installs spotless Nuna child safety seats for our family airport runs was a game changer. Friendly, impeccably dressed chauffeurs and total peace of mind.',
      author: 'Dr. Harrison & Sarah Vance',
      title: 'Private Clients',
      location: 'North Hills, Raleigh',
      rating: 5,
      service: 'Airport Transfer & Luxury Child Seat',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-28 bg-[#FAF8F5] dark:bg-[#0F0F0F] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#66625C] dark:text-[#A0A0A0] font-semibold">
            Client Words
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#171717] dark:text-[#F8F6F2] font-normal leading-tight mt-3">
            Trusted By <span className="text-gold-gradient font-light">Leaders.</span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="glass-panel p-8 sm:p-14 rounded-3xl relative">
          <Quote className="w-16 h-16 text-[#171717]/10 dark:text-white/10 absolute top-8 left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 max-w-4xl mx-auto text-center"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#171717] dark:fill-white text-[#171717] dark:text-white" />
                ))}
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F8F6F2] font-light leading-relaxed mb-10">
                "{activeReview.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-1">
                <span className="font-serif text-xl text-[#171717] dark:text-[#F8F6F2] font-semibold">
                  {activeReview.author}
                </span>
                <span className="text-xs text-[#66625C] dark:text-[#B8B8B8] font-light">{activeReview.title}</span>
                <span className="text-[10px] text-[#66625C] dark:text-[#B8B8B8] uppercase tracking-widest mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#171717] dark:text-white" />
                  Verified Reservation • {activeReview.service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-black/10 dark:border-white/10">
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#171717] dark:bg-white' : 'w-2 bg-black/20 dark:bg-white/20'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[#171717] dark:hover:bg-white hover:text-white dark:hover:text-[#0F0F0F] text-[#171717] dark:text-[#F8F6F2] transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[#171717] dark:hover:bg-white hover:text-white dark:hover:text-[#0F0F0F] text-[#171717] dark:text-[#F8F6F2] transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
