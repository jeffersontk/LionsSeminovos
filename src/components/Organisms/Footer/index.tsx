import React from 'react'
import logo from '../../../assets/logo/logo-lions-seminovos.png'
import whatsApp from '../../../assets/WhatsApp-Atendimento.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className='bg-secondary w-full flex justify-center items-center'>
      <section className='max-w-[1280px] w-full p-8 flex flex-col justify-center items-center gap-4'>
        <div className='flex flex-col gap-4 justify-center items-center text-offWhite lg:max-w-96'>
          <h2 className='text-2xl'>Horário de atendimento</h2>
          <p className='text-center'>Segunda a sexta das 9:00 às 20:00, Sábado das 9:00 às
          18:00 e Domingo 10:00 às 18:00</p>
        </div>
        <div className='flex items-center justify-between w-full lg:max-w-96'>
          <Image 
            src={logo}
            alt="Logo Lions Seminovos"
            width={138}
            height={45}
            /> 
          <Image 
            src={whatsApp}
            alt="Atendimento por WhatsApp"
            width={102}
            height={39}
            /> 
        </div>
        <div className='w-full h-[1px] bg-offWhite' />
        <div className='flex gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f7f7f7" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM96,128a32,32,0,0,0,57.6,19.2,8,8,0,0,1,12.8,9.61,48,48,0,1,1,0-57.62,8,8,0,0,1-12.8,9.61A32,32,0,0,0,96,128Z"></path></svg>
          <p className='text-offWhite'>2024 por Dev Front-end | Jefferson Cabral</p>
        </div>
      </section>
    </footer>
  )
}
