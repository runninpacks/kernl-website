'use client';

import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [priceData, setPriceData] = useState({
    price: 0,
    change24h: 0,
    volume24h: 0,
    marketCap: 0,
    loading: true,
    error: null as string | null
  });

  // Contract address - you can update this when you have the final address
  const contractAddress = "2H1bz8M8cecNZBjgkA8kvoyWUUvv4N9SZvAmnafQf3Mt";

  useEffect(() => {
    // Set target date to 2 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await fetch(`https://public-api.birdeye.so/defi/price?address=${contractAddress}&ui_amount_mode=raw`, {
          headers: {
            'X-API-KEY': '8ff249064e784babad914121682d3763',
            'accept': 'application/json',
            'x-chain': 'solana'
          }
        });

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Rate limit exceeded. Please try again later.');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Birdeye API response:', data); // Debug log
        
        if (data.success && data.data && Object.keys(data.data).length > 0) {
          const price = data.data.value || 0;
          const change24h = data.data.priceChange24h || 0;
          // For SOL, we'll use placeholder values for volume and market cap since they're not in this endpoint
          const volume24h = 0; // Would need different endpoint for volume data
          const marketCap = 0; // Would need different endpoint for market cap data

          setPriceData({
            price,
            change24h,
            volume24h,
            marketCap,
            loading: false,
            error: null
          });
        } else if (data.success && (!data.data || Object.keys(data.data).length === 0)) {
          // API succeeded but no data available for this contract
          setPriceData(prev => ({
            ...prev,
            loading: false,
            error: 'No price data available for this contract'
          }));
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (error) {
        console.error('Birdeye API error:', error); // Debug log
        setPriceData(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }));
      }
    };

    fetchPriceData();
    
    // Refresh price data every 60 seconds to avoid rate limiting
    const priceInterval = setInterval(fetchPriceData, 60000);
    
    return () => clearInterval(priceInterval);
  }, [contractAddress]);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  };

  const formatPrice = (price: number) => {
    if (price < 0.0001) return price.toExponential(4);
    if (price < 0.01) return price.toFixed(6);
    if (price < 1) return price.toFixed(4);
    return price.toFixed(2);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16">
        {/* Trial Banner */}
        <div className="mb-8 sm:mb-12 w-full max-w-md">
          <div className="border border-gray-700 rounded-full px-3 sm:px-4 py-2 flex items-center justify-center space-x-2 text-sm sm:text-base">
            <span className="text-gray-300">Free tier available</span>
            <span className="text-orange-500">Coming Soon</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 sm:mb-12 w-full max-w-2xl">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 text-white">
              Launching Soon
            </h2>
            <div className="grid grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                  <div className="text-2xl sm:text-3xl font-bold">{timeLeft.days}</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                  <div className="text-2xl sm:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                  <div className="text-2xl sm:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                  <div className="text-2xl sm:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-300">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Price Section */}
        <div className="mb-8 sm:mb-12 w-full max-w-2xl">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
            {/* Contract Address */}
            <div className="text-center mb-6">
              <h3 className="text-sm sm:text-base text-gray-400 mb-2">Contract Address</h3>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-xs sm:text-sm text-orange-500 break-all">
                {contractAddress}
              </div>
            </div>

            {/* Price Data */}
            {priceData.loading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Loading price data...</p>
              </div>
            ) : priceData.error ? (
              <div className="text-center">
                <p className="text-red-400">Error loading price data</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Current Price */}
                <div className="text-center">
                  <div className="bg-orange-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                    <div className="text-lg sm:text-xl font-bold">${formatPrice(priceData.price)}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Current Price</div>
                </div>

                {/* 24h Change */}
                <div className="text-center">
                  <div className={`rounded-xl p-3 sm:p-4 mb-2 ${
                    priceData.change24h >= 0 ? 'bg-green-500' : 'bg-red-500'
                  } text-white`}>
                    <div className="text-lg sm:text-xl font-bold">
                      {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">24h Change</div>
                </div>

                {/* Volume */}
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                    <div className="text-lg sm:text-xl font-bold">${formatNumber(priceData.volume24h)}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">24h Volume</div>
                </div>

                {/* Market Cap */}
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-xl p-3 sm:p-4 mb-2">
                    <div className="text-lg sm:text-xl font-bold">${formatNumber(priceData.marketCap)}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Market Cap</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mb-12 sm:mb-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Crypto-native CRM for<br />
            token teams & DAOs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Track wallet behavior, segment holders, assign reputation scores, and target airdrops — all using on-chain data without Web2 dependencies.
          </p>
          <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
            Coming Soon
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 max-w-6xl w-full px-4">
          {/* Left Panel */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 flex-1 text-black">
            {/* Wallet Activity Chart */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4">Wallet Activity</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Active Holders</span>
                  <div className="flex-1 mx-2 sm:mx-4 bg-gray-200 rounded-full h-2 relative">
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Staking</span>
                  <div className="flex-1 mx-2 sm:mx-4 bg-gray-200 rounded-full h-2 relative">
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white bg-blue-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">Voting</span>
                  <div className="flex-1 mx-2 sm:mx-4 bg-blue-500 rounded-full h-6 sm:h-8 relative">
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white bg-orange-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">Airdrop Eligible</span>
                  <div className="flex-1 mx-2 sm:mx-4 bg-orange-500 rounded-full h-6 sm:h-8 relative">
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Symbol Score Section */}
            <div className="bg-gray-50 rounded-xl p-3 sm:p-4 flex items-start space-x-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  Symbol Score: 847 - Top 15% of holders
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 flex-1 text-black">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">2,847</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Holders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">156</div>
                <div className="text-xs sm:text-sm text-gray-600">Whales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">892</div>
                <div className="text-xs sm:text-sm text-gray-600">Diamond Hands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">1,234</div>
                <div className="text-xs sm:text-sm text-gray-600">Airdrop Targets</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">New holder joined</span>
                  <span className="text-xs text-gray-500 ml-auto">2m ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">Staking increased</span>
                  <span className="text-xs text-gray-500 ml-auto">5m ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">Vote cast</span>
                  <span className="text-xs text-gray-500 ml-auto">12m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
