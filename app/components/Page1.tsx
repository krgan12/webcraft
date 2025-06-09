'use client'
import Link from "next/link";
import About from "./About";
import { useRouter } from 'next/navigation'

export default function Page1() {
    const router = useRouter();
    return (
        <div className="p-10">
            {/* Container with consistent left padding */}
            <div className="pl-[200px]"> {/* Adjust this single value to control all alignment */}
                
                {/* Heading */}
                <div className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-left">
                    <div className="text-gray-900">Professional</div>
                    <div className="text-gray-900">Websites for</div>
                    <div className="text-gray-600">Growing Businesses</div>
                </div>
                
                {/* Spacing - adjust mb value as needed */}
                <div className="mb-6"></div>
                
                {/* Paragraph - automatically aligned because same container */}
                <p className="text-[18px] text-gray-600 max-w-[600px] leading-relaxed">
                    We create custom websites tailored to your business needs.<br />
                    From design to deployment, we handle everything so you can focus on what you do best.
                </p>
                
                {/* Button - also automatically aligned */}
                <button 
                    className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" 
                    onClick={() => router.push('/about')}
                >
                    Go to Page 2
                </button>
            </div>
        </div>
    );
}