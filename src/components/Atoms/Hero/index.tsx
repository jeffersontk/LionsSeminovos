'use client'
import React, { useState, useEffect } from 'react'
import heroDesktop from '@/assets/hero-desktop.png'
import heroMobile from '@/assets/hero-mobile.png'
import Image from 'next/image'

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Image 
      src={isMobile ? heroMobile : heroDesktop}
      alt="feirão"
      width={isMobile ? 375 : 1920}
      height={isMobile ? 667 : 600}
      layout="responsive"
      priority
    />
  )
}
