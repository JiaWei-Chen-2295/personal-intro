
import React from 'react';
import { ArchitectureLayer } from '../types';
import BentoItem from './BentoItem';

interface LayerProps {
  layer: ArchitectureLayer;
  index: number;
}

const Layer: React.FC<LayerProps> = ({ layer, index }) => {
  const colorMap: Record<string, string> = {
    purple: 'text-purple-400',
    amber: 'text-amber-500',
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
  };

  const borderColorMap: Record<string, string> = {
    purple: 'border-purple-500/10',
    amber: 'border-amber-500/10',
    blue: 'border-blue-500/10',
    cyan: 'border-cyan-500/10',
  };

  const bgColorMap: Record<string, string> = {
    purple: 'bg-purple-500/30',
    amber: 'bg-amber-500/30',
    blue: 'bg-blue-500/30',
    cyan: 'bg-cyan-500/30',
  };

  return (
    <div 
      className={`relative rounded-[2rem] md:rounded-[2.5rem] border ${borderColorMap[layer.color]} bg-black/40 backdrop-blur-md p-6 md:p-8 lg:p-12 shadow-2xl transition-transform hover:bg-black/50`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Header - Visible on all screens for better readability */}
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8" style={{ transform: 'translateZ(60px)' }}>
        <div className={`h-8 w-1 md:h-12 md:w-1.5 rounded-full ${bgColorMap[layer.color]}`}></div>
        <div className="flex flex-col">
            <h2 className="text-xl md:text-3xl font-bold text-white tracking-wide">{layer.title}</h2>
            <span className={`text-xs md:text-base font-medium tracking-widest uppercase opacity-80 ${colorMap[layer.color]}`}>
              {layer.englishTitle}
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6" style={{ transformStyle: 'preserve-3d' }}>
        {layer.items.map((item) => (
          <BentoItem key={item.id} item={item} layerColor={layer.color} />
        ))}
      </div>
    </div>
  );
};

export default Layer;
