"use client";

import React, { useEffect } from "react";
import { ArrowRight, Terminal, Cloud, Database, Cpu, Lock, ShieldCheck, MapPin, Briefcase, Zap, Compass, Users } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { useEngineStore } from "@/store/engineStore";
import Link from "next/link";

const ERP_LINK = "https://erp.ecomsmart.world/form-builder/d11ad164-b3f5-4ebf-a2f3-e94cc3cc07c2-1779094293";

const JOBS = [
  {
    title: "Associate Software Engineer",
    exp: "0–2 Years",
    loc: "Bengaluru",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "REST APIs"],
    desc: "Build modern enterprise applications and customer-facing digital platforms. You will own features from ideation to production deployment.",
    growth: "Fast-track path to Software Engineer I with deep full-stack exposure.",
  },
  {
    title: "Associate AI Engineer",
    exp: "0–2 Years",
    loc: "Bengaluru",
    skills: ["Python", "LLMs", "LangChain", "LangGraph", "RAG", "Vector DBs"],
    desc: "Develop AI-powered enterprise applications and intelligent automation systems. Implement deterministic state machines over probabilistic models.",
    growth: "Direct mentorship from Principal AI Architects building production RAG pipelines.",
  },
  {
    title: "Frontend Engineer",
    exp: "1–3 Years",
    loc: "Bengaluru",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "WebGL (Bonus)"],
    desc: "Build high-performance user experiences and enterprise dashboards. Optimize rendering pipelines and construct robust design systems.",
    growth: "Lead frontend architecture for high-traffic client portals.",
  },
  {
    title: "Backend Engineer",
    exp: "1–3 Years",
    loc: "Bengaluru",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Cloud APIs"],
    desc: "Design scalable backend services, microservices, and platform integrations. Handle complex data mutations and strict security protocols.",
    growth: "Transition into complex distributed systems design and orchestration.",
  },
  {
    title: "Cloud & DevOps Engineer",
    exp: "1–4 Years",
    loc: "Bengaluru",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    desc: "Build and manage modern cloud infrastructure and deployment pipelines. Implement Infrastructure as Code and zero-trust security boundaries.",
    growth: "Evolve into a Site Reliability Engineer (SRE) managing multi-region clusters.",
  },
  {
    title: "Data Engineer",
    exp: "1–4 Years",
    loc: "Bengaluru",
    skills: ["SQL", "Python", "ETL", "Kafka", "Databricks", "Spark"],
    desc: "Design enterprise data platforms and analytics pipelines. Transform massive datasets into queryable, real-time intelligence lakes.",
    growth: "Architect massive-scale data topologies for Fortune 500 clients.",
  }
];

export default function CareersPageClient() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("NONE");
  }, [setActiveEngine]);

  return (
    <div className="bg-[#020617] min-h-screen font-sans text-white selection:bg-[#00D4FF]/30">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#A78BFA] font-mono text-[10px] tracking-widest uppercase mb-4 block">Careers at i-Cronus</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[1.05] tracking-tight mb-8">
            Build The Future Of<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A0A0B8]">Intelligent Systems</span>
          </h1>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mb-12 leading-relaxed">
            Join engineers building AI platforms, enterprise software, cloud systems, automation solutions and modern digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })} className="btn-solid inline-flex justify-center items-center gap-2">
              View Opportunities <ArrowRight size={16} />
            </button>
            <Link href={ERP_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex justify-center items-center gap-2">
              Apply Now (General)
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="py-24 px-6 border-b border-white/5 bg-[#050816]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold uppercase mb-4">Why Join i-Cronus?</h2>
            <p className="text-[#A0A0B8] text-sm max-w-xl">We treat engineering as a discipline, not a factory. We provide the autonomy, tools, and challenges necessary for rapid career acceleration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Engineering-First", icon: Terminal, desc: "Led by engineers. Code quality and deterministic architecture are our highest priorities." },
              { title: "Real Ownership", icon: ShieldCheck, desc: "You build it, you own it. No tossing code over the wall to QA. Full lifecycle responsibility." },
              { title: "Modern Stack", icon: Zap, desc: "React, Next.js, Python, Rust, Go, Kubernetes, Terraform. We use what works best at scale." },
              { title: "AI-First Dev", icon: Cpu, desc: "We are actively integrating LangGraph and sovereign LLMs into everything we build." },
              { title: "Cloud-Native", icon: Cloud, desc: "Multi-region, active-active topologies across AWS and Azure by default." },
              { title: "Learning Culture", icon: Compass, desc: "Continuous learning stipends, architecture reviews, and paid certifications." },
              { title: "Career Growth", icon: Briefcase, desc: "Meritocratic advancement. If you can architect systems, you will be given systems to architect." },
              { title: "Direct Mentorship", icon: Users, desc: "Pair programming and code reviews directly with Principal Architects." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#020617] border border-white/5 p-6 rounded-xl hover:border-[#00D4FF]/30 transition-colors">
                  <Icon className="text-[#00D4FF] mb-4" size={24} />
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{item.title}</h3>
                  <p className="text-xs text-[#A0A0B8] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section id="open-positions" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#10B981] font-mono text-[10px] tracking-widest uppercase mb-4 block">Hiring</span>
              <h2 className="font-display text-4xl font-bold uppercase">Open Positions</h2>
            </div>
            <p className="text-xs font-mono text-[#A0A0B8] uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded bg-[#050816]">
              Location: Bengaluru (Hybrid)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {JOBS.map((job, idx) => (
              <div key={idx} className="bg-[#050816] border border-white/10 p-8 rounded-xl flex flex-col h-full group hover:border-[#00D4FF]/40 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF]/0 to-transparent group-hover:via-[#00D4FF] transition-all duration-500" />
                
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="font-display text-xl font-bold uppercase">{job.title}</h3>
                  <span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-white whitespace-nowrap">{job.exp}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map(skill => (
                    <span key={skill} className="text-[9px] font-mono bg-white/5 px-2 py-1 rounded text-[#A0A0B8] uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <strong className="block text-[10px] text-[#00D4FF] uppercase tracking-widest mb-1">Responsibilities</strong>
                    <p className="text-xs text-[#A0A0B8] leading-relaxed">{job.desc}</p>
                  </div>
                  <div>
                    <strong className="block text-[10px] text-[#A78BFA] uppercase tracking-widest mb-1">Growth Path</strong>
                    <p className="text-xs text-[#A0A0B8] leading-relaxed">{job.growth}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#A0A0B8] text-xs">
                    <MapPin size={14} /> {job.loc} • Full Time
                  </div>
                  <Link href={ERP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Apply <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNSHIP PROGRAM ================= */}
      <section className="py-24 px-6 bg-[#050816]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#020617] border border-[#00D4FF]/20 rounded-2xl p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/5 blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Early Careers</span>
                <h2 className="font-display text-4xl font-bold uppercase mb-6">Launch Your Engineering Career</h2>
                <p className="text-[#A0A0B8] text-sm leading-relaxed mb-8">
                  Our 3–6 month intensive internship program is designed to transition academic talent into production-ready enterprise engineers. You won't be fetching coffee or fixing typos; you will be pushing code to staging on day one.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-wider">Software Eng Internship</span>
                    <span className="text-[10px] font-mono text-[#00D4FF]">React / Node</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-wider">AI Eng Internship</span>
                    <span className="text-[10px] font-mono text-[#00D4FF]">Python / RAG</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-wider">Cloud Eng Internship</span>
                    <span className="text-[10px] font-mono text-[#00D4FF]">AWS / Docker</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-wider">Data Eng Internship</span>
                    <span className="text-[10px] font-mono text-[#00D4FF]">SQL / ETL</span>
                  </div>
                </div>

                <Link href={ERP_LINK} target="_blank" rel="noopener noreferrer" className="btn-solid inline-flex justify-center items-center gap-2">
                  Apply For Internship <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex flex-col justify-center space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 border border-[#10B981]/30">
                    <Database size={16} className="text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-1">Real Enterprise Projects</h4>
                    <p className="text-xs text-[#A0A0B8] leading-relaxed">Work on actual production systems, client deliverables, and internal tools. High-stakes exposure under strict mentorship.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A78BFA]/10 flex items-center justify-center shrink-0 border border-[#A78BFA]/30">
                    <Terminal size={16} className="text-[#A78BFA]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-1">Learning Roadmap & Mentorship</h4>
                    <p className="text-xs text-[#A0A0B8] leading-relaxed">Weekly 1-on-1s with Principal Architects. Structured technology stack training spanning frontend, backend, and cloud topologies.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center shrink-0 border border-[#00D4FF]/30">
                    <Lock size={16} className="text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-1">Selection & Timeline</h4>
                    <p className="text-xs text-[#A0A0B8] leading-relaxed">Rigorous technical interview evaluating first-principles thinking. Top performers receive full-time offers upon graduation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
