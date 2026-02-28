import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'warning';
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      'bg-background-tertiary text-foreground-secondary',
    accent: 'bg-accent/10 text-accent',
    success: 'bg-green-500/10 text-green-400',
    warning: 'bg-yellow-500/10 text-yellow-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
