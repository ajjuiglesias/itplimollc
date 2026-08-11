import React from 'react';

interface CapacityStatProps {
  /** e.g. "7 Passengers". Undefined where the client has published no figure. */
  value?: string;
  label: string;
  icon: React.ReactNode;
  size?: 'default' | 'large';
  onDark?: boolean;
}

/**
 * Capacity shown as a display numeral over a label.
 *
 * Renders an em dash rather than a fabricated number when the client has not
 * published a figure for that vehicle, so a gap in the source data stays
 * visible instead of being invented away.
 */
export const CapacityStat: React.FC<CapacityStatProps> = ({
  value,
  label,
  icon,
  size = 'default',
  onDark = false,
}) => {
  const numeral = value?.replace(/[^0-9]/g, '') || '—';

  return (
    <div>
      <span
        className={`block font-serif font-normal leading-none ${
          size === 'large' ? 'text-6xl sm:text-7xl' : 'text-4xl sm:text-5xl'
        } ${onDark ? 'text-white' : 'text-[#171717] dark:text-[#F8F6F2]'}`}
      >
        {numeral}
      </span>
      <span
        className={`mt-2 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest ${
          onDark ? 'text-[#A0A0A0]' : 'text-[#66625C] dark:text-[#A0A0A0]'
        }`}
      >
        {icon}
        {label}
      </span>
    </div>
  );
};
