"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Globe,
  Headphones,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

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
    description: "Strong execution across design, engineering, and infrastructure decisions",
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
    <SectionWrapper id="why-us" className="bg-slate-50/70" center>
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="section-kicker mb-4">Why Us</div>
          <h2 className="mb-4">A stronger premium signal than another generic features grid.</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            This section now works harder by combining founder presence, operational credibility, and sharp value framing instead of repeating broad agency claims.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white p-7 text-left shadow-[0_24px_72px_rgba(15,23,42,0.10)]"
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-slate-100 via-blue-50 to-cyan-50" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Leadership
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-2 text-slate-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="mb-6 overflow-hidden rounded-[28px] border border-white bg-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/pro.png"
                    alt="CEO and Founder of Spike Tech Empire"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  CEO & Founder
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-navy-950">
                  Founder-led quality, not anonymous outsourcing.
                </h3>
              </div>

              <p className="mb-6 text-sm leading-7 text-slate-600">
                Using the founder portrait here makes the business feel accountable and premium. It helps visitors believe there is a real operator behind delivery quality, communication, and long-term partnership.
              </p>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    What this communicates
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  Direct leadership involvement, faster decisions, and stronger accountability from strategy through delivery.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {usps.map((usp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group h-full rounded-[28px] border border-slate-200/80 bg-white p-7 text-left shadow-[0_16px_48px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_24px_72px_rgba(15,23,42,0.12)]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                    {usp.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-navy-950">
                    {usp.title}
                  </h3>
                  <p className="mb-5 text-sm leading-7 text-slate-600">
                    {usp.description}
                  </p>
                  <ul className="space-y-3">
                    {usp.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="mr-3 h-4 w-4 flex-shrink-0 text-cyan-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
