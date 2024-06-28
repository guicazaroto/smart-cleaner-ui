import Cookies from 'js-cookie';
import Link from 'next/link';
import { useState } from "react";

export const UserMenu = ({ user }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const clearSession = () => {
    sessionStorage.clear();
    window.location.href = '/entrar';
    Cookies.remove('token');
  }

  const goToProfile = () => {
    window.location.href = '/profile';
  }

  return (
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
              backgroundImage: `url('${user?.imagem_url}')`,
            }}
          />
        </button>
        {menuOpen && (
          
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2">
            <Link 
              href="/profile"
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Ver Perfil
            </Link>

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
  )
}