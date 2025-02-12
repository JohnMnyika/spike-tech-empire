"use client"; // Mark as a client component

import Link from "next/link";
import { Code, Server, Network } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Service data
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Reusable ServiceCard component
const ServiceCard = ({ service }) => {
  return (
      <motion.div
          className="bg-white/80 backdrop-blur-md p-6 rounded-lg border border-blue-100 text-center transition-all hover:border-blue-200 shadow-lg hover:shadow-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
        <Link
            href={service.link}
            className="text-blue-600 font-bold hover:underline"
            aria-label={`Learn more about ${service.title}`}
        >
          Learn More
        </Link>
      </motion.div>
  );
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <div>
        {/* Hero Section */}
        <motion.header
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
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
                aria-label="Explore Our Services"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.header>

        {/* About Section */}
        <motion.section
            className="py-20 bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
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
                  aria-label="Learn More About Us"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
            id="services"
            className="py-20"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
            <p className="text-lg text-center mb-10">
              We offer a wide range of tech solutions to meet your business needs,
              including software development, technical support, and more.
            </p>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : {}}
            >
              {services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.footer
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
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
                aria-label="Contact Us Today"
            >
              Contact Us Today
            </Link>
          </div>
        </motion.footer>
      </div>
  );
}