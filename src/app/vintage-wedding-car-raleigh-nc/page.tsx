import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WeddingFleetFeature } from '@/components/ui/WeddingFleetFeature';
import { EditorialList } from '@/components/ui/EditorialList';
import { BookNowButton, OrCallNote } from '@/components/ui/CallDispatchButton';
import { JsonLd, breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from '@/lib/seo';

const path = '/vintage-wedding-car-raleigh-nc';
const faqs = [
  { question: 'Is the Mercedes Gazelle offered as a self-drive rental?', answer: 'No. The Gazelle is reserved as part of ITP Limo’s professionally chauffeured wedding and special-event transportation service.' },
  { question: 'Can the Gazelle be coordinated with transportation for our wedding party and guests?', answer: 'Yes. The Gazelle can be scheduled for the couple while ITP Limo’s executive SUVs and Mercedes-Benz Sprinter move the wedding party, family and guests on the same transportation plan.' },
  { question: 'Where is vintage wedding car service available?', answer: 'The Gazelle is being introduced for weddings across Raleigh, Wake Forest and the greater Triangle, with other North Carolina destinations available by arrangement.' },
];

export const metadata: Metadata = pageMetadata({
  title: 'Vintage Wedding Car Rental Raleigh, NC | ITP Limo',
  description: 'Reserve a chauffeured Mercedes Gazelle vintage wedding car in Raleigh, NC for grand exits, newlywed portraits, proposals and special occasions.',
  path,
});

export default function VintageWeddingCarPage() {
  return <>
    <JsonLd data={[
      serviceSchema({ name: 'Chauffeured vintage wedding car service in Raleigh, NC', path, description: 'Chauffeured Mercedes Gazelle vintage-style roadster service for weddings, portraits, proposals and special occasions across Raleigh and the Triangle.' }),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Fleet', path: '/fleet' }, { name: 'Vintage Wedding Car Raleigh', path }]),
      faqSchema(faqs),
    ]} />

    <PageHero
      eyebrow="Mercedes Gazelle Wedding Car"
      title="Vintage wedding car rental in Raleigh, NC."
      subtitle="A chauffeured vintage-style roadster for the grand arrival, newlywed portraits and the exit everyone remembers."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Fleet', href: '/fleet' }, { label: 'Vintage Wedding Car' }]}
      image="/images/gazelle-wedding.avif"
      ctaLabel="Check Your Wedding Date"
    />

    <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4"><span className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#66625C] dark:text-[#A0A0A0]">The Experience</span></div>
          <div className="lg:col-span-8">
            <p className="text-xl font-light leading-[1.5] text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">Some wedding transportation simply gets you there. The Mercedes Gazelle is designed to become part of the photographs, the celebration and the memory of the day.</p>
            <p className="mt-6 text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">With a vintage-inspired silhouette and open-air character, it gives couples a distinctive setting for a grand arrival, newlywed portraits and an unforgettable getaway. Every reservation includes a professional ITP Limo chauffeur; this vehicle is not offered as a self-drive rental.</p>
          </div>
        </div>

        <figure className="my-12 sm:my-16 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gazelle-gallery.avif" alt="Mercedes Gazelle side, front and rear views with wedding styling" loading="lazy" className="block h-auto w-full" />
          <figcaption className="flex flex-wrap justify-between gap-2 bg-[#FAF8F5] px-6 py-4 text-xs text-[#66625C] dark:bg-[#181818] dark:text-white/65"><span>Mercedes Gazelle</span><span>A closer look at the wedding roadster</span></figcaption>
        </figure>

        <SectionHeader eyebrow="Made for the moment" title="More than a way to leave." subtitle="Reserve the Gazelle for the part of your celebration that deserves its own entrance, portrait and final frame." align="left" className="mb-12" />
        <EditorialList items={[
          { eyebrow: 'Weddings', title: 'Arrivals & grand exits', body: 'Create a distinctive arrival at the ceremony or leave the reception in a vehicle that feels made for the occasion.' },
          { eyebrow: 'Photography', title: 'Newlywed portraits', body: 'Build the car into portraits, engagement sessions and styled wedding shoots as a memorable visual backdrop.' },
          { eyebrow: 'Celebrations', title: 'Proposals & anniversaries', body: 'Turn proposals, anniversary plans and private special events into a thoughtfully chauffeured experience.' },
        ]} />
      </div>
    </section>

    <WeddingFleetFeature />

    <section className="bg-white py-16 sm:py-24 dark:bg-[#141414]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Raleigh & Beyond" size="compact" title="Across the Triangle." subtitle="Other North Carolina destinations can be arranged around your venue, schedule and event plan." align="left" />
            <Link href="/wedding-venues" className="group mt-8 inline-flex min-h-[44px] items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]">Explore Triangle Wedding Venues<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7"><div className="border-t border-black/10 dark:border-white/10">
            {['Raleigh · Wake Forest · Durham · Chapel Hill', 'Cary · Apex · Holly Springs · Fuquay-Varina', 'Clayton · Garner · Rolesville · Youngsville', 'Pittsboro · Hillsborough · Pinehurst · Southern Pines'].map((area, idx) => <div key={area} className="flex items-baseline gap-5 border-b border-black/10 py-6 dark:border-white/10"><span className="font-mono text-xs font-bold text-[#888888]">{String(idx + 1).padStart(2, '0')}</span><p className="font-serif text-xl text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">{area}</p></div>)}
          </div></div>
        </div>
      </div>
    </section>

    <section className="border-t border-black/5 bg-[#FAF8F5] py-16 sm:py-24 dark:border-white/5 dark:bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5"><SectionHeader size="compact" eyebrow="Before You Reserve" title="A few useful answers." align="left" /></div>
        <div className="lg:col-span-6 lg:col-start-7">
          {faqs.map((faq) => <div key={faq.question} className="border-b border-black/10 py-6 first:border-t dark:border-white/10"><h2 className="font-serif text-xl font-medium text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">{faq.question}</h2><p className="mt-3 text-sm font-light leading-relaxed text-[#66625C] sm:text-base dark:text-[#B8B8B8]">{faq.answer}</p></div>)}
          <div className="mt-9 flex flex-col items-start gap-3"><BookNowButton label="Reserve The Gazelle" /><OrCallNote /></div>
        </div>
      </div></div>
    </section>
  </>;
}
