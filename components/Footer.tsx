// components/Footer.tsx
"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Zap,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Services", href: "/#services" },
        { label: "Portfolio", href: "/#portfolio" },
        { label: "Testimonials", href: "/#testimonials" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Documentation", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Support Center", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Settings", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-navy-950 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Spike Tech
                </div>
                <div className="text-xs text-gray-400">Empire</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium tech solutions for modern businesses. Transform your vision into reality.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-navy-800 hover:bg-cyan-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-navy-800 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <Link
                href="mailto:hellospiketech@gmail.com"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                hellospiketech@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-400 text-sm mb-1">Phone</p>
              <Link
                href="tel:+254700878430"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                +254 700 878 430
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-400 text-sm mb-1">Location</p>
              <p className="text-white">Moi Avenue, Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Spike Tech Empire. All Rights Reserved.
          </p>
          <div className="text-gray-400 text-sm">
            Made with <span className="text-cyan-400">♥</span> in Kenya 🇰🇪
          </div>
        </div>
      </div>
    </footer>
  );
}
