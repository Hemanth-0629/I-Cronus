"use client";

import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import TransformationGap from "@/components/sections/TransformationGap";
import IntelligentEnterprise from "@/components/sections/IntelligentEnterprise";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import ProcessClarity from "@/components/sections/ProcessClarity";
import HowWeWork from "@/components/sections/HowWeWork";
import ProofOfExecution from "@/components/sections/ProofOfExecution";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import FAQSection from "@/components/sections/FAQSection";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import Footer from "@/components/global/Footer";
import { useEngineStore } from "@/store/engineStore";

export default function Home() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="flex flex-col">
      <Hero />
      <TransformationGap />
      <IntelligentEnterprise />
      <WhatWeBuild />
      <ProcessClarity />
      <HowWeWork />
      <ProofOfExecution />
      <IndustriesPreview />
      <CaseStudiesPreview />
      <LeadershipTeam />
      <FAQSection />
      <Footer />
    </div>
  );
}
