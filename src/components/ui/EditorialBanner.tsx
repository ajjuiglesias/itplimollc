'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EditorialBannerProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body?: string;
  /** Taller treatment for the primary banner on a page. */
  size?: 'default' | 'tall';
  className?: string;
}

/**
 * Full-bleed image banner with overlay copy — the homepage's ExperienceSection
 * treatment. Used instead of a card whenever a section needs a visual anchor.
 */
export const EditorialBanner: React.FC<EditorialBannerProps> = ({
  image,
  alt,
  eyebrow,
  title,
  body,
  size = 'default',
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={`relative overflow-hidden rounded-[36px] border border-black/10 shadow-2xl dark:border-white/10 ${
      size === 'tall'
        ? 'h-[420px] sm:h-[500px] lg:h-[560px]'
        : 'h-[340px] sm:h-[420px]'
    } ${className}`}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={image}
      alt={alt}
      className="h-full w-full object-cover brightness-[0.8] contrast-[1.05] dark:brightness-[0.7]"
    />

    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/35 to-transparent p-8 text-white sm:p-14">
      <div className="max-w-xl">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
          {eyebrow}
        </span>
        <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-5xl">{title}</h3>
        {body && (
          <p className="mt-3 text-sm font-light leading-relaxed text-white/85 sm:text-base">
            {body}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);
