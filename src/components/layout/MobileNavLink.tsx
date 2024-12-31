import React from 'react';

interface MobileNavLinkProps {
  href: string;
  label: string;
}

export function MobileNavLink({ href, label }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent transition-colors"
    >
      {label}
    </a>
  );
}