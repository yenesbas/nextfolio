import { Education } from '@/types';

export const education: Education[] = [
  {
    id: 'university',
    institution: 'Your University',
    degree: {
      de: 'Dein Studiengang B.Sc.',
      en: 'Your Degree B.Sc.',
    },
    period: 'Sep 20XX — Present',
    location: 'City',
    details: [
      {
        de: 'X. Semester',
        en: 'Xth Semester',
      },
      {
        de: 'Relevante Kurse: Kurs 1, Kurs 2, Kurs 3',
        en: 'Relevant Courses: Course 1, Course 2, Course 3',
      },
    ],
  },
  {
    id: 'highschool',
    institution: 'Your High School',
    degree: {
      de: 'Abitur (Allgemeine Hochschulreife)',
      en: 'Abitur (German High School Diploma)',
    },
    period: '20XX — 20XX',
    location: 'City',
  },
];
