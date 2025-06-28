'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
// import About from "./About";
import { useRouter } from 'next/navigation'

export default function Page1() {
    const PortfolioSection = dynamic(() => import('../components/PortfolioSection'), {ssr: false});
    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const router = useRouter();
    return (
        <div className="p-10 bg-gray-100 min-h-screen">
           
            <div className="pl-[200px]"> 
                
                {/* Heading */}
                <br /><br /><br /><br />
                <div className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-left">
                    <div className="text-gray-900">Professional</div>
                    <div className="text-gray-900">Websites for</div>
                    <div className="text-gray-600">Growing Businesses</div>
                </div>
                
                
                <div className="mb-6"></div>
                
                
                <p className="text-[18px] text-gray-600 max-w-[600px] leading-relaxed">
                    We create custom websites tailored to your business needs.<br />
                    From design to deployment, we handle everything so you can focus on what you do best.
                </p>
                
             
                <button 
                    className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-black cursor-pointer transition" 
                    onClick={() => router.push('/booking')}
                >
                    Book a Free Consultation
                </button>
                &nbsp;&nbsp;&nbsp;
                 {/* <button 
                    className="mt-8 px-4 py-2 border-[#000000] border bg-white text-black rounded hover:border-red cursor-pointer transition" 
                    onClick={() => router.push('/portfolio')}
                > */}
                <button 
                    className="mt-8 px-4 py-2 border-[#000000] border bg-white text-black rounded hover:border-red cursor-pointer transition" 
                    onClick={() => scrollToSection('portfolio')}               
                >
                    View Our Work
                </button>

            </div>
            <div id="portfolio" className="mt-20">
                <PortfolioSection />
            </div>
        </div>
    );
}