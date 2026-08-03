import React from 'react';
import { PageHero } from './PageHero';

export interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  crumbLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
}

/**
 * Shared shell for the legal pages. Long-form prose is capped to a readable
 * measure rather than running the full page width.
 */
export const LegalPage: React.FC<LegalPageProps> = ({
  eyebrow,
  title,
  subtitle,
  crumbLabel,
  lastUpdated,
  sections,
}) => (
  <>
    <PageHero
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      crumbs={[{ label: 'Home', href: '/' }, { label: crumbLabel }]}
      ctaLabel="Questions? Call Dispatch"
    />

    <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
          Last updated · {lastUpdated}
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section, idx) => (
            <section key={section.heading}>
              <h2 className="flex items-baseline gap-4 font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl dark:text-[#F8F6F2]">
                <span className="font-mono text-xs font-bold text-[#888888]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4 pl-0 sm:pl-10">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm font-light leading-relaxed text-[#524E48] sm:text-base dark:text-[#CCCCCC]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  </>
);
