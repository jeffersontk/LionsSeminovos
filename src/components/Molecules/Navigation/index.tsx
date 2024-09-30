import React from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/Atoms/NavItem';

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className='hidden lg:block'>
      <nav className='lg:flex lg:flex-row flex flex-col gap-4 items-center'>
        <NavItem label="Ofertas" href="/" active={pathname === '/'} />
        <NavItem label="Nosso Estoque" href="/estoque" active={pathname === '/estoque'} />
      </nav>
    </div>
  );
}
