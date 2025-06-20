import React from 'react'

export default function Whyus() {
  return (
    <div className='bg-gray-100 min-h-screen'>
    <div className="p-10 max-w-[1280px] mx-auto flex flex-col md:flex-row ">

      <div className="why-choose-webcraft">
        <div className="p-10">
          <div className="font-bold text-gray-900 text-4xl">Why Choose WebCraft?</div>

          <div className="mb-6"></div>

          <p className="max-w-[500px] text-gray-700"> 
            We understand that every business is unique. That's why we take
            the time to understand your specific needs and create a website
            that truly represents your brand.
          </p>

          <div className="mb-4"></div>

          <ul className="list-disc pl-[30px] py-2 text-gray-700">
            <li><p>Personalized approach to every project</p></li>
            <li><p>Fast turnaround times</p></li>
            <li><p>Transparent pricing with no hidden fees</p></li>
          </ul>
        </div>
      </div>

      

      <div className="md:w-1/2 md:mt-16">
        
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          

          {/* Top Left */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow">
            <h3 className="font-bold text-3xl text-gray-800 mb-1">50+</h3>
            <p className="text-sm text-gray-700">Websites Built</p>
          </div>

          {/* Top Right */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow">
            <h3 className="font-bold text-3xl text-gray-800 mb-1">100%</h3>
            <p className="text-sm text-gray-700">Client Satisfaction</p>
          </div>

          {/* Bottom Left */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow">
            <h3 className="font-bold text-3xl text-gray-800 mb-1">24/7</h3>
            <p className="text-sm text-gray-700m,">Support</p>
          </div>

          {/* Bottom Right */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow">
            <h3 className="font-bold text-3xl text-gray-800 mb-1">3+</h3>
            <p className="text-sm text-gray-700">Years Experience</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
