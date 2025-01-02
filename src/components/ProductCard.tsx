import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-milk-50 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-chocolate-900">{product.name}</h3>
        <p className="text-chocolate-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-golden-600 font-bold">${product.price.toFixed(2)}</span>
          <button className="px-4 py-2 bg-chocolate-800 text-milk-50 rounded-md hover:bg-chocolate-900 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}