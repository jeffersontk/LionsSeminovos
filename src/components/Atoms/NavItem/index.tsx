import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

interface props {
  label: string;
  href: string;
  active?: boolean;
  toggleMenu?: () => void;
}

export function NavItem({
  label,
  href,
  active = false,
  toggleMenu
}: props) {
  return (
      <Link 
        href={href}
        onClick={toggleMenu}
      >
        <span className={clsx('text-lg lg:text-xl text-secondary lg:text-offWhite px-2', {
          'border-b-2 border-primary lg:border-offWhite pb-2': active,
        })}>{label}</span>
        
      </Link>
  )
}
