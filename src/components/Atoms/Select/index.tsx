'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface Props {
  options: (string | number)[];
  placeholder?: string;
  disabled?: boolean;
  name: string;
}

export function Select({ name, options, placeholder, disabled }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | number>('Selecionar');
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const toggleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: string | number) => {
    setSelectedOption(option);
    setIsOpen(false);
    const params = new URLSearchParams(searchParams.toString());

    if (option === 'Selecionar') {
      params.delete(name);
    } else {
      params.set(name, option.toString());
    }

    if (name === 'manufacturer') {
      params.delete('model');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={`relative w-full max-w-96 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div
        className='border border-[#A3A3A3] bg-offWhite rounded-md flex items-center justify-between px-4 py-2 cursor-pointer text-[#A3A3A3]'
        onClick={toggleOpen}
      >
        {selectedOption !== 'Selecionar' ? selectedOption : placeholder}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
        </svg>
      </div>

      {isOpen && !disabled && (
        <ul className='absolute z-10 w-full border border-[#A3A3A3] rounded-md bg-white mt-1 max-h-60 overflow-auto'>
          <li
            className='px-4 py-2 text-[#A3A3A3] cursor-pointer hover:bg-gray-100'
            onClick={() => handleOptionClick('Selecionar')}
          >
            Selecionar
          </li>
          {options.map((option, index) => (
            <li
              key={index}
              className='px-4 py-2 text-[#A3A3A3] cursor-pointer hover:bg-gray-100'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
