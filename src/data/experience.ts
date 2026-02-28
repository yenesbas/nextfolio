import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'example-job',
    role: {
      de: 'Deine Rolle',
      en: 'Your Role',
    },
    organization: 'Company / Organization Name',
    period: 'Month 20XX — Present',
    location: undefined,
    description: [
      {
        de: 'Beschreibung deiner Aufgabe 1',
        en: 'Description of your task 1',
      },
      {
        de: 'Beschreibung deiner Aufgabe 2',
        en: 'Description of your task 2',
      },
      {
        de: 'Beschreibung deiner Aufgabe 3',
        en: 'Description of your task 3',
      },
    ],
    type: 'work', // or 'volunteer'
  },
];
