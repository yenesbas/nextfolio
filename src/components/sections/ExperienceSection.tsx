'use client';

import React from 'react';
import { Briefcase, Heart } from 'lucide-react';
import {
  Container,
  SectionHeading,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { experiences } from '@/data';
import { translations } from '@/data/translations';

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background-secondary/50">
      <Container>
        <AnimatedSection>
          <SectionHeading title={trans.sections.experience} />
        </AnimatedSection>

        <StaggerContainer className="space-y-6">
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <div className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 p-2 rounded-full bg-background-primary border-2 border-accent">
                  {exp.type === 'volunteer' ? (
                    <Heart className="h-4 w-4 text-accent" />
                  ) : (
                    <Briefcase className="h-4 w-4 text-accent" />
                  )}
                </div>

                <div className="ml-4 p-6 rounded-xl border border-border bg-background-primary">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground-primary">
                        {t(exp.role.de, exp.role.en)}
                      </h3>
                      <p className="text-accent font-medium">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="text-sm text-foreground-muted">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-foreground-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {t(item.de, item.en)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
