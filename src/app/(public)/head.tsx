'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserMenu } from '@/components/user-menu';
import Cookies from 'js-cookie';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const userData = Cookies.get('user') || '';
  const user = userData ? JSON.parse(userData) : null;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Link href="/">
            <span className="font-bold text-xl text-blue-500">SmartCleaner</span>
          </Link>
        </div>

        <div>
          <button
            className="lg:hidden block text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className={`z-50 flex flex-col lg:flex-row lg:items-center lg:space-x-8 ${isMenuOpen ? 'absolute top-16 left-0 w-full bg-white p-4 shadow-lg' : 'hidden'} lg:static lg:shadow-none lg:bg-transparent lg:p-0 lg:flex`}>
              <li className={`mt-2 lg:mt-0 ${pathname === '/' ? 'text-blue-500' : ''}`}>
                <a href="/">Início</a>
              </li>
              <li className={`mt-2 lg:mt-0 ${pathname === '/contratar' ? 'text-blue-500' : ''}`}>
                <a href="/contratar">Contratar</a>
              </li>
              <li className={`mt-2 lg:mt-0 ${pathname === '/cadastro' ? 'text-blue-500' : ''}`}>
                <a href="/cadastro">Trabalhe no App</a>
              </li>

              {user ? <UserMenu user={user.data} />
              : (
                <li className="mt-2 lg:mt-0">
                  <a
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    href="/entrar"
                  >
                    Entrar
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
