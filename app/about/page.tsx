"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Target, Award, Heart, Shield } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const coreValues: Value[] = [
  {
    icon: <Zap className="w-8 h-8 text-cyan-500" />,
    title: "Innovation",
    description:
      "Continuously pursuing new ideas to stay ahead in tech advancements",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Customer-Centricity",
    description:
      "Designing solutions that cater to the unique needs of our clients",
  },
  {
    icon: <Shield className="w-8 h-8 text-pink-500" />,
    title: "Integrity",
    description:
      "Building strong relationships through transparency and trustworthiness",
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-500" />,
    title: "Excellence",
    description:
      "Maintaining high standards in every aspect of our work",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Collaboration",
    description: "Fostering teamwork to achieve shared goals effectively",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Passion",
    description:
      "Driven by genuine care for our clients' success and growth",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper center className="bg-gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="mb-6">About Spike Tech Empire</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're dedicated to driving progress through technology. From robust
            software solutions to comprehensive networking and technical support,
            we leverage deep technical knowledge and industry insights to empower
            your business.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Mission, Vision, Values Grid */}
      <SectionWrapper ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="mb-4">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              At Spike Tech Empire, we believe in aligning technology with your
              vision to help you excel in a fast-paced digital world. We're more
              than a service provider—we're your trusted technology partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <motion.div variants={itemVariants}>
              <Card variant="gradient" hover>
                <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses by integrating innovative technology
                  solutions that drive growth, streamline processes, and foster
                  resilience in an evolving marketplace.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants}>
              <Card variant="gradient" hover>
                <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To establish a global reputation as a trusted leader in tech
                  solutions, celebrated for our dedication to quality, creativity,
                  and customer satisfaction.
                </p>
              </Card>
            </motion.div>

            {/* Impact */}
            <motion.div variants={itemVariants}>
              <Card variant="gradient" hover>
                <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">
                  Our Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We've helped 30+ businesses across Kenya and beyond achieve
                  their digital transformation goals, creating lasting value and
                  competitive advantage in their markets.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Core Values Section */}
      <SectionWrapper dark center>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-white mb-4">Our Core Values</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            These principles guide every decision we make and every solution we
            deliver
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="glass">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-white font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper center className="bg-gray-50 dark:bg-navy-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-4">Meet the Founder</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Spike Tech Empire is the brainchild of John Mnyika, a visionary leader
            with a passion for technology and innovation.
          </p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="default" className="max-w-md">
              <div className="text-center">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                  JM
                </div>
                <h3 className="text-2xl font-bold mb-2 text-navy-900 dark:text-white">
                  John Mnyika
                </h3>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
                  CEO & Founder
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With over 5 years of experience in tech leadership, John has
                  spearheaded the growth of Spike Tech Empire, combining strategic
                  vision with hands-on expertise in software development, technical
                  support, and business strategy.
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-navy-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always available for new challenges and partnerships
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Why Partner With Us */}
      <SectionWrapper center>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-4">Why Partner With Us</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            We're committed to your success with proven expertise, dedication,
            and results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Proven Track Record",
                description: "50+ successful projects delivered across diverse industries",
              },
              {
                title: "Expert Team",
                description: "Experienced professionals with latest certifications",
              },
              {
                title: "24/7 Support",
                description: "Always available when you need us, round the clock",
              },
              {
                title: "Custom Solutions",
                description: "Tailored approaches for your specific business needs",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and best practices in every project",
              },
              {
                title: "Long-term Partnership",
                description: "We invest in your success beyond project delivery",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card variant="gradient">
                  <h3 className="font-bold text-navy-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper dark center>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're starting a new project or looking to enhance your
            existing systems, we're here to help you succeed.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
