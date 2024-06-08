// components/SearchBanner.js
'use client'

import React from 'react';
import searchCities  from '@/helpers/searchCities'

const SearchBanner = () => {
  const [search, setSearch] = React.useState<string>('')
  const [searchResult, setSearchResult] = React.useState<any>([])

  function handleAutocomplete(e: any) {
    const search = e.target.value

    if(search.length === 0) return setSearchResult([])
    if (search.length < 3) return

    setSearch(search)
    setTimeout(() => {
      setSearchResult(searchCities(search))
    }, 300)
  }

  function handleSearch(e: any) {
    console.log('searching for..:', search)
  }
  
  return (
    <section className="bg-blue-500 py-20 text-white text-center">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Busque profissionais na sua localidade</h1>
      <div className="max-w-md mx-auto flex">
        <input
          onInput={handleAutocomplete}
          type="text"
          list='cities-list'
          placeholder="Buscar por cidade..."
          className="w-full py-3 px-4 rounded-l-md bg-white text-gray-800 focus:outline-none"
        />
          <datalist id="cities-list" >
            {searchResult.length && searchResult?.map((city: any, index: number) => (
              <option value={city.item} key={city.item + index}>{city.item}</option>
            ))}
          </datalist>

        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-r-md focus:outline-none"
        >
          Buscar
        </button>
      </div>
    </div>
  </section>
  );
};

export default SearchBanner;
