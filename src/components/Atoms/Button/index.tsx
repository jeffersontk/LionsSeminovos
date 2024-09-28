import Link from 'next/link';
import React from 'react'

interface props {
  title: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  linkTo: string;
}

export function Button({title, iconLeft, iconRight, linkTo}:props) {
  return (
    <Link href={linkTo} className='flex items-center justify-center bg-primary text-offWhite text-lg px-8 py-2 rounded-full'>
      {iconLeft && <span className='mr-4'>{iconLeft}</span>}
      {title}
      {iconRight && <span className='ml-4'>{iconRight}</span>}
    </Link>
  )
}
