'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Link href="/">
            <span className="font-bold text-xl text-blue-500">SmartCleaner</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
