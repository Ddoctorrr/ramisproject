import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium hover:text-accent transition-colors"
    >
      {label}
    </a>
  );
}