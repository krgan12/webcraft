'use client'

import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between relative">
      <Link href="/" className='flex items-center space-x-2 ml-20'>
        <div className='bg-[#1c2331] rounded-lg p-2'>
          <FaCode className='text-white text-xl'/>
        </div>
        <div className='text-xl font-bold'>WebCraft</div>
      </Link>
        {/* <div className="space-x-4"> */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link  href="/whyus" className="hover:underline">Why Us?</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/custreviews" className="hover:underline">Client Reviews</Link>
            <Link href="/FAQ" className="hover:underline">FAQ</Link>
            <Link href="/booking" className="hover:underline">Book a Free Call</Link>
        </div>
    </nav>
  )
}

