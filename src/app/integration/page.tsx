'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface Integration {
  id: string;
  name: string;
  description: string;
  status: 'connected' | 'available' | 'coming-soon';
  lastSync?: string;
  icon: string;
}

const integrations: Integration[] = [
  {
    id: 'phantom',
    name: 'Phantom Wallet',
    description: 'Connect and track wallet activity from Phantom users',
    status: 'connected',
    lastSync: '2 minutes ago',
    icon: '👻'
  },
  {
    id: 'solflare',
    name: 'Solflare',
    description: 'Integration with Solflare wallet for comprehensive tracking',
    status: 'connected',
    lastSync: '5 minutes ago',
    icon: '🔥'
  },
  {
    id: 'raydium',
    name: 'Raydium DEX',
    description: 'Track trading activity and liquidity movements',
    status: 'connected',
    lastSync: '1 minute ago',
    icon: '🌊'
  },
  {
    id: 'jupiter',
    name: 'Jupiter Aggregator',
    description: 'Monitor swap activity across multiple DEXs',
    status: 'available',
    icon: '🪐'
  },
  {
    id: 'realms',
    name: 'Realms DAO',
    description: 'Governance tracking and proposal monitoring',
    status: 'connected',
    lastSync: '10 minutes ago',
    icon: '🏛️'
  },
  {
    id: 'helius',
    name: 'Helius RPC',
    description: 'High-performance blockchain data feeds',
    status: 'connected',
    lastSync: '30 seconds ago',
    icon: '⚡'
  },
  {
    id: 'birdeye',
    name: 'Birdeye Analytics',
    description: 'Advanced token analytics and market data',
    status: 'available',
    icon: '🦅'
  },
  {
    id: 'tensor',
    name: 'Tensor NFT',
    description: 'NFT trading and collection tracking',
    status: 'coming-soon',
    icon: '🎨'
  }
];

export default function IntegrationPage() {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'connected' | 'available' | 'coming-soon'>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'available': return 'bg-blue-500';
      case 'coming-soon': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected': return 'Connected';
      case 'available': return 'Available';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Unknown';
    }
  };

  const filteredIntegrations = integrations.filter(integration => {
    return selectedStatus === 'all' || integration.status === selectedStatus;
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Integrations
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with the tools you already use in the Solana ecosystem
          </p>
        </div>

        {/* Status Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedStatus === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Integrations
            </button>
            <button
              onClick={() => setSelectedStatus('connected')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedStatus === 'connected'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Connected
            </button>
            <button
              onClick={() => setSelectedStatus('available')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedStatus === 'available'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedStatus('coming-soon')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedStatus === 'coming-soon'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl sm:text-4xl">{integration.icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      {integration.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(integration.status)}`}></span>
                      <span className="text-xs text-gray-400">{getStatusText(integration.status)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {integration.description}
              </p>

              {integration.lastSync && (
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Last sync:</span>
                  <span>{integration.lastSync}</span>
                </div>
              )}

              <button
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  integration.status === 'connected'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : integration.status === 'available'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
                disabled={integration.status === 'coming-soon'}
              >
                {integration.status === 'connected' ? 'Connected' : 
                 integration.status === 'available' ? 'Connect' : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>

        {/* Configuration Panel */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Configuration</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              We&apos;re constantly adding new integrations. Let us know what you need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">API Keys</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Securely store your API keys for enhanced functionality
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Manage Keys
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Webhooks</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Set up webhooks for real-time data synchronization
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Configure Webhooks
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 