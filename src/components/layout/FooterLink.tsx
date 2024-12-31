import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-primary-light/80 hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}