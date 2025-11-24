'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 glass-effect border-b border-accent-green/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-200">
            <Link href="/" className="relative group hover:text-accent-green transition-colors duration-300 font-poppins">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="relative group hover:text-accent-green transition-colors duration-300 font-poppins">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/features" className="relative group hover:text-accent-green transition-colors duration-300 font-poppins">
              <span>Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="relative group hover:text-accent-green transition-colors duration-300 font-poppins">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/get-started" className="ml-4 bg-gradient-to-r from-accent-green to-accent-green/80 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-accent-green/50 hover:scale-105 transition-all duration-300 font-poppins">
              Get Started
            </Link>
          </nav>
          <button 
            className="md:hidden text-white hover:text-accent-green transition-colors duration-300 p-2 rounded-lg hover:bg-dark-purple/50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

