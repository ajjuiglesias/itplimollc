'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './providers/ThemeProvider';

/** Past this offset the bar condenses into the floating island. */
const CONDENSE_AT = 30;
/** Never auto-hide above this offset — the hero should always keep its nav. */
const HIDE_AFTER = 160;
/** Ignore sub-pixel scroll jitter when deciding direction. */
const DIRECTION_THRESHOLD = 6;

const navLinks = [
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Sanctuary', href: '#experience', hasDropdown: true },
  { name: 'Fleet', href: '#fleet', hasDropdown: false },
  { name: 'Flight Radar', href: '#flight-tracking', hasDropdown: false },
  { name: 'About ITP', href: '#why-us', hasDropdown: true },
];

export const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  // Scroll spy: highlight whichever section is currently occupying the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > CONDENSE_AT);

        if (y < HIDE_AFTER || mobileMenuOpen) {
          setHidden(false);
        } else if (Math.abs(y - lastScrollY.current) > DIRECTION_THRESHOLD) {
          // Scrolling down hides the bar; scrolling up brings it straight back.
          setHidden(y > lastScrollY.current);
        }

        lastScrollY.current = y;
        frame = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mobileMenuOpen]);

  // Condensed = floating island on a solid page background.
  // Expanded = full-width transparent bar over the hero video.
  const condensed = scrolled || mobileMenuOpen;

  const iconButton = `p-2 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
    condensed
      ? 'border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2] hover:bg-black/5 dark:hover:bg-white/10'
      : 'border-white/20 bg-black/40 text-white hover:bg-black/60'
  }`;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? '-160%' : '0%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.9 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Scrim keeping the white nav legible over the hero video; fades out once the island takes over */}
        <div
          className={`absolute inset-x-0 top-0 h-28 z-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
            condensed ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <div
          className={`relative z-10 mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            condensed
              ? 'nav-glass backdrop-blur-2xl backdrop-saturate-[1.8] mt-3 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-6xl rounded-2xl py-2 pl-5 pr-3 sm:pl-7 sm:pr-4'
              : 'mt-0 w-full max-w-[1700px] rounded-none py-4 px-6 sm:px-10 lg:px-16 bg-transparent border border-transparent'
          }`}
        >
          {/* Logo (Left) — baseline-locked wordmark */}
          <a href="#" className="group flex items-baseline gap-1.5 flex-shrink-0 leading-none">
            <span
              className={`font-serif text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-none transition-colors duration-300 ${
                condensed ? 'text-[#171717] dark:text-white' : 'text-white drop-shadow-md'
              }`}
            >
              ITP
            </span>
            <span
              /* -mr trims the trailing letter-space that tracking adds after the final O,
                 so the lockup reads optically centred rather than shifted left. */
              className={`text-[10px] sm:text-[11px] uppercase tracking-[0.3em] -mr-[0.3em] font-extrabold leading-none transition-colors duration-300 ${
                condensed ? 'text-[#66625C] dark:text-[#A0A0A0]' : 'text-white/80 drop-shadow-md'
              }`}
            >
              LIMO
            </span>
          </a>

          {/* Nav Items (Center) */}
          <nav
            className={`hidden xl:flex items-center transition-all duration-500 ${condensed ? 'gap-1' : 'gap-1.5'}`}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center gap-1 group ${
                    condensed
                      ? isActive
                        ? 'text-[#171717] dark:text-white'
                        : 'text-[#171717]/70 dark:text-[#F8F6F2]/70 hover:text-[#171717] dark:hover:text-white'
                      : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {/* Hover pill glides between items rather than fading in place */}
                  {hoveredLink === link.name && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className={`absolute inset-0 rounded-xl ${
                        condensed ? 'bg-black/[0.06] dark:bg-white/[0.09]' : 'bg-white/15'
                      }`}
                      transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.7 }}
                    />
                  )}

                  <span className="relative">{link.name}</span>

                  {link.hasDropdown && (
                    <ChevronDown
                      className={`relative w-3 h-3 opacity-50 group-hover:translate-y-0.5 transition-transform ${
                        condensed ? 'text-[#171717] dark:text-[#F8F6F2]' : 'text-white'
                      }`}
                    />
                  )}

                  {/* Active-section marker */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Links & CTA */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Dispatch line — collapses to an icon inside the island to keep it compact */}
            {condensed ? (
              <a
                href="tel:17818640618"
                className={iconButton}
                title="Call 24/7 Dispatch: +1 (781) 864-0618"
                aria-label="Call 24/7 Dispatch: +1 (781) 864-0618"
              >
                <Phone className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="tel:17818640618"
                className="text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap text-white/90 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>+1 (781) 864-0618</span>
              </a>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={iconButton}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Booking status chip — reads as deliberate rather than a broken button */}
            <span
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                condensed
                  ? 'border-black/15 text-[#66625C] dark:border-white/20 dark:text-[#B8B8B8]'
                  : 'border-white/25 bg-black/30 text-white/80'
              }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Booking Soon
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-3">
            <button onClick={toggleDarkMode} className={iconButton} aria-label="Toggle Theme">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                condensed ? 'text-[#171717] dark:text-[#F8F6F2]' : 'text-white drop-shadow-md'
              }`}
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer — rides with the island so it hides and returns together */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mx-auto mt-2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-6xl rounded-2xl bg-[#FAF8F5]/95 dark:bg-[#0F0F0F]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 p-6 xl:hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)]"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest font-semibold text-[#171717] dark:text-[#F8F6F2] py-2 border-b border-black/5 dark:border-white/5"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Direct dispatch line — the primary contact route while booking is disabled */}
                <a
                  href="tel:17818640618"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 mt-1 py-3 text-[#171717] dark:text-[#F8F6F2]"
                >
                  <span className="p-2 rounded-full bg-black/5 dark:bg-white/10">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold tracking-wide">+1 (781) 864-0618</span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#66625C] dark:text-[#A0A0A0]">
                      24/7 Dispatch Desk
                    </span>
                  </span>
                </a>

                <span className="w-full mt-1 py-3 flex items-center justify-center gap-2.5 text-[10px] uppercase tracking-[0.22em] font-bold text-[#66625C] dark:text-[#A0A0A0]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Online reservations opening soon
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
