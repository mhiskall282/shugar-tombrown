import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  // Update the logo in the footer
  return (
    <footer className="bg-chocolate-900 text-milk-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-golden-400" />
              <span className="text-xl font-bold">SHuGar</span>
            </Link>
            {/* Rest of the footer content remains the same */}
          </div>
          {/* Rest of the footer sections remain the same */}
        </div>
      </div>
    </footer>
  );
}
