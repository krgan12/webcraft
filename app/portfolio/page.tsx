'use client'

import React from 'react'

// List of Completed Projects

const projects = [
  {
    type: 'ChatGPT Clone',
    image: 'chatgpt.png',
    description: 'ChatGPT clone site that behaves and responds like the original.',
    link: 'https://chatgpt-clone-coral-chi.vercel.app/',
  },
  {
    type: 'Sheridan College Bank App',
    image: 'bank.png',
    description: 'Enterprise application for Sheridan banking. Focused primarily on back-end.',
    link: 'https://bankofsheridan1.azurewebsites.net/',
  },
  {
    type: 'Corporate Website',
    image: 'corporate.jpg',
    description: 'Professional corporate website with client portal',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center justify-center py-12 px-4 md:px-8">
      { /* Page Title */}
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight text-center">Our Recent Work</h1>
      { /* Page Decription */}
      <p className="text-lg md:text-xl text-gray-500 mb-12 text-center max-w-2xl">Take a look at some of the websites we've created for our clients</p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        { /* Map through each list item ID to display on the page  */}
        { /* Point of reference: ChatGPT Clone */}
        {projects.map((project, id) => (
          <div
            key={id}
            className="group relative flex flex-col rounded-xl shadow-sm border border-gray-200 bg-white overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-md cursor-pointer duration-200 min-h-[420px] max-w-[340px] mx-auto"
          >
            {/* Image Section */}
            <div className="flex items-center justify-center bg-black h-48 md:h-56 border-b border-gray-200 relative">
              {project.image ? (
                // Images for EACH project. TODO: Put a real thumbnail image here
                <img
                  src={project.image}
                  alt={project.type}
                  className="object-contain h-32 md:h-40 max-w-full rounded-md shadow-sm"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
              )}
              {/* Shine effect */}
              <span className="shine-effect pointer-events-none" />
            </div>
            {/* Description Section */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              {/* Project information */}
              <p className="text-gray-600 mb-4 font-bold">{project.type}</p>
              <p className="text-gray-600 mb-4 text-base">{project.description}</p>
              { /* Clickable link to re-direct user to another page */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 font-medium hover:underline group"
              ><br />
                View Project
                <span className="ml-1 transition-transform group-hover:translate-x-1"><br />→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      {/* Styling for the shining animation */}
      {/* TODO: Fix this! */}
      <style jsx>{`
      
      `}</style>
    </div>
  )
}