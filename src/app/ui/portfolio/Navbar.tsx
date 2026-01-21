'use client';

import React from 'react';
import { Github, Mail, LayoutGrid, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4">
      <nav className="w-full max-w-5xl rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-3 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <span className="text-xl font-extrabold tracking-tighter text-white">
              JavierChen<span className="text-primary group-hover:text-blue-400 transition-colors">.</span>
            </span>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2 group py-2 px-4 rounded-full hover:bg-white/5">
              <LayoutGrid className="w-4 h-4 group-hover:scale-110 transition-transform text-primary" />
              <span>项目</span>
            </a>
            <a href="#articles" className="hover:text-white transition-colors flex items-center gap-2 group py-2 px-4 rounded-full hover:bg-white/5">
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform text-primary" />
              <span>文章</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a 
              href="https://github.com/JiaWei-Chen-2295" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:1601020332@qq.com"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
