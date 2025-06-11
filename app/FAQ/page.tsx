import React from 'react'

export default function FAQ() {
  return (
    <div className='min-h-screen p-10'>
      <h2 className="text-4xl font-bold mb-8">
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
         
    </div>
  )
}