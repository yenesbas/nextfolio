import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', className)}>
      <h2 className="text-3xl font-bold text-foreground-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-foreground-secondary">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
