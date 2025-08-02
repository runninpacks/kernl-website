'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-white font-semibold text-lg sm:text-xl">KERNL</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link 
            href="/features" 
            className={`transition-colors text-sm xl:text-base ${
              isActive('/features') 
                ? 'text-orange-500 font-medium' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Features
          </Link>
          <Link 
            href="/integration" 
            className={`transition-colors text-sm xl:text-base ${
              isActive('/integration') 
                ? 'text-orange-500 font-medium' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Integration
          </Link>
          <Link 
            href="/pricing" 
            className={`transition-colors text-sm xl:text-base ${
              isActive('/pricing') 
                ? 'text-orange-500 font-medium' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Pricing
          </Link>
          <Link 
            href="/resources" 
            className={`transition-colors text-sm xl:text-base ${
              isActive('/resources') 
                ? 'text-orange-500 font-medium' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Resources
          </Link>
          <Link 
            href="/documentation" 
            className={`transition-colors text-sm xl:text-base ${
              isActive('/documentation') 
                ? 'text-orange-500 font-medium' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Documentation
          </Link>
          <Link 
            href="/contact-us" 
            className={`transition-colors text-sm xl:text-base ${
              isActive('/contact-us') 
                ? 'text-orange-500 font-medium' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact us
          </Link>
        </nav>
        


        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              href="/features" 
              className={`transition-colors py-2 ${
                isActive('/features') 
                  ? 'text-orange-500 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/integration" 
              className={`transition-colors py-2 ${
                isActive('/integration') 
                  ? 'text-orange-500 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Integration
            </Link>
            <Link 
              href="/pricing" 
              className={`transition-colors py-2 ${
                isActive('/pricing') 
                  ? 'text-orange-500 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/resources" 
              className={`transition-colors py-2 ${
                isActive('/resources') 
                  ? 'text-orange-500 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/documentation" 
              className={`transition-colors py-2 ${
                isActive('/documentation') 
                  ? 'text-orange-500 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              href="/contact-us" 
              className={`transition-colors py-2 ${
                isActive('/contact-us') 
                  ? 'text-orange-500 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
} 