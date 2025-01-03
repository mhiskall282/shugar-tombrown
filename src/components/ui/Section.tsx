import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export default function Section({ 
  children, 
  className = '',
  title,
  description 
}: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-chocolate-900">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-chocolate-600">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
