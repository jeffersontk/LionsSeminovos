import React from 'react';
import { NavItem } from '@/components/Atoms/NavItem';

export function Navigation() {
  return (
    <div className='hidden lg:block'>
      <nav
        className={`lg:flex lg:flex-row flex flex-col gap-4 items-center`}
      >
        <NavItem label="Ofertas" href="/" active />
        <NavItem label="Nosso Estoque" href="/estoque" />
      </nav>
    </div>
  );
}
