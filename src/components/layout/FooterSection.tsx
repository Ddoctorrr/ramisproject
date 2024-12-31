import React from 'react';

interface FooterSectionProps {
  title?: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      {title && (
        <h3 className="text-lg font-sans font-semibold mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}