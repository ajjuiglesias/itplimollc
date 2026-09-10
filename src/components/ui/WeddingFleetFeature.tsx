import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function WeddingFleetFeature() {
  return (
    <section className="bg-[#070707] py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-10">
          <SectionHeader eyebrow="The wedding collection" title="Different roles. One beautifully planned day." size="compact" onDark align="left" />
          <p className="max-w-lg text-base leading-relaxed text-white/65">A car for your own quiet moment. Room for the people celebrating with you. Coordinate the Gazelle, executive SUVs and Sprinter around your wedding schedule.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: 'The getaway', detail: 'Mercedes Gazelle', image: '/images/gazelle-wedding.avif', href: '/vintage-wedding-car-raleigh-nc' },
            { name: 'The wedding party', detail: 'Mercedes-Benz Sprinter · 14 passengers', image: '/images/mercedes-sprinter.jpg', href: '/fleet/mercedes-sprinter' },
            { name: 'Family & friends', detail: 'Chevrolet Suburban · 7 passengers', image: '/images/chevrolet-suburban.jpg', href: '/fleet/chevrolet-suburban' },
          ].map(item => <Link key={item.name} href={item.href} className="group overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.detail} loading="lazy" className="aspect-[4/3] w-full object-cover object-[center_66%] transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="p-6"><div className="flex justify-between items-center gap-4"><h3 className="font-serif text-2xl">{item.name}</h3><ArrowUpRight className="h-5 w-5 shrink-0" /></div><p className="mt-2 text-xs leading-relaxed text-white/60">{item.detail}</p></div>
          </Link>)}
        </div>
      </div>
    </section>
  );
}
