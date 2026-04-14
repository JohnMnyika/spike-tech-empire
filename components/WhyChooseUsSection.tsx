"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Zap, Users, Globe, Award, Headphones } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

interface USP {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const usps: USP[] = [
  {
    icon: <Zap className="w-8 h-8 text-cyan-500" />,
    title: "Lightning-Fast Delivery",
    description: "Rapid development cycles without compromising quality",
    features: ["Agile Methodology", "CI/CD Pipelines", "Automated Testing"],
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Expert Team",
    description: "Seasoned developers with 10+ years of industry experience",
    features: ["Senior Developers", "Certified Professionals", "Continuous Learning"],
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-500" />,
    title: "Global Reach, Local Touch",
    description: "Based in Kenya, serving clients worldwide",
    features: ["24/7 Support", "Multi-Timezone Coverage", "Local Expertise"],
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-500" />,
    title: "Quality Assured",
    description: "Industry best practices and strict quality standards",
    features: ["Security First", "Performance Optimized", "Scalable Architecture"],
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-500" />,
    title: "Dedicated Support",
    description: "Your success is our priority with personal attention",
    features: ["Responsive Team", "Regular Updates", "Post-Launch Support"],
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients",
    features: ["50+ Projects", "100% Satisfaction", "Long-term Partnerships"],
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <SectionWrapper id="why-us" center classroom>
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="mb-4">Why Choose Spike Tech Empire?</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We're not just a service provider—we're your trusted technology partner
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {usps.map((usp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="gradient" hover>
                <div className="mb-4">{usp.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                  {usp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {usp.description}
                </p>
                <ul className="space-y-2">
                  {usp.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
