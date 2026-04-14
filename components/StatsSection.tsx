"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

interface StatItem {
  number: string;
  label: string;
  description?: string;
}

const stats: StatItem[] = [
  { number: "50+", label: "Projects Delivered", description: "Successfully completed across various industries" },
  { number: "30+", label: "Happy Clients", description: "Trusted by businesses globally" },
  { number: "100%", label: "Satisfaction Rate", description: "Consistent excellence in every project" },
  { number: "24/7", label: "Support Available", description: "Always here when you need us" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper dark center>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-white mb-4">Our Track Record</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Proven expertise and results that speak for themselves
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card variant="glass">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {stat.label}
                  </h3>
                  {stat.description && (
                    <p className="text-gray-400 text-sm">
                      {stat.description}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
