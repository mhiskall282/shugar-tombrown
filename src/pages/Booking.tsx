import React from 'react';
import BookingForm from '../components/forms/BookingForm';

export default function Booking() {
  return (
    <div className="py-16 bg-milk-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-chocolate-900">Book Your Order</h2>
          <p className="mt-4 text-lg text-chocolate-600">
            Place your order in advance and we'll have it ready for you
          </p>
        </div>
        <div className="bg-milk-100 p-8 rounded-lg shadow-sm">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}