import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Sanctuary', href: '#experience', hasDropdown: true },
    { name: 'Fleet', href: '#fleet', hasDropdown: false },
    { name: 'Flight Radar', href: '#flight-tracking', hasDropdown: false },
    { name: 'About ITP', href: '#why-us', hasDropdown: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#FAF8F5]/95 dark:bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo (Left) */}
          <a href="#" className="group flex items-center gap-2 flex-shrink-0">
            <span className={`font-serif text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-none transition-colors duration-300 ${
              scrolled || mobileMenuOpen
                ? 'text-[#171717] dark:text-white'
                : 'text-white drop-shadow-md'
            }`}>ITP</span>
            <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold leading-none transition-colors duration-300 ${
              scrolled || mobileMenuOpen
                ? 'text-[#66625C] dark:text-[#A0A0A0]'
                : 'text-white/80 drop-shadow-md'
            }`}>LIMO</span>
          </a>

          {/* Nav Items (Center) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-1 group ${
                  scrolled || mobileMenuOpen
                    ? 'text-[#171717]/85 dark:text-[#F8F6F2]/80 hover:text-[#171717] dark:hover:text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-[#171717] dark:text-[#F8F6F2] group-hover:translate-y-0.5 transition-transform opacity-60" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Links & CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Direct Phone / Support */}
            <a
              href="tel:17818640618"
              className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center gap-1.5 ${
                scrolled || mobileMenuOpen
                  ? 'text-[#66625C] dark:text-[#B8B8B8] hover:text-[#171717] dark:hover:text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className={`w-3.5 h-3.5 ${
                scrolled || mobileMenuOpen
                  ? 'text-[#171717] dark:text-[#F8F6F2]'
                  : 'text-white'
              }`} />
              <span>+1 (781) 864-0618</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                scrolled || mobileMenuOpen
                  ? 'border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2]'
                  : 'border-white/20 bg-black/40 text-white hover:bg-black/60'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-[#171717]" />}
            </button>

            {/* Primary Accent Pill CTA Button: Matte Black / Crisp White */}
            <button
              disabled
              className="px-6 py-2.5 rounded-full bg-[#171717]/60 dark:bg-white/60 text-white/80 dark:text-[#0F0F0F]/80 text-xs uppercase tracking-[0.2em] font-bold shadow-md cursor-not-allowed opacity-70"
            >
              <span>COMING SOON</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full border border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2]"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-[#171717]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#171717] dark:text-[#F8F6F2]"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[#FAF8F5] dark:bg-[#0F0F0F] border-b border-black/10 dark:border-white/10 p-6 md:hidden shadow-2xl"
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

              <button
                disabled
                className="w-full mt-2 py-4 rounded-full bg-[#171717]/60 dark:bg-white/60 text-white/80 dark:text-[#0F0F0F]/80 text-xs uppercase tracking-widest font-bold shadow-lg cursor-not-allowed opacity-70 flex items-center justify-center gap-2"
              >
                <span>COMING SOON</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
