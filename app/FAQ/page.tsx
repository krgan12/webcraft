import React from 'react'

export default function FAQ() {
  return (
    <div className='min-h-screen p-10'>
      <h2 className="text-4xl font-bold mb-10 text-center">
        FAQ
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">How long does it take to build a website?</h3>
          <p className="text-gray-600">The timeline varies depending on the complexity of your project, but typically ranges from 2-8 weeks.</p>
        </div>
         <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">What is your pricing structure?</h3>
          <p className="text-gray-600">We offer custom pricing based on your specific needs. Contact us for a detailed quote.</p>
         </div>
         <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">Do you provide ongoing support?</h3>
          <p className="text-gray-600">Yes, we offer various maintenance and support packages to keep your website running smoothly.</p>
         </div>
         <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">Can you help with website updates?</h3>
          <p className="text-gray-600">Absolutely! We can help you make changes and updates to your website at any time.</p>
         </div>
         { /* Placeholders */}
         <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">-Placeholder-</h3>
          <p className="text-gray-600">-Placeholder text-</p>
         </div>
         <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">-Placeholder-</h3>
          <p className="text-gray-600">-Placeholder text-</p>
         </div>
         <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">-Placeholder-</h3>
          <p className="text-gray-600">-Placeholder text-</p>
         </div>
      </div>
    </div>
  )
}