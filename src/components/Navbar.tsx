'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './providers/ThemeProvider';
import { locations } from '@/content/locations';

/** Past this offset the bar condenses into the floating island. */
const CONDENSE_AT = 30;
/** Never auto-hide above this offset — the hero should always keep its nav. */
const HIDE_AFTER = 160;
/** Ignore sub-pixel scroll jitter when deciding direction. */
const DIRECTION_THRESHOLD = 6;

/*
 * Mirrors the client's own navigation: their markets lead, then services,
 * fleet, about and contact. Home is covered by the logo.
 *
 * Markets used to sit at the top level as "Raleigh" and "Boston". They now
 * collapse into one Service Areas item: the client is expanding into Pinehurst
 * and Wilmington, and four cities plus four section links is more than a top
 * level can carry. The parent is a real page, not just a menu — /locations is
 * the hub the whole location cluster links through.
 *
 * Private aviation and flight tracking are deliberately not here. Neither
 * appears in the client's navigation, and both are facets of the airport
 * service rather than separate lines of business; they stay reachable from the
 * services page and the footer.
 */
interface NavLink {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    name: 'Service Areas',
    href: '/locations',
    children: locations.map((l) => ({
      name: `${l.city}, ${l.stateAbbr}`,
      href: `/locations/${l.slug}`,
    })),
  },
  { name: 'Services', href: '/services' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  /** Which top-level item has its submenu open. Null when none. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // A nav item is active on its own page and on anything nested beneath it,
  // so /fleet stays lit while viewing /fleet/cadillac-escalade-esv.
  const isActiveRoute = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Close the drawer whenever navigation completes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const iconButton = `h-11 w-11 shrink-0 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
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
          {/* Logo (Left) — the client's own horizontal lockup, not a text substitute */}
          <Link
            href="/"
            className="group flex min-h-[44px] flex-shrink-0 items-center"
            aria-label="ITP Limo — Executive Transportation, home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/itp-logo-horizontal.png"
              alt="ITP Limo — Executive Transportation"
              width={623}
              height={99}
              /* The mark is silver, so it needs a shadow to hold up over the hero
                 video and a slight lift in dark mode to stay legible. */
              className={`h-6 w-auto sm:h-7 transition-all duration-300 ${
                condensed
                  ? 'dark:brightness-125'
                  : 'brightness-[1.6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
              }`}
            />
          </Link>

          {/* Nav Items (Center) */}
          <nav
            className={`hidden xl:flex items-center transition-all duration-500 ${condensed ? 'gap-1' : 'gap-1.5'}`}
            onMouseLeave={() => {
              setHoveredLink(null);
              setOpenMenu(null);
            }}
          >
            {navLinks.map((link) => {
              const isActive = isActiveRoute(link.href);
              const isOpen = openMenu === link.name;

              return (
                /*
                 * The submenu is held open by focus as well as hover, so the
                 * city links stay reachable by keyboard. onFocus/onBlur bubble
                 * from the children, and relatedTarget tells us whether focus
                 * left the group entirely or just moved between its links.
                 */
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    setOpenMenu(link.children ? link.name : null);
                  }}
                  onFocus={() => setOpenMenu(link.children ? link.name : null)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    aria-haspopup={link.children ? 'true' : undefined}
                    aria-expanded={link.children ? isOpen : undefined}
                    className={`relative px-3 py-2 rounded-xl text-xs uppercase tracking-[0.14em] font-medium transition-colors flex items-center gap-1 group ${
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

                    {link.children && (
                      <ChevronDown
                        className={`relative h-3 w-3 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    )}

                    {/* Current-route marker */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.children && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-1.5 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#141414]/95">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex min-h-[40px] items-center rounded-xl px-3.5 text-xs font-medium tracking-wide transition-colors ${
                                isActiveRoute(child.href)
                                  ? 'bg-black/[0.06] text-[#171717] dark:bg-white/[0.09] dark:text-white'
                                  : 'text-[#171717]/75 hover:bg-black/[0.04] hover:text-[#171717] dark:text-[#F8F6F2]/75 dark:hover:bg-white/[0.06] dark:hover:text-white'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

            {/* Primary booking CTA */}
            <Link
              href="/book"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-extrabold transition-all hover:scale-[1.02] active:scale-100 whitespace-nowrap ${
                condensed
                  ? 'bg-[#171717] text-white hover:bg-[#333333] dark:bg-white dark:text-[#0F0F0F] dark:hover:bg-[#E5E5EA]'
                  : 'bg-white text-[#0F0F0F] hover:bg-[#F2EFE9] shadow-lg'
              }`}
            >
              Book Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-3">
            <button onClick={toggleDarkMode} className={iconButton} aria-label="Toggle Theme">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors cursor-pointer ${
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
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  /*
                   * No accordion on mobile: the drawer has room, and burying the
                   * markets behind another tap would make the client's newest
                   * pages the hardest to reach. Children are simply indented
                   * under their parent.
                   */
                  <React.Fragment key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex min-h-[48px] items-center text-sm uppercase tracking-widest font-semibold border-b border-black/5 dark:border-white/5 ${
                        isActiveRoute(link.href)
                          ? 'text-[#171717] dark:text-[#F8F6F2]'
                          : 'text-[#171717]/70 dark:text-[#F8F6F2]/70'
                      }`}
                    >
                      {link.name}
                    </Link>

                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex min-h-[44px] items-center gap-2.5 border-b border-black/5 pl-4 text-xs tracking-wide dark:border-white/5 ${
                          isActiveRoute(child.href)
                            ? 'text-[#171717] dark:text-[#F8F6F2]'
                            : 'text-[#171717]/55 dark:text-[#F8F6F2]/55'
                        }`}
                      >
                        <span className="h-1 w-1 rounded-full bg-current opacity-50" />
                        {child.name}
                      </Link>
                    ))}
                  </React.Fragment>
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
                  Dispatch answered 24/7
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
