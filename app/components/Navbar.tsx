'use client'

import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { useNavigation } from './NavigationContext'

export default function Navbar() {
  const { startTransition } = useNavigation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition('/booking');
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
        <Link href="/" className='hover:underline cursor-pointer'>Home</Link>&nbsp;&nbsp;
        <button onClick={() => scrollToSection('services')} className="hover:underline transition-colors cursor-pointer">Services</button>&nbsp;&nbsp;
        <button onClick={() => scrollToSection('whyus')} className="hover:underline transition-colors cursor-pointer">Why Us?</button>&nbsp;&nbsp;
        <button onClick={() => scrollToSection('portfolio')} className="hover:underline transition-colors cursor-pointer">Portfolio</button>&nbsp;&nbsp;
        <button onClick={() => scrollToSection('customer')} className="hover:underline transition-colors cursor-pointer">Client Reviews</button>&nbsp;&nbsp;
        <button onClick={() => scrollToSection('faq')} className="hover:underline transition-colors cursor-pointer">FAQ</button>
      </div>
      {/* Right-aligned "Book Free Call" button */}
      <div className="ml-auto mr-1">
        <button
          onClick={handleBookCallClick}
          className="btn-transition bg-gradient-to-r from-[#111827] to-[#1f2937] text-white font-semibold px-8 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0500B8]/25 active:scale-95 border border-transparent hover:border-white/20"
          style={{ boxShadow: 'none', textDecoration: 'none' }}
        >
          <span className="relative z-10">Book Free Call</span>
        </button>
      </div>
    </nav>
  )
}

