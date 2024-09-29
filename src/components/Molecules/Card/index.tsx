import { Button } from '@/components/Atoms/Button'
import { InfoWithIcon } from '@/components/Atoms/InfoWithIcon'
import { Stamp } from '@/components/Atoms/Stamp'
import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div className='w-full rounded-2xl'>
      <div className='relative'>
        <div className='absolute left-8'>
          <Stamp />
        </div>
        <Image 
          src="https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/53187-IMG_3127_17_11zon.jpg?v=3"
          alt=""
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={350}
          height={343}
          className='rounded-t-2xl object-contain'
        />
      </div>
      <div className='bg-offWhite p-4 flex flex-col gap-4 rounded-b-2xl'>
        <h2>Hyundai HB20 Comfort Style</h2>
        <h3>HB20 Comfort Style 1.6</h3>
        <div className='flex items-center justify-between'>
          <InfoWithIcon 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#616e84" viewBox="0 0 256 256"><path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"></path></svg>
            } 
            title='Flex'
          />
          <InfoWithIcon 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#616e84" viewBox="0 0 256 256"><path d="M207.06,72.67A111.24,111.24,0,0,0,128,40h-.4C66.07,40.21,16,91,16,153.13V176a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V152A111.25,111.25,0,0,0,207.06,72.67ZM224,176H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,176H32V153.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V80a8,8,0,0,0,16,0V56.33A96.14,96.14,0,0,1,221,128H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path></svg>
            }
            title="54.992 KM"
          />
          <InfoWithIcon 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#616e84" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
            }
            title="2022/2023"
          />
        </div>
        <Button 
          title='Saiba mais'
          iconRight={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          }
          linkTo=''
        />
      </div>
    </div>
  )
}
