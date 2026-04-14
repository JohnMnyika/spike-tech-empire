"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <SectionWrapper dark center className="relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="relative z-10"
      >
        <h2 className="text-white mb-6 text-4xl md:text-5xl">
          Ready to Transform Your Business?
        </h2>

        <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
          Let's discuss how our tech solutions can help you achieve your business goals
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="group">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="tel:+254700878430">
            <Button variant="outline" size="lg">
              Call Us: +254 700 878 430
            </Button>
          </Link>
        </div>

        <p className="text-gray-400 mt-8 text-sm">
          Free consultation • No obligation • Response within 24 hours
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
