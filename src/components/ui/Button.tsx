import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25',
    secondary:
      'bg-background-secondary text-foreground-primary hover:bg-background-tertiary border border-border',
    ghost: 'text-foreground-secondary hover:text-foreground-primary hover:bg-background-tertiary',
    outline:
      'border border-border text-foreground-primary hover:bg-background-secondary hover:border-accent/50',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
    md: 'h-10 px-4 text-sm rounded-lg gap-2',
    lg: 'h-12 px-6 text-base rounded-lg gap-2',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25',
    secondary:
      'bg-background-secondary text-foreground-primary hover:bg-background-tertiary border border-border',
    ghost: 'text-foreground-secondary hover:text-foreground-primary hover:bg-background-tertiary',
    outline:
      'border border-border text-foreground-primary hover:bg-background-secondary hover:border-accent/50',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
    md: 'h-10 px-4 text-sm rounded-lg gap-2',
    lg: 'h-12 px-6 text-base rounded-lg gap-2',
  };

  return (
    <a
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}
