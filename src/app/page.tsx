import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-white font-semibold text-xl">KERNL</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
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
      <main className="flex flex-col items-center justify-center px-8 py-16">
        {/* Trial Banner */}
        <div className="mb-12">
          <div className="border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2">
            <span className="text-gray-300">Free tier available</span>
            <span className="text-orange-500">Start tracking now</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mb-16">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Crypto-native CRM for<br />
            token teams & DAOs
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Track wallet behavior, segment holders, assign reputation scores, and target airdrops — all using on-chain data without Web2 dependencies.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
            Start Free
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="flex space-x-4 max-w-6xl w-full">
          {/* Left Panel */}
          <div className="bg-white rounded-2xl p-6 flex-1 text-black">
            {/* Wallet Activity Chart */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Wallet Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Holders</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2 relative">
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Staking</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2 relative">
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white bg-blue-500 px-4 py-2 rounded-full">Voting</span>
                  <div className="flex-1 mx-4 bg-blue-500 rounded-full h-8 relative">
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white bg-orange-500 px-4 py-2 rounded-full">Airdrop Eligible</span>
                  <div className="flex-1 mx-4 bg-orange-500 rounded-full h-8 relative">
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Symbol Score Section */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  Symbol Score: 847 - Top 15% of holders
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col space-y-4 flex-1">
            {/* Holder Stats */}
            <div className="bg-white rounded-2xl p-6 text-black">
              <h3 className="text-gray-600 mb-2">Total Holders</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold bg-gray-100 px-3 py-1 rounded">2,847</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* Segmentation Status */}
            <div className="bg-white rounded-2xl p-6 text-black">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span className="text-gray-600 italic">Whales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                    </svg>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span className="text-gray-600 italic">Diamond Hands</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span className="text-gray-600 italic">Airdrop Targets</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
