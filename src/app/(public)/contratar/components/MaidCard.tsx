// components/MaidCard.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MaidCard = ({ maid }: any) => {
  const { Cidade, Uf, Descricao, UserInfos } = maid;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg justify-self-center w-96 md:w-auto md:justify-self-auto">
      <Image 
        className="w-full" 
        src={'https://picsum.photos/200/150'} 
        alt="Foto da Diarista"
        width={200}
        height={150}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{UserInfos.Name}</div>
        <p className="text-gray-700 text-base">
          {Cidade} - {Uf}
        </p>
        <p className='mt-3'>
          {Descricao.substring(0, 100)}...
        </p>
      </div>
      <div className="px-6 py-4">
          <Link href={`/contratar/${maid.ID}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contratar
          </Link>
      </div>
    </div>
  );
};

export default MaidCard;
