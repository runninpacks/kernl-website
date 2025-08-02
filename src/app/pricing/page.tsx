'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: {
      monthly: 0,
      annual: 0
    },
    description: 'Perfect for small token projects and DAOs',
    features: [
      'Track 1 token',
      'Basic wallet analytics',
      'Holder segmentation',
      'Community support',
      'On-chain data feeds',
      'Basic reporting'
    ],
    cta: 'Contact Sales'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 0.5,
      annual: 5
    },
    description: 'Ideal for growing token teams and protocols',
    features: [
      'Advanced segmentation',
      'Airdrop targeting tools',
      'Symbol Score tracking',
      'Engagement funnels',
      'Multi-token support',
      'Priority support',
      'API access',
      'Custom integrations'
    ],
    popular: true,
    cta: 'Contact Sales',
    badge: 'Most Popular'
  },
  {
    id: 'org',
    name: 'Org',
    price: {
      monthly: 0,
      annual: 0
    },
    description: 'For large organizations and multi-project teams',
    features: [
      'Multi-user access',
      'Unlimited tokens',
      'Custom Symbol Score algorithms',
      'Advanced governance tracking',
      'White-label options',
      'Dedicated support',
      'SLA guarantee',
      'On-premise deployment'
    ],
    cta: 'Contact Sales'
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const calculateSavings = (monthlyPrice: number, annualPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - annualPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Pricing
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your token community management needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 rounded-full p-1 flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual
              {billingCycle === 'annual' && (
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-900 rounded-2xl p-6 sm:p-8 border-2 transition-all hover:border-gray-700 ${
                plan.popular
                  ? 'border-orange-500 scale-105'
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl sm:text-5xl font-bold">
                      {plan.price[billingCycle] === 0 ? 'Free' : `${plan.price[billingCycle]} SOL`}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>
                  {billingCycle === 'annual' && plan.price.monthly > 0 && (
                    <p className="text-green-400 text-sm mt-2">
                      Save {calculateSavings(plan.price.monthly, plan.price.annual)}% annually
                    </p>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">How does the free tier work?</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                The free tier allows you to track one token with basic analytics. Perfect for small projects getting started with community management.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Can I upgrade my plan anytime?</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                We accept SOL payments through various wallets. Enterprise customers can also pay via invoice.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Is my data secure?</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                We only read public on-chain data. No private keys or personal information are ever stored.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 