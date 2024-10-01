'use client'
import React, { ChangeEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();


  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', event.target.value);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className='w-full max-w-96 bg-offWhite border border-[#A3A3A3] rounded-md flex items-center pl-4 pr-2 py-2'>
      <input
        type="search"
        className='w-full bg-offWhite outline-none text-[#A3A3A3]'
        value={query}
        onChange={handleSearch}
        placeholder='Encontre seu carro'
      />
      <span className='w-[1px] h-[24px] bg-[#A3A3A3] mx-2'/>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A3A3A3" viewBox="0 0 256 256">
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
    </div>
  );
}
