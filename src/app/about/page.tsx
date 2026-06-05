"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEngineStore } from "@/store/engineStore";

const timeline = [
  { year: "2015", title: "The Monolith Era", desc: "Founded to untangle extreme technical debt in legacy financial mainframes." },
  { year: "2018", title: "The Cloud Migration", desc: "Pioneered multi-region active-active K8s deployments before it was a standard." },
  { year: "2021", title: "The Data Streaming Shift", desc: "Transitioned global supply chains from batch ETLs to real-time Kafka lakehouses." },
  { year: "2024+", title: "The Agentic AI Era", desc: "Deploying sovereign, deterministic LLM orchestrations for strict regulatory environments." }
];

function TimelineBlock({ item }: { item: { year: string, title: string, desc: string } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <div ref={ref} className="py-12 px-6">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: isInView ? 1 : 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative border-l border-[#60A5FA]/30 pl-8"
      >
        <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full transition-colors duration-500 ${isInView ? 'bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]' : 'bg-[#1E293B]'}`} />
        <span className="text-[10px] font-mono text-[#00D4FF] tracking-[0.2em] mb-2 block">
          SYSTEM ERA // {item.year}
        </span>
        <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase">
          {item.title}
        </h3>
        <p className="text-[#A0A0B8] text-sm leading-relaxed max-w-sm">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("EVOLUTION");
    return () => setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block h-screen sticky top-0" />
        
        <div className="flex flex-col pb-24">
           <div className="pt-32 pb-12 px-6 border-b border-white/10 mb-8">
              <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Corporate Directive</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] mb-6">
                ARCHITECTS OF<br/>SCALE
              </h1>
              <p className="text-[#A0A0B8] text-lg max-w-md">
                We exist to build the invisible infrastructure that prevents systemic collapse in the world&apos;s most critical enterprises.
              </p>
           </div>

           <div className="px-6 space-y-12 mb-16">
             <div>
               <h2 className="font-mono text-xs text-[#00D4FF] tracking-widest uppercase mb-4 border-b border-[#00D4FF]/20 pb-2">Mission & Vision</h2>
               <p className="text-[#A0A0B8] text-sm leading-relaxed mb-4">
                 <strong className="text-white">Mission:</strong> To engineer flawless, deterministic infrastructure for environments where downtime is catastrophic.
               </p>
               <p className="text-[#A0A0B8] text-sm leading-relaxed">
                 <strong className="text-white">Vision:</strong> A future where enterprise technology systems are entirely autonomous, self-healing, and universally secure by default.
               </p>
             </div>

             <div>
               <h2 className="font-mono text-xs text-[#60A5FA] tracking-widest uppercase mb-4 border-b border-[#60A5FA]/20 pb-2">Engineering Philosophy</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                   <h3 className="text-white text-sm font-bold mb-2">1. Determinism Over Magic</h3>
                   <p className="text-[#A0A0B8] text-xs leading-relaxed">We do not trust probabilistic APIs for business logic. We wrap LLMs in strict state machines (LangGraph) to ensure outputs are reproducible and safe.</p>
                 </div>
                 <div>
                   <h3 className="text-white text-sm font-bold mb-2">2. Architecture Dictates Outcome</h3>
                   <p className="text-[#A0A0B8] text-xs leading-relaxed">Code is cheap; architecture is expensive. We spend weeks in discovery ensuring the topology is correct before a single repository is initialized.</p>
                 </div>
                 <div>
                   <h3 className="text-white text-sm font-bold mb-2">3. Zero-Trust by Default</h3>
                   <p className="text-[#A0A0B8] text-xs leading-relaxed">Every microservice must mutually authenticate. No implicit trust boundaries exist, even within our own private VPCs.</p>
                 </div>
                 <div>
                   <h3 className="text-white text-sm font-bold mb-2">4. Infrastructure as Code</h3>
                   <p className="text-[#A0A0B8] text-xs leading-relaxed">If it cannot be destroyed and redeployed perfectly via Terraform in under 10 minutes, it is not production-ready.</p>
                 </div>
               </div>
             </div>

             <div>
               <h2 className="font-mono text-xs text-[#EC4899] tracking-widest uppercase mb-4 border-b border-[#EC4899]/20 pb-2">Operating & Delivery Principles</h2>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-[#EC4899] mt-1.5 shrink-0" />
                   <div>
                     <strong className="text-white text-sm">Extreme Ownership:</strong> We do not toss code over the wall. We build it, we deploy it, and we carry the pagers to maintain its SLA.
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-[#EC4899] mt-1.5 shrink-0" />
                   <div>
                     <strong className="text-white text-sm">Vendor Agnostic:</strong> We partner with AWS, Azure, and Databricks, but we architect to avoid vendor lock-in, ensuring you own your underlying data gravity.
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-[#EC4899] mt-1.5 shrink-0" />
                   <div>
                     <strong className="text-white text-sm">Metrics-Driven Delivery:</strong> Success is not &quot;project launched.&quot; Success is &quot;query latency reduced by 400ms&quot; or &quot;infrastructure spend reduced by 30%.&quot;
                   </div>
                 </li>
               </ul>
             </div>
           </div>


           <div className="px-6 mb-8">
             <h2 className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-6 border-b border-[#10B981]/20 pb-2">The Evolution Engine</h2>
             <p className="text-[#A0A0B8] text-sm mb-6">As our clients&apos; needs have expanded from monoliths to multi-agent swarms, our underlying engineering topologies have evolved with them.</p>
           </div>
           
           {timeline.map((item, idx) => (
             <TimelineBlock key={idx} item={item} />
           ))}
        </div>
      </div>
    </div>
  );
}
