'use client'

import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between relative">
      <div 
        onClick={() => scrollToSection('home')} 
        className='flex items-center space-x-2 ml-20 cursor-pointer'
      >
        <div className='bg-[#1c2331] rounded-lg p-2'>
          <FaCode className='text-white text-xl'/>
        </div>
        <Link href="/"><div className='text-xl font-bold'>WebCraft</div></Link>
      </div>
      {/* Centered navigation links */}
      <div className="flex space-x-4 ml-100">
        <Link href="/" className='hover:underline cursor-pointer'>Home</Link>
        <button onClick={() => scrollToSection('services')} className="hover:underline transition-colors cursor-pointer">Services</button>
        <button onClick={() => scrollToSection('whyus')} className="hover:underline transition-colors cursor-pointer">Why Us?</button>
        <button onClick={() => scrollToSection('portfolio')} className="hover:underline transition-colors cursor-pointer">Portfolio</button>
        <button onClick={() => scrollToSection('customer')} className="hover:underline transition-colors cursor-pointer">Client Reviews</button>
        <button onClick={() => scrollToSection('faq')} className="hover:underline transition-colors cursor-pointer">FAQ</button>
      </div>
      {/* Right-aligned "Book Free Call" button */}
      <div className="ml-auto mr-1">
        <Link
          href="/booking"
          className="bg-[#111827] text-white font-semibold px-8 py-3 rounded-xl cursor-pointer transition-transform duration-150 hover:scale-105"
          style={{ boxShadow: 'none', border: 'none', textDecoration: 'none' }}
        >
          Book Free Call
        </Link>
      </div>
    </nav>
  )
}

