// app/page.tsx (Home page example)

'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Spike Tech Empire</h1>
          <p className="text-lg mb-10">
            Your trusted partner for cutting-edge tech solutions in computer science and programming.
          </p>
          <Link href="/services" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center mb-10">
            At Spike Tech Empire, we deliver innovative technology solutions that drive digital transformation.
            Our expertise covers all areas of computer science and programming, from software development to cloud services.
          </p>
          <div className="flex justify-center">
            <Link href="/about" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-lg text-center mb-10">
            We offer a wide range of tech solutions to meet your business needs, including software development, technical support, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Software Development */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-lg mb-6">
                Building scalable and high-performance software to meet your business needs.
              </p>
              <Link href="/services" className="text-blue-600 font-bold hover:underline">
                Learn More
              </Link>
            </div>
            {/* Service 2: Technical Support and Maintenance */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Technical Support and Maintenance</h3>
              <p className="text-lg mb-6">
                Comprehensive technical support and maintenance services to ensure your systems are running smoothly.
              </p>
              <Link href="/services" className="text-blue-600 font-bold hover:underline">
                Learn More
              </Link>
            </div>
            {/* Service 3: Networking Solutions (example from your website) */}
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Networking Solutions</h3>
              <p className="text-lg mb-6">
                Providing secure, scalable, and high-speed networking solutions to keep your business connected.
              </p>
              <Link href="/services" className="text-blue-600 font-bold hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-10">
            Partner with Spike Tech Empire today and let us help you take your business to the next level with innovative technology solutions.
          </p>
          <Link href="/contact" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
