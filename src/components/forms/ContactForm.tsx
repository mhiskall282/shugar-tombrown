import React from 'react';
import type { ContactFormData } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        required
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        required
      />
      <div>
        <label htmlFor="message" className="block text-chocolate-800">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="mt-1 block w-full rounded-md border-chocolate-200 shadow-sm 
            focus:border-golden-400 focus:ring focus:ring-golden-200"
          required
        />
      </div>
      <Button type="submit" fullWidth>
        Send Message
      </Button>
    </form>
  );
}