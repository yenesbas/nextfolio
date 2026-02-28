'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Container } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { profile } from '@/data';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    mail: <Mail className="h-5 w-5" />,
  };

  return (
    <footer className="border-t border-border bg-background-secondary py-12">
      <Container>
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground-muted hover:text-accent transition-colors rounded-lg hover:bg-background-tertiary"
                aria-label={link.name}
              >
                {socialIcons[link.icon]}
              </a>
            ))}
          </div>

          {/* Built with */}
          <div className="text-sm text-foreground-muted">
            {t('Erstellt mit', 'Built with')}{' '}
            <Heart className="inline-block h-4 w-4 text-red-500 mx-1" />{' '}
            {t('und', 'and')} Next.js, Tailwind CSS, Framer Motion
          </div>

          {/* Copyright */}
          <div className="text-sm text-foreground-muted">
            © {currentYear} {profile.name}.{' '}
            {t('Alle Rechte vorbehalten.', 'All rights reserved.')}
          </div>
        </div>
      </Container>
    </footer>
  );
}
