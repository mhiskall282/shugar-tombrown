import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-12 bg-milk-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-chocolate-900 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}