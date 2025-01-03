import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-chocolate-900 text-milk-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex-shrink-0 font-bold text-2xl text-golden-400">
            SHUgar
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-golden-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:text-golden-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/products" className="hover:text-golden-400 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
              <Link to="/contact" className="hover:text-golden-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to="/delivery" className="hover:text-golden-400 px-3 py-2 rounded-md text-sm font-medium">Delivery</Link>
              <Link to="/booking" className="hover:text-golden-400 px-3 py-2 rounded-md text-sm font-medium">Book Now</Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-milk-50 hover:text-golden-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:text-golden-400 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="hover:text-golden-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/products" className="hover:text-golden-400 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link to="/contact" className="hover:text-golden-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link to="/delivery" className="hover:text-golden-400 block px-3 py-2 rounded-md text-base font-medium">Delivery</Link>
            <Link to="/booking" className="hover:text-golden-400 block px-3 py-2 rounded-md text-base font-medium">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
