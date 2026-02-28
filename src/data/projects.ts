import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    subtitle: {
      de: 'Projektbeschreibung',
      en: 'Project Description',
    },
    description: {
      de: 'Eine kurze Beschreibung deines Projekts. Was hast du gebaut und warum?',
      en: 'A short description of your project. What did you build and why?',
    },
    period: 'Month 20XX — Present',
    techStack: ['Technology 1', 'Technology 2', 'Technology 3'],
    highlights: [
      {
        de: 'Highlight 1 auf Deutsch',
        en: 'Highlight 1 in English',
      },
      {
        de: 'Highlight 2 auf Deutsch',
        en: 'Highlight 2 in English',
      },
      {
        de: 'Highlight 3 auf Deutsch',
        en: 'Highlight 3 in English',
      },
    ],
    links: {
      github: 'https://github.com/yourusername/project-1', // Replace with your repo
    },
    image: '/projects/project-1.jpg',
    status: {
      de: '🚧 In Entwicklung',
      en: '🚧 In Development',
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Project Two',
    subtitle: {
      de: 'Zweites Projekt',
      en: 'Second Project',
    },
    description: {
      de: 'Beschreibung deines zweiten Projekts. Erkläre die Technologien und Herausforderungen.',
      en: 'Description of your second project. Explain the technologies and challenges.',
    },
    period: 'Month — Month 20XX',
    techStack: ['Technology 1', 'Technology 2', 'Technology 3'],
    highlights: [
      {
        de: 'Feature 1 auf Deutsch',
        en: 'Feature 1 in English',
      },
      {
        de: 'Feature 2 auf Deutsch',
        en: 'Feature 2 in English',
      },
    ],
    links: {
      github: 'https://github.com/yourusername/project-2', // Replace with your repo
      live: 'https://your-demo-url.com', // Optional: live demo URL
    },
    image: '/projects/project-2.jpg',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Project Three',
    subtitle: {
      de: 'Drittes Projekt',
      en: 'Third Project',
    },
    description: {
      de: 'Beschreibung deines dritten Projekts.',
      en: 'Description of your third project.',
    },
    period: 'Month — Month 20XX',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    highlights: [
      {
        de: 'Feature 1',
        en: 'Feature 1',
      },
      {
        de: 'Feature 2',
        en: 'Feature 2',
      },
    ],
    links: {
      github: 'https://github.com/yourusername/project-3', // Replace with your repo
    },
    image: '/projects/project-3.jpg',
    featured: true,
  },
];
