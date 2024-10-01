'use client'
import Card from '@/components/Molecules/Card';
import React, { useEffect, useState, Suspense } from 'react';
import { carInfo } from '@/@types/car';
import { useSearchParams } from 'next/navigation';

interface Props {
  list: carInfo[];
}

function CardListComponent({ list }: Props) {
  const [filteredCars, setFilteredCars] = useState<carInfo[]>(list);
  const [noResultsMessage, setNoResultsMessage] = useState<string>('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const manufacturer = searchParams.get('manufacturer');
    const model = searchParams.get('model');
    const year = searchParams.get('year');
    const search = searchParams.get('search');

    let filteredList = list;
    let message = '';

    if (manufacturer) {
      filteredList = filteredList.filter(car => car.manufacturer === manufacturer);
      if (filteredList.length === 0) {
        message = `Nenhum carro encontrado para a marca "${manufacturer}".`;
      }
    }

    if (model) {
      filteredList = filteredList.filter(car => car.model.includes(model));
      if (filteredList.length === 0) {
        message = `Nenhum carro encontrado para o modelo "${model}".`;
      }
    }

    if (year) {
      filteredList = filteredList.filter(car => car.year.toString() === year);
      if (filteredList.length === 0) {
        message = `Nenhum carro encontrado para o ano "${year}".`;
      }
    }

    if (search) {
      filteredList = filteredList.filter(car => 
        car.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredList.length === 0) {
        message = `Nenhum carro encontrado para a busca "${search}".`;
      }
    }

    if (filteredList.length === 0 && !message) {
      message = 'Nenhum carro encontrado com os filtros aplicados.';
    }

    setFilteredCars(filteredList);
    setNoResultsMessage(message);
  }, [searchParams, list]);

  function renderCardList() {
    return filteredCars.map(car => (
      <li key={car.id}>
        <Card carInfo={car} />
      </li>
    ));
  }

  return (
    <section className='max-w-[1280px] w-full flex flex-col gap-4 px-8 py-8 lg:px-0'>
      {filteredCars.length > 0 ? (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {renderCardList()}
        </ul>
      ) : (
        <p className='text-center text-red-500'>{noResultsMessage}</p>
      )}
    </section>
  );
}

export function CardList({ list }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardListComponent list={list} />
    </Suspense>
  );
}
