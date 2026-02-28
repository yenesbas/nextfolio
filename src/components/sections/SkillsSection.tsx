'use client';

import React from 'react';
import {
  Container,
  SectionHeading,
  Badge,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { skillCategories } from '@/data';
import { translations } from '@/data/translations';

export function SkillsSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background-secondary/50">
      <Container>
        <AnimatedSection>
          <SectionHeading title={trans.sections.skills} />
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <div className="p-6 rounded-xl border border-border bg-background-primary h-full">
                <h3 className="text-lg font-semibold text-foreground-primary mb-4">
                  {t(category.title.de, category.title.en)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="default">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
