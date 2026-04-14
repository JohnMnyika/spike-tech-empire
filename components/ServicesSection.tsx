"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Network, Cloud, Zap, Shield } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";
import Button from "./Button";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Software Development",
    description: "Custom applications built to scale with your business needs",
    benefits: ["Web Apps", "Mobile Apps", "API Development", "Legacy Modernization"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Technical Support & Maintenance",
    description: "24/7 proactive monitoring and management of your systems",
    benefits: ["Monitoring", "Troubleshooting", "Updates", "Security Patches"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Networking Solutions",
    description: "Secure, scalable infrastructure for your growing business",
    benefits: ["Network Setup", "Cloud Infrastructure", "Security", "Optimization"],
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Migrate and manage your infrastructure in the cloud",
    benefits: ["AWS/GCP/Azure", "Database Management", "Backup Solutions", "Disaster Recovery"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience",
    benefits: ["Code Optimization", "Database Tuning", "CDN Setup", "Load Testing"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Consulting",
    description: "Protect your data with enterprise-grade security solutions",
    benefits: ["Security Audit", "Penetration Testing", "Compliance", "Training"],
    color: "from-red-500 to-pink-500",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper id="services" center>
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive tech solutions designed to accelerate your growth and transform your business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="gradient">
                <div
                  className={`bg-gradient-to-br ${service.color} p-3 rounded-lg w-fit mb-4 text-white`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link href="/services">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More →
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
