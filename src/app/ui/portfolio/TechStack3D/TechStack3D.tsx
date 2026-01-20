
import React, { useState, useEffect } from 'react';
import Layer from './components/Layer';
import { LAYERS } from './constants';
import { TextHoverEffect } from '../projects/TextHoverEffect';
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const TechStack3D: React.FC = () => {
  const [is3D, setIs3D] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 移动端默认关闭3D效果
    if (isMobile()) {
        setIs3D(false);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!is3D) return;
      // Normalized coordinates from -1 to 1 for perspective rotation
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x: x * 8, y: y * 8 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [is3D]);

  const toggle3D = () => {
    setIs3D(!is3D);
    if (is3D) setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* 移除背景网格和光晕，让网站主背景透出来 */}
      
      <main className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Hero Header */}
        <header className="text-center mb-16">
          <div className="mb-6 h-[8rem] md:h-[13rem] flex items-center justify-center w-full">
             <TextHoverEffect text="技术栈" />
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            深度掌握的全栈技术体系与架构思维，构建高性能、高可用的现代应用。
          </p>
        </header>

        {/* 3D Perspective Container for Tech Layers */}
        <div 
          className="relative transition-all duration-700 ease-out perspective-container"
          style={{ 
            transform: is3D 
              ? `rotateX(${12 - mousePos.y}deg) rotateY(${-3 + mousePos.x}deg)` 
              : 'rotateX(0deg) rotateY(0deg)'
          }}
        >
          {/* Central Structural Line */}
          <div 
            className="hidden lg:block absolute -left-20 top-10 bottom-10 w-1 rounded-full z-[-1] opacity-20"
            style={{ 
              background: 'linear-gradient(to bottom, #a855f7, #3b82f6, #f59e0b, #06b6d4)',
              transform: 'translateZ(-40px)'
            }}
          />

          <div className="flex flex-col gap-24">
            {LAYERS.map((layer, idx) => (
              <Layer key={layer.id} layer={layer} index={idx} />
            ))}
          </div>
        </div>
      </main>

      {/* Floating View Control */}
      <div className="absolute right-8 bottom-8 z-[100]">
        <button 
          onClick={toggle3D}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-2xl backdrop-blur-xl border ${
            is3D 
              ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' 
              : 'bg-slate-900/80 text-slate-500 border-white/10 hover:text-white'
          }`}
          title={is3D ? "切换至平面视图" : "切换至 3D 视图"}
        >
          <span className="material-symbols-outlined text-3xl font-light">
            {is3D ? 'layers' : 'view_in_ar'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default TechStack3D;
