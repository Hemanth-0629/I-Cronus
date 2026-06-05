"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, X, Briefcase } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-8 px-6 overflow-hidden z-10">
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />

        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - CTA */}
          <div ref={ref} className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-xs font-semibold text-[#00D4FF] tracking-[0.2em] uppercase mb-4"
              >
                Start The Transformation
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.1] max-w-xl uppercase"
              >
                Ready to engineer the intelligent enterprise?
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link href="/contact" className="btn-solid inline-flex items-center gap-3 !px-8 !py-4 text-sm tracking-widest uppercase font-bold">
                Talk To An Architect
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Middle Section - 5 Columns mega footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
            
            {/* Column 1 - Company */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Logo width={200} height={40} className="text-white" />
              </Link>
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-4 mt-2">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">Why i-Cronus</Link></li>
                <li><Link href="/about" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">How We Work</Link></li>
                <li><Link href="/careers" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">Contact</Link></li>
                <li><button onClick={() => setIsModalOpen(true)} className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors flex items-center gap-2"><Briefcase size={12} /> Employee Operations</button></li>
              </ul>
            </div>

            {/* Column 2 - Solutions */}
            <div>
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Capabilities</h4>
              <ul className="space-y-4">
                {['Solutions', 'Services', 'Industries', 'Technologies'].map(item => (
                  <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Knowledge */}
            <div>
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Knowledge</h4>
              <ul className="space-y-4">
                {['Insights', 'Resources', 'Case Studies'].map(item => (
                  <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="lg:col-span-2">
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Global Headquarters</h4>
              <ul className="space-y-4 text-xs text-[#A0A0B8]">
                <li><a href="tel:+919986247282" className="hover:text-[#00D4FF] transition-colors">+91 99862 47282</a></li>
                <li><a href="mailto:info@i-cronus.com" className="hover:text-[#00D4FF] transition-colors">info@i-cronus.com</a></li>
                <li><a href="https://www.linkedin.com/company/icronus-software-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition-colors flex items-center gap-2"><LinkedinIcon size={12} /> LinkedIn</a></li>
                <li className="pt-2 border-t border-white/10 mt-4 leading-relaxed">
                  Novel Tech Park,<br/>
                  46/4 Hosur Road, Kudlu Gate,<br/>
                  Bengaluru, Karnataka 560068
                </li>
              </ul>
            </div>

          </div>

          {/* Enterprise Trust Center */}
          <div className="bg-[#050816] border border-white/5 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#10B981]" size={20} />
              <div>
                <h4 className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">Enterprise Trust Center</h4>
                <p className="text-[10px] text-[#A0A0B8] mt-1">Information Security, Compliance, and Data Governance</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Security', 'Privacy', 'Terms', 'Accessibility'].map(item => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-[10px] font-mono text-[#A0A0B8] uppercase hover:text-white transition-colors tracking-wider">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-[#A0A0B8] text-[10px] font-mono uppercase tracking-widest">
              <span>© {new Date().getFullYear()} i-Cronus Software Labs</span>
            </div>
          </div>

        </div>
      </footer>

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
                  <Briefcase className="text-[#8B5CF6]" size={24} />
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
