"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 text-white overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgICAgIDxwYXRoIGQ9Ik0wIDAgTDYwIDAgTDYwIDYwIEwwIDYwIloiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0iTTAgMzAgTDYwIDMwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgICAgPHBhdGggZD0iTTMwIDAgTDMwIDYwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHBhdHRlcm4gaWQ9ImEiIGhyZWY9IiNhIi8+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPgo8L3N2Zz4=')] opacity-10" />
      </div>

      {/* Content */}
      <motion.div
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[600px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Transforming Ideas into Digital Excellence
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Premium{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Solutions
          </span>{" "}
          for Modern Businesses
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl"
        >
          Build faster, scale smarter, and dominate your market with our cutting-edge software development and tech consulting services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link href="/contact">
            <Button variant="primary" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#services">
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-700/50"
        >
          <div>
            <div className="text-3xl font-bold text-cyan-400">50+</div>
            <p className="text-gray-400 text-sm">Projects Delivered</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">99.9%</div>
            <p className="text-gray-400 text-sm">Uptime Guarantee</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">24/7</div>
            <p className="text-gray-400 text-sm">Expert Support</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
