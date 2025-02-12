"use client"; // Mark as a client component

import Link from "next/link";
import { Cloud, Shield, Code, Server, Network, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Service data
const services = [
  {
    title: "Software Development",
    description:
        "Tailored software solutions that fit your unique business requirements, including mobile and web applications.",
    icon: (
        <Code
            className="text-blue-600 w-12 h-12 mx-auto"
            aria-label="Code Icon"
        />
    ),
    link: "/contact",
  },
  {
    title: "Technical Support & Maintenance",
    description:
        "Reliable technical support and proactive maintenance services to keep your systems secure and efficient.",
    icon: (
        <Server
            className="text-blue-600 w-12 h-12 mx-auto"
            aria-label="Server Icon"
        />
    ),
    link: "/contact",
  },
  {
    title: "Networking Solutions",
    description:
        "Design, implement, and manage networks to support seamless, secure connectivity for your operations.",
    icon: (
        <Network
            className="text-blue-600 w-12 h-12 mx-auto"
            aria-label="Network Icon"
        />
    ),
    link: "/contact",
  },
  {
    title: "Cloud Solutions",
    description:
        "Scalable cloud solutions to optimize your resources and improve collaboration across your teams.",
    icon: (
        <Cloud
            className="text-blue-600 w-12 h-12 mx-auto"
            aria-label="Cloud Icon"
        />
    ),
    link: "/contact",
  },
  {
    title: "IT Consultancy",
    description:
        "Strategic guidance to help your business make the most of modern technology and stay ahead of the competition.",
    icon: (
        <Users
            className="text-blue-600 w-12 h-12 mx-auto"
            aria-label="Users Icon"
        />
    ),
    link: "/contact",
  },
  {
    title: "Cybersecurity",
    description:
        "Comprehensive cybersecurity services to protect your data and maintain trust with your customers.",
    icon: (
        <Shield
            className="text-blue-600 w-12 h-12 mx-auto"
            aria-label="Shield Icon"
        />
    ),
    link: "/contact",
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

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section
          className="bg-gradient-to-b from-blue-50 to-white py-20"
          ref={ref}
          aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-6">
          <motion.h1
              className="text-5xl font-bold text-center mb-12 text-blue-900"
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
              className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Spike Tech Empire, we offer a full spectrum of technology services
            tailored to meet your business needs. Our expertise spans across
            multiple domains to provide you with reliable, high-quality solutions.
          </motion.p>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
          >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg border border-blue-100 text-center transition-all hover:border-blue-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <Link
                      href={service.link}
                      className="text-blue-600 font-bold hover:underline"
                      aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </Link>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}