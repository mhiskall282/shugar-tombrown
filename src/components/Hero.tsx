import React from 'react';
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-chocolate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-milk-50 sm:text-5xl md:text-6xl">
                <span className="block">Start Your Day with</span>
                <span className="block text-golden-400">SHUgar's Breakfast!</span>
              </h1>
              <p className="mt-3 text-base text-milk-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover our delicious range of breakfast options, from comforting Rice Porridge to energizing Milo drinks.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-chocolate-900 bg-golden-400 hover:bg-golden-500 md:py-4 md:text-lg md:px-10"
                >
                  <Coffee className="mr-2" />
                  Explore Menu
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1200"
          alt="Breakfast spread"
        />
      </div>
    </div>
  );
}