import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chocolate-900 text-milk-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-golden-400" />
              <span className="text-xl font-bold">SHUgar</span>
            </Link>
            <p className="text-milk-200">
              Bringing warmth and comfort to your breakfast table, one meal at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-golden-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-golden-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-golden-400">Contact</Link></li>
              <li><Link to="/delivery" className="hover:text-golden-400">Delivery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>123 Breakfast Lane</li>
              <li>Morning City, MC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: hello@shugar.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-golden-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" className="hover:text-golden-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-golden-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-chocolate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-milk-200">
              © {new Date().getFullYear()} SHUgar. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-milk-200">
              <span>Developed with ❤️ by</span>
              <a 
                href="https://blackstechafrica.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-golden-400 hover:text-golden-300 font-semibold"
              >
                Blacks Tech Africa
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}