import React, { useEffect, useState } from 'react';
import { Project } from './types';
import { X, Share2, GitMerge, CheckCircle, FileText, Server, ExternalLink, Copy } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const categoryMap: Record<string, string> = {
    backend: '后端',
    frontend: '前端',
    devops: '运维',
    ai: '人工智能',
    database: '数据库'
  };

  useEffect(() => {
    if (project) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'visible' : 'invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-5xl max-h-[90vh] border border-white/10 bg-[#0a0a0a] rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex justify-between items-start shrink-0 bg-black/20">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                {project.tags[0]} 架构
              </span>
              <div className="flex gap-2">
                {project.tags.slice(1).map(tag => (
                  <span key={tag} className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h1>
            <p className="text-slate-400 mt-1 max-w-2xl font-mono text-xs md:text-sm">{project.period} • {project.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:divide-x divide-white/10 min-h-full">
            
            {/* Left Column: Visuals & Architecture */}
            <div className="lg:col-span-7 p-6 md:p-8 space-y-8">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/50 h-64 md:h-80 group">
                <img 
                  src={project.image} 
                  alt="Architecture" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="flex items-center gap-2 text-white font-medium text-sm">
                    <Share2 className="text-primary" size={18} />
                    系统拓扑
                  </span>
                </div>
              </div>

              {/* Architecture Diagram / Flow */}
              <div className="border border-white/10 bg-white/5 p-6 rounded-xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                  <GitMerge className="text-primary" size={20} />
                  架构亮点
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                   {project.architecture?.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                       <CheckCircle className="text-primary mt-0.5" size={16} />
                       <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                     </div>
                   ))}
                </div>
                
                {/* Decorative Flow Lines (Mocking a diagram) */}
                <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 pointer-events-none">
                   <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary fill-none">
                      <path d="M10,90 Q50,50 90,10" strokeWidth="2" strokeDasharray="5,5" />
                      <circle cx="10" cy="90" r="3" className="fill-primary" />
                      <circle cx="90" cy="10" r="3" className="fill-primary" />
                   </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Details & Stack */}
            <div className="lg:col-span-5 p-6 md:p-8 bg-black/20 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FileText size={18} />
                  项目详情
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {project.longDescription}
                </p>
              </div>

              <div className="mb-auto">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Server size={18} />
                  技术栈
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                         <span className="text-sm text-slate-200 font-mono">{tech.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                        {categoryMap[tech.category] || tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
                  >
                    <span>查看代码库</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="px-4 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors flex items-center justify-center">
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
