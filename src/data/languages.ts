import { LanguageProficiency } from '@/types';

export const languages: LanguageProficiency[] = [
  {
    language: {
      de: 'Türkisch',
      en: 'Turkish',
    },
    level: {
      de: 'Muttersprache',
      en: 'Native',
    },
    proficiency: 5,
  },
  {
    language: {
      de: 'Deutsch',
      en: 'German',
    },
    level: {
      de: 'Fachkundige Sprachkenntnisse (C1)',
      en: 'Professional Proficiency (C1)',
    },
    proficiency: 4,
  },
  {
    language: {
      de: 'Englisch',
      en: 'English',
    },
    level: {
      de: 'Obere Mittelstufe (B2)',
      en: 'Upper Intermediate (B2)',
    },
    proficiency: 3,
  },
];
