import { NavItem } from '@/components/Atoms/NavItem'
import { usePathname } from 'next/navigation';
import React from 'react'

interface props {
  isOpen: boolean
  toggleMenu: () => void;
}

export default function NavigationMobile({isOpen = false, toggleMenu}: props) {
  const pathname = usePathname()
  if(!isOpen) return null

  return (
    <div className='flex flex-col gap-4 bg-offWhite p-8 pt-[144px]'>
      <NavItem label="Ofertas" href="/" active={pathname === '/'} toggleMenu={toggleMenu} />
      <NavItem label="Nosso Estoque" href="/estoque" active={pathname === '/estoque'} toggleMenu={toggleMenu} />
    </div>
  )
}
