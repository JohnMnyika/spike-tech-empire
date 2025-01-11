"use client";

import Link from "next/link";
import { Code, Server, Network } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Software Development",
      description:
        "Building scalable and high-performance software to meet your business needs.",
      icon: <Code className="text-blue-600 w-12 h-12 mx-auto" />,
      link: "/services",
    },
    {
      title: "Technical Support and Maintenance",
      description:
        "Comprehensive technical support to ensure your systems run smoothly.",
      icon: <Server className="text-blue-600 w-12 h-12 mx-auto" />,
      link: "/services",
    },
    {
      title: "Networking Solutions",
      description:
        "Secure, scalable, and high-speed networking solutions for your business.",
      icon: <Network className="text-blue-600 w-12 h-12 mx-auto" />,
      link: "/services",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Spike Tech Empire
          </h1>
          <p className="text-lg mb-10">
            Your trusted partner for cutting-edge tech solutions in computer
            science and programming.
          </p>
          <Link
            href="#services"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center mb-10">
            At Spike Tech Empire, we deliver innovative technology solutions
            that drive digital transformation. Our expertise covers all areas of
            computer science and programming, from software development to cloud
            services.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-lg text-center mb-10">
            We offer a wide range of tech solutions to meet your business needs,
            including software development, technical support, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-10">
            Partner with Spike Tech Empire today and let us help you take your
            business to the next level with innovative technology solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </footer>
    </div>
  );
}
