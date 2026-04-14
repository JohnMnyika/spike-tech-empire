"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management and secure payment processing",
    image: "/projects/ecommerce.jpg",
    link: "#",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Cross-platform mobile banking application with advanced security and real-time notifications",
    image: "/projects/banking.jpg",
    link: "#",
    technologies: ["React Native", "Node.js", "Firebase", "Redux"],
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "Enterprise analytics dashboard with real-time data processing and custom visualizations",
    image: "/projects/analytics.jpg",
    link: "#",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
  },
  {
    title: "Healthcare CRM",
    category: "Enterprise Software",
    description: "HIPAA-compliant customer relationship management system for healthcare providers",
    image: "/projects/healthcare.jpg",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "AI Chatbot Platform",
    category: "AI/ML",
    description: "Intelligent chatbot platform powered by GPT and custom NLP models for customer support",
    image: "/projects/chatbot.jpg",
    link: "#",
    technologies: ["Python", "OpenAI", "FastAPI", "React"],
  },
  {
    title: "IoT Dashboard",
    category: "IoT",
    description: "Real-time monitoring dashboard for IoT devices with predictive analytics",
    image: "/projects/iot.jpg",
    link: "#",
    technologies: ["Node.js", "MQTT", "React", "InfluxDB"],
  },
];

export default function PortfolioSection() {
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
    <SectionWrapper id="portfolio" center>
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="mb-4">Our Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Showcase of successful projects and innovative solutions we've delivered
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="h-full overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-navy-700">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="inline-block w-fit mb-2">
                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-navy-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-navy-700 text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
