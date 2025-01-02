import React from 'react';
import type { BookingFormData } from '../../types';
import { products } from '../../data/products';

export default function BookingForm() {
  const [formData, setFormData] = React.useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    items: [],
    quantity: 1,
    deliveryAddress: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-chocolate-800">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-chocolate-200 shadow-sm focus:border-golden-400 focus:ring focus:ring-golden-200"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-chocolate-800">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-chocolate-200 shadow-sm focus:border-golden-400 focus:ring focus:ring-golden-200"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-chocolate-800">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            className="mt-1 block w-full rounded-md border-chocolate-200 shadow-sm focus:border-golden-400 focus:ring focus:ring-golden-200"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-chocolate-800">Time</label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
            className="mt-1 block w-full rounded-md border-chocolate-200 shadow-sm focus:border-golden-400 focus:ring focus:ring-golden-200"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-chocolate-800">Select Items</label>
        <div className="mt-2 space-y-2">
          {products.map(product => (
            <label key={product.id} className="flex items-center">
              <input
                type="checkbox"
                value={product.id}
                onChange={(e) => {
                  const items = e.target.checked
                    ? [...formData.items, product.id]
                    : formData.items.filter(id => id !== product.id);
                  setFormData(prev => ({ ...prev, items }));
                }}
                className="rounded border-chocolate-200 text-golden-400 focus:ring-golden-200"
              />
              <span className="ml-2 text-chocolate-800">{product.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="deliveryAddress" className="block text-chocolate-800">Delivery Address</label>
        <textarea
          id="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={(e) => setFormData(prev => ({ ...prev, deliveryAddress: e.target.value }))}
          rows={3}
          className="mt-1 block w-full rounded-md border-chocolate-200 shadow-sm focus:border-golden-400 focus:ring focus:ring-golden-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-chocolate-800 text-milk-50 py-2 px-4 rounded-md hover:bg-chocolate-900 transition-colors"
      >
        Submit Booking
      </button>
    </form>
  );
}