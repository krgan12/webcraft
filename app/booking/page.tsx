'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Booking() {
  const size = 7;
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:EMAIL ADDRESS?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Erle, my name is ${formData.name}. ${formData.message} Feel free to reach me back at: ${formData.email}`
    )}`;
    reset();
  };

  return (
    <div className={`h-screen min-w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center transition-all duration-1000 ease-out ${
      isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
      <h3 className={`absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl transition-all duration-700 delay-200 ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}>
        Let's Talk
      </h3>

      <div className={`flex flex-col space-y-10 w-full max-w-2xl transition-all duration-800 delay-300 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <h4 className='text-4xl font-semibold text-center'>
          We have got just what you need to{' '}
          <span className='decoration-[#e0347f]/50 underline'>stay in touch!</span>
        </h4>

        <div className='space-y-6'>
          <div className='flex items-center space-x-5 justify-center'>
            <span className='text-[#e0347f] text-2xl animate-pulse'>📞</span>
            <p className='text-2xl'>+971 (###)-###-####</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <span className='text-[#e0347f] text-2xl animate-pulse'>✉️</span>
            <p className='text-2xl'>companye-mail@email.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-4 w-full'
        >
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'>
            <input
              {...register('name', { required: true })}
              placeholder='Name'
              className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition-all duration-300 hover:shadow-md'
              type='text'
            />
            <input
              {...register('email', { required: true })}
              placeholder='E-mail'
              className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition-all duration-300 hover:shadow-md'
              type='email'
            />
          </div>

          <input
            {...register('subject', { required: true })}
            placeholder='Subject'
            className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition-all duration-300 hover:shadow-md'
            type='text'
          />

          <textarea
            {...register('message', { required: true })}
            placeholder='Message'
            className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition-all duration-300 hover:shadow-md resize-none'
            rows={size}
          />

          <button
            type='submit'
            className='btn-transition bg-gradient-to-r from-[#0500B8]/80 to-[#0500B8] cursor-pointer hover:from-[#0500B8] hover:to-[#1a1a8a] py-4 px-8 rounded-md text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0500B8]/25 active:scale-95 border border-transparent hover:border-white/20'
          >
            <span className="relative z-10">Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
