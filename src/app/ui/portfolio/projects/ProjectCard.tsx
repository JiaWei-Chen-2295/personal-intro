import React from 'react';
import { Project } from './types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isOngoing = project.status === 'In Progress';
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };
  
  const statusMap = {
    'Completed': '已完成',
    'In Progress': '进行中',
    'Maintenance': '维护中'
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
      className="glass-panel group relative rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.1), transparent 40%)`
        }}
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-mono">{project.period}</p>
        </div>
        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
          isOngoing 
            ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
            : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
        }`}>
          {statusMap[project.status] || project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-medium text-slate-300 group-hover:bg-white/10 transition-colors">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-slate-500">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Image Preview */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
        />
        <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="text-white bg-primary/80 p-1.5 rounded-full backdrop-blur-sm shadow-lg">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
