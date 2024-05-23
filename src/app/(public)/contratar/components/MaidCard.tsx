// components/MaidCard.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MaidCard = ({ maid }: any) => {
  const { name, cidade, uf, descricao, imagem_url } = maid;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg justify-self-center w-96 md:w-auto md:justify-self-auto">
      <div 
        className="relative w-full h-60 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imagem_url})` }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {cidade} - {uf}
        </p>
        <p className='mt-3'>
          {descricao.substring(0, 100)}...
        </p>
      </div>
      <div className="px-6 py-4">
          <Link href={`/contratar/${maid.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contratar
          </Link>
      </div>
    </div>
  );
};

export default MaidCard;
