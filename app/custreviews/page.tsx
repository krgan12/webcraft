import React from 'react'

export default function page() {
  return (
    <div className='bg-[#fafbfc] min-h-screen'>
    <div className = "pt-10 px-2 mt-10 max-w-screen-2xl mx-auto">
      <div className = "font-bold text-4xl text-gray-600 text-center">What Our Clients Say</div>

        <div className = "mb-10"></div>

        <div className = "flex  md:flex-row">

          <div className = "grid grid-cols-3 grid-rows-1 gap-4">
            
            {/* Testimony 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col shadow">
              <div className="flex items-center mb-4 text-left">
                <img src="erle.png" alt="t1" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                <div>
                  <p className="font-semibold text-lg text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Restaurant Owner</p>
                </div>
              </div>

                <div className="flex-grow mb-4">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    "WebCraft transformed our online presence completely. Our new website has
                    increased our bookings by 40%!"
                  </p>
                </div>


            </div>

            {/* Testimony 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col shadow">
              <div className="flex items-center mb-4 text-left">
                <img src="erle.png" alt="t2" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                <div>
                  <p className="font-semibold text-lg text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-600">Tech Consultant</p>
                </div>
              </div>

                <div className="flex-grow mb-4">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    "The team understood our vision perfectly and created a beautiful, 
                    functional website that our customers love."
                  </p>
                </div>


            </div>

            {/* Testimony 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col shadow">
              <div className="flex items-center mb-4 text-left">
                <img src="erle.png" alt="t3" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                <div>
                  <p className="font-semibold text-lg text-gray-900">Emily Davis</p>
                  <p className="text-sm text-gray-600">Boutique Owner</p>
                </div>
              </div>

                <div className="flex-grow mb-4">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    "The team understood our vision perfectly
                    and created a beautiful, functional website that our customers love."
                  </p>
                </div>
                

            </div>

          </div>

        </div>

    </div>
    </div>
  )
}

