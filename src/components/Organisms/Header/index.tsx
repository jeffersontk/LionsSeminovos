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
    <div className='w-full'>
      <header className='bg-primary w-full py-8 px-8 flex items-center justify-center'>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" viewBox="0 0 256 256"><path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path></svg>
              )}
            </button>
            <Navigation />
          </div>
        </div>
      </header>
      <NavigationMobile isOpen={isOpen} toggleMenu={toggleMenu}/>
    </div>
  )
}
