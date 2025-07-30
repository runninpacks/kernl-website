'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

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
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Features
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage your token community using on-chain data
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
              onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(feature.status)}`}></span>
                      <span className="text-xs text-gray-400">{getStatusText(feature.status)}</span>
                    </div>
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${expandedFeature === feature.id ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {feature.description}
              </p>

              {expandedFeature === feature.id && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Category</span>
                      <span className="text-white capitalize">{feature.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        feature.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        feature.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {getStatusText(feature.status)}
                      </span>
                    </div>
                    <button className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No features found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
} 