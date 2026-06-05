"use client";

import React, { useState, useEffect } from "react";
import { useEngineStore } from "@/store/engineStore";
import EnterpriseMap from "@/components/contact/EnterpriseMap";
import FAQSection from "@/components/sections/FAQSection";
import { Clock, MapPin, ShieldCheck, Mail, Phone, Code, Cloud, Database, Cpu, Users, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 bg-[#020617] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* =========================================
            SECTION 1: CONTACT HERO
            ========================================= */}
        <div className="text-center mb-16">
          <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Initiate Engagement</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.05] mb-6">
            Architect The Next Era<br/>Of Your Enterprise
          </h1>
          <p className="text-[#A0A0B8] text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Skip the sales pitch. Speak directly with senior architects to evaluate your infrastructure, design deterministic AI platforms, or modernize your legacy cloud topology.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#050816] p-4 border border-[#10B981]/20 rounded-full mx-auto">
            <ShieldCheck className="text-[#10B981] shrink-0" size={16} />
            <p className="text-[10px] text-white font-bold uppercase tracking-widest">Protected by strict NDA. Zero data sharing prior to evaluation.</p>
          </div>
        </div>

        {/* =========================================
            SECTION 2: ENGAGEMENT OPTIONS
            ========================================= */}
        <div className="mb-20">
          <h2 className="font-display text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full"></span>
            Engagement Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
              <Code className="text-[#A0A0B8]" size={16} />
              <span className="text-xs text-white uppercase font-bold tracking-wider">Architecture Reviews</span>
            </div>
            <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
              <Cpu className="text-[#A0A0B8]" size={16} />
              <span className="text-xs text-white uppercase font-bold tracking-wider">AI Strategy</span>
            </div>
            <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
              <Cloud className="text-[#A0A0B8]" size={16} />
              <span className="text-xs text-white uppercase font-bold tracking-wider">Cloud Assessments</span>
            </div>
            <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
              <Database className="text-[#A0A0B8]" size={16} />
              <span className="text-xs text-white uppercase font-bold tracking-wider">Data Platforms</span>
            </div>
            <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3 md:col-span-2">
              <Users className="text-[#A0A0B8]" size={16} />
              <span className="text-xs text-white uppercase font-bold tracking-wider">Dedicated Engineering Teams</span>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 3: OFFICE INFO & COMPACT MAP
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-stretch">
          {/* Office Info */}
          <div className="flex flex-col h-full">
            <h2 className="font-display text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></span>
              Bengaluru Headquarters
            </h2>
            <div className="bg-[#050816] border border-white/5 p-6 rounded-xl space-y-5 flex-grow">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#A0A0B8] shrink-0 mt-0.5" size={16} />
                <p className="text-white text-xs leading-relaxed">
                  Novel Tech Park, 46/4 Hosur Road,<br/>
                  Kudlu Gate, Krishna Reddy Industrial Area,<br/>
                  Hosapalaya, Muneshwara Nagar,<br/>
                  Bengaluru, Karnataka 560068
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <Phone className="text-[#A0A0B8] shrink-0" size={16} />
                <a href="tel:+919986247282" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">+91 99862 47282</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#A0A0B8] shrink-0" size={16} />
                <a href="mailto:info@i-cronus.com" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">info@i-cronus.com</a>
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <Clock className="text-[#00D4FF] shrink-0" size={16} />
                <div>
                  <p className="text-[10px] font-mono text-[#00D4FF] tracking-widest uppercase mb-1">Response SLA</p>
                  <p className="text-xs text-[#A0A0B8]">&lt; 24 Business Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Map */}
          <div className="h-full min-h-[300px] border border-white/10 rounded-xl overflow-hidden relative mt-16 md:mt-0">
             <div className="absolute inset-0 bg-[#020617] pointer-events-none" /> {/* Prevents map from dominating loading state */}
             <EnterpriseMap />
          </div>
        </div>

        {/* =========================================
            SECTION 4: CONTACT FORM
            ========================================= */}
        <div className="mb-24">
          <div className="bg-[#050816] border border-white/10 p-8 sm:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#10B981]" />
            
            <div className="mb-10 text-center">
              <h3 className="font-display text-3xl font-bold text-white uppercase mb-3">Request Briefing</h3>
              <p className="text-[#A0A0B8] text-sm">Direct routing to our principal architecture group.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center min-h-[400px]">
                <div className="w-16 h-16 border-2 border-[#00D4FF] rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-[#00D4FF] rounded-full animate-ping" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2 uppercase">Request Received</h3>
                <p className="text-[#A0A0B8] font-mono text-xs">An architect will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Name</label>
                    <input required type="text" className="w-full bg-[#020617] border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Work Email</label>
                    <input required type="email" className="w-full bg-[#020617] border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Company</label>
                  <input required type="text" className="w-full bg-[#020617] border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-colors" />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Engagement Type</label>
                  <select className="w-full bg-[#020617] border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none">
                    <option>Architecture Review</option>
                    <option>AI Strategy Session</option>
                    <option>Cloud Assessment</option>
                    <option>Data Platform Review</option>
                    <option>Dedicated Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Transformation Goals</label>
                  <textarea required rows={5} className="w-full bg-[#020617] border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00D4FF] transition-colors resize-none" placeholder="Briefly describe your objectives and current stack..." />
                </div>

                <button type="submit" className="w-full bg-white text-black hover:bg-[#00D4FF] hover:text-black transition-colors py-4 uppercase tracking-widest text-xs font-bold mt-4">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 5: FAQ
          ========================================= */}
      <div className="border-t border-white/5 py-24 bg-[#020617]">
         <FAQSection />
      </div>

      {/* =========================================
          SECTION 6: FINAL CTA
          ========================================= */}
      <div className="py-24 border-t border-white/5 bg-[#050816] text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-4">Ready to Modernize?</h2>
          <p className="text-[#A0A0B8] text-sm mb-8">
            Stop patching legacy systems. Build the deterministic, scalable infrastructure your enterprise deserves.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-solid inline-flex items-center gap-2">
            Return to Form <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
