export default function About() {
  return (
    <div className="text-center p-10 max-w-4xl mx-auto">
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight">What We Do</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-12 mx-auto max-w-3xl">
        We specialize in creating professional websites for individuals and organizations who want to establish a strong online presence.
      </p>
      <div className="border-t border-gray-200 my-8"></div>

      {/* Services */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Custom Design */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Custom Design</h2>
          <p className="text-gray-600 leading-relaxed">
            Tailored designs that reflect your brand identity and business goals.
          </p>
        </div>

        {/* Responsive Development */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Responsive Development</h2>
          <p className="text-gray-600 leading-relaxed">
            Mobile-first approach ensuring your website looks perfect on all devices.
          </p>
        </div>

        {/* Ongoing Support */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Ongoing Support</h2>
          <p className="text-gray-600 leading-relaxed">
            Maintenance, security updates, and continuous support to keep your site running smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}