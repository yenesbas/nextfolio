import { LanguageProficiency } from '@/types';

export const languages: LanguageProficiency[] = [
  {
    language: {
      de: 'Ihre Muttersprache',
      en: 'Your Native Language',
    },
    level: {
      de: 'Muttersprache',
      en: 'Native',
    },
    proficiency: 5,
  },
  {
    language: {
      de: 'Zweite Sprache',
      en: 'Second Language',
    },
    level: {
      de: 'Fachkundige Sprachkenntnisse (C1)',
      en: 'Professional Proficiency (C1)',
    },
    proficiency: 4,
  },
  {
    language: {
      de: 'Dritte Sprache',
      en: 'Third Language',
    },
    level: {
      de: 'Obere Mittelstufe (B2)',
      en: 'Upper Intermediate (B2)',
    },
    proficiency: 3,
  },
];
