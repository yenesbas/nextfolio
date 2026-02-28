'use client';

import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import {
  Container,
  SectionHeading,
  Card,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { education } from '@/data';
import { translations } from '@/data/translations';

export function EducationSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  return (
    <section id="education" className="py-16 md:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading title={trans.sections.education} />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <StaggerItem key={edu.id}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground-primary">
                          {edu.institution}
                        </h3>
                        <p className="text-accent font-medium">
                          {t(edu.degree.de, edu.degree.en)}
                        </p>
                      </div>
                      <span className="text-sm text-foreground-muted whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 mt-2 text-sm text-foreground-muted">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </div>

                    {edu.details && (
                      <ul className="mt-4 space-y-1">
                        {edu.details.map((detail, index) => (
                          <li
                            key={index}
                            className="text-sm text-foreground-secondary"
                          >
                            {t(detail.de, detail.en)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
