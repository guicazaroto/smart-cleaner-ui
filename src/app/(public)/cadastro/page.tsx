'use client'

import React, { useState, ChangeEvent } from 'react';
import { createUser } from './actions/create-user';
import { SubmitButton } from './components/SubmitButton';

const RegistrationPage: React.FC = () => {
  const [photo, setPhoto] = useState<string>('');

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="py-5 min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Faça o seu cadastro</h2>
        <form action={createUser}>
          <div className="mb-4 flex justify-center items-center">
            <div 
              onClick={() => document.getElementById('photo')?.click()}
              className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-2 cursor-pointer"
            >
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="User" className="w-full h-full object-cover" />
              ) : (
                <div className="flex justify-center items-center w-full h-full text-gray-400">
                  <span className="text-4xl">+</span>
                </div>
              )}
            </div>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-1 block w-full hidden"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            <div className="mb-4">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>

            <div className="mb-4">
              <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
              <input
                type="text"
                id="street"
                name="street"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>

            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Número</label>
              <input
                type="text"
                id="number"
                name="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
              <input
                type="text"
                id="state"
                name="state"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              />
            </div>
            
            <div className="col-span-2 mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                placeholder='Fale um pouco sobre os serviços que oferece'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"              

              ></textarea>
            </div>
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
