'use client';

import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import {
  Container,
  SectionHeading,
  Card,
  ButtonLink,
  AnimatedSection,
} from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { profile, languages } from '@/data';
import { translations } from '@/data/translations';

export function ContactSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: profile.socialLinks.find((l) => l.icon === 'github')?.url.replace('https://github.com/', '@'),
      href: profile.socialLinks.find((l) => l.icon === 'github')?.url || '#',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: profile.socialLinks.find((l) => l.icon === 'linkedin')?.url || '#',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t('Standort', 'Location'),
      value: t(profile.location.de, profile.location.en),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background-secondary/50">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title={trans.contact.title}
            subtitle={trans.contact.subtitle}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-foreground-primary mb-6">
                {t('Kontaktinformationen', 'Contact Information')}
              </h3>
              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ButtonLink
                  href={`mailto:${profile.email}`}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  <Send className="h-4 w-4" />
                  {trans.contact.email}
                </ButtonLink>
              </div>
            </Card>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.2}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-foreground-primary mb-6">
                {trans.sections.languages}
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground-primary">
                        {t(lang.language.de, lang.language.en)}
                      </span>
                      <span className="text-sm text-foreground-muted">
                        {t(lang.level.de, lang.level.en)}
                      </span>
                    </div>
                    <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-500"
                        style={{ width: `${(lang.proficiency / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
