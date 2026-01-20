
import React from 'react';
import { TechItem, Proficiency, Depth } from '../types';

interface BentoItemProps {
  item: TechItem;
  layerColor: string;
}

const colSpanClasses: Record<number, string> = {
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
};

const BentoItem: React.FC<BentoItemProps> = ({ item, layerColor }) => {
  const isExpert = item.proficiency.includes('Expert') || item.proficiency === Proficiency.EXPERT;
  const isAdvanced = item.proficiency.includes('Advanced') || item.proficiency === Proficiency.ADVANCED;

  const getCardStyle = () => {
    let base = "relative rounded-[2rem] border transition-all duration-700 overflow-hidden flex flex-col justify-between group h-full ";
    
    if (isExpert) {
      return base + "border-amber-500/50 bg-amber-950/40 shadow-[0_0_60px_-12px_rgba(245,158,11,0.2)]";
    }
    if (isAdvanced) {
      return base + "border-blue-500/30 bg-blue-950/40 shadow-[0_0_40px_-12px_rgba(59,130,246,0.15)]";
    }
    return base + "border-white/10 bg-slate-900/60 backdrop-blur-md";
  };

  const getBadgeStyle = () => {
    if (isExpert) return "bg-amber-500 text-black border-none";
    if (isAdvanced) return "border-blue-500/50 text-blue-400";
    return "border-white/10 text-slate-500";
  };

  const zTranslation = `translateZ(${item.depth}px)`;

  return (
    <div 
      className={`col-span-full ${colSpanClasses[item.colSpan] || 'md:col-span-6'} ${getCardStyle()} p-8 md:p-10`}
      style={{ transform: zTranslation, transformStyle: 'preserve-3d' }}
    >
      <div className="flex justify-between items-start mb-8" style={{ transform: 'translateZ(30px)' }}>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 duration-500 ${isExpert ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]' : 'bg-slate-800 text-slate-300'}`}>
          {item.iconType === 'fa' ? (
            <i className={`${item.icon} text-3xl`}></i>
          ) : (
            <span className="material-symbols-outlined text-4xl">{item.icon}</span>
          )}
        </div>
        <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase border transition-colors ${getBadgeStyle()}`}>
          {item.proficiency}
        </span>
      </div>

      <div style={{ transform: 'translateZ(20px)' }}>
        {item.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map(tag => (
              <span key={tag} className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-500 text-[9px] font-black tracking-widest uppercase border border-amber-500/20">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className={`font-bold mb-3 group-hover:text-white transition-colors ${isExpert ? 'text-3xl text-white' : 'text-xl text-slate-100'}`}>
          {item.name}
        </h3>
        <p className={`text-sm leading-relaxed font-medium ${isExpert ? 'text-slate-300' : 'text-slate-400'}`}>
          {item.description}
        </p>
      </div>

      {/* Glossy overlay effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-white/30 to-transparent transition-opacity duration-1000"></div>
    </div>
  );
};

export default BentoItem;
