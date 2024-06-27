'use client'
import React, { useState } from 'react';
import searchCities from '@/helpers/searchCities';
import { useRouter } from 'next/navigation';

const SearchBanner = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const router = useRouter();

  // Function to handle autocomplete
  const handleAutocomplete = (e: any) => {
    const searchValue = e.target.value;

    setSearch(searchValue);

    if (searchValue.length < 3) {
      setSearchResult([]);
      return;
    }

    setTimeout(() => {
      const results = searchCities(searchValue) as any;
      setSearchResult(results);
    }, 300);
  };

  const handleSearch = (e:any) => {
    e.preventDefault();

    if(search) {
      router.push(`/contratar/search/${search}`);
    }
  };

  return (
    <section className="bg-blue-500 py-20 text-white text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Busque profissionais na sua localidade</h1>
        <form onSubmit={handleSearch}>
          <div className="max-w-md mx-auto flex relative">
            <input
              type="text"
              onChange={handleAutocomplete}
              value={search}
              placeholder="Buscar por cidade..."
              className="w-full py-3 px-4 rounded-l-md bg-white text-gray-800 focus:outline-none"
            />
            {searchResult.length > 0 && (
              <div className="text-black absolute bg-white border border-gray-300 w-full mt-14 rounded-b-md shadow-lg z-10">
                {searchResult.map((city: any, index) => (
                  <button
                    key={index}
                    className="block w-full py-2 px-4 text-left hover:bg-gray-200 focus:outline-none"
                    onClick={() => {
                      setSearch(city.item);
                      setSearchResult([]);
                    }}
                  >
                    {city.item}
                  </button>
                ))}
              </div>
            )}
            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-r-md focus:outline-none hover:bg-amber-500 transition duration-200"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBanner;
