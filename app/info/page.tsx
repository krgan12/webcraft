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
       <footer className="bg-[#151c26] border-t border-[#232b36] pt-12 pb-6 px-4 md:px-0">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
      {/* Logo & Description */}
      <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#e5eaf1] text-[#151c26] p-2 rounded-lg"><FaCode className="text-2xl" /></span>
              <span className="text-xl font-semibold">WebCraft</span>
            </div>
            <p className="text-[#bfc9d6] text-sm">Creating professional websites for businesses that want to make their mark online.</p>
      </div>
       {/* Services */}
       <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-[#bfc9d6] text-sm">
              <li>Web Design</li>
              <li>Development</li>
              <li>Maintenance</li>
              <li>Hosting</li>
            </ul>
          </div>
       {/* Company */}
       <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-[#bfc9d6] text-sm">
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
       </div>
       {/* Contact */}
       <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-[#bfc9d6] text-sm">
              <li className="flex items-center gap-2"><FaEnvelope /> hello@webcraft.com</li>
              <li className="flex items-center gap-2"><FaPhone /> (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[#bfc9d6] text-sm mt-10">© 2025 WebCraft. All rights reserved.</div>
      </footer>
    </div>
  );
}