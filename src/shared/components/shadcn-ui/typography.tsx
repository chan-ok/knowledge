import { type ReactNode } from 'react';

import { cn } from '@/shared/utils/style/shadcn';

export function TypographyH1({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={cn('scroll-m-20 text-center text-4xl font-extrabold tracking-tight', className)}>{children}</h1>
  );
}

export function TypographyH2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{children}</h3>;
}

export function TypographyH4({ children, className }: { children: ReactNode; className?: string }) {
  return <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>{children}</h4>;
}

export function TypographyP({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>;
}
