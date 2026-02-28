'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Container, ButtonLink } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { profile } from '@/data';
import { translations } from '@/data/translations';

export function HeroSection() {
  const { language, t } = useLanguage();
  const trans = translations[language];

  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    mail: <Mail className="h-5 w-5" />,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
              {t(profile.status.de, profile.status.en)}
            </span>
          </motion.div>

          {/* Greeting & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <p className="text-foreground-secondary text-lg md:text-xl">
              {trans.hero.greeting}
            </p>
            <h1 className="mt-2 text-5xl md:text-7xl font-bold text-foreground-primary">
              {profile.name}
            </h1>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-accent font-medium"
          >
            {t(profile.title.de, profile.title.en)}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-foreground-secondary max-w-xl text-lg"
          >
            {t(profile.tagline.de, profile.tagline.en)}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <ButtonLink href="#projects" variant="primary" size="lg">
              {trans.hero.cta.projects}
            </ButtonLink>
            <ButtonLink
              href={profile.resumeUrl}
              variant="outline"
              size="lg"
              target="_blank"
            >
              <Download className="h-4 w-4" />
              {trans.hero.cta.resume}
            </ButtonLink>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            {profile.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-foreground-muted hover:text-accent transition-colors rounded-lg hover:bg-background-tertiary border border-transparent hover:border-border"
                aria-label={link.name}
              >
                {socialIcons[link.icon]}
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 text-foreground-muted" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
