// components/SearchBanner.js
'use client'

import React, { useState } from 'react';

const SearchBanner = () => {
  
  return (
    <section className="bg-blue-500 py-20 text-white text-center">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Busque profissionais na sua localidade</h1>
      <div className="max-w-md mx-auto flex">
        <input
          type="text"
          placeholder="Buscar por cidade..."
          className="w-full py-3 px-4 rounded-l-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Buscar
        </button>
      </div>
    </div>
  </section>
  );
};

export default SearchBanner;
