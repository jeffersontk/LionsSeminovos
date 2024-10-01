'use client'
import SearchBar from '@/components/Atoms/SearchBar'
import { Select } from '@/components/Atoms/Select'
import { carBrands, carModels, carYears } from '@/data/mock/options'
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export function Filter() {
  const searchParams = useSearchParams();
 /*  const router = useRouter();
  const pathname = usePathname(); */
  const selectedBrand = searchParams.get('manufacturer') || '';
  const [selectVisibility, setSelectVisibility] = useState(false)

 /*  const clearFilters = () => {
    router.push(pathname);
  }; */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSelectVisibility(true);
      } else {
        setSelectVisibility(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectVisibility = () => {
    setSelectVisibility(!selectVisibility);
  }

  return (
    <section className="bg-secondary py-8 px-8 lg:px-0 w-full flex items-center justify-center">
      <div className="max-w-[1280px] w-full flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-offWhite text-2xl lg:text-3xl font-bold text-center">ENCONTRE O SEMINOVO IDEAL</h1>
          <h3 className="text-offWhite text-base lg:text-xl lg:font-bold text-center">AS MELHORES TAXAS ESTÃO AQUI!</h3>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 lg:gap-0 lg:grid-flow-row-dense lg:grid-cols-3">
          <div className='flex gap-4'>
            <SearchBar />
            <button 
              onClick={handleSelectVisibility}
              className='flex lg:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f7f7f7" viewBox="0 0 256 256"><path d="M200,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,136Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path></svg>
            </button>
          </div>
          <div className={clsx('flex gap-4 col-span-2', {
            'flex flex-col lg:flex-row w-full': selectVisibility,
            'hidden':!selectVisibility,
          })}>
            <Select 
              name='manufacturer'
              options={carBrands}
              placeholder='Marca'
            />
            <Select 
              name='model'
              options={selectedBrand ? carModels[selectedBrand] : []}
              placeholder='Modelo'
              disabled={!selectedBrand}
            />
            <Select 
              name='year'
              options={carYears}
              placeholder='Ano'
            />
          </div>
        </div>
       {/*  <button
          onClick={clearFilters}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Limpar Filtros
        </button> */}
      </div>
    </section>
  );
}