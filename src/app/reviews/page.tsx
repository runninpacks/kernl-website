'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  title: string;
  content: string;
  date: Date;
  helpful: number;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Alex Chen',
    role: 'DAO Operator',
    company: 'Solana DAO',
    rating: 5,
    title: 'Game-changing for community management',
    content: 'KERNL has completely transformed how we manage our DAO. The wallet behavior tracking and Symbol Score features help us identify our most engaged members. The airdrop targeting is incredibly precise - we\'ve seen much better retention rates since using KERNL.',
    date: new Date('2024-01-15'),
    helpful: 24,
    verified: true
  },
  {
    id: '2',
    author: 'Sarah Kim',
    role: 'Token Founder',
    company: 'DeFi Protocol',
    rating: 5,
    title: 'Finally, a crypto-native CRM',
    content: 'We were using traditional CRM tools that just didn\'t understand crypto communities. KERNL is built specifically for token teams and it shows. The on-chain data integration is seamless and the holder segmentation is incredibly powerful.',
    date: new Date('2024-01-10'),
    helpful: 18,
    verified: true
  },
  {
    id: '3',
    author: 'Marcus Rodriguez',
    role: 'Community Manager',
    company: 'NFT Project',
    rating: 4,
    title: 'Excellent for tracking holder behavior',
    content: 'The wallet behavior tracking is exactly what we needed. We can now see who\'s buying, selling, staking, or just holding. This helps us tailor our community initiatives and rewards programs much more effectively.',
    date: new Date('2024-01-08'),
    helpful: 15,
    verified: true
  },
  {
    id: '4',
    author: 'Lisa Wang',
    role: 'Protocol Founder',
    company: 'DeFi Protocol',
    rating: 5,
    title: 'Symbol Score is revolutionary',
    content: 'The Symbol Score feature is brilliant. It helps us identify our most valuable community members beyond just token balance. We\'ve been able to reward genuine contributors and build a stronger community.',
    date: new Date('2024-01-05'),
    helpful: 22,
    verified: true
  },
  {
    id: '5',
    author: 'David Thompson',
    role: 'Growth Lead',
    company: 'Memecoin Project',
    rating: 4,
    title: 'Perfect for memecoin communities',
    content: 'Managing a memecoin community is chaotic, but KERNL makes it manageable. The engagement funnels help us understand the journey from first buy to long-term holder. Great tool for any token team.',
    date: new Date('2024-01-03'),
    helpful: 12,
    verified: true
  },
  {
    id: '6',
    author: 'Emma Johnson',
    role: 'DAO Treasurer',
    company: 'Governance DAO',
    rating: 5,
    title: 'Essential for DAO governance',
    content: 'The governance tracking features are incredible. We can now see voting patterns, proposal participation, and identify active vs passive members. This has made our DAO much more democratic and engaged.',
    date: new Date('2024-01-01'),
    helpful: 19,
    verified: true
  },
  {
    id: '7',
    author: 'Ryan Park',
    role: 'Token Launch Team',
    company: 'New Token Project',
    rating: 4,
    title: 'Great for new token launches',
    content: 'We used KERNL from day one of our token launch. The real-time holder analytics helped us understand our community better than any other tool. The airdrop targeting features are spot-on.',
    date: new Date('2023-12-28'),
    helpful: 14,
    verified: true
  },
  {
    id: '8',
    author: 'Maria Garcia',
    role: 'Community Manager',
    company: 'DeFi Protocol',
    rating: 5,
    title: 'No more Web2 dependencies',
    content: 'Finally, a CRM that doesn\'t require users to create accounts or provide personal information. Everything is based on on-chain data, which is exactly what crypto communities need. Highly recommend!',
    date: new Date('2023-12-25'),
    helpful: 27,
    verified: true
  }
];

export default function ReviewsPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'helpful'>('date');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const filteredReviews = reviews.filter(review => {
    if (selectedRating && review.rating !== selectedRating) return false;
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      case 'date':
      default:
        return b.date.getTime() - a.date.getTime();
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
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
          <Link href="/reviews" className="text-white font-medium">Reviews</Link>
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
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what token teams and DAOs are saying about KERNL
          </p>
        </div>

        {/* Rating Summary */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
                  <div className="flex">{renderStars(Math.round(averageRating))}</div>
                </div>
                <p className="text-gray-400 mb-2">Based on {totalReviews} reviews</p>
                <p className="text-sm text-gray-500">Verified customer reviews</p>
              </div>
              
              <div className="space-y-2">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-8">{rating}★</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-12">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Sort Controls */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRating(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRating === null
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                All Ratings
              </button>
              {[5, 4, 3, 2, 1].map(rating => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedRating === rating
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {rating}★
                </button>
              ))}
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'rating' | 'helpful')}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
            >
              <option value="date">Sort by Date</option>
              <option value="rating">Sort by Rating</option>
              <option value="helpful">Sort by Helpful</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {sortedReviews.map((review) => (
              <div key={review.id} className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{review.title}</h3>
                      {review.verified && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-gray-400 text-sm">{review.rating}/5</span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>{review.author}</div>
                    <div>{review.role} at {review.company}</div>
                    <div>{review.date.toLocaleDateString()}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{review.content}</p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                    </svg>
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Write Review CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-lg mb-6">
              Help other token teams by sharing your experience with KERNL
            </p>
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Review Form Modal */}
        {showReviewForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Write a Review</h2>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <button
                        key={rating}
                        type="button"
                        className="text-2xl hover:text-yellow-400 transition-colors"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    placeholder="Summarize your experience"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Review</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    placeholder="Tell us about your experience with KERNL..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Role</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      placeholder="Your role"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company/Project</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    placeholder="Your company or project name"
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 