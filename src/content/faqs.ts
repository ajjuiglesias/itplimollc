/*
 * Homepage FAQs.
 *
 * Extracted from FaqSection so the accordion and the FAQPage structured data
 * read from one source. They were previously literals inside a client
 * component, which meant the schema could not see them — and schema that
 * disagrees with the visible page is worse than no schema at all.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What happens if my commercial or private flight is delayed?',
    answer:
      'All chauffeur pickups include automated live flight radar tracking. We monitor your tail number or flight number in real time and automatically adjust your chauffeur’s dispatch time to match your actual landing. No delay fees apply.',
  },
  {
    question: 'How long is the complimentary wait time at the airport?',
    answer:
      'Commercial airline arrivals include 60 minutes of complimentary wait time from the moment the aircraft wheels touch down. Private aviation FBO tarmac arrivals include complimentary wait time until you disembark.',
  },
  {
    question: 'Can I request tarmac pickup at a private aviation terminal?',
    answer:
      'Tarmac access depends on the individual terminal’s permit and security requirements. Contact our dispatch desk with your arrival details and we will confirm what is possible at your specific FBO.',
  },
  {
    question: 'What is your cancellation and reservation modification policy?',
    answer:
      'Reservations can be modified or cancelled free of charge up to 24 hours prior to scheduled pick-up for sedan and SUV journeys, and up to 48 hours for Mercedes Sprinter jet vans and multi-vehicle roadshows.',
  },
  {
    question: 'Are all vehicles non-smoking and sanitized?',
    answer:
      'Every vehicle undergoes deep interior detailing, air purification, and sanitation prior to every dispatch. All vehicles are strictly 100% non-smoking.',
  },
  /*
   * Added 2026-08-28. People searching "party bus raleigh" reach the site and
   * deserve a direct answer; the client was explicit that nothing may imply
   * they own party buses. Mirrors PARTY_BUS_NOTE on the group service page.
   */
  {
    question: 'Do you have party buses?',
    answer:
      'No — we do not operate party buses. For proms, group events and party transportation we use the 14-passenger Mercedes-Benz Sprinter and Chevrolet Suburbans, with a licensed chauffeur on every trip. Larger groups run as several vehicles on one schedule so everyone still arrives together.',
  },
  {
    question: 'Do you handle wedding transportation?',
    answer:
      'Yes. We move the couple, the wedding party and the guests on a single timeline — including shuttle loops between hotel, ceremony and reception — so nobody in the wedding party is left coordinating drivers on the day.',
  },
];
