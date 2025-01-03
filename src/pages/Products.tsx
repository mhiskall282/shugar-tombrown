import React from 'react';
import Section from '../components/ui/Section';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="space-y-16">
      <Section
        title="Our Menu"
        description="Explore our delicious breakfast options"
        className="bg-milk-50"
      >
        {categories.map(category => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-bold text-chocolate-900 mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(product => product.category === category)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}
export default Products;
