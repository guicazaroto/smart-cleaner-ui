'use client'
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { BASE_URL } from '@/helpers/constants';

const LoginPage = () => {
  const router = useRouter();
  
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    getCredentials(email, password); 

  };

  async function getCredentials(email: string, password: string) {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      Cookies.set('token', await response.text());
      return router.push('/profile')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Ocorreu um erro ao tentar fazer o login.',
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Acesse sua conta</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;