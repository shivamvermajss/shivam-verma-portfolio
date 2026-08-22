"use client";

import React from "react";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { ExperienceSection } from "@/components/experience";
import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Projects */}
      <ProjectsSection />

      {/* 3. Skills & Tech Stack */}
      <SkillsSection />

      {/* 4. Experience, Credentials & Education */}
      <ExperienceSection />

      {/* 5. About Me */}
      <AboutSection />

      {/* 6. Contact & Signals */}
      <ContactSection />
    </main>
  );
}
