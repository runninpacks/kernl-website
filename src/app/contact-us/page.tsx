'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface ContactMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    name: 'Email',
    description: 'Get in touch for support, partnerships, or general inquiries',
    icon: '📧',
    url: 'mailto:contact@kernl.xyz',
    color: 'bg-blue-500'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Join our community for real-time support and discussions',
    icon: '💬',
    url: '#',
    color: 'bg-purple-500'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    description: 'Follow us for updates, announcements, and crypto insights',
    icon: '🐦',
    url: 'https://twitter.com/kernl_xyz',
    color: 'bg-blue-400'
  },
  {
    id: 'docs',
    name: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    icon: '📚',
    url: '#',
    color: 'bg-orange-500'
  }
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team. We&apos;re here to help you succeed with KERNL.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h2>
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.id}
                    href={method.url}
                    className="flex items-start space-x-4 p-4 sm:p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{method.name}</h3>
                      <p className="text-sm sm:text-base text-gray-300">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Company Info */}
              <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gray-900 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Company Information</h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white">contact@kernl.xyz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white">Global / Remote</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Business Hours:</span>
                    <span className="text-white">24/7 Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Project/Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your project or company name"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="demo">Request Demo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 sm:py-4 px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4 text-center">
                We&apos;ll get back to you within 24 hours. No spam, ever.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                Join hundreds of token teams already using KERNL to manage their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 