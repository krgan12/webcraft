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
        {/* <div className="space-x-4"> */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="/" className='hover:underline cursor-pointer'>Home</Link>
            {/* <button onClick={() => scrollToSection('home')} className="hover:underline transition-colors cursor-pointer">Home</button> */}
            <button onClick={() => scrollToSection('services')} className="hover:underline transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('whyus')} className="hover:underline transition-colors cursor-pointer">Why Us?</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:underline transition-colors cursor-pointer">Portfolio</button>
            <button onClick={() => scrollToSection('customer')} className="hover:underline transition-colors cursor-pointer">Client Reviews</button>
            <button onClick={() => scrollToSection('faq')} className="hover:underline transition-colors cursor-pointer">FAQ</button>
            <Link href="/booking" className="hover:underline transition-colors cursor-pointer">Book a Free Call</Link>
        </div>
    </nav>
  )
}

