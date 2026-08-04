'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface Pillar {
  eyebrow?: string;
  title: string;
  body: string;
  /**
   * Already-rendered icon element, not a component reference. Server Components
   * can pass rendered elements across the client boundary, but passing the
   * component function itself fails serialization at build time.
   */
  icon?: React.ReactNode;
}

interface PillarColumnsProps {
  pillars: Pillar[];
  columns?: 2 | 3 | 4;
  onDark?: boolean;
  className?: string;
}

const columnClass: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/**
 * Clean editorial columns — the homepage's ExperienceSection pillars. Numeral
 * and icon on a rule, then eyebrow, display heading and body. No card chrome.
 */
export const PillarColumns: React.FC<PillarColumnsProps> = ({
  pillars,
  columns = 3,
  onDark = false,
  className = '',
}) => (
  <div className={`grid grid-cols-1 gap-12 lg:gap-16 ${columnClass[columns]} ${className}`}>
    {pillars.map((pillar, idx) => {
      return (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: Math.min(idx * 0.12, 0.5), ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={`mb-4 flex items-center justify-between gap-3 border-b pb-3 ${
              onDark ? 'border-white/15' : 'border-black/10 dark:border-white/15'
            }`}
          >
            <span className="font-mono text-xs font-bold text-[#888888]">
              {String(idx + 1).padStart(2, '0')}
            </span>
            {pillar.icon && (
              <span className={onDark ? 'text-white' : 'text-[#171717] dark:text-white'}>
                {pillar.icon}
              </span>
            )}
          </div>

          {pillar.eyebrow && (
            <span
              className={`mb-1 block text-[10px] font-extrabold uppercase tracking-widest ${
                onDark ? 'text-[#A0A0A0]' : 'text-[#66625C] dark:text-[#A0A0A0]'
              }`}
            >
              {pillar.eyebrow}
            </span>
          )}

          <h3
            className={`font-serif text-2xl font-medium tracking-tight sm:text-3xl ${
              onDark ? 'text-[#F8F6F2]' : 'text-[#171717] dark:text-[#F8F6F2]'
            }`}
          >
            {pillar.title}
          </h3>

          <p
            className={`mt-3 text-sm font-light leading-relaxed ${
              onDark ? 'text-[#B8B8B8]' : 'text-[#66625C] dark:text-[#B8B8B8]'
            }`}
          >
            {pillar.body}
          </p>
        </motion.div>
      );
    })}
  </div>
);
