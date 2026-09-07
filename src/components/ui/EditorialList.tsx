'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface EditorialItem {
  eyebrow?: string;
  title: string;
  body: string;
  /** Small right-aligned note, shown from md upward. */
  note?: string;
}

interface EditorialListProps {
  items: EditorialItem[];
  onDark?: boolean;
  className?: string;
}

/**
 * Numbered hairline-divided rows — the homepage's ServicesSection rhythm.
 * Replaces card grids on inner pages: no borders, no boxes, just rules,
 * mono numerals and large display type.
 */
export const EditorialList: React.FC<EditorialListProps> = ({
  items,
  onDark = false,
  className = '',
}) => (
  <div className={`space-y-4 sm:space-y-6 ${className}`}>
    {items.map((item, idx) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: Math.min(idx * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
        className={`group grid grid-cols-1 gap-4 p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg ${
          onDark
            ? 'bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-white/20'
            : 'bg-white dark:bg-[#161616] border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 shadow-sm'
        } lg:grid-cols-12 lg:gap-10 lg:items-center`}
      >
        <div className="flex items-start gap-4 sm:gap-6 lg:col-span-6">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge shrink-0">
            {String(idx + 1).padStart(2, '0')}
          </span>

          <div>
            {item.eyebrow && (
              <span
                className={`mb-1 block text-[10px] font-extrabold uppercase tracking-widest ${
                  onDark ? 'text-emerald-400' : 'text-[#66625C] dark:text-[#A0A0A0]'
                }`}
              >
                {item.eyebrow}
              </span>
            )}
            <h3
              className={`font-serif text-2xl font-medium tracking-tight sm:text-3xl ${
                onDark ? 'text-[#F8F6F2]' : 'text-[#171717] dark:text-[#F8F6F2]'
              }`}
            >
              {item.title}
            </h3>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p
            className={`text-sm font-light leading-relaxed sm:text-base ${
              onDark ? 'text-white/75' : 'text-[#66625C] dark:text-[#B8B8B8]'
            }`}
          >
            {item.body}
          </p>
          {item.note && (
            <span
              className={`mt-2 block text-[10px] font-bold uppercase tracking-widest ${
                onDark ? 'text-white/50' : 'text-[#888888]'
              }`}
            >
              {item.note}
            </span>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);
