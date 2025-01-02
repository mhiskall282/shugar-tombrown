import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 bg-milk-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-chocolate-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-chocolate-600">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-golden-400" />
                <span className="ml-3 text-chocolate-800">123 Breakfast Lane, Morning City</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-golden-400" />
                <span className="ml-3 text-chocolate-800">+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-golden-400" />
                <span className="ml-3 text-chocolate-800">hello@shugar.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-milk-100 p-8 rounded-lg shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}