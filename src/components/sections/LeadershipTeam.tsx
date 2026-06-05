import React from 'react';

export default function LeadershipTeam() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Leadership & Delivery Team</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
          The Engineers Behind The Enterprise
        </h2>
        <p className="mt-4 text-base text-[#A0A0B8] leading-relaxed">
          The technologists and engineering leaders behind the intelligent systems, cloud platforms, automation solutions, and enterprise applications delivered by i-Cronus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
        
        {/* Shaik Maneesha */}
        <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group lg:scale-95 transition-all duration-500 hover:border-white/20">
          <div className="relative overflow-hidden bg-[#050816]">
            <img 
              src="/team/shaik-maneesha.jpg" 
              alt="Shaik Maneesha" 
              className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
          </div>
          <div className="p-5 relative z-10 -mt-16">
            <p className="text-[#00D4FF] font-mono text-[9px] tracking-widest uppercase mb-1">ICS1113</p>
            <h3 className="font-display text-lg font-bold text-white mb-0.5 uppercase">Shaik Maneesha</h3>
            <p className="text-[#A0A0B8] text-xs">Tech Lead</p>
          </div>
        </div>

        {/* Gurram Hemanth (Featured) */}
        <div className="bg-[#050816] border border-[#00D4FF]/30 rounded-xl overflow-hidden relative group lg:scale-105 shadow-[0_0_30px_rgba(0,212,255,0.05)] z-20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/50">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/5 to-transparent pointer-events-none" />
          <div className="relative overflow-hidden bg-[#050816]">
            <img 
              src="/team/gurram-hemanth.jpg" 
              alt="Gurram Hemanth" 
              className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
          </div>
          <div className="p-6 relative z-10 -mt-20">
            <p className="text-[#00D4FF] font-mono text-[9px] tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              ICS1119
            </p>
            <h3 className="font-display text-xl font-bold text-white mb-0.5 uppercase">Gurram Hemanth</h3>
            <p className="text-[#A0A0B8] text-xs mb-4">Associate Engineer</p>
            
            <div className="space-y-2">
              <p className="text-[8px] font-mono text-[#5A5A5A] uppercase tracking-widest border-b border-white/5 pb-1">Focus Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {["AI Eng", "Cloud Eng", "Platform Dev", "App Dev", "Automation"].map(area => (
                  <span key={area} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-sm text-[#A0A0B8] whitespace-nowrap">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kallepalli Lakshmi Devi */}
        <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group lg:scale-95 transition-all duration-500 hover:border-white/20">
          <div className="relative overflow-hidden bg-[#050816]">
            <img 
              src="/team/kallepalli-lakshmi.jpg" 
              alt="Kallepalli Lakshmi Devi" 
              className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
          </div>
          <div className="p-5 relative z-10 -mt-16">
            <p className="text-[#00D4FF] font-mono text-[9px] tracking-widest uppercase mb-1">ICS1121</p>
            <h3 className="font-display text-lg font-bold text-white mb-0.5 uppercase">Kallepalli Lakshmi Devi</h3>
            <p className="text-[#A0A0B8] text-xs">Associate Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
