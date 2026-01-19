'use client';

import React from 'react';
import { Github, Mail, LayoutGrid, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 px-6 py-4 bg-[#020617]/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <span className="text-2xl font-extrabold tracking-tighter text-white">
            JavierChen<span className="text-primary group-hover:text-blue-400 transition-colors">.</span>
          </span>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium uppercase tracking-widest text-slate-300">
          <a href="#projects" className="hover:text-primary transition-colors flex items-center gap-2 group">
            <LayoutGrid className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>项目</span>
          </a>
          <a href="#articles" className="hover:text-primary transition-colors flex items-center gap-2 group">
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>文章</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/JiaWei-Chen-2295" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:1601020332@qq.com"
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
