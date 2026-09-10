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
  /**
   * Opt out of the directional treatment for a frame that cannot carry the
   * copy — an even, heavier wash instead.
   */
  imageTone?: 'muted';
  compact?: boolean;
  imagePosition?: string;
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
  imageTone,
  compact = false,
  imagePosition = 'center 60%',
}) => (
  <section className={`relative isolate overflow-hidden bg-[#070707] ${compact ? 'pt-28 pb-10 sm:pt-32 sm:pb-12' : 'pt-28 pb-14 sm:pt-36 sm:pb-20'}`}>
    {image && (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          style={{ objectPosition: imagePosition }}
          className={`absolute inset-0 -z-10 h-full w-full object-cover ${
            imageTone === 'muted' ? 'opacity-45' : 'opacity-80'
          }`}
        />

        {/*
          The photograph is darkened directionally rather than evenly.

          Every hero on this site sets its copy left-aligned in the same
          container, so the left edge is the only part that has to guarantee
          contrast. Washing the whole frame to hold text that only occupies one
          side was throwing away the client's photography everywhere — the
          six-chauffeur team shot read as a dark smudge, and the fleet lineup
          barely registered.

          So: opaque black on the left, releasing across to the right. The
          headline keeps full contrast because the gradient starts at solid
          #070707; the picture becomes visible because it does not stay there.
          The vertical pass underneath only seats the image against the section
          edges.

          'muted' is the old even wash, kept for any frame that is too busy or
          too pale behind the copy to carry it.
        */}
        {imageTone === 'muted' ? (
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070707] via-[#070707]/85 to-[#070707]/60" />
        ) : (
          <>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-[#070707]/25" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
          </>
        )}
      </>
    )}

    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex flex-wrap items-center gap-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium text-white/65">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-white/40" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="inline-flex min-h-[32px] items-center transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-bold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold text-white/90">
            {eyebrow}
          </span>
        </div>
      </div>

      <h1 className={`font-serif ${compact ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-[2.2rem] sm:text-5xl md:text-6xl xl:text-7xl'} font-normal tracking-tight leading-[1.08] text-balance text-[#F8F6F2] mt-2 max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}>
        {title}
      </h1>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-white/80 drop-shadow-sm">
          {subtitle}
        </p>
      )}

      {cta !== 'none' && (
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-x-5 gap-y-2">
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
