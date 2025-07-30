'use client';

import Link from 'next/link';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'documentation' | 'tutorial' | 'video' | 'guide' | 'api';
  icon: string;
  link: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Getting Started Guide',
    description: 'Learn how to set up KERNL for your token project in under 10 minutes.',
    category: 'onboarding',
    type: 'guide',
    icon: '🚀',
    link: '#'
  },
  {
    id: '2',
    title: 'API Documentation',
    description: 'Complete API reference for integrating KERNL with your applications.',
    category: 'development',
    type: 'api',
    icon: '📚',
    link: '#'
  },
  {
    id: '3',
    title: 'Wallet Segmentation Tutorial',
    description: 'Learn how to segment your holders by behavior, balance, and activity.',
    category: 'features',
    type: 'tutorial',
    icon: '🎯',
    link: '#'
  },
  {
    id: '4',
    title: 'Airdrop Best Practices',
    description: 'Best practices for targeting and executing airdrops using KERNL.',
    category: 'features',
    type: 'guide',
    icon: '🎁',
    link: '#'
  },
  {
    id: '5',
    title: 'Symbol Score Explained',
    description: 'Understanding how Symbol Score works and how to use it effectively.',
    category: 'features',
    type: 'guide',
    icon: '⭐',
    link: '#'
  },
  {
    id: '6',
    title: 'DAO Governance Tracking',
    description: 'How to track voting patterns and governance engagement in your DAO.',
    category: 'features',
    type: 'tutorial',
    icon: '🗳️',
    link: '#'
  },
  {
    id: '7',
    title: 'Multi-token Setup',
    description: 'Configure KERNL to track multiple tokens across different projects.',
    category: 'features',
    type: 'tutorial',
    icon: '🔗',
    link: '#'
  },
  {
    id: '8',
    title: 'Community Management',
    description: 'Strategies for managing token communities using on-chain data.',
    category: 'strategy',
    type: 'guide',
    icon: '👥',
    link: '#'
  }
];

// Categories for future filtering functionality
// const categories = [
//   { id: 'all', name: 'All Resources' },
//   { id: 'onboarding', name: 'Getting Started' },
//   { id: 'features', name: 'Features' },
//   { id: 'development', name: 'Development' },
//   { id: 'strategy', name: 'Strategy' }
// ];

export default function ResourcesPage() {
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
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/resources" className="text-white font-medium">Resources</Link>
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
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to master KERNL and manage your token community effectively
          </p>
        </div>

        {/* Quick Help Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg mb-6">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@kernl.xyz"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{resource.icon}</div>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                
                <a
                  href={resource.link}
                  className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">How do I get started with KERNL?</h3>
              <p className="text-gray-400">
                Simply connect your wallet and start tracking your token. No account creation or KYC required - we only read public on-chain data.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">What tokens do you support?</h3>
              <p className="text-gray-400">
                We support all major Solana tokens. If you have a custom token, contact us for integration support.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">How does Symbol Score work?</h3>
              <p className="text-gray-400">
                Symbol Score is a reputation metric based on holder behavior, engagement, and loyalty. It helps identify your most valuable community members.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Can I export my data?</h3>
              <p className="text-gray-400">
                Yes, all data can be exported via our API. Pro and Org plans include advanced export options and data analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold mb-2">Discord</h3>
              <p className="text-gray-400 mb-4">Join discussions with other token teams</p>
              <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Join Server
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🐦</div>
              <h3 className="text-lg font-semibold mb-2">Twitter</h3>
              <p className="text-gray-400 mb-4">Follow for updates and announcements</p>
              <a href="https://twitter.com/kernl_xyz" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Follow @kernl_xyz
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-400 mb-4">Get product updates and tips</p>
              <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 