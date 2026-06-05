"use client";

import React, { useState } from "react";
import { MessageCircle, GraduationCap, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function FloatingWidgets() {
  const [showInternshipPopup, setShowInternshipPopup] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* Internship Popover */}
      <AnimatePresence>
        {showInternshipPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-72 sm:w-80 bg-[#050816] border border-[#00D4FF]/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#10B981]" />
            <button 
              onClick={() => setShowInternshipPopup(false)}
              className="absolute top-3 right-3 text-[#A0A0B8] hover:text-white"
            >
              <X size={16} />
            </button>
            <h3 className="font-display text-lg font-bold text-white uppercase mb-2 pr-6">
              Launch Your Enterprise Engineering Career
            </h3>
            <p className="text-[#A0A0B8] text-xs leading-relaxed mb-4">
              Our 3–6 month intensive internship program transitions academic talent into production-ready engineers. You will be pushing code to staging on day one.
            </p>
            <Link 
              href="https://erp.ecomsmart.world/form-builder/d11ad164-b3f5-4ebf-a2f3-e94cc3cc07c2-1779094293"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30 hover:border-[#00D4FF] py-2.5 rounded text-xs font-mono tracking-widest uppercase transition-all"
            >
              Apply For Internships <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
        {/* Internship Trigger Button */}
        <button
          onClick={() => setShowInternshipPopup(!showInternshipPopup)}
          className="group flex items-center justify-center w-14 h-14 bg-[#050816] border border-[#00D4FF]/30 hover:border-[#00D4FF] rounded-full shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 relative"
          title="Apply for Internships"
        >
          <GraduationCap className="text-[#00D4FF] group-hover:scale-110 transition-transform" size={24} />
          {/* Notification Ping */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D4FF]"></span>
          </span>
        </button>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="text-white group-hover:scale-110 transition-transform" size={28} />
        </Link>
      </div>
    </div>
  );
}
