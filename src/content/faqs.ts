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
      'Share your flight number or private-aircraft tail number when booking. Dispatch can monitor the arrival and coordinate your pickup around the latest available flight status.',
  },
  {
    question: 'How long is the complimentary wait time at the airport?',
    answer:
      'Wait-time terms can vary by airport, vehicle and booking. Contact dispatch before reserving if you need extra time for baggage, customs, a private terminal or a group arrival.',
  },
  {
    question: 'Can I request tarmac pickup at a private aviation terminal?',
    answer:
      'Tarmac access depends on the individual terminal’s permit and security requirements. Contact our dispatch desk with your arrival details and we will confirm what is possible at your specific FBO.',
  },
  {
    question: 'What is your cancellation and reservation modification policy?',
    answer:
      'Cancellation and change terms depend on the vehicle and journey. Dispatch will confirm the terms that apply before your reservation is finalized.',
  },
  {
    question: 'Are the vehicles non-smoking?',
    answer:
      'ITP Limo vehicles are non-smoking. Contact dispatch if you have a specific accessibility, allergy or onboard requirement so it can be discussed before booking.',
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
