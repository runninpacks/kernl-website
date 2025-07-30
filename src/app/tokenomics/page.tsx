'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TokenMetric {
  name: string;
  value: string;
  change: number;
  description: string;
}

interface DistributionItem {
  category: string;
  percentage: number;
  amount: string;
  description: string;
  color: string;
}

const tokenMetrics: TokenMetric[] = [
  {
    name: 'Total Supply',
    value: '100,000,000',
    change: 0,
    description: 'Fixed supply, no inflation'
  },
  {
    name: 'Circulating Supply',
    value: '45,200,000',
    change: 2.1,
    description: '45.2% of total supply'
  },
  {
    name: 'Market Cap',
    value: '$2.4M',
    change: 5.8,
    description: 'Based on current price'
  },
  {
    name: 'Price',
    value: '$0.053',
    change: -1.2,
    description: 'Real-time SOL price'
  },
  {
    name: '24h Volume',
    value: '$125K',
    change: 12.4,
    description: 'Trading volume'
  },
  {
    name: 'Holders',
    value: '1,847',
    change: 3.2,
    description: 'Unique wallet addresses'
  }
];

const distributionData: DistributionItem[] = [
  {
    category: 'Community Rewards',
    percentage: 30,
    amount: '30,000,000',
    description: 'Airdrops, incentives, and community programs',
    color: 'bg-orange-500'
  },
  {
    category: 'Team & Advisors',
    percentage: 20,
    amount: '20,000,000',
    description: 'Core team and strategic advisors',
    color: 'bg-blue-500'
  },
  {
    category: 'Development',
    percentage: 25,
    amount: '25,000,000',
    description: 'Platform development and infrastructure',
    color: 'bg-green-500'
  },
  {
    category: 'Treasury',
    percentage: 15,
    amount: '15,000,000',
    description: 'Reserve for future initiatives',
    color: 'bg-purple-500'
  },
  {
    category: 'Marketing',
    percentage: 10,
    amount: '10,000,000',
    description: 'Marketing and partnerships',
    color: 'bg-red-500'
  }
];

const vestingSchedule = [
  {
    phase: 'Team & Advisors',
    schedule: '24-month linear vesting, 6-month cliff',
    startDate: 'Q1 2024',
    endDate: 'Q1 2026'
  },
  {
    phase: 'Development',
    schedule: '36-month linear vesting, 12-month cliff',
    startDate: 'Q1 2024',
    endDate: 'Q1 2027'
  },
  {
    phase: 'Community Rewards',
    schedule: 'Released based on platform usage and milestones',
    startDate: 'Q2 2024',
    endDate: 'Ongoing'
  },
  {
    phase: 'Marketing',
    schedule: '12-month linear vesting',
    startDate: 'Q1 2024',
    endDate: 'Q1 2025'
  }
];

export default function TokenomicsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1M');

  const renderDistributionChart = () => {
    return (
      <div className="relative w-64 h-64 mx-auto mb-6">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {distributionData.map((item, index) => {
            const startAngle = distributionData
              .slice(0, index)
              .reduce((sum, d) => sum + (d.percentage * 3.6), 0);
            const angle = item.percentage * 3.6;
            const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
            const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
            const x2 = 50 + 40 * Math.cos((startAngle + angle - 90) * Math.PI / 180);
            const y2 = 50 + 40 * Math.sin((startAngle + angle - 90) * Math.PI / 180);
            const largeArcFlag = angle > 180 ? 1 : 0;

            return (
              <path
                key={item.category}
                d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                fill={item.color.replace('bg-', '')}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            );
          })}
        </svg>
      </div>
    );
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
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact us</Link>
          <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link>
          <Link href="/tokenomics" className="text-white font-medium">Tokenomics</Link>
        </nav>
        
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Launch App
        </button>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">KERNL Tokenomics</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding the economics and utility of the KERNL token
          </p>
        </div>

        {/* Token Metrics Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenMetrics.map((metric) => (
              <div key={metric.name} className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-400 text-sm">{metric.name}</h3>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.change > 0 ? 'text-green-400' : metric.change < 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {metric.change !== 0 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span>{metric.change > 0 ? '+' : ''}{metric.change}%</span>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution Chart and Details */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chart */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Token Distribution</h2>
              {renderDistributionChart()}
              <div className="text-center">
                <p className="text-gray-400 text-sm">Total Supply: 100,000,000 KERNL</p>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Allocation Details</h2>
              <div className="space-y-4">
                {distributionData.map((item) => (
                  <div key={item.category} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <div>
                        <h3 className="font-semibold">{item.category}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{item.percentage}%</div>
                      <div className="text-gray-400 text-sm">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vesting Schedule */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Vesting Schedule</h2>
            <div className="space-y-4">
              {vestingSchedule.map((phase) => (
                <div key={phase.phase} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{phase.phase}</h3>
                    <p className="text-gray-400 text-sm">{phase.schedule}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>{phase.startDate}</div>
                    <div>{phase.endDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price History */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Price History</h2>
              <div className="flex space-x-2">
                {(['1D', '1W', '1M', '3M', '1Y'] as const).map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedTimeframe === timeframe
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Placeholder for price chart */}
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-4">📈</div>
                <p>Price chart coming soon</p>
                <p className="text-sm">Real-time SOL price data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Token Utility */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Token Utility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Platform Access</h3>
                    <p className="text-gray-400 text-sm">Stake KERNL tokens to unlock premium features and higher usage limits</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Governance</h3>
                    <p className="text-gray-400 text-sm">Participate in platform governance and vote on new features</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Revenue Sharing</h3>
                    <p className="text-gray-400 text-sm">Earn a share of platform revenue based on your stake</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">API Access</h3>
                    <p className="text-gray-400 text-sm">Higher rate limits and priority access to KERNL APIs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Early Access</h3>
                    <p className="text-gray-400 text-sm">Get early access to new features and beta testing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Staking Rewards</h3>
                    <p className="text-gray-400 text-sm">Earn additional tokens by staking KERNL long-term</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 