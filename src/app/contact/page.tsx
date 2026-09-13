import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { locations } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PillarColumns } from '@/components/ui/PillarColumns';
import { TextDispatchButton, DISPATCH_PHONE, DISPATCH_PHONE_HREF } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = pageMetadata({
  title: 'Contact ITP Limo | 24/7 Chauffeur Dispatch Desk',
  description:
    'Reach the ITP Limo dispatch desk 24 hours a day on +1 (919) 435-2157, or email Reservations@itplimo.com for corporate accounts and roadshow pricing.',
  path: '/contact',
});

const EMAIL = 'Reservations@itplimo.com';

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="24/7 Concierge Dispatch"
        title="Talk to a person."
        subtitle="Call or text 919-435-2157 to plan your ride. For immediate arrangements, call our dispatch desk; for corporate accounts and roadshow pricing, email us."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        ctaLabel="Call 24/7 Dispatch"
        cta="call"
      image="/images/chauffeur-suburban.jpg"
      />

      {/* Contact details as oversized editorial cards */}
      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="space-y-6 sm:space-y-8">
            <a
              href={DISPATCH_PHONE_HREF}
              className="group grid grid-cols-1 gap-6 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-[#181818] border border-black/5 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300 lg:grid-cols-12 lg:gap-10 lg:items-center"
            >
              <div className="flex items-start gap-4 sm:gap-6 lg:col-span-6">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge shrink-0">01</span>
                <div>
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <Phone className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    Dispatch Desk
                  </span>
                  <span className="block font-serif text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-75 sm:text-4xl md:text-5xl dark:text-[#F8F6F2]">
                    {DISPATCH_PHONE}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between lg:col-span-6">
                <p className="text-sm sm:text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Answered 24 hours a day, including holidays. The fastest route to a
                  confirmed booking.
                </p>
                <div className="ml-6 hidden p-3 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white group-hover:bg-[#171717] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all sm:flex shrink-0">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>

            <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-black/5 bg-[#FAF8F5] p-6 dark:border-white/10 dark:bg-[#181818]"><TextDispatchButton /><p className="text-sm text-[#66625C] dark:text-[#B8B8B8]">Prefer a message? Text 919-435-2157 with your date, pickup and destination.</p></div>
            <a
              href={`mailto:${EMAIL}`}
              className="group grid grid-cols-1 gap-6 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-[#181818] border border-black/5 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300 lg:grid-cols-12 lg:gap-10 lg:items-center"
            >
              <div className="flex items-start gap-4 sm:gap-6 lg:col-span-6">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge shrink-0">02</span>
                <div className="min-w-0">
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <Mail className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    Email Concierge
                  </span>
                  <span className="block break-all font-serif text-2xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-75 sm:text-3xl md:text-4xl dark:text-[#F8F6F2]">
                    {EMAIL}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between lg:col-span-6">
                <p className="text-sm sm:text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Best for corporate accounts, roadshow pricing and anything needing a
                  written record.
                </p>
                <div className="ml-6 hidden p-3 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white group-hover:bg-[#171717] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all sm:flex shrink-0">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-[#181818] border border-black/5 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] lg:grid-cols-12 lg:gap-10 lg:items-center">
              <div className="flex items-start gap-4 sm:gap-6 lg:col-span-6">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge shrink-0">03</span>
                <div>
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <MapPin className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    Based In
                  </span>
                  <span className="block font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl md:text-4xl dark:text-[#F8F6F2]">
                    Wake Forest, NC
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="text-sm sm:text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Vehicles are dispatched from within each market. Call, text or email the
                  dispatch desk to arrange a journey — there is no walk-in office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-16 transition-colors duration-500 sm:py-24 dark:border-white/5 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Before You Call"
            title="Good to know."
            align="left"
            className="mb-14"
          />

          <PillarColumns
            columns={3}
            pillars={[
              {
                eyebrow: 'Availability',
                title: 'Answered around the clock',
                body: 'The dispatch line is staffed 24 hours a day, every day of the year, including holidays.',
              },
              {
                eyebrow: 'Discretion',
                title: 'Handled confidentially',
                body: 'Enquiries, passenger details and destinations are treated under non-disclosure protocol.',
              },
              {
                eyebrow: 'Booking',
                title: 'Online, call or text',
                body: 'Reserve online in a few steps, or call or text the desk for multi-vehicle, roadshow and same-day arrangements.',
              },
            ]}
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex items-center justify-between gap-6 p-6 rounded-2xl bg-white dark:bg-[#161616] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md hover:border-black/15 dark:hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {location.state} · {location.airportCode}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 dark:text-[#F8F6F2]">
                    {location.city}
                  </span>
                </div>
                <div className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white group-hover:bg-[#171717] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
