"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import QuoteForm from "../../components/QuoteForm";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleFormSubmit = (success: boolean) => {
    if (success) {
      setSubmitted(true);
      setStatusMessage(
        "Your message has been successfully sent. We will get back to you soon."
      );
      // Auto-reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setStatusMessage("");
      }, 5000);
    } else {
      setStatusMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Header Section */}
      <SectionWrapper center className="bg-gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? Want to discuss tech solutions? We'd love to
            hear from you. Get in touch with our team and let's create something
            amazing together.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <Card variant="default" hover={false}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-navy-900 dark:text-white">
                  Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll respond within 24 hours
                </p>
              </div>

              {!submitted ? (
                <>
                  <QuoteForm onSubmitSuccess={handleFormSubmit} />
                  {statusMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-lg text-center bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium"
                    >
                      {statusMessage}
                    </motion.p>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mb-4 text-5xl">✓</div>
                  <h3 className="text-2xl font-bold mb-2 text-navy-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {statusMessage}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You'll be redirected to the home page shortly...
                  </p>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-6">
              {/* Email */}
              <Card variant="gradient" hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <Link
                      href="mailto:hellospiketech@gmail.com"
                      className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      hellospiketech@gmail.com
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Phone */}
              <Card variant="gradient" hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <Link
                      href="tel:+254700878430"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      +254 700 878 430
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Mon - Fri, 8 AM - 5 PM EAT
                    </p>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card variant="gradient" hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Moi Avenue
                      <br />
                      Nairobi, Kenya 🇰🇪
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card variant="default">
                <h4 className="font-bold text-navy-900 dark:text-white mb-4">
                  Follow Us
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-full aspect-square rounded-lg bg-gray-100 dark:bg-navy-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper className="bg-gray-50 dark:bg-navy-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-center mb-8">Our Location</h2>
          <Card variant="default" hover={false} className="h-96 p-0 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173395297!2d36.820987074098!3d-1.283462035621215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6678064cf%3A0x956bb6f5e0ab2aac!2sMoi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1739654239084!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spike Tech Empire Location"
            ></iframe>
          </Card>
        </motion.div>
      </SectionWrapper>

      {/* Response Time CTA */}
      <SectionWrapper dark center>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white mb-4">Quick Response Guarantee</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Submit your inquiry and we'll respond within 24 hours with personalized
            recommendations for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { number: "24hrs", label: "Response Time" },
              { number: "100%", label: "Professional" },
              { number: "30+", label: "Happy Clients" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {item.number}
                  </div>
                  <p className="text-gray-300">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
