import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const DISPATCH_PHONE = '+1 (919) 435-2157';
export const DISPATCH_PHONE_HREF = 'tel:19194352157';
export const DISPATCH_SMS_HREF = 'sms:+19194352157';

export function TextDispatchButton({ onDark = false }: { onDark?: boolean }) {
  return <a href={DISPATCH_SMS_HREF} aria-label="Text ITP Limo at 919-435-2157" className={`text-dispatch-breathe inline-flex min-h-[44px] items-center justify-center gap-2 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors duration-300 ${onDark ? 'text-[#E2C974] hover:text-[#F3E2A2]' : 'text-[#806438] hover:text-[#5F4827] dark:text-[#E2C974] dark:hover:text-[#F3E2A2]'}`}><MessageSquare aria-hidden="true" className="h-4 w-4 shrink-0" />Text Us</a>;
}

type Variant = 'solid' | 'outline' | 'onDark';

const base =
  'group luxury-shimmer-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-100 cursor-pointer';

const variants: Record<Variant, string> = {
  // Filled charcoal on light sections
  solid:
    'bg-[#171717] text-white hover:bg-[#2A2A2A] shadow-[0_10px_25px_rgba(0,0,0,0.18)] dark:bg-white dark:text-[#0F0F0F] dark:hover:bg-[#EAEAEA] dark:shadow-[0_10px_25px_rgba(255,255,255,0.12)]',
  // Hairline on light sections, for secondary placements
  outline:
    'border border-black/15 text-[#171717] hover:bg-black/5 hover:border-black/30 dark:border-white/20 dark:text-[#F8F6F2] dark:hover:bg-white/10 dark:hover:border-white/40 shadow-sm',
  // Filled white, for permanently-dark sections (Fleet, Footer)
  onDark: 'bg-white text-[#0F0F0F] hover:bg-[#F2EFE9] shadow-[0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.1)]',
};

/**
 * Primary booking CTA. Routes to /book, where the Moovs reservation system is
 * embedded — deliberately a route rather than an inline embed, because the
 * Moovs bundle is ~4.5MB and must stay off the critical path.
 */
export const BookNowButton: React.FC<{
  label?: string;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
}> = ({ label = 'Book Your Ride', variant = 'solid', fullWidth = false, className = '' }) => (
  <Link
    href="/book"
    className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <span>{label}</span>
    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
  </Link>
);

/**
 * Muted text-message link pairing with the booking CTA, for anything the online
 * flow does not cover — multi-vehicle, roadshows, same-day changes.
 */
export const OrCallNote: React.FC<{ onDark?: boolean; className?: string }> = ({
  onDark = false,
  className = '',
}) => (
  <a
    href={DISPATCH_SMS_HREF}
    aria-label="Text ITP Limo at 919-435-2157"
    /* py-3 keeps the tap target at the 44px comfort minimum; the text itself is
       only ~15px tall, which is well below it on touch devices. */
    className={`inline-flex min-h-[44px] items-center gap-2.5 py-3 text-[10px] uppercase tracking-[0.22em] font-semibold transition-all duration-300 ${
      onDark
        ? 'text-white/65 hover:text-white'
        : 'text-[#66625C] dark:text-[#A0A0A0] hover:text-[#171717] dark:hover:text-white'
    }`}
  >
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
    </span>
    <MessageSquare aria-hidden="true" className="h-3.5 w-3.5" />
    Text 24/7 dispatch
  </a>
);
