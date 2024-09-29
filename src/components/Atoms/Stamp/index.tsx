import Image from 'next/image'
import React from 'react'
import logo from '../../../assets/logo/logo-lions-seminovos.png'

export function Stamp() {
  return (
    <div className='bg-primary p-2 rounded-b-2xl w-20'>
      <Image 
        src={logo}
        alt="Logo Lions Seminovos"
        width={65}
        height={26}
      />
    </div>
  )
}
