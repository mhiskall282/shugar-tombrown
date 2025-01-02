import React from 'react';
import { Coffee, Heart, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="py-16 bg-milk-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-chocolate-900">Our Story</h2>
          <p className="mt-4 text-lg text-chocolate-600 max-w-2xl mx-auto">
            SHUgar was born from a passion for creating wholesome, delicious breakfast experiences that bring comfort and joy to every morning.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-golden-400">
              <Coffee className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-chocolate-900">Quality Ingredients</h3>
            <p className="mt-2 text-chocolate-600">We source the finest ingredients to ensure every bite and sip is perfect.</p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-golden-400">
              <Heart className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-chocolate-900">Made with Love</h3>
            <p className="mt-2 text-chocolate-600">Every dish is prepared with care and attention to detail.</p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-golden-400">
              <Users className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-chocolate-900">Community First</h3>
            <p className="mt-2 text-chocolate-600">We're proud to be part of your morning routine and community.</p>
          </div>
        </div>
      </div>
    </div>
  );
}