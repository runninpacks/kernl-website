'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface TokenMetric {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

interface DistributionItem {
  category: string;
  percentage: number;
  amount: string;
  color: string;
  description: string;
}

const tokenMetrics: TokenMetric[] = [
  {
    label: 'Total Supply',
    value: '100,000,000 KERNL',
    change: '+0%',
    changeType: 'neutral'
  },
  {
    label: 'Circulating Supply',
    value: '45,000,000 KERNL',
    change: '+2.5%',
    changeType: 'positive'
  },
  {
    label: 'Market Cap',
    value: '$2.5M',
    change: '+15.2%',
    changeType: 'positive'
  },
  {
    label: 'Price',
    value: '$0.055',
    change: '+12.4%',
    changeType: 'positive'
  },
  {
    label: '24h Volume',
    value: '$125K',
    change: '+8.7%',
    changeType: 'positive'
  },
  {
    label: 'Holders',
    value: '2,847',
    change: '+156',
    changeType: 'positive'
  }
];

const distribution: DistributionItem[] = [
  {
    category: 'Community Rewards',
    percentage: 40,
    amount: '40,000,000 KERNL',
    color: '#F59E0B',
    description: 'Airdrops, staking rewards, and community incentives'
  },
  {
    category: 'Team & Advisors',
    percentage: 20,
    amount: '20,000,000 KERNL',
    color: '#EF4444',
    description: 'Core team, advisors, and early contributors'
  },
  {
    category: 'Development',
    percentage: 15,
    amount: '15,000,000 KERNL',
    color: '#8B5CF6',
    description: 'Product development and technical infrastructure'
  },
  {
    category: 'Treasury',
    percentage: 15,
    amount: '15,000,000 KERNL',
    color: '#10B981',
    description: 'Protocol treasury for future development'
  },
  {
    category: 'Marketing',
    percentage: 10,
    amount: '10,000,000 KERNL',
    color: '#3B82F6',
    description: 'Marketing, partnerships, and ecosystem growth'
  }
];

const vestingSchedule = [
  {
    phase: 'Team & Advisors',
    schedule: '4-year linear vesting with 1-year cliff',
    details: '20% of tokens locked for 1 year, then linear release over 3 years'
  },
  {
    phase: 'Community Rewards',
    schedule: 'Continuous distribution over 4 years',
    details: 'Released based on community engagement and platform usage'
  },
  {
    phase: 'Development',
    schedule: '2-year linear vesting',
    details: 'Released monthly to fund ongoing development'
  },
  {
    phase: 'Treasury',
    schedule: 'Governance controlled',
    details: 'Released based on DAO governance decisions'
  },
  {
    phase: 'Marketing',
    schedule: '2-year linear vesting',
    details: 'Released quarterly for marketing initiatives'
  }
];

export default function TokenomicsPage() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const getChangeColor = (type?: string) => {
    switch (type) {
      case 'positive': return 'text-green-400';
      case 'negative': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getChangeIcon = (type?: string) => {
    switch (type) {
      case 'positive': return '↗';
      case 'negative': return '↘';
      default: return '→';
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
            Tokenomics
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            KERNL token distribution, vesting schedule, and economic model
          </p>
        </div>

        {/* Token Metrics */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Token Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tokenMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
                onClick={() => setSelectedMetric(selectedMetric === metric.label ? null : metric.label)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm sm:text-base text-gray-400">{metric.label}</span>
                  {metric.change && (
                    <span className={`text-xs font-medium ${getChangeColor(metric.changeType)}`}>
                      {getChangeIcon(metric.changeType)} {metric.change}
                    </span>
                  )}
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">{metric.value}</div>
                {selectedMetric === metric.label && (
                  <div className="mt-3 pt-3 border-t border-gray-800">
                    <p className="text-xs text-gray-400">
                      {metric.label === 'Holders' 
                        ? 'Unique wallet addresses holding KERNL tokens'
                        : `Current ${metric.label.toLowerCase()} of KERNL tokens`
                      }
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Token Distribution */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Token Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Pie Chart */}
            <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Distribution Overview</h3>
              <div className="relative w-64 h-64 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {distribution.map((item, index) => {
                    const startAngle = distribution
                      .slice(0, index)
                      .reduce((sum, d) => sum + (d.percentage / 100) * 360, 0);
                    const endAngle = startAngle + (item.percentage / 100) * 360;
                    const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                    const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                    const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                    const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    return (
                      <path
                        key={item.category}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="space-y-4 sm:space-y-6">
              {distribution.map((item) => (
                <div key={item.category} className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <h4 className="font-semibold text-white">{item.category}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white">{item.percentage}%</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{item.amount}</div>
                  <p className="text-xs sm:text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vesting Schedule */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Vesting Schedule</h2>
          <div className="space-y-4 sm:space-y-6">
            {vestingSchedule.map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.phase}</h3>
                    <p className="text-sm sm:text-base text-orange-400 font-medium">{item.schedule}</p>
                  </div>
                  <div className="text-2xl sm:text-3xl text-gray-600">{(index + 1).toString().padStart(2, '0')}</div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Economic Model */}
        <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Economic Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Token Utility</h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Governance voting rights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Platform fee discounts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Staking rewards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Premium feature access</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Tokenomics Principles</h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Community-driven distribution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Long-term alignment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Sustainable growth model</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Transparent vesting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 