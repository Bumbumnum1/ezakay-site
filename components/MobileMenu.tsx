'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 glass-effect z-[100] p-8 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}
    >
      <div className="flex justify-between items-center mb-12">
        <Logo />
        <button onClick={onClose} className="text-white hover:text-accent-green transition-colors duration-300 p-2 rounded-lg hover:bg-dark-purple/50">
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-col gap-6 text-lg font-medium text-gray-200 font-poppins">
        <Link href="/" onClick={onClose} className="hover:text-accent-green transition-colors duration-300 py-2 border-b border-accent-green/10 hover:border-accent-green/30">Home</Link>
        <Link href="/about" onClick={onClose} className="hover:text-accent-green transition-colors duration-300 py-2 border-b border-accent-green/10 hover:border-accent-green/30">About</Link>
        <Link href="/features" onClick={onClose} className="hover:text-accent-green transition-colors duration-300 py-2 border-b border-accent-green/10 hover:border-accent-green/30">Features</Link>
        <Link href="/contact" onClick={onClose} className="hover:text-accent-green transition-colors duration-300 py-2 border-b border-accent-green/10 hover:border-accent-green/30">Contact</Link>
        <Link href="/get-started" onClick={onClose} className="bg-gradient-to-r from-accent-green to-accent-green/80 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-accent-green/30 hover:scale-105 transition-all duration-300 text-center mt-4 font-poppins">
          Get Started
        </Link>
      </nav>
    </div>
  );
}

