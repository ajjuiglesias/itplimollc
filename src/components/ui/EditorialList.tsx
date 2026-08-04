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
  <div
    className={`border-y divide-y ${
      onDark
        ? 'border-white/10 divide-white/10'
        : 'border-black/10 divide-black/10 dark:border-white/10 dark:divide-white/10'
    } ${className}`}
  >
    {items.map((item, idx) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: Math.min(idx * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 gap-4 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10"
      >
        <div className="flex items-start gap-6 lg:col-span-6 sm:gap-10">
          <span className="pt-1 font-mono text-sm font-bold text-[#888888]">
            {String(idx + 1).padStart(2, '0')}
          </span>

          <div>
            {item.eyebrow && (
              <span
                className={`mb-1 block text-[10px] font-extrabold uppercase tracking-widest ${
                  onDark ? 'text-[#A0A0A0]' : 'text-[#66625C] dark:text-[#A0A0A0]'
                }`}
              >
                {item.eyebrow}
              </span>
            )}
            <h3
              className={`font-serif text-3xl font-medium tracking-tight sm:text-4xl ${
                onDark ? 'text-[#F8F6F2]' : 'text-[#171717] dark:text-[#F8F6F2]'
              }`}
            >
              {item.title}
            </h3>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-7 pl-12 sm:pl-16 lg:pl-0">
          <p
            className={`text-sm font-light leading-relaxed sm:text-base ${
              onDark ? 'text-[#B8B8B8]' : 'text-[#66625C] dark:text-[#B8B8B8]'
            }`}
          >
            {item.body}
          </p>
          {item.note && (
            <span
              className={`mt-3 block text-[10px] font-bold uppercase tracking-widest ${
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
