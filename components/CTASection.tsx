"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, MessageCircleMore } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper dark center className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_32%),linear-gradient(180deg,#08111f_0%,#020617_100%)]">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-white/5 px-6 py-12 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-10 lg:px-14">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Start the conversation
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-5xl lg:text-6xl">
            Bring us the product, platform, or growth bottleneck slowing you down.
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-slate-300">
            We can scope the problem, outline a practical path forward, and help you move from uncertainty to execution without a long sales cycle.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/254700878430?text=Hi%20Spike%20Tech%20Empire,%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary" size="lg" className="group w-full sm:w-auto">
                WhatsApp Us
                <MessageCircleMore className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto">
                Request a Proposal
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 text-left md:grid-cols-3">
            {[
              "Fast response for active opportunities",
              "Clear next steps after the first conversation",
              "Flexible engagement for build, support, or advisory work",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5"
              >
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    Why this works
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
