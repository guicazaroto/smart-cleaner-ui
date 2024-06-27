// pages/maids.js

import React from 'react';
import MaidCard from './components/MaidCard';
import SearchBanner from './components/SearchBanner';
import { getUsers } from './services/getUsers';



export default async function MaidsPage () {
  const maids = await getUsers()
  console.log(maids)
  return (
    <>
    <SearchBanner />
    <div className="min-h-screen container mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {maids?.data?.reverse().map((maid: any) => (
          <MaidCard key={maid.id} maid={maid} />
        ))}
      </div>
    </div>
    </>
  );
};

