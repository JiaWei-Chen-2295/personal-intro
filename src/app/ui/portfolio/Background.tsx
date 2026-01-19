'use client';

import React from 'react';
import { Earth3D } from './Earth3D';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Dark Background - Deep Space */}
      <div className="absolute inset-0 bg-[#010204] opacity-100"></div>

      {/* Star Fields - Subtle and distant */}
      <div className="absolute inset-0 star-field stars-1 opacity-20"></div>
      <div className="absolute inset-0 star-field stars-2 opacity-20 rotate-12 scale-110"></div>

      {/* Cinematic Earth Position: Bottom Left, Looming Large */}
      <div className="absolute -left-[10%] -bottom-[20%] md:-bottom-[35%] md:-left-[5%] w-[110vw] h-[110vw] md:w-[65vw] md:h-[65vw] pointer-events-auto">
         
         {/* Container for the 3D Canvas */}
         {/* 1. CSS Mask: Softens the outer boundaries */}
         <div 
            className="w-full h-full relative"
            style={{
                maskImage: 'radial-gradient(circle at 45% 55%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)',
                WebkitMaskImage: 'radial-gradient(circle at 45% 55%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)'
            }}
         >
            <Earth3D className="w-full h-full" />
            
            {/* 2. Color Blending Overlay: The "Fog" Effect */}
            {/* This gradient matches the background color (#010204) and sits ON TOP of the 3D canvas.
                It forces the 3D earth to fade into the specific background color visually. */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_55%,transparent_30%,#010204_90%)] z-10 pointer-events-none"></div>
         </div>
         
         {/* Atmospheric Ambient Glow behind the earth - Broad and subtle */}
         <div className="absolute bottom-[25%] left-[25%] w-2/3 h-2/3 bg-blue-900/15 blur-[150px] rounded-full -z-10"></div>
      </div>

      {/* Decorative Elements - pushed to right side to balance visual weight */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full"></div>
      
      {/* Vignette Overlay for film look - Ties everything together */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010204_100%)] opacity-60 pointer-events-none z-20"></div>
    </div>
  );
};
