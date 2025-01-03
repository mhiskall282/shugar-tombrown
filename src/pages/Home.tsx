import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Section from '../components/ui/Section';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <Section
        title="Featured Products"
        description="Discover our handcrafted breakfast selections made with love"
        className="bg-milk-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </div>
  );
}
