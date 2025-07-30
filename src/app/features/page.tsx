'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  status: 'active' | 'beta' | 'deprecated';
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Wallet Behavior Tracking',
    description: 'See who\'s buying, selling, staking, or inactive across your token ecosystem with real-time on-chain data.',
    category: 'analytics',
    icon: '📊',
    status: 'active'
  },
  {
    id: '2',
    title: 'Holder Segmentation',
    description: 'Group wallets by balance, loyalty, voting activity, or custom criteria to target specific holder cohorts.',
    category: 'segmentation',
    icon: '🎯',
    status: 'active'
  },
  {
    id: '3',
    title: 'Airdrop Targeting',
    description: 'Automate rewards based on behavior, time held, or Symbol Score with precise wallet targeting.',
    category: 'rewards',
    icon: '🎁',
    status: 'active'
  },
  {
    id: '4',
    title: 'Symbol Score',
    description: 'Assign non-financial reputation metrics to holders based on contribution, engagement, and loyalty.',
    category: 'reputation',
    icon: '⭐',
    status: 'active'
  },
  {
    id: '5',
    title: 'Engagement Funnels',
    description: 'Visualize the journey from mint to stake to exit with detailed conversion tracking.',
    category: 'analytics',
    icon: '🔄',
    status: 'active'
  },
  {
    id: '6',
    title: 'Multi-token Support',
    description: 'Track behavior across multiple tokens and projects in a unified dashboard.',
    category: 'platform',
    icon: '🔗',
    status: 'active'
  },
  {
    id: '7',
    title: 'On-chain Data Integration',
    description: 'Direct blockchain data feeds without relying on Web2 APIs or user accounts.',
    category: 'infrastructure',
    icon: '⛓️',
    status: 'active'
  },
  {
    id: '8',
    title: 'DAO Governance Tracking',
    description: 'Monitor voting patterns, proposal participation, and governance engagement metrics.',
    category: 'governance',
    icon: '🗳️',
    status: 'beta'
  }
];

const categories = [
  { id: 'all', name: 'All Features' },
  { id: 'analytics', name: 'Analytics' },
  { id: 'segmentation', name: 'Segmentation' },
  { id: 'rewards', name: 'Rewards' },
  { id: 'reputation', name: 'Reputation' },
  { id: 'platform', name: 'Platform' },
  { id: 'infrastructure', name: 'Infrastructure' },
  { id: 'governance', name: 'Governance' }
];

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const filteredFeatures = features.filter(feature => {
    const matchesCategory = selectedCategory === 'all' || feature.category === selectedCategory;
    const matchesSearch = feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'beta': return 'bg-yellow-500';
      case 'deprecated': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'beta': return 'Beta';
      case 'deprecated': return 'Deprecated';
      default: return 'Unknown';
    }
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
          <Link href="/features" className="text-white font-medium">Features</Link>
          <Link href="/integration" className="text-gray-300 hover:text-white transition-colors">Integration</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Features</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage your token community using on-chain data
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Search
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(feature.status)}`}>
                    {getStatusText(feature.status)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                {expandedFeature === feature.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white capitalize">{feature.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-white">{getStatusText(feature.status)}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                )}
                
                {expandedFeature !== feature.id && (
                  <div className="text-orange-500 text-sm font-medium">
                    Click to expand →
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No features found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 