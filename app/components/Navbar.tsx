'use client'

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <div className="text-xl font-bold">My App</div>
        <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/page2" className="hover:underline">Page 2</Link>
        </div>
    </nav>
  )
}

