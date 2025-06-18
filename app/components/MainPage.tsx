'use client'

import Page1 from './Page1'
import About from './About'
import dynamic from 'next/dynamic'

// Dynamically import the page components to avoid SSR issues
const Services = dynamic(() => import('../services/page'))
const Portfolio = dynamic(() => import('../portfolio/page'))
const FAQ = dynamic(() => import('../FAQ/page'))
const Info = dynamic(() => import('../info/page'))

export default function MainPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section id="home" className="min-h-screen">
                <Page1 />
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen">
                <About />
            </section>

            {/* Services Section */}
            <section id="services" className="min-h-screen">
                <Services />
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="min-h-screen">
                <Portfolio />
            </section>

            {/* FAQ Section */}
            <section id="faq" className="min-h-screen">
                <FAQ />
            </section>

            {/* Info Section */}
            <section id="info" className="min-h-screen">
                <Info />
            </section>
        </div>
    )
} 