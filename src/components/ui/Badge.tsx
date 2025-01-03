import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
}

export default function Badge({ 
  children, 
  variant = 'primary' 
}: BadgeProps) {
  const variants = {
    primary: 'bg-chocolate-100 text-chocolate-800',
    secondary: 'bg-golden-100 text-golden-800',
    success: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
