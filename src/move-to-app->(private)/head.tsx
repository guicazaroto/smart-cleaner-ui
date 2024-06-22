'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { User } from '../app/(public)/cadastro/helpers/types';
import Cookies from 'js-cookie';
import { UserContext } from './context';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useContext<User>(UserContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const clearSession = () => {
    sessionStorage.clear();
    window.location.href = '/entrar';
    Cookies.remove('token');
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Link href="/">
            <span className="font-bold text-xl text-blue-500 cursor-pointer">SmartCleaner</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex text-sm border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
              style={{ width: '50px', height: '50px' }}
            >
              <div
                className="h-full w-full rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${user.imagem_url}')`,
                }}
              />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2">
                <button
                  onClick={clearSession}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
