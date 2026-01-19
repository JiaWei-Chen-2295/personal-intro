'use client';

import React from 'react';
import { User, Code, BookOpen, Mail } from 'lucide-react';

export const FloatingSidebar: React.FC = () => {
  const navItems = [
    { icon: User, label: "About", active: true },
    { icon: Code, label: "Projects", active: false },
    { icon: BookOpen, label: "Articles", active: false },
    { icon: Mail, label: "Contact", active: false },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-full">
      {navItems.map((item, index) => (
        <button 
          key={index}
          className={`
            w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 group relative
            ${item.active 
              ? 'bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-110' 
              : 'text-slate-400 hover:text-white hover:bg-white/10 hover:scale-105'
            }
          `}
          aria-label={item.label}
        >
          <item.icon className="w-5 h-5" />
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-1 bg-background-dark/90 text-white text-xs rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};
