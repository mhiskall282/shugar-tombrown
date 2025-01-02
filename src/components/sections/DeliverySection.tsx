import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';

export default function DeliverySection() {
  return (
    <div className="py-16 bg-milk-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-chocolate-900">Delivery Service</h2>
          <p className="mt-4 text-lg text-chocolate-600">
            Enjoy our delicious breakfast items delivered right to your doorstep
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-golden-400">
              <Clock className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-chocolate-900">Delivery Hours</h3>
            <p className="mt-2 text-chocolate-600">7:00 AM - 11:00 AM<br />Monday to Sunday</p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-golden-400">
              <MapPin className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-chocolate-900">Delivery Area</h3>
            <p className="mt-2 text-chocolate-600">We deliver within a 5km radius<br />of our location</p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-golden-400">
              <Truck className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-chocolate-900">Delivery Fee</h3>
            <p className="mt-2 text-chocolate-600">Free delivery for orders<br />above $30</p>
          </div>
        </div>
      </div>
    </div>
  );
}