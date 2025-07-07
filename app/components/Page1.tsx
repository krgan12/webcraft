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
                    className="btn-transition bg-gradient-to-r from-[#111827] to-[#1f2937] text-white px-4 py-2 rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0500B8]/25 active:scale-95 border border-transparent hover:border-white/20" 
                    style={{ boxShadow: 'none', textDecoration: 'none' }}
                    onClick={() => router.push('/booking')}
                >
                    <span className="relative z-10">Book a Free Consultation</span>
                </button>
                &nbsp;&nbsp;&nbsp;
                 {/* <button 
                    className="mt-8 px-4 py-2 border-[#000000] border bg-white text-black rounded hover:border-red cursor-pointer transition" 
                    onClick={() => router.push('/portfolio')}
                > */}
                <button 
                    className="hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300
 mt-8 px-4 py-2 border-[#000000] border bg-white text-black rounded hover:bg-amber-300 cursor-pointer transition" 
                    onClick={() => scrollToSection('portfolio')}               
                >
                    View Our Work
                </button>
                {/* <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Button Text</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a> */}

            </div>
            <div id="portfolio" className="mt-20">
                <PortfolioSection />
            </div>
        </div>
    );
}