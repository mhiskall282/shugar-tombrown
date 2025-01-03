import React from 'react';
import Section from '../components/ui/Section';
import { Coffee, Heart, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Quality Ingredients',
    description: 'We source the finest ingredients to ensure every bite and sip is perfect.'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared with care and attention to detail.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: "We're proud to be part of your morning routine and community."
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Committed to delivering exceptional breakfast experiences daily.'
  }
];

export default function About() {
  return (
    <div className="space-y-16">
      <Section
        title="Our Story"
        description="SHUgar was born from a passion for creating wholesome, delicious breakfast experiences that bring comfort and joy to every morning."
        className="bg-milk-50"
      >
        <div className="prose prose-chocolate mx-auto">
          <p className="text-lg text-chocolate-700 text-center max-w-3xl mx-auto">
            Since our establishment, we've been dedicated to serving the community with 
            authentic breakfast delights. Our journey began with a simple mission: to make 
            mornings better through delicious, nutritious meals prepared with love and care.
          </p>
        </div>
      </Section>

      <Section
        title="Why Choose SHUgar"
        description="What makes us different"
        className="bg-milk-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-milk-50 rounded-lg shadow-sm">
              <div className="mx-auto h-12 w-12 text-golden-400">
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-chocolate-900">{feature.title}</h3>
              <p className="mt-2 text-chocolate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Our Values"
        description="The principles that guide us every day"
        className="bg-milk-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-chocolate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-chocolate-900 mb-3">Quality First</h3>
            <p className="text-chocolate-700">We never compromise on the quality of our ingredients or preparation methods.</p>
          </div>
          <div className="bg-chocolate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-chocolate-900 mb-3">Customer Satisfaction</h3>
            <p className="text-chocolate-700">Your happiness and satisfaction are our top priorities.</p>
          </div>
          <div className="bg-chocolate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-chocolate-900 mb-3">Sustainability</h3>
            <p className="text-chocolate-700">We're committed to environmentally conscious practices.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
export default About;
