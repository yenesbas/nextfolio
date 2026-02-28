'use client';

import React from 'react';
import { MapPin, GraduationCap, Code2 } from 'lucide-react';
import { Container, SectionHeading, AnimatedSection } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { profile } from '@/data';
import { translations } from '@/data/translations';

export function AboutSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: { de: '5. Semester', en: '5th Semester' },
      value: { de: 'Informatik B.Sc.', en: 'Computer Science B.Sc.' },
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: { de: 'Standort', en: 'Location' },
      value: profile.location,
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      label: { de: 'Fokus', en: 'Focus' },
      value: { de: 'Game Dev & Web', en: 'Game Dev & Web' },
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading title={trans.sections.about} />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <AnimatedSection delay={0.1} className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              {t(profile.bio.de, profile.bio.en)
                .split('\n\n')
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-foreground-secondary leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </AnimatedSection>

          {/* Highlights */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background-secondary"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">
                      {t(item.label.de, item.label.en)}
                    </p>
                    <p className="font-medium text-foreground-primary">
                      {t(item.value.de, item.value.en)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
