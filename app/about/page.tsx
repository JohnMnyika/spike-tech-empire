"use client"; // Mark as a client component

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
      <div className="container mx-auto px-6 py-20" ref={ref}>
        {/* Heading */}
        <motion.h1
            className="text-5xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        {/* Company Overview */}
        <motion.section
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Who We Are
          </h2>
          <p className="text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
            At Spike Tech Empire, we’re dedicated to driving progress through
            technology. From robust software solutions to comprehensive networking
            and technical support, our team of experts leverages deep technical
            knowledge and industry insights to empower your business. We believe
            in aligning technology with your vision to help you excel in a
            fast-paced digital world.
          </p>
        </motion.section>

        {/* Mission, Vision, Values */}
        <motion.section
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : {}}
        >
          {/* Mission */}
          <motion.div
              className="bg-gradient-to-r from-blue-50 to-gray-100 p-8 shadow-lg rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700">
              To empower businesses by integrating innovative technology solutions
              that drive growth, streamline processes, and foster resilience in an
              evolving marketplace.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
              className="bg-gradient-to-r from-blue-50 to-gray-100 p-8 shadow-lg rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700">
              To establish a global reputation as a trusted leader in tech
              solutions, celebrated for our dedication to quality, creativity, and
              customer satisfaction.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
              className="bg-gradient-to-r from-blue-50 to-gray-100 p-8 shadow-lg rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Core Values
            </h3>
            <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
              <li>
                <strong>Innovation:</strong> Continuously pursuing new ideas to
                stay ahead in tech advancements.
              </li>
              <li>
                <strong>Customer-Centricity:</strong> Designing solutions that
                cater to the unique needs of our clients.
              </li>
              <li>
                <strong>Integrity:</strong> Building strong relationships through
                transparency and trustworthiness.
              </li>
              <li>
                <strong>Excellence:</strong> Maintaining high standards in every
                aspect of our work.
              </li>
              <li>
                <strong>Collaboration:</strong> Fostering teamwork to achieve
                shared goals effectively.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            The Spike Tech Empire team brings together skilled professionals who
            are passionate about delivering impactful tech solutions. Discover the
            leaders guiding our journey of excellence.
          </p>

          <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
          >
            {/* Team Member 1 */}
            <motion.div
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <Image
                  src="/profile.png"
                  alt="John Mnyika"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                  width={128}
                  height={128}
              />
              <h4 className="text-xl font-bold mb-2">John Mnyika</h4>
              <p className="text-blue-600 font-semibold">CEO & Founder</p>
              <p className="text-sm text-gray-600 mt-4">
                With over 5 years of experience in tech leadership, John is the
                visionary behind Spike Tech Empire, setting strategic direction
                and fostering innovation to drive company growth.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <Image
                  src="/profile.png"
                  alt="John Mnyika"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                  width={128}
                  height={128}
              />
              <h4 className="text-xl font-bold mb-2">John Mnyika</h4>
              <p className="text-blue-600 font-semibold">Head of Development</p>
              <p className="text-sm text-gray-600 mt-4">
                An accomplished software engineer, John leads our development team
                with a focus on high-quality, client-centered solutions that
                leverage the latest technological advances.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <Image
                  src="/profile.png"
                  alt="John Mnyika"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                  width={128}
                  height={128}
              />
              <h4 className="text-xl font-bold mb-2">John Mnyika</h4>
              <p className="text-blue-600 font-semibold">
                Head of Technical Support
              </p>
              <p className="text-sm text-gray-600 mt-4">
                John ensures our clients receive unparalleled support and
                maintenance, managing systems with precision to keep them secure
                and fully operational.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
  );
}