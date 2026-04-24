"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

interface StatItem {
  number: string;
  label: string;
  description?: string;
}

const stats: StatItem[] = [
  { number: "50+", label: "Projects Delivered", description: "Across product builds, infra upgrades, and long-term support." },
  { number: "30+", label: "Active Client Relationships", description: "Lean teams and operators who need reliable technical execution." },
  { number: "100%", label: "Delivery Focus", description: "Clear milestones, communication loops, and visible ownership." },
  { number: "24/7", label: "Support Coverage", description: "Production-minded response when uptime and trust matter most." },
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
    <SectionWrapper
      dark
      center
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_28%),linear-gradient(180deg,#08111f_0%,#030712_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 premium-grid opacity-10" />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Proof
          </div>
          <h2 className="mb-4 text-white">A stronger trust layer for higher-value clients.</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            The site now needs to feel like it belongs to a team that can safely handle serious product work. These numbers frame that confidence with more intent.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <Card
                variant="glass"
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-left shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-2 text-cyan-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-4xl font-semibold tracking-[-0.06em] text-transparent lg:text-5xl">
                    {stat.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {stat.label}
                  </h3>
                  {stat.description && (
                    <p className="text-sm leading-7 text-slate-400">
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
