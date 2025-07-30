'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'DAO Operator',
    company: 'Solana DAO',
    rating: 5,
    title: 'Game-changing for community management',
    content: 'KERNL has completely transformed how we track our DAO members. The Symbol Score feature helps us identify our most engaged contributors, and the airdrop targeting is incredibly precise.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: '2',
    name: 'Sarah Kim',
    role: 'Token Founder',
    company: 'DeFi Protocol',
    rating: 5,
    title: 'Finally, a crypto-native CRM',
    content: 'We were using spreadsheets and manual tracking before KERNL. Now we have real-time insights into holder behavior and can target airdrops with surgical precision.',
    date: '1 month ago',
    verified: true
  },
  {
    id: '3',
    name: 'Marcus Rodriguez',
    role: 'Community Manager',
    company: 'NFT Project',
    rating: 4,
    title: 'Excellent wallet segmentation',
    content: 'The wallet segmentation features are incredibly powerful. We can now identify whales, diamond hands, and active traders with ease. The interface is intuitive and the data is always up-to-date.',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: '4',
    name: 'Emma Thompson',
    role: 'Protocol Lead',
    company: 'DeFi Protocol',
    rating: 5,
    title: 'Perfect for governance tracking',
    content: 'KERNL has been invaluable for tracking governance participation. We can see who\'s voting, who\'s proposing, and identify patterns in community engagement.',
    date: '1 week ago',
    verified: true
  },
  {
    id: '5',
    name: 'David Park',
    role: 'Token Team Lead',
    company: 'Memecoin Project',
    rating: 5,
    title: 'Airdrop targeting is revolutionary',
    content: 'The airdrop targeting feature alone is worth the subscription. We\'ve increased our airdrop effectiveness by 300% since switching to KERNL.',
    date: '2 months ago',
    verified: true
  },
  {
    id: '6',
    name: 'Lisa Wang',
    role: 'DAO Treasurer',
    company: 'Governance DAO',
    rating: 4,
    title: 'Great for treasury management',
    content: 'KERNL helps us track treasury movements and identify potential risks. The multi-token support is essential for our diverse portfolio.',
    date: '1 month ago',
    verified: true
  }
];

export default function ReviewsPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');

  const filteredReviews = reviews.filter(review => {
    return selectedRating === null || review.rating === selectedRating;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Reviews
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            See what token teams and DAOs are saying about KERNL
          </p>
        </div>

        {/* Rating Summary */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-2xl sm:text-3xl text-yellow-400">
                {renderStars(Math.round(averageRating))}
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Based on {totalReviews} verified reviews from token teams and DAOs
            </p>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Rating Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRating(null)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRating === null
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Ratings
              </button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedRating === rating
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {rating} Star{rating !== 1 ? 's' : ''}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="date">Date</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {sortedReviews.map((review) => (
              <div key={review.id} className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {review.title}
                      </h3>
                      {review.verified && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-400">
                        {review.rating} out of 5
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {review.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">
                      {review.role} at {review.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {sortedReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">No reviews found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your rating filter</p>
            <button
              onClick={() => setSelectedRating(null)}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Show All Reviews
            </button>
          </div>
        )}

        {/* Review Form */}
        <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              We&apos;d love to hear about your experience with KERNL. Your feedback helps us improve and helps other teams make informed decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Role & Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., DAO Operator at Solana DAO"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-2xl text-gray-600 hover:text-yellow-400 transition-colors"
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Review Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Brief summary of your experience"
              />
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Review</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Share your experience with KERNL..."
              />
            </div>
            
            <button className="w-full mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Submit Review
            </button>
            
            <p className="text-xs text-gray-400 mt-4 text-center">
              We don&apos;t require personal information. Reviews are moderated for quality.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 