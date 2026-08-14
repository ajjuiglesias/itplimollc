'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  /** Use on permanently-dark sections (Fleet, page heroes). */
  onDark?: boolean;
  className?: string;
}

/**
 * The homepage section-header treatment — small tracked eyebrow, large display
 * serif headline, supporting line — factored out so every page renders it
 * identically rather than re-declaring the type scale.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  onDark = false,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
  >
    <span
      className={`text-[11px] uppercase tracking-[0.35em] font-extrabold ${
        onDark ? 'text-[#A0A0A0]' : 'text-[#66625C] dark:text-[#A0A0A0]'
      }`}
    >
      {eyebrow}
    </span>

    <h2
      className={`font-serif text-[2.1rem] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-normal tracking-tight leading-[1.1] sm:leading-[1.08] mt-2 ${
        onDark ? 'text-[#F8F6F2]' : 'text-[#171717] dark:text-[#F8F6F2]'
      }`}
    >
      {title}
    </h2>

    {subtitle && (
      <p
        className={`text-base sm:text-lg lg:text-xl font-normal mt-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
          onDark ? 'text-[#B8B8B8]' : 'text-[#524E48] dark:text-[#CCCCCC]'
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);
