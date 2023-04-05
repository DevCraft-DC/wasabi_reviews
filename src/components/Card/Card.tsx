import { type HTMLAttributes, type ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLBodyElement> {
  children: ReactNode;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={className}>{children}</div>
);
