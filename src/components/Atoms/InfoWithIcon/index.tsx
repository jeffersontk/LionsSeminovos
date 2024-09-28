import React from 'react'

interface props {
  icon: React.ReactNode;
  title: string;
}

export function InfoWithIcon({icon, title}: props) {
  return (
    <div className='flex gap-2 items-center'>
      {icon} 
      <span className="text-textGray">{title}</span>
    </div>
  )
}
