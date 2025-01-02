export interface Product {
  id: string;
  name: string;
  category: 'Rice Porridge' | 'Milo' | 'Tombrown' | 'Oats';
  description: string;
  price: number;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  items: string[];
  quantity: number;
  deliveryAddress?: string;
}