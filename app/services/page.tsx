"use client";

import Link from "next/link";
import {
  Cloud,
  Shield,
  Code,
  Server,
  Network,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";

interface ServiceDetail {
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  color: string;
}

const servicesData: ServiceDetail[] = [
  {
    title: "Software Development",
    shortDescription: "Custom applications built to scale",
    fullDescription:
      "From concept to deployment, we create robust, scalable software solutions tailored to your business needs. Our team specializes in building high-performance applications that drive growth.",
    icon: <Code className="w-12 h-12" />,
    features: [
      "Web Application Development",
      "Mobile App Development (iOS & Android)",
      "Progressive Web Applications (PWAs)",
      "API Development & Integration",
      "Legacy System Modernization",
      "Custom CMS Solutions",
    ],
    benefits: [
      "Increased operational efficiency",
      "Better user experience",
      "Scalable architecture",
      "Reduced time-to-market",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Technical Support & Maintenance",
    shortDescription: "24/7 proactive system monitoring",
    fullDescription:
      "Keep your systems running smoothly with our comprehensive technical support and maintenance services. We provide proactive monitoring and rapid response to minimize downtime.",
    icon: <Server className="w-12 h-12" />,
    features: [
      "24/7 Monitoring & Alerting",
      "Incident Response & Resolution",
      "System Updates & Patching",
      "Performance Optimization",
      "Backup & Disaster Recovery",
      "Security Audits",
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Reduced operational costs",
      "Peace of mind",
      "Faster issue resolution",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Networking Solutions",
    shortDescription: "Secure, scalable infrastructure",
    fullDescription:
      "Design and implement secure, high-performance network infrastructure that supports your business growth. From cloud setup to on-premise solutions, we've got you covered.",
    icon: <Network className="w-12 h-12" />,
    features: [
      "Network Design & Planning",
      "Cloud Infrastructure Setup (AWS, GCP, Azure)",
      "Network Security Configuration",
      "Load Balancing & Failover",
      "VPN & Remote Access",
      "Network Monitoring & Optimization",
    ],
    benefits: [
      "Enhanced connectivity",
      "Improved security",
      "Better scalability",
      "Cost optimization",
    ],
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Cloud Solutions",
    shortDescription: "Migrate and manage in the cloud",
    fullDescription:
      "Leverage the power of cloud computing with our comprehensive migration, implementation, and management services. Reduce costs while improving reliability.",
    icon: <Cloud className="w-12 h-12" />,
    features: [
      "Cloud Migration Services",
      "Cloud Architecture Design",
      "Database Management",
      "Cost Optimization",
      "Multi-cloud Strategy",
      "Kubernetes & Container Orchestration",
    ],
    benefits: [
      "Lower infrastructure costs",
      "Increased flexibility",
      "Better disaster recovery",
      "Global reach",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "IT Consultancy",
    shortDescription: "Strategic technology guidance",
    fullDescription:
      "Get expert advice on technology strategy and digital transformation. Our consultants help you make informed decisions to stay competitive.",
    icon: <Users className="w-12 h-12" />,
    features: [
      "Technology Assessment",
      "Digital Transformation Strategy",
      "IT Roadmap Development",
      "Process Optimization",
      "Team Training & Workshops",
      "Vendor Selection & Negotiation",
    ],
    benefits: [
      "Better ROI on tech investments",
      "Competitive advantage",
      "Reduced risks",
      "Faster innovation",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cybersecurity",
    shortDescription: "Protect your data and systems",
    fullDescription:
      "Comprehensive security solutions to protect your business from threats. We implement best practices and maintain compliance with industry standards.",
    icon: <Shield className="w-12 h-12" />,
    features: [
      "Security Audit & Assessment",
      "Penetration Testing",
      "Firewall & IDS Configuration",
      "Data Encryption",
      "Compliance Management (ISO, HIPAA, GDPR)",
      "Security Training",
    ],
    benefits: [
      "Protected business continuity",
      "Regulatory compliance",
      "Reduced breach risk",
      "Customer trust",
    ],
    color: "from-red-500 to-pink-500",
  },
];

export default function Services() {
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
    <>
      {/* Header Section */}
      <SectionWrapper center className="bg-gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="mb-6">Comprehensive Tech Solutions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From custom software development to cloud infrastructure, we provide
            end-to-end technology solutions designed to propel your business
            forward. Our expertise spans multiple domains and industries.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="gradient" hover className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`bg-gradient-to-br ${service.color} p-4 rounded-lg w-fit text-white mb-6`}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-3 text-navy-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {service.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 dark:text-white mb-3">
                        Key Services:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 mt-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Get Started <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Detailed Benefits Section */}
      <SectionWrapper dark center className="bg-gradient-to-b from-navy-900 to-navy-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white mb-6">Why Our Services Stand Out</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            We combine technical expertise with a client-first approach to deliver
            results that exceed expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Expert Team",
                description: "10+ years of industry experience and certifications",
              },
              {
                title: "Custom Solutions",
                description: "Tailored to your specific business needs and goals",
              },
              {
                title: "Ongoing Support",
                description: "24/7 monitoring and proactive maintenance included",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card variant="glass" className="text-center">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper center className="bg-cyan-50 dark:bg-navy-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and create a
            custom solution that drives results.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>
    </>
  );
}