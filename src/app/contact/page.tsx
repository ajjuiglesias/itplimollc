import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { locations } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DISPATCH_PHONE, DISPATCH_PHONE_HREF } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = {
  title: 'Contact ITP Limo | 24/7 Chauffeur Dispatch Desk',
  description:
    'Reach the ITP Limo dispatch desk 24 hours a day on +1 (781) 864-0618, or email itplimo.raleigh@gmail.com for corporate accounts and roadshow pricing.',
  alternates: { canonical: '/contact' },
};

const EMAIL = 'itplimo.raleigh@gmail.com';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="24/7 Concierge Dispatch"
        title="Talk to a person."
        subtitle="Our dispatch desk is staffed around the clock. Call for immediate arrangements, or email for corporate accounts and roadshow pricing."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        ctaLabel="Call 24/7 Dispatch"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Direct Desk"
                title="How to reach us."
                align="left"
                className="mb-10"
              />

              <div className="space-y-6">
                <a
                  href={DISPATCH_PHONE_HREF}
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 p-6 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04]"
                >
                  <span className="rounded-full bg-black/5 p-3 text-[#171717] dark:bg-white/10 dark:text-[#F8F6F2]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-serif text-2xl font-medium text-[#171717] dark:text-[#F8F6F2]">
                      {DISPATCH_PHONE}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#66625C] dark:text-[#A0A0A0]">
                      24/7 Dispatch Desk
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 p-6 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04]"
                >
                  <span className="rounded-full bg-black/5 p-3 text-[#171717] dark:bg-white/10 dark:text-[#F8F6F2]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block break-all font-serif text-xl font-medium text-[#171717] dark:text-[#F8F6F2]">
                      {EMAIL}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#66625C] dark:text-[#A0A0A0]">
                      Corporate Accounts & Roadshows
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-black/10 p-6 dark:border-white/10">
                  <span className="rounded-full bg-black/5 p-3 text-[#171717] dark:bg-white/10 dark:text-[#F8F6F2]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#171717] dark:text-[#F8F6F2]">
                      2613 Silver Gate Ct, Wake Forest, NC 27587
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#66625C] dark:text-[#A0A0A0]">
                      Registered Office
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[28px] border border-black/10 bg-[#FAF8F5] p-8 dark:border-white/10 dark:bg-[#1A1A1A]">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  Good to know
                </span>

                <ul className="mt-5 space-y-5">
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-light text-[#524E48] dark:text-[#CCCCCC]">
                      The dispatch line is answered 24 hours a day, including holidays.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-light text-[#524E48] dark:text-[#CCCCCC]">
                      All enquiries are handled under non-disclosure protocol.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-light text-[#524E48] dark:text-[#CCCCCC]">
                      Serving {locations.map((l) => l.city).join(' and ')}, plus regional corridors.
                    </span>
                  </li>
                </ul>

                <p className="mt-8 border-t border-black/10 pt-6 text-xs font-light leading-relaxed text-[#66625C] dark:border-white/10 dark:text-[#B8B8B8]">
                  Online reservations are not live yet. Until they are, every booking is arranged
                  directly through the dispatch desk.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
