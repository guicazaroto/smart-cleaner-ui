// pages/maids.js

import React from 'react';
import MaidCard from './components/MaidCard';
import SearchBanner from './components/SearchBanner';

const maids = [
  {
    id: 1,
    photo: 'maid1.jpg',
    name: 'Maria Silva',
    city: 'São Paulo',
    distance: 5
  },
  {
    id: 2,
    photo: 'maid2.jpg',
    name: 'Ana Souza',
    city: 'Rio de Janeiro',
    distance: 10
  },
  {
    id: 3,
    photo: 'maid3.jpg',
    name: 'Carla Santos',
    city: 'Belo Horizonte',
    distance: 15
  },
  {
    id: 4,
    photo: 'maid4.jpg',
    name: 'Juliana Oliveira',
    city: 'Curitiba',
    distance: 20
  },
  {
    id: 5,
    photo: 'maid5.jpg',
    name: 'Aline Pereira',
    city: 'Salvador',
    distance: 25
  },
  {
    id: 6,
    photo: 'maid6.jpg',
    name: 'Camila Almeida',
    city: 'Recife',
    distance: 30
  },
  {
    id: 7,
    photo: 'maid7.jpg',
    name: 'Fernanda Lima',
    city: 'Porto Alegre',
    distance: 35
  },
  {
    id: 8,
    photo: 'maid8.jpg',
    name: 'Patrícia Costa',
    city: 'Fortaleza',
    distance: 40
  }
];

const MaidsPage = () => {
  return (
    <>
    <SearchBanner />
    <div className="min-h-screen container mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {maids.map(maid => (
          <MaidCard key={maid.id} maid={maid} />
        ))}
      </div>
    </div>
    </>
  );
};

export default MaidsPage;
