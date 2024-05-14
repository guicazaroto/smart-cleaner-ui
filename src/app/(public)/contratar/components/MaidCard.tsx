// components/MaidCard.js

import Image from 'next/image';
import React from 'react';

const MaidCard = ({ maid }: any) => {
  const { name, city } = maid;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image 
        className="w-full" 
        src={'https://picsum.photos/200/150'} 
        alt="Foto da Diarista"
        width={200}
        height={150}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {city} 
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contratar
        </button>
      </div>
    </div>
  );
};

export default MaidCard;
