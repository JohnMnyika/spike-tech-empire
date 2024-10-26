// app/services/page.tsx

import Link from 'next/link';

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
      <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-700">
        At Spike Tech Empire, we offer a full spectrum of technology services tailored to meet your business needs.
        Our expertise spans across multiple domains to provide you with reliable, high-quality solutions.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Software Development */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Software Development</h3>
          <p className="text-lg text-gray-700 mb-6">
            Tailored software solutions that fit your unique business requirements, including mobile and web applications.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Learn More
          </Link>
        </div>

        {/* Technical Support and Maintenance */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Technical Support & Maintenance</h3>
          <p className="text-lg text-gray-700 mb-6">
            Reliable technical support and proactive maintenance services to keep your systems secure and efficient.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Learn More
          </Link>
        </div>

        {/* Networking Solutions */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Networking Solutions</h3>
          <p className="text-lg text-gray-700 mb-6">
            Design, implement, and manage networks to support seamless, secure connectivity for your operations.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Learn More
          </Link>
        </div>

        {/* Cloud Solutions */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Cloud Solutions</h3>
          <p className="text-lg text-gray-700 mb-6">
            Scalable cloud solutions to optimize your resources and improve collaboration across your teams.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Learn More
          </Link>
        </div>

        {/* IT Consultancy */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">IT Consultancy</h3>
          <p className="text-lg text-gray-700 mb-6">
            Strategic guidance to help your business make the most of modern technology and stay ahead of the competition.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Learn More
          </Link>
        </div>

        {/* Cybersecurity */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Cybersecurity</h3>
          <p className="text-lg text-gray-700 mb-6">
            Comprehensive cybersecurity services to protect your data and maintain trust with your customers.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
