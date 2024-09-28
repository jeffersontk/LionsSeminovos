'use client'
import React, { useState } from 'react';

export function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Selecionar');
  const options = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:string) => {
    setSelectedOption(option);
    setIsOpen(false); // Fechar o dropdown após seleção
  };

  return (
    <div className='relative w-full max-w-96'>
      <div
        className='border border-[#A3A3A3] rounded-md flex items-center justify-between px-4 py-2 cursor-pointer text-[#A3A3A3]'
        onClick={toggleOpen}
      >
        {selectedOption}
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

      {isOpen && (
        <ul className='absolute z-10 w-full border border-[#A3A3A3] rounded-md bg-white mt-1 max-h-60 overflow-auto'>
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
