'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'tutorial' | 'api' | 'video';
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  url: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Getting Started Guide',
    description: 'Complete walkthrough for setting up your first token project on KERNL',
    category: 'onboarding',
    type: 'guide',
    duration: '15 min',
    difficulty: 'beginner',
    url: '#'
  },
  {
    id: '2',
    title: 'Wallet Segmentation Tutorial',
    description: 'Learn how to segment holders by behavior, balance, and activity patterns',
    category: 'features',
    type: 'tutorial',
    duration: '25 min',
    difficulty: 'intermediate',
    url: '#'
  },
  {
    id: '3',
    title: 'Airdrop Best Practices',
    description: 'Strategies for targeting and distributing airdrops effectively',
    category: 'strategy',
    type: 'guide',
    duration: '20 min',
    difficulty: 'intermediate',
    url: '#'
  },
  {
    id: '4',
    title: 'Symbol Score Explained',
    description: 'Understanding reputation scoring and how to customize algorithms',
    category: 'features',
    type: 'video',
    duration: '12 min',
    difficulty: 'advanced',
    url: '#'
  },
  {
    id: '5',
    title: 'DAO Governance Tracking',
    description: 'Monitor voting patterns and governance engagement metrics',
    category: 'features',
    type: 'tutorial',
    duration: '18 min',
    difficulty: 'intermediate',
    url: '#'
  },
  {
    id: '6',
    title: 'Multi-token Setup',
    description: 'Configure KERNL to track multiple tokens across different projects',
    category: 'development',
    type: 'guide',
    duration: '30 min',
    difficulty: 'advanced',
    url: '#'
  },
  {
    id: '7',
    title: 'Community Management',
    description: 'Best practices for managing token communities using on-chain data',
    category: 'strategy',
    type: 'guide',
    duration: '22 min',
    difficulty: 'intermediate',
    url: '#'
  },
  {
    id: '8',
    title: 'API Documentation',
    description: 'Complete API reference for custom integrations and automations',
    category: 'development',
    type: 'api',
    duration: '45 min',
    difficulty: 'advanced',
    url: '#'
  }
];

const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'onboarding', name: 'Getting Started' },
  { id: 'features', name: 'Features' },
  { id: 'development', name: 'Development' },
  { id: 'strategy', name: 'Strategy' }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📖';
      case 'tutorial': return '🎥';
      case 'api': return '🔧';
      case 'video': return '🎬';
      default: return '📄';
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
            Resources
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to master KERNL and manage your token community effectively
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
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

          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDifficulty === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => setSelectedDifficulty('beginner')}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDifficulty === 'beginner'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => setSelectedDifficulty('intermediate')}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDifficulty === 'intermediate'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Intermediate
            </button>
            <button
              onClick={() => setSelectedDifficulty('advanced')}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDifficulty === 'advanced'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl sm:text-3xl">{getTypeIcon(resource.type)}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      {resource.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${getDifficultyColor(resource.difficulty)}`}></span>
                      <span className="text-xs text-gray-400 capitalize">{resource.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {resource.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Duration:</span>
                <span>{resource.duration}</span>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                View Resource
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Help Section */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Quick Help</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Documentation</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Comprehensive guides and tutorials for all KERNL features
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Browse Docs
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Community</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Join our Discord for support and community discussions
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 