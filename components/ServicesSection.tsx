"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code,
  Network,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

interface Service {
  icon: React.ReactNode;
  title: string;
  outcome: string;
  description: string;
  benefits: string[];
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Software Development",
    outcome: "Launch polished products faster.",
    description:
      "Design and build web apps, internal platforms, and APIs that feel stable from day one and can scale as demand grows.",
    benefits: ["Product strategy support", "Modern web and mobile delivery", "API architecture", "Legacy modernization"],
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Technical Support & Maintenance",
    outcome: "Reduce downtime and firefighting.",
    description:
      "Keep critical systems healthy with proactive monitoring, fast issue response, and clear operational ownership.",
    benefits: ["Monitoring and alerting", "Troubleshooting", "Version updates", "Security patching"],
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Networking Solutions",
    outcome: "Build reliable infrastructure foundations.",
    description:
      "Create secure networks and resilient environments that support distributed teams, fast growth, and tighter controls.",
    benefits: ["Network setup", "Secure architecture", "Performance tuning", "Infrastructure optimization"],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    outcome: "Scale without operational drag.",
    description:
      "Migrate, optimize, and manage cloud environments with sensible cost control, backups, and deployment discipline.",
    benefits: ["AWS, GCP, and Azure support", "Database operations", "Backups", "Disaster recovery"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    outcome: "Turn slow software into a growth asset.",
    description:
      "Improve speed, stability, and user confidence through targeted fixes across application, database, and delivery layers.",
    benefits: ["Code optimization", "Database tuning", "CDN strategy", "Load testing"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Consulting",
    outcome: "Protect trust before problems surface.",
    description:
      "Review systems, identify risks, and strengthen controls so your product can meet enterprise expectations with confidence.",
    benefits: ["Security audits", "Penetration testing", "Compliance guidance", "Team training"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper id="services" className="bg-slate-50/60" center>
      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="section-kicker mb-4">Services</div>
          <h2 className="mb-4">Execution across product, platform, and reliability.</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            The offer is simple: fewer vendors, sharper delivery, and one team that can take responsibility for both product velocity and technical quality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 text-left shadow-[0_16px_48px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_24px_72px_rgba(15,23,42,0.12)]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                  {service.outcome}
                </p>
                <h3 className="mb-3 text-2xl font-semibold text-navy-950 transition-colors group-hover:text-blue-700">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mb-7 space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle2 className="mr-3 h-4 w-4 flex-shrink-0 text-cyan-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link href="/services" className="mt-auto block">
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button variant="outline" size="sm" className="w-full justify-between text-sm">
                      Explore service
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
