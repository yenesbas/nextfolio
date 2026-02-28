'use client';

import { LanguageProvider } from '@/hooks/useLanguage';
import { Header, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background-primary">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
