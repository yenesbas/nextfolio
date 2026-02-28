export type Language = 'de' | 'en';

export interface LocalizedString {
  de: string;
  en: string;
}

export interface Profile {
  name: string;
  title: LocalizedString;
  tagline: LocalizedString;
  bio: LocalizedString;
  email: string;
  location: LocalizedString;
  status: LocalizedString;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: LocalizedString;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: LocalizedString;
  description: LocalizedString;
  period: string;
  techStack: string[];
  highlights: LocalizedString[];
  links: {
    github?: string;
    live?: string;
  };
  image?: string;
  status?: LocalizedString;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: LocalizedString;
  organization: string;
  period: string;
  location?: string;
  description: LocalizedString[];
  type: 'work' | 'volunteer';
}

export interface Education {
  id: string;
  institution: string;
  degree: LocalizedString;
  period: string;
  location: string;
  details?: LocalizedString[];
}

export interface LanguageProficiency {
  language: LocalizedString;
  level: LocalizedString;
  proficiency: number; // 1-5
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    cta: {
      projects: string;
      resume: string;
    };
  };
  sections: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    languages: string;
  };
  buttons: {
    viewProject: string;
    viewCode: string;
    liveDemo: string;
    downloadResume: string;
    getInTouch: string;
  };
  status: {
    inDevelopment: string;
    completed: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
  };
}
