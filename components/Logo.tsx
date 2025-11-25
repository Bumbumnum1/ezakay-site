'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-3xl sm:text-4xl font-extrabold font-poppins hover:opacity-90 transition-all duration-300 group">
      <span className="text-accent-red group-hover:scale-110 inline-block transition-transform duration-300">EZ</span>
      <span className="text-white">akay</span>
    </Link>
  );
}

