"use client";

import React from "react";
import { ShieldCheck, Target, MapPin, Eye, Award } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import EngagementModel from "@/components/sections/EngagementModel";

const deliveryStats = [
  { icon: MapPin,    title: "Global Coverage",     desc: "North America & EMEA delivery offices" },
  { icon: ShieldCheck, title: "Compliance Safety", desc: "Active ISO 27001 & SOC 2 tracking" },
  { icon: Award,    title: "99.999% Availability", desc: "SLA guaranteed system parameters" },
];

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="pt-24 pb-24 overflow-hidden">
        
        {/* Background Effects */}
        <div className="fixed top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.03)_0%,transparent_70%)] pointer-events-none" />

        {/* Hero */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-white/10 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Our Identity</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight uppercase">
              Engineering High-Trust Digital Infrastructures
            </h1>
            <p className="mt-6 text-base text-[#A0A0B8] leading-relaxed max-w-2xl">
              We partner with global enterprise leaders to de-risk complex technology
              integrations, combining engineering excellence, AI specialisation, and
              transparent delivery cycles.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-white/10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Our Foundation</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
                Re-Defining System Integrity
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base text-[#A0A0B8] leading-relaxed">
              <p>
                i-Cronus was established to satisfy a critical enterprise need: high-performance
                software engineering backed by senior advisory accountability. We saw corporations
                struggle with generic outsourcing models that delivered sluggish, vulnerable
                codebases causing production downtime.
              </p>
              <p>
                By establishing a strict engineering culture, we focused on transaction clearings,
                container orchestrations, and data ingestion architectures. Today, we deliver
                mission-critical networks that handle peak transactional loads with zero failovers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-white/10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-8 space-y-5 border-l-[3px] border-l-[#00D4FF] bg-[#050816] border border-white/5 shadow-sm rounded-sm transition-colors hover:border-white/10">
              <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-[#020617]">
                <Target className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="text-sm text-[#A0A0B8] leading-relaxed">
                To engineer secure, resilient, and highly available technological infrastructures
                that protect enterprise assets, accelerate digital transformation, and unlock
                automated operational efficiency.
              </p>
            </div>

            <div className="p-8 space-y-5 border-l-[3px] border-l-[#10B981] bg-[#050816] border border-white/5 shadow-sm rounded-sm transition-colors hover:border-white/10">
              <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-[#020617]">
                <Eye className="w-5 h-5 text-[#10B981]" />
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                Our Vision
              </h3>
              <p className="text-sm text-[#A0A0B8] leading-relaxed">
                To become the global benchmark for high-trust technology consulting, recognised
                by enterprise leaders as the definitive partner for building and scaling
                mission-critical systems.
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Model */}
        <section className="border-b border-white/10 relative z-10">
          <EngagementModel />
        </section>

        {/* Leadership & Delivery Team */}
        <section className="px-6 max-w-7xl mx-auto py-24 border-b border-white/10 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Leadership & Delivery Team</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
              The Engineers Behind The Enterprise
            </h2>
            <p className="mt-4 text-base text-[#A0A0B8] leading-relaxed">
              The technologists and engineering leaders behind the intelligent systems, cloud platforms, automation solutions, and enterprise applications delivered by i-Cronus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Shaik Maneesha */}
            <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group lg:scale-95 transition-all duration-500 hover:border-white/20">
              <div className="aspect-[3/4] relative overflow-hidden bg-[#020617]">
                <img 
                  src="/team/shaik-maneesha.jpg" 
                  alt="Shaik Maneesha" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800/020617/334155?text=Shaik+Maneesha" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
              </div>
              <div className="p-6 relative z-10 -mt-20">
                <p className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-2">ICS1113</p>
                <h3 className="font-display text-xl font-bold text-white mb-1 uppercase">Shaik Maneesha</h3>
                <p className="text-[#A0A0B8] text-sm">Tech Lead</p>
              </div>
            </div>

            {/* Gurram Hemanth (Featured) */}
            <div className="bg-[#050816] border border-[#00D4FF]/30 rounded-xl overflow-hidden relative group lg:scale-110 shadow-[0_0_40px_rgba(0,212,255,0.05)] z-20 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/50">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/5 to-transparent pointer-events-none" />
              <div className="aspect-[3/4] relative overflow-hidden bg-[#020617]">
                <img 
                  src="/team/gurram-hemanth.jpg" 
                  alt="Gurram Hemanth" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800/020617/334155?text=Gurram+Hemanth" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
              </div>
              <div className="p-8 relative z-10 -mt-24">
                <p className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                  ICS1119
                </p>
                <h3 className="font-display text-2xl font-bold text-white mb-1 uppercase">Gurram Hemanth</h3>
                <p className="text-[#A0A0B8] text-sm mb-6">Associate Engineer</p>
                
                <div className="space-y-3">
                  <p className="text-[9px] font-mono text-[#5A5A5A] uppercase tracking-widest border-b border-white/5 pb-2">Engineering Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Engineering", "Cloud Engineering", "Platform Development", "Enterprise Applications", "Automation Systems"].map(area => (
                      <span key={area} className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-[#A0A0B8] whitespace-nowrap">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Kallepalli Lakshmi Devi */}
            <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group lg:scale-95 transition-all duration-500 hover:border-white/20">
              <div className="aspect-[3/4] relative overflow-hidden bg-[#020617]">
                <img 
                  src="/team/kallepalli-lakshmi.jpg" 
                  alt="Kallepalli Lakshmi Devi" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800/020617/334155?text=Kallepalli+Lakshmi+Devi" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
              </div>
              <div className="p-6 relative z-10 -mt-20">
                <p className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-2">ICS1121</p>
                <h3 className="font-display text-xl font-bold text-white mb-1 uppercase">Kallepalli Lakshmi Devi</h3>
                <p className="text-[#A0A0B8] text-sm">Associate Engineer</p>
              </div>
            </div>

          </div>
        </section>

        {/* Global Delivery */}
        <section className="px-6 max-w-7xl mx-auto py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden border border-white/10 border-t-[3px] border-t-[#00D4FF] bg-[#050816] rounded-sm">
            {deliveryStats.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className={`p-8 text-center space-y-3 ${idx < 2 ? "border-b md:border-b-0 md:border-r border-white/5" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm mx-auto bg-[#020617]">
                  <Icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <h4 className="font-display text-base font-bold text-white uppercase">{title}</h4>
                <p className="text-xs text-[#A0A0B8]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
