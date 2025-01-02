import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ 
  label, 
  id, 
  className = '', 
  ...props 
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-chocolate-800">
        {label}
      </label>
      <input
        id={id}
        className={`mt-1 block w-full rounded-md border-chocolate-200 shadow-sm 
          focus:border-golden-400 focus:ring focus:ring-golden-200 ${className}`}
        {...props}
      />
    </div>
  );
}