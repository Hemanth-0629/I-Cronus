"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-500 ${
          scrolled
            ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,229,255,0.03)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Magnetic strength={0.15}>
            <Link href="/" className="flex items-center group">
              <Logo width={110} height={28} className="text-white" />
            </Link>
          </Magnetic>

          <nav className="hidden md:flex items-center gap-8">
            {["Solutions", "Services", "Industries", "Case Studies", "Insights", "About", "Careers", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold text-[#A0A0B8] hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Magnetic strength={0.2}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-[#A0A0B8] hover:text-[#00D4FF] transition-colors p-2 flex items-center justify-center border border-white/5 rounded-full hover:bg-white/5"
                title="Employee Login"
              >
                <User size={18} />
              </button>
            </Magnetic>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#050816]/95 backdrop-blur-3xl md:hidden">
          <div className="flex flex-col p-6 gap-6">
            {["Solutions", "Services", "Industries", "Case Studies", "Insights", "About", "Careers", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-display font-bold text-white border-b border-white/5 pb-4"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* Employee Operations Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#050816] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#10B981]" />
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#A0A0B8] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-[#020617] border border-white/10 rounded-full flex items-center justify-center mb-6">
                  <User className="text-[#8B5CF6]" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase mb-3">
                  Operations Portal<br/>Coming Soon
                </h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed mb-8">
                  Enterprise employee operations and internal systems are currently under development. Authorized access only.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="btn-solid w-full text-center"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
