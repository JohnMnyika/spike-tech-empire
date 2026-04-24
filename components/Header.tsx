// components/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Case Studies" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/82 dark:bg-navy-950/92 backdrop-blur-2xl border-b border-slate-200/70 dark:border-navy-800 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-sm font-bold text-transparent">
              ST
            </span>
          </motion.div>
          <div className="leading-none">
            <div className="text-sm font-semibold tracking-[-0.04em] text-navy-950 dark:text-white">
              Spike Tech
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
              Product Engineering
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/80 hover:text-slate-950"
          >
            Contact
          </Link>
          <Link href="/contact">
            <Button variant="primary" size="sm" className="group">
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm transition-colors hover:bg-slate-50 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden"
      >
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={closeMenu} className="mt-2">
              <Button variant="primary" size="sm" className="w-full group">
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
