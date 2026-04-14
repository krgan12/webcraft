'use client'

import React, { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline varies depending on the complexity of your project, but typically ranges from 2-8 weeks.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer custom pricing based on your specific needs. Contact us for a detailed quote.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various maintenance and support packages to keep your website running smoothly.'
    },
    {
      question: 'Can you help with website updates?',
      answer: 'Absolutely! We can help you make changes and updates to your website at any time.'
    },
    // Placeholders
    {
      question: '-Placeholder-',
      answer: '-Placeholder text-'
    },
    {
      question: '-Placeholder-',
      answer: '-Placeholder text-'
    },
    {
      question: '-Placeholder-',
      answer: '-Placeholder text-'
    },

  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className='min-h-screen p-10 bg-[#f3f4f6]'>
      <br /><br />
      <h2 className="text-4xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-6 cursor-pointer" onClick={() => handleToggle(idx)}>
            <div className="flex items-center justify-between">
              <h3 className={`text-xl font-semibold mb-0 ${openIndex === idx ? 'underline' : ''}`}>{faq.question}</h3>
              <span className="ml-4 text-2xl select-none">{openIndex === idx ? '\u25B2' : '\u25BC'}</span>
            </div>
            {openIndex === idx && (
              <p className="text-gray-600 mt-4 animate-fade-in">{faq.answer}</p>
            )}
          </div>
        ))}
        <br /><br /><br />
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}