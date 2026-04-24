"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative overflow-hidden bg-slate-50 pb-20 pt-10 text-navy-950 sm:pb-24 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-28 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/12 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-24 top-24 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <div className="premium-grid absolute inset-0 opacity-40" />
      </div>

      <motion.div
        className="relative container mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(460px,0.95fr)] lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-2xl pt-20 text-center lg:mx-0 lg:max-w-none lg:pt-12 lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="section-kicker">
              Premium engineering partner for ambitious teams
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.08em] text-navy-950 sm:text-6xl lg:text-7xl"
          >
            Ship revenue-ready software without building an in-house team from
            scratch.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl"
          >
            We design, build, and harden digital products for founders and
            operators who need technical excellence, clean execution, and a team
            they can trust quickly.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-10 grid gap-3 sm:grid-cols-3"
          >
            {[
              "Clear scopes and delivery milestones",
              "Senior-level product and engineering thinking",
              "Fast communication across build, infra, and support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-4 text-left shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-5 border-t border-slate-200/80 pt-8 text-left sm:grid-cols-3"
          >
            <div>
              <div className="text-3xl font-semibold tracking-[-0.06em] text-navy-950">
                50+
              </div>
              <p className="mt-1 text-sm text-slate-500">Projects launched across web, cloud, and internal tools.</p>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-[-0.06em] text-navy-950">
                24/7
              </div>
              <p className="mt-1 text-sm text-slate-500">Support coverage for production systems and urgent fixes.</p>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-[-0.06em] text-navy-950">
                99.9%
              </div>
              <p className="mt-1 text-sm text-slate-500">Target reliability for stable, client-facing infrastructure.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto w-full max-w-[560px] lg:mx-0"
        >
          <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/88 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Delivery command center
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-[-0.04em]">
                    Product rollout overview
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  On track
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Active sprint
                      </p>
                      <p className="mt-1 text-base font-medium text-white">
                        Client portal and automation layer
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Progress</p>
                      <p className="text-sm font-semibold text-cyan-300">82%</p>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-medium text-white">
                        Delivery pillars
                      </p>
                      <p className="text-xs text-slate-400">This week</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          icon: ShieldCheck,
                          title: "Infrastructure hardening",
                          note: "SLA, monitoring, backups",
                        },
                        {
                          icon: TimerReset,
                          title: "Launch readiness",
                          note: "QA, docs, release coordination",
                        },
                        {
                          icon: MessageSquareText,
                          title: "Stakeholder visibility",
                          note: "Weekly reporting and faster decisions",
                        },
                      ].map(({ icon: Icon, title, note }) => (
                        <div
                          key={title}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3"
                        >
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{title}</p>
                            <p className="text-xs text-slate-400">{note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Client satisfaction
                      </p>
                      <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white">
                        4.9
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        Average project sentiment from delivery feedback.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                        Avg. response time
                      </p>
                      <p className="mt-4 text-4xl font-semibold tracking-[-0.06em]">
                        2h
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        Fast answers for active clients and critical production issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
