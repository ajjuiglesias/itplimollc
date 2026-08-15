'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AmbientVideoProps {
  /** Path to the MP4 under /public. */
  src: string;
  /** Shown before the video mounts, and instead of it when motion is reduced. */
  poster: string;
  alt: string;
  className?: string;
  /** Extra classes for the poster image and video, which are layered together. */
  mediaClassName?: string;
  /**
   * Only mount the video when this query matches, e.g. '(max-width: 1023px)'.
   * Evaluated in JS rather than CSS because a `hidden` <video> still downloads.
   */
  media?: string;
  /** Wait until the element is near the viewport before loading. */
  lazy?: boolean;
}

/**
 * A muted, looping background video with a poster fallback.
 *
 * The video is mounted from an effect rather than rendered on the server, so:
 *   - the poster is what paints first, keeping the LCP an image, not a video;
 *   - `media` can gate the download entirely (the client's footage is 9:16, so
 *     it is only worth loading where the viewport is actually portrait);
 *   - `prefers-reduced-motion` can suppress playback before any bytes move,
 *     which a CSS-only approach cannot do.
 */
export const AmbientVideo: React.FC<AmbientVideoProps> = ({
  src,
  poster,
  alt,
  className = '',
  mediaClassName = '',
  media,
  lazy = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Reduced motion wins outright — the poster alone is the whole experience.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (media && !window.matchMedia(media).matches) return;

    // Without an observer there is no way to know when this scrolls into view,
    // so fall back to loading rather than leaving a permanently static poster.
    if (!lazy || typeof IntersectionObserver === 'undefined') {
      setShowVideo(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [media, lazy]);

  // Decoding video that nobody is looking at costs battery and can cause jank,
  // and the homepage carries four of these. Play only while on screen.
  useEffect(() => {
    if (!showVideo || typeof IntersectionObserver === 'undefined') return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        // play() rejects if the browser declines autoplay; the poster stays up.
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [showVideo]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${mediaClassName}`}
      />

      {showVideo && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full object-cover ${mediaClassName}`}
        />
      )}
    </div>
  );
};
