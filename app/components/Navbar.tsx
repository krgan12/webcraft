'use client'

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <Link href="/"><div className="text-xl font-bold">WebCraft</div></Link>
        <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            
            <Link  href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/FAQ" className="hover:underline">FAQ</Link>
            <Link href="/booking" className="hover:underline">Book a Free Call</Link>
        </div>
    </nav>
  )
}

