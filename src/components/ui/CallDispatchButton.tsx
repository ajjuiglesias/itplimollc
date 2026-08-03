import React from 'react';
import { Phone } from 'lucide-react';

export const DISPATCH_PHONE = '+1 (781) 864-0618';
export const DISPATCH_PHONE_HREF = 'tel:17818640618';

type Variant = 'solid' | 'outline' | 'onDark';

interface CallDispatchButtonProps {
  /** Visible label. Defaults to the dispatch line itself. */
  label?: string;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
}

const base =
  'group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-100 cursor-pointer';

const variants: Record<Variant, string> = {
  // Filled charcoal on light sections
  solid:
    'bg-[#171717] text-white hover:bg-[#333333] shadow-lg dark:bg-white dark:text-[#0F0F0F] dark:hover:bg-[#E5E5EA]',
  // Hairline on light sections, for secondary placements
  outline:
    'border border-black/15 text-[#171717] hover:bg-black/5 dark:border-white/25 dark:text-[#F8F6F2] dark:hover:bg-white/10',
  // Filled white, for permanently-dark sections (Fleet, Footer)
  onDark: 'bg-white text-[#0F0F0F] hover:bg-[#F2EFE9] shadow-xl',
};

/**
 * Standard call-to-action while online booking is disabled. The dispatch line is
 * the one action a visitor can actually complete, so every section CTA routes
 * to it rather than to a dead disabled button.
 */
export const CallDispatchButton: React.FC<CallDispatchButtonProps> = ({
  label = 'Call 24/7 Dispatch',
  variant = 'solid',
  fullWidth = false,
  className = '',
}) => (
  <a
    href={DISPATCH_PHONE_HREF}
    className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <Phone className="w-4 h-4" />
    <span>{label}</span>
  </a>
);

/**
 * Muted note pairing with a CTA to explain that online booking is not live yet.
 */
export const BookingSoonNote: React.FC<{ onDark?: boolean; className?: string }> = ({
  onDark = false,
  className = '',
}) => (
  <span
    className={`flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] font-semibold ${
      onDark ? 'text-white/60' : 'text-[#66625C] dark:text-[#A0A0A0]'
    } ${className}`}
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
    </span>
    Online reservations opening soon
  </span>
);
