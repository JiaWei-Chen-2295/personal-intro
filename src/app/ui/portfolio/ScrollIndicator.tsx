'use client';

import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 animate-bounce cursor-pointer">
      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-semibold">
        Scroll
      </span>
      <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
        <div className="w-1 h-1 bg-slate-400 rounded-full animate-[bounce_1s_infinite]" />
      </div>
    </div>
  );
};
