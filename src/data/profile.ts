import { Profile, NavItem } from '@/types';

export const profile: Profile = {
  name: 'Your Name',
  title: {
    de: 'Student & Entwickler',
    en: 'Student & Developer',
  },
  tagline: {
    de: 'Web-Apps und Systeme entwickeln — Commit für Commit.',
    en: 'Building web apps and systems — one commit at a time.',
  },
  bio: {
    de: `Hier kommt deine Beschreibung. Erzähle etwas über dich, deine Erfahrungen und deine Ziele.

Aktueller Fokus: Deine aktuellen Interessen und Projekte.`,
    en: `Your description goes here. Tell something about yourself, your experience, and your goals.

Currently focused on: Your current interests and projects.`,
  },
  email: 'your.email@example.com', // Replace with your actual email
  location: {
    de: 'Stadt, Deutschland',
    en: 'City, Germany',
  },
  status: {
    de: '🟢 Offen für Möglichkeiten',
    en: '🟢 Open to opportunities',
  },
  resumeUrl: '/resume.pdf', // Add your resume PDF to public folder
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername', // Replace with your GitHub
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com', // Replace with your email
      icon: 'mail',
    },
  ],
};

export const navItems: NavItem[] = [
  { label: { de: 'Über mich', en: 'About' }, href: '#about' },
  { label: { de: 'Fähigkeiten', en: 'Skills' }, href: '#skills' },
  { label: { de: 'Projekte', en: 'Projects' }, href: '#projects' },
  { label: { de: 'Erfahrung', en: 'Experience' }, href: '#experience' },
  { label: { de: 'Bildung', en: 'Education' }, href: '#education' },
  { label: { de: 'Kontakt', en: 'Contact' }, href: '#contact' },
];
