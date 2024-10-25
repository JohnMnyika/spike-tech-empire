// app/services/page.tsx

'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
      <p className="text-lg text-center mb-10">
        At Spike Tech Empire, we deliver a comprehensive suite of tech solutions tailored to meet your business needs.
        Explore our range of services designed to drive growth, efficiency, and security.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Software Development */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Software Development</h3>
          <p className="text-lg mb-6">
            End-to-end software solutions to support your unique business goals, from custom app development to scalable software platforms.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Contact Us
          </Link>
        </div>
        
        {/* Technical Support and Maintenance */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Technical Support and Maintenance</h3>
          <p className="text-lg mb-6">
            Ensure seamless operations with our 24/7 support and proactive maintenance to keep your systems optimized and secure.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Contact Us
          </Link>
        </div>
        
        {/* Networking Solutions */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Networking Solutions</h3>
          <p className="text-lg mb-6">
            Build and manage secure, high-performance networks tailored to your infrastructure requirements.
          </p>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
