import React from 'react';
import type { Product } from '../types';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-chocolate-900">{product.name}</h3>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
        <p className="text-chocolate-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-golden-600 font-bold">${product.price.toFixed(2)}</span>
          <Button variant="secondary">Order Now</Button>
        </div>
      </div>
    </Card>
  );
}
