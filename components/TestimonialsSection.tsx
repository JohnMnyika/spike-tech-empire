"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
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
    <SectionWrapper center className="bg-[linear-gradient(180deg,rgba(248,250,252,0.2)_0%,#ffffff_100%)]">
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="section-kicker mb-4">Client Trust</div>
          <h2 className="mb-4">The brand should feel more personal, not just more polished.</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Premium service businesses convert better when the visitor sees both strong execution and a real person standing behind the company.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-7 text-left shadow-[0_24px_72px_rgba(15,23,42,0.10)]">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-50 via-cyan-50 to-slate-50" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/pro.png"
                    alt="CEO and Founder of Spike Tech Empire"
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority={false}
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-[-0.04em] text-navy-950">
                    CEO & Founder
                  </p>
                  <p className="text-sm text-slate-500">
                    Leading delivery, product thinking, and client trust at Spike Tech Empire.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Founder-led execution
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This is a strong visual credibility upgrade because it puts a face to the business. For service companies, that often improves trust faster than another abstract metric block.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card variant="default" className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-[0_24px_72px_rgba(15,23,42,0.10)] md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-400">
                  <Quote className="h-5 w-5" />
                </div>
              </div>

              <p className="mb-8 text-xl leading-9 tracking-[-0.02em] text-slate-700">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-semibold text-white">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-semibold text-navy-950">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-slate-300 bg-white p-2 transition-colors hover:bg-slate-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-cyan-500 w-8"
                        : "bg-slate-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="rounded-full border border-slate-300 bg-white p-2 transition-colors hover:bg-slate-50"
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
