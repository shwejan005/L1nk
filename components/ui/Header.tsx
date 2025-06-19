import { Belanosima } from 'next/font/google'
import React from 'react'

const brandFont = Belanosima({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-brand",
})

function Header() {
  return (
    <div className={`${brandFont.className} bg-black text-white text-3xl flex items-center justify-center p-4`}>L1NK</div>
  )
}

export default Header