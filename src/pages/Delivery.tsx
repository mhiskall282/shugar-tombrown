import React from 'react';
import DeliverySection from '../components/sections/DeliverySection';
import BookingForm from '../components/forms/BookingForm';

export default function Delivery() {
  return (
    <div className="bg-milk-50">
      <DeliverySection />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-milk-100 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-chocolate-900 mb-6">Schedule a Delivery</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}