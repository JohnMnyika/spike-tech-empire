"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "John Mutua",
    role: "CEO",
    company: "TechStart Kenya",
    avatar: "JM",
    content:
      "Spike Tech Empire transformed our entire digital infrastructure. Their expertise and dedication helped us scale from 100 to 10,000 users seamlessly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Kipchoge",
    role: "Product Director",
    company: "FinanceFlow",
    avatar: "SK",
    content:
      "Working with Spike Tech was a game-changer. They delivered our mobile banking app on time and exceeded our expectations. Their 24/7 support is invaluable.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "CTO",
    company: "E-CommerceHub",
    avatar: "DO",
    content:
      "From concept to deployment, their team showcased exceptional technical knowledge and professionalism. Our platform now handles 1M+ transactions daily.",
    rating: 5,
  },
  {
    name: "Emma Ndung'u",
    role: "Founder",
    company: "HealthTech Solutions",
    avatar: "EN",
    content:
      "The best tech partner we could ask for. Their innovative solutions and proactive support have been crucial to our success in the African market.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
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
    <SectionWrapper center className="bg-gray-50 dark:bg-navy-900/50">
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from clients who've transformed their business with our solutions
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <Card variant="default" className="p-8 md:p-10">
              <div className="mb-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border-2 border-gray-300 dark:border-navy-700 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-cyan-500 w-8"
                        : "bg-gray-300 dark:bg-navy-700"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border-2 border-gray-300 dark:border-navy-700 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
