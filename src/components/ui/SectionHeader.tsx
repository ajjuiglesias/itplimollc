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
  size?: 'display' | 'section' | 'compact';
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
  size = 'section',
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
      className={`font-serif ${size === 'display' ? 'text-4xl sm:text-6xl xl:text-7xl' : size === 'compact' ? 'text-3xl sm:text-4xl xl:text-[2.75rem]' : 'text-[2rem] sm:text-[2.75rem] xl:text-[3.5rem]'} font-normal tracking-tight leading-[1.12] mt-3 text-balance ${
        onDark ? 'text-[#F8F6F2]' : 'text-[#171717] dark:text-[#F8F6F2]'
      }`}
    >
      {title}
    </h2>

    {subtitle && (
      <p
        className={`text-base sm:text-lg leading-relaxed font-normal mt-5 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
          onDark ? 'text-[#B8B8B8]' : 'text-[#524E48] dark:text-[#CCCCCC]'
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);
