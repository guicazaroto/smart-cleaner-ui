'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { User } from '../../app/(public)/cadastro/helpers/types';
import Cookies from 'js-cookie';
import { UserContext } from './context';
import { UserMenu } from '@/components/user-menu';

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
        <UserMenu user={user} />
      </div>
    </header>
  );
};

export default Header;
