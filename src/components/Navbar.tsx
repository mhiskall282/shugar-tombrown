import React from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
  { path: '/delivery', label: 'Delivery' },
  { path: '/booking', label: 'Book Now' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-chocolate-900 text-milk-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <Coffee className="h-8 w-8 text-golden-400" />
            <span className="font-bold text-2xl">SHuGar</span>
          </Link>
          
          {/* Rest of the navbar code remains the same */}
        </div>
      </div>
      {/* Mobile menu remains the same */}
    </nav>
  );
}
export default Navbar;
