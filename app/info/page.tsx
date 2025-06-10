import React from 'react';
import { FaRegCalendarAlt, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#151c26] text-[#e5eaf1]">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center flex-1 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">Ready to Get Started?</h1>
      
      <p className="text-lg md:text-xl text-[#bfc9d6] text-center mb-2 max-w-2xl">Let's discuss your project and create a website that helps your business grow.<br />Book a free consultation today.</p>
        <div className="flex gap-6 mt-8">
          <button className="flex items-center gap-5 bg-white text-[#151c26] font-medium px-6 py-3 rounded-lg shadow hover:bg-[#e5eaf1] transition">
            <FaRegCalendarAlt className="text-xl" />
            Book Free Call
          </button>
          <button className="flex items-center gap-2 border border-[#e5eaf1] text-[#e5eaf1] font-medium px-6 py-3 rounded-lg hover:bg-[#232b36] transition">
            <FaEnvelope className="text-xl" />
            Send Message
          </button>
        </div>
      </div>
      {/* Footer Section */}

      {/* Logo & Description */}

       {/* Services */}

       {/* Company */}

       {/* Contact */}

    </div>
  );
}