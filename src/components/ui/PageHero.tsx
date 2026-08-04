import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BookNowButton, OrCallNote, CallDispatchButton } from './CallDispatchButton';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  /** Background image. Falls back to a flat dark panel when omitted. */
  image?: string;
  ctaLabel?: string;
  /**
   * Which action the hero leads with. Use 'call' on /book itself, where a
   * booking button would link the page to itself.
   */
  cta?: 'book' | 'call' | 'none';
}

/**
 * Inner-page hero. Deliberately shorter than the homepage's full-screen video
 * hero — enough presence to carry the brand, but it hands off to page content
 * quickly rather than pushing it below the fold.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  image,
  ctaLabel = 'Book Your Ride',
  cta = 'book',
}) => (
  <section className="relative isolate overflow-hidden bg-[#070707] pt-36 pb-20 sm:pt-44 sm:pb-28">
    {image && (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070707] via-[#070707]/85 to-[#070707]/60" />
      </>
    )}

    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-white/30" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <span className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-[#A0A0A0]">
        {eyebrow}
      </span>

      <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] text-[#F8F6F2] mt-3 max-w-4xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-white/75">
          {subtitle}
        </p>
      )}

      {cta !== 'none' && (
        <div className="mt-10 flex flex-wrap items-center gap-5">
          {cta === 'book' ? (
            <>
              <BookNowButton label={ctaLabel} variant="onDark" />
              <OrCallNote onDark />
            </>
          ) : (
            <CallDispatchButton label={ctaLabel} variant="onDark" />
          )}
        </div>
      )}
    </div>
  </section>
);
