import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Shield, Lock } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#080808] text-white pt-24 pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Pre-Footer Action Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-white/10 via-white/5 to-transparent border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-8 backdrop-blur-xl">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-emerald-400 block mb-2">
              24/7 Concierge Dispatch
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Ready for your next journey?
            </h3>
            <p className="text-sm text-white/70 font-normal mt-1 max-w-lg">
              Reserve your private chauffeur or request dedicated corporate roadshow pricing.
            </p>
          </div>

          <button
            disabled
            className="px-9 py-4 rounded-full bg-white/60 text-[#080808]/80 text-xs uppercase tracking-[0.2em] font-extrabold cursor-not-allowed opacity-70 flex items-center justify-center gap-3 shadow-2xl shrink-0"
          >
            <span>Coming Soon</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          {/* Brand & Statement */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/itp_logo.png"
                alt="ITP LIMO Executive Transportation"
                className="h-12 sm:h-14 w-auto object-contain brightness-200 contrast-200"
              />
            </div>

            <p className="text-sm text-white/70 font-normal leading-relaxed max-w-sm">
              First-class private mobility serving Boston, Raleigh-Durham, and regional airport corridors. Crafted for C-suite executives, private aviation FBOs, and bespoke corporate travel.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-white/90 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Encrypted Booking</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-white/90 block">
              Navigation
            </span>
            <ul className="space-y-3 text-xs font-normal text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Bespoke Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Sanctuary Experience
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">
                  Flagship Fleet
                </a>
              </li>
              <li>
                <a href="#fbo" className="hover:text-white transition-colors">
                  FBO Private Aviation
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Concierge FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Market Hubs */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-white/90 block">
              Primary Corridors
            </span>
            <ul className="space-y-3 text-xs font-normal text-white/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Boston Logan (BOS) & Back Bay</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Raleigh-Durham (RDU) & RTP</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Signature Aviation & TAC Air</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>BOS → NYC / DC Roadshows</span>
              </li>
            </ul>
          </div>

          {/* Concierge Contact */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-white/90 block">
              Direct Desk
            </span>
            <div className="space-y-3.5 text-xs text-white/70 font-normal">
              <a
                href="tel:17818640618"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-medium text-white">+1 (781) 864-0618</span>
                  <span className="text-[10px] text-white/50">24/7 Dispatch Desk</span>
                </div>
              </a>

              <a
                href="mailto:itplimo.raleigh@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-medium text-white">itplimo.raleigh@gmail.com</span>
                  <span className="text-[10px] text-white/50">Direct Email Concierge</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>2613 Silver Gate Ct, Wake Forest, NC 27587</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Watermark Brand Statement */}
        <div className="pt-16 pb-12 border-b border-white/10 text-center">
          <span className="font-serif text-4xl sm:text-7xl lg:text-8xl tracking-tight text-white/10 uppercase select-none font-normal">
            ITP LUXURY MOBILITY
          </span>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-normal gap-4">
          <div>
            © {new Date().getFullYear()} ITP Luxury Mobility Corp. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Chauffeur Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Non-Disclosure Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
