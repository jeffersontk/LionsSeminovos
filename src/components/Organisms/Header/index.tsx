'use client'
import React, { useState } from 'react'
import logo from '../../../assets/logo/logo-lions-seminovos.png'
import Image from 'next/image'
import { Navigation } from '@/components/Molecules/Navigation'
import NavigationMobile from '@/components/Molecules/Navigation/mobile'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='bg-primary w-full py-8 px-8 flex items-center justify-center fixed top-0 left-0 z-50'>
        <div className='max-w-[1280px] w-full flex items-center justify-between'>
          <Image 
              src={logo}
              alt="Logo Lions Seminovos"
              width={138}
              height={45}
            /> 
          <div>
            <button
              className='lg:hidden block text-white'
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              
              )}
            </button>
            <Navigation />
          </div>
        </div>
      </header>
      <NavigationMobile isOpen={isOpen} toggleMenu={toggleMenu}/>
      {
        !isOpen &&
      <div className='pt-[112px] lg:pt-[109px]'></div> 
      }
    </>
  )
}
