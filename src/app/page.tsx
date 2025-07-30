'use client';

import Navigation from '@/components/Navigation';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16">
        {/* Trial Banner */}
        <div className="mb-8 sm:mb-12 w-full max-w-md">
          <div className="border border-gray-700 rounded-full px-3 sm:px-4 py-2 flex items-center justify-center space-x-2 text-sm sm:text-base">
            <span className="text-gray-300">Free tier available</span>
            <span className="text-orange-500">Start tracking now</span>
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
            Start Free
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
