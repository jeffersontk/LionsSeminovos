import Card from '@/components/Molecules/Card'
import React from 'react'

export function CardList() {
  return (
    <section className='max-w-[1280px] w-full flex flex-col gap-4  p-8'>
      <h2 className='text-2xl font-medium'>
        Carros seminovos em ofertas     
      </h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  )
}
