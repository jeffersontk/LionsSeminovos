import { NavItem } from '@/components/Atoms/NavItem'
import React from 'react'

interface props {
  isOpen: boolean
}

export default function NavigationMobile({isOpen = false}: props) {
  if(!isOpen) return null

  return (
    <div className='flex flex-col gap-4 bg-offWhite p-8'>
       <NavItem label="Ofertas" href="/" active />
       <NavItem label="Nosso Estoque" href="/estoque" />
    </div>
  )
}
