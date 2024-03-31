'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'




export default function RootLayout({ children }) {
  // AOS Init
  useEffect(() => {
    AOS.init({
      offsets: 100,
      durations: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
