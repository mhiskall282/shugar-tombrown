import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-milk-50 rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
