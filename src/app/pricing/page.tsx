'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    cta: 'Start Free'
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
    cta: 'Start Pro',
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
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-white font-semibold text-xl">KERNL</span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link href="/integration" className="text-gray-300 hover:text-white transition-colors">Integration</Link>
          <Link href="/pricing" className="text-white font-medium">Pricing</Link>
          <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact us</Link>
          <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link>
          <Link href="/tokenomics" className="text-gray-300 hover:text-white transition-colors">Tokenomics</Link>
        </nav>
        
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Launch App
        </button>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your token project. All plans include on-chain data access.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative bg-gray-700 rounded-full p-1 w-16 h-8 transition-colors"
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual
              {billingCycle === 'annual' && (
                <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gray-900 rounded-2xl p-8 border transition-all hover:scale-105 ${
                  plan.popular
                    ? 'border-orange-500 bg-gradient-to-b from-gray-900 to-gray-800'
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      {plan.price[billingCycle] === 0 ? (
                        <>
                          <span className="text-4xl font-bold">Free</span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
                          <span className="text-gray-400 ml-1">SOL</span>
                          <span className="text-gray-400">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
                        </>
                      )}
                    </div>
                    {billingCycle === 'annual' && plan.price.monthly > 0 && (
                      <p className="text-green-400 text-sm mt-2">
                        Save {calculateSavings(plan.price.monthly, plan.price.annual)}% annually
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">How do you handle payments?</h3>
              <p className="text-gray-400">
                We accept SOL payments directly to our wallet. Pro plans are billed monthly or annually in SOL.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">What tokens do you support?</h3>
              <p className="text-gray-400">
                We support all major Solana tokens and can integrate with custom tokens upon request.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Is my data secure?</h3>
              <p className="text-gray-400">
                We only read public on-chain data. No private keys or personal information are ever stored.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Can I upgrade my plan anytime?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to manage your community?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of token teams already using KERNL to track their holders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors">
              Start Free
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 