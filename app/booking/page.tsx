'use client';

import React from 'react';
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

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:keagan123@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Erle, my name is ${formData.name}. ${formData.message} Feel free to reach me back at: ${formData.email}`
    )}`;
    reset();
  };

  return (
    <div className='h-screen min-w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Let's Talk
      </h3>

      <div className='flex flex-col space-y-10 w-full max-w-2xl'>
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
              className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition'
              type='text'
            />
            <input
              {...register('email', { required: true })}
              placeholder='E-mail'
              className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition'
              type='email'
            />
          </div>

          <input
            {...register('subject', { required: true })}
            placeholder='Subject'
            className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition'
            type='text'
          />

          <textarea
            {...register('message', { required: true })}
            placeholder='Message'
            className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e0347f] focus:border-transparent transition resize-none'
            rows={size}
          />

          <button
            type='submit'
            className='bg-[#0500B8]/80 cursor-pointer hover:bg-[#0500B8] py-4 px-8 rounded-md text-white font-semibold text-lg transition shadow-md'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
