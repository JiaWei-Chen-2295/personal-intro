'use client';

import React from 'react';
import { Background } from '@/app/ui/portfolio/Background';
import { Navbar } from '@/app/ui/portfolio/Navbar';
import { Hero } from '@/app/ui/portfolio/Hero';
import { FloatingSidebar } from '@/app/ui/portfolio/FloatingSidebar';
import { ScrollIndicator } from '@/app/ui/portfolio/ScrollIndicator';
import { ProgressBar } from '@/app/ui/portfolio/ProgressBar';
import { ProjectsSection } from '@/app/ui/portfolio/projects/ProjectsSection';
import TechStack3D from './ui/portfolio/TechStack3D/TechStack3D';

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans bg-background-dark text-white">
      {/* Background Elements (Fixed) */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col justify-center px-6 md:px-24">
            <Hero />
        </div>
        
        {/* Tech Stack 3D */}
        <TechStack3D />

        {/* Projects Section */}
        <ProjectsSection />
      </main>

      {/* Fixed UI Elements */}
     
      <ProgressBar />
    </div>
  );
}
