import React, { useState, useMemo, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { TextHoverEffect } from './TextHoverEffect';
import { projects } from './data';
import { Project } from './types';
import { Search, Filter, ChevronDown, SearchX } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('全部');

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === '全部' || project.tags.some(tag => tag.includes(filter));
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  // Extract unique high-level tags for the filter dropdown
  const filterOptions = ['全部', 'Spring Boot', 'React', 'Vert.x', 'AI'];

  return (
    <div id="projects" ref={containerRef} className="relative min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Header */}
        <header className="text-center mb-16">
          <div className="mb-6 h-[8rem] md:h-[13rem] flex items-center justify-center w-full">
             <TextHoverEffect text="我的项目" />
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            探索高并发微服务、响应式编程与 AI 智能体的前沿技术。
          </p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 max-w-2xl mx-auto">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text"
              placeholder="搜索项目..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all placeholder-slate-600 backdrop-blur-sm"
            />
          </div>
          <div className="relative shrink-0 w-full md:w-auto">
             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
             <select 
               value={filter}
               onChange={(e) => setFilter(e.target.value)}
               className="w-full md:w-48 appearance-none bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-10 pr-10 text-slate-300 focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer hover:bg-white/10 transition-all font-medium"
             >
               {filterOptions.map(opt => <option key={opt} value={opt} className="bg-slate-900 text-slate-200">{opt}</option>)}
             </select>
             <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard 
                project={project} 
                onClick={setSelectedProject} 
              />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <SearchX className="mx-auto text-slate-800 mb-4" size={64} />
            <p className="text-slate-500 text-lg">未找到符合条件的项目。</p>
          </div>
        )}
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};
