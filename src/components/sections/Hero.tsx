"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';

const EnterpriseCommandNetwork = dynamic(() => import('@/components/canvas/EnterpriseCommandNetwork'), { ssr: false });

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#020617] pt-24 overflow-hidden flex items-center border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,rgba(2,6,23,0)_70%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE - 40% (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[10px] font-mono text-[#00D4FF] tracking-[0.2em] uppercase">AI • DATA • CLOUD • AUTOMATION</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.05] tracking-tight mb-6">
              Architecting The Systems That Power Modern Enterprises
            </h1>

            <p className="text-[#A0A0B8] text-base sm:text-lg max-w-lg mb-10 leading-relaxed font-mono">
              We design and operate AI platforms, cloud infrastructure, enterprise data systems and intelligent automation that help organizations scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <Link href="/solutions" className="btn-solid w-full sm:w-auto inline-flex items-center justify-center gap-2 group">
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact?type=architecture-review" className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2">
                Book Architecture Review
              </Link>
            </div>
            

            {/* Proof Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Enterprise Platforms' },
                { label: 'Cloud Infrastructure' },
                { label: 'Data Systems' },
                { label: 'Automation' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - 60% (lg:col-span-7) */}
        <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative">
          <motion.div style={{ y, opacity }} className="absolute inset-0">
            <EnterpriseCommandNetwork />
          </motion.div>
          
          {/* Apply For Internships - Bottom Right */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20">
            <Link 
              href="https://erp.ecomsmart.world/form-builder/d11ad164-b3f5-4ebf-a2f3-e94cc3cc07c2-1779094293" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 bg-[#020617]/80 backdrop-blur-md border border-[#00D4FF]/30 hover:border-[#00D4FF] px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:shadow-[0_0_30px_rgba(0,212,255,0.25)] transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-xs font-mono text-white uppercase tracking-widest group-hover:text-[#00D4FF] transition-colors">
                Apply For Internships
              </span>
              <ArrowRight size={14} className="text-[#A0A0B8] group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-[#A0A0B8] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <ChevronDown className="text-[#A0A0B8] animate-bounce" size={16} />
      </motion.div>

    </section>
  );
}
