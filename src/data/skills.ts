import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: {
      de: 'Programmiersprachen',
      en: 'Programming Languages',
    },
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C / C++' },
      { name: 'JavaScript' },
      { name: 'C#' },
      { name: 'SQL' },
    ],
  },
  {
    title: {
      de: 'Spieleentwicklung',
      en: 'Game Development',
    },
    skills: [
      { name: 'Unity Engine' },
      { name: 'C#' },
      { name: 'Physics Systems' },
      { name: 'Game Mechanics' },
      { name: 'Level Design' },
      { name: 'HTML5 Canvas' },
    ],
  },
  {
    title: {
      de: 'Webentwicklung',
      en: 'Web Development',
    },
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'REST APIs' },
      { name: 'AJAX' },
      { name: 'Responsive Design' },
    ],
  },
  {
    title: {
      de: 'Backend & Systeme',
      en: 'Backend & Systems',
    },
    skills: [
      { name: 'Docker' },
      { name: 'Redis' },
      { name: 'Hibernate' },
      { name: 'JDBC' },
      { name: 'Linux' },
      { name: 'Microcontrollers' },
    ],
  },
  {
    title: {
      de: 'Daten & KI',
      en: 'Data & AI',
    },
    skills: [
      { name: 'Machine Learning' },
      { name: 'Data Analysis' },
      { name: 'Python ML Libraries' },
      { name: 'ER-Modeling' },
      { name: 'Normalization' },
    ],
  },
  {
    title: {
      de: 'Konzepte',
      en: 'Concepts',
    },
    skills: [
      { name: 'OOP' },
      { name: 'TDD' },
      { name: 'Algorithms' },
      { name: 'Data Structures' },
      { name: 'Software Engineering' },
      { name: 'Distributed Systems' },
    ],
  },
];
