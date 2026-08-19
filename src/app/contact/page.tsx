import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { locations } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PillarColumns } from '@/components/ui/PillarColumns';
import { DISPATCH_PHONE, DISPATCH_PHONE_HREF } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = {
  title: 'Contact ITP Limo | 24/7 Chauffeur Dispatch Desk',
  description:
    'Reach the ITP Limo dispatch desk 24 hours a day on +1 (919) 435-2157, or email Reservations@itplimo.com for corporate accounts and roadshow pricing.',
  alternates: { canonical: '/contact' },
};

const EMAIL = 'Reservations@itplimo.com';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="24/7 Concierge Dispatch"
        title="Talk to a person."
        subtitle="Our dispatch desk is staffed around the clock. Call for immediate arrangements, or email for corporate accounts and roadshow pricing."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        ctaLabel="Call 24/7 Dispatch"
        cta="call"
      />

      {/* Contact details as oversized editorial rows rather than bordered tiles */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="border-y border-black/10 dark:border-white/10">
            <a
              href={DISPATCH_PHONE_HREF}
              className="group grid grid-cols-1 gap-4 border-b border-black/10 py-10 lg:grid-cols-12 lg:gap-10 dark:border-white/10"
            >
              <div className="flex items-start gap-4 sm:gap-10 lg:col-span-5">
                <span className="pt-2 font-mono text-xs font-bold text-[#888888]">01</span>
                <div>
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <Phone className="h-3 w-3" />
                    Dispatch Desk
                  </span>
                  <span className="block font-serif text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-4xl md:text-5xl dark:text-[#F8F6F2]">
                    {DISPATCH_PHONE}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pl-12 sm:pl-16 lg:col-span-6 lg:col-start-7 lg:pl-0">
                <p className="text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Answered 24 hours a day, including holidays. The fastest route to a
                  confirmed booking.
                </p>
                <ArrowUpRight className="ml-6 hidden h-5 w-5 shrink-0 text-[#171717] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block dark:text-[#F8F6F2]" />
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group grid grid-cols-1 gap-4 border-b border-black/10 py-10 lg:grid-cols-12 lg:gap-10 dark:border-white/10"
            >
              <div className="flex items-start gap-4 sm:gap-10 lg:col-span-5">
                <span className="pt-2 font-mono text-xs font-bold text-[#888888]">02</span>
                <div className="min-w-0">
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <Mail className="h-3 w-3" />
                    Email Concierge
                  </span>
                  <span className="block break-all font-serif text-xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-2xl md:text-3xl dark:text-[#F8F6F2]">
                    {EMAIL}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pl-12 sm:pl-16 lg:col-span-6 lg:col-start-7 lg:pl-0">
                <p className="text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Best for corporate accounts, roadshow pricing and anything needing a
                  written record.
                </p>
                <ArrowUpRight className="ml-6 hidden h-5 w-5 shrink-0 text-[#171717] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block dark:text-[#F8F6F2]" />
              </div>
            </a>

            <div className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-12 lg:gap-10">
              <div className="flex items-start gap-4 sm:gap-10 lg:col-span-5">
                <span className="pt-2 font-mono text-xs font-bold text-[#888888]">03</span>
                <div>
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <MapPin className="h-3 w-3" />
                    Based In
                  </span>
                  <span className="block font-serif text-xl font-medium tracking-tight text-[#171717] sm:text-2xl md:text-3xl dark:text-[#F8F6F2]">
                    Wake Forest, NC
                  </span>
                </div>
              </div>

              <div className="pl-12 sm:pl-16 lg:col-span-6 lg:col-start-7 lg:pl-0">
                <p className="text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Vehicles are dispatched from within each market. Call or email the
                  dispatch desk to arrange a journey — there is no walk-in office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
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
                title: 'Online or by phone',
                body: 'Reserve online in a few steps, or call the desk for multi-vehicle, roadshow and same-day arrangements.',
              },
            ]}
          />

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex items-baseline justify-between gap-6 border-b border-black/10 py-6 dark:border-white/10"
              >
                <span>
                  <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {location.state} · {location.airportCode}
                  </span>
                  <span className="font-serif text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-4xl dark:text-[#F8F6F2]">
                    {location.city}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#171717] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-[#F8F6F2]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
