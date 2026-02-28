'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Container } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { navItems, profile } from '@/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background-primary/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold text-foreground-primary hover:text-accent transition-colors"
          >
            {profile.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-foreground-secondary hover:text-foreground-primary transition-colors rounded-lg hover:bg-background-tertiary"
              >
                {t(item.label.de, item.label.en)}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 text-sm text-foreground-secondary hover:text-foreground-primary transition-colors rounded-lg hover:bg-background-tertiary"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase font-medium">{language}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1.5 text-sm text-foreground-secondary hover:text-foreground-primary transition-colors rounded-lg"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase font-medium">{language}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground-secondary hover:text-foreground-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background-primary border-b border-border"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-foreground-secondary hover:text-foreground-primary transition-colors rounded-lg hover:bg-background-tertiary"
                  >
                    {t(item.label.de, item.label.en)}
                  </a>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
