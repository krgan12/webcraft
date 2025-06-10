export default function About() {
  return (
    <div className="pt-10 pb-20 px-2 max-w-screen-2xl mx-auto">
      <br /><br />
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight text-center">
        What We Do
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-12 mx-auto max-w-3xl text-center">
        We specialize in creating professional websites for individuals and organizations who want to establish a strong online presence.
      </p>
      <div className="border-t border-gray-200 my-12"></div>

      
      <div className="w-full flex flex-col md:flex-row justify-center items-start md:space-x-[8vw] lg:space-x-[10vw] xl:space-x-[12vw]">
        
        <div className="flex flex-col items-center text-center">
          <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center mb-8">
            { /* TODO: Change Icon */}
            { /* TODO: Resize */}
            <svg className="h-12 w-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3C7.03 3 3 7.03 3 12c0 2.21 1.79 4 4 4h1a1 1 0 0 1 1 1v1c0 2.21 1.79 4 4 4s4-1.79 4-4c0-4.97-4.03-9-9-9z" />
              <circle cx="8.5" cy="10.5" r="1.5" />
              <circle cx="15.5" cy="10.5" r="1.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Design</h2>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            Tailored designs that reflect your brand identity and business goals.
          </p>
        </div>


        <div className="flex flex-col items-center text-center mt-16 md:mt-0">
          <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center mb-8">
           { /* TODO: Change Icon */}
            { /* TODO: Resize */}
            <svg className="h-12 w-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M8 20h8" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Responsive Development</h2>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            Mobile-first approach ensuring your website looks perfect on all devices.
          </p>
        </div>


        <div className="flex flex-col items-center text-center mt-16 md:mt-0">
          <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center mb-8">
            { /* TODO: Change Icon */}
            { /* TODO: Resize */}
            <svg className="h-12 w-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ongoing Support</h2>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            Maintenance, security updates, and continuous support to keep your site running smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}