'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Integration {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'error';
  lastSync: Date;
  config: IntegrationConfig;
  icon: string;
  description: string;
}

interface IntegrationConfig {
  apiKey?: string;
  endpoint?: string;
  permissions: string[];
  syncInterval: number;
}

const integrations: Integration[] = [
  {
    id: '1',
    name: 'Phantom Wallet',
    status: 'active',
    lastSync: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    config: {
      permissions: ['read:wallet', 'read:transactions'],
      syncInterval: 300
    },
    icon: '👻',
    description: 'Connect to Phantom wallet for transaction tracking'
  },
  {
    id: '2',
    name: 'Solflare',
    status: 'active',
    lastSync: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    config: {
      permissions: ['read:wallet', 'read:transactions'],
      syncInterval: 300
    },
    icon: '🔥',
    description: 'Solflare wallet integration for holder analytics'
  },
  {
    id: '3',
    name: 'Raydium DEX',
    status: 'active',
    lastSync: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
    config: {
      permissions: ['read:trades', 'read:liquidity'],
      syncInterval: 120
    },
    icon: '🦅',
    description: 'Track trading activity and liquidity on Raydium'
  },
  {
    id: '4',
    name: 'Jupiter Aggregator',
    status: 'active',
    lastSync: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    config: {
      permissions: ['read:swaps', 'read:routes'],
      syncInterval: 300
    },
    icon: '🪐',
    description: 'Monitor swap activity across multiple DEXs'
  },
  {
    id: '5',
    name: 'Realms DAO',
    status: 'active',
    lastSync: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    config: {
      permissions: ['read:proposals', 'read:votes'],
      syncInterval: 600
    },
    icon: '🏛️',
    description: 'Track governance proposals and voting activity'
  },
  {
    id: '6',
    name: 'Helius RPC',
    status: 'active',
    lastSync: new Date(Date.now() - 1000 * 60 * 1), // 1 minute ago
    config: {
      endpoint: 'https://rpc.helius.xyz',
      permissions: ['read:blocks', 'read:accounts'],
      syncInterval: 60
    },
    icon: '⚡',
    description: 'High-performance RPC for real-time data'
  },
  {
    id: '7',
    name: 'Birdeye Analytics',
    status: 'inactive',
    lastSync: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    config: {
      permissions: ['read:price', 'read:volume'],
      syncInterval: 3600
    },
    icon: '👁️',
    description: 'Price and volume analytics integration'
  },
  {
    id: '8',
    name: 'Tensor NFT',
    status: 'error',
    lastSync: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    config: {
      permissions: ['read:nfts', 'read:collections'],
      syncInterval: 1800
    },
    icon: '🎨',
    description: 'NFT collection and trading data'
  }
];

export default function IntegrationPage() {
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [showConfig, setShowConfig] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'inactive': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'inactive': return 'Inactive';
      case 'error': return 'Error';
      default: return 'Unknown';
    }
  };

  const formatLastSync = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
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
          <Link href="/integration" className="text-white font-medium">Integration</Link>
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Integrations</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect KERNL with your favorite Solana tools and services
          </p>
        </div>

        {/* Status Overview */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">6</div>
              <div className="text-gray-400">Active</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">1</div>
              <div className="text-gray-400">Inactive</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">1</div>
              <div className="text-gray-400">Error</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">8</div>
              <div className="text-gray-400">Total</div>
            </div>
          </div>
        </div>

        {/* Integrations List */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Integrations Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className={`bg-gray-900 rounded-xl p-6 cursor-pointer transition-all hover:bg-gray-800 ${
                      selectedIntegration?.id === integration.id ? 'ring-2 ring-orange-500' : ''
                    }`}
                    onClick={() => setSelectedIntegration(integration)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <h3 className="font-semibold">{integration.name}</h3>
                          <p className="text-sm text-gray-400">{integration.description}</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(integration.status)}`}></div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className={getStatusColor(integration.status).replace('bg-', 'text-')}>
                          {getStatusText(integration.status)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Last Sync:</span>
                        <span className="text-gray-300">{formatLastSync(integration.lastSync)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Sync Interval:</span>
                        <span className="text-gray-300">{integration.config.syncInterval}s</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Configuration Panel */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-xl p-6 sticky top-8">
                {selectedIntegration ? (
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="text-3xl">{selectedIntegration.icon}</div>
                      <div>
                        <h3 className="font-semibold">{selectedIntegration.name}</h3>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedIntegration.status)}`}>
                          {getStatusText(selectedIntegration.status)}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-medium mb-2">Permissions</h4>
                        <div className="space-y-1">
                          {selectedIntegration.config.permissions.map((permission, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-300">{permission}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Configuration</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Sync Interval:</span>
                            <span className="text-gray-300">{selectedIntegration.config.syncInterval}s</span>
                          </div>
                          {selectedIntegration.config.endpoint && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">Endpoint:</span>
                              <span className="text-gray-300 text-xs truncate max-w-32">{selectedIntegration.config.endpoint}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                        {selectedIntegration.status === 'active' ? 'Reconnect' : 'Connect'}
                      </button>
                      <button 
                        className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                        onClick={() => setShowConfig(!showConfig)}
                      >
                        {showConfig ? 'Hide' : 'Show'} Configuration
                      </button>
                    </div>

                    {showConfig && (
                      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                        <h4 className="font-medium mb-3">Advanced Settings</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium mb-1">API Key</label>
                            <input
                              type="password"
                              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                              placeholder="Enter API key"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Custom Endpoint</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                              placeholder="https://api.example.com"
                            />
                          </div>
                          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors text-sm">
                            Save Configuration
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-4">🔗</div>
                    <p>Select an integration to view details and configure settings</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Add New Integration */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-900 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Different Integration?</h2>
            <p className="text-gray-300 mb-6">
              We&apos;re constantly adding new integrations. Let us know what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@kernl.xyz"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Request Integration
              </a>
              <a
                href="/resources"
                className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 