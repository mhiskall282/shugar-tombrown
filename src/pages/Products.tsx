import React from 'react';
import Section from '../components/ui/Section';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Coffee, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Fresh & Quality',
    description: 'All our products are freshly made with premium ingredients'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Fast preparation without compromising quality'
  },
  {
    icon: MapPin,
    title: 'Local Sourcing',
    description: 'We support local suppliers for the freshest ingredients'
  }
];

export default function Products() {
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="space-y-16">
      <Section
        title="Our Menu"
        description="Explore our delicious breakfast options crafted with care"
        className="bg-milk-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-milk-100 p-6 rounded-lg shadow-sm">
              <div className="text-golden-400 mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-chocolate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12 last:mb-0">
            <div className="flex items-center space-x-4 mb-6">
              <h3 className="text-2xl font-bold text-chocolate-900">{category}</h3>
              <div className="flex-1 border-b border-chocolate-200"></div>
            </div>
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
