import React from 'react';
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
} from '@/app/ui/common/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import TechTag from './TechTag';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    techStack: string[];
    status: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    imageUrl,
    projectUrl,
    techStack,
    status,
}) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case '已完成':
                return 'bg-green-500';
            case '进行中':
                return 'bg-yellow-500';
            case '计划中':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <MorphingDialog>
            <MorphingDialogTrigger>
                <motion.div
                    data-project-tech={techStack.join(',')}
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black backdrop-blur-lg rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(status)}`}>
                                {status}
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">{subtitle}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </MorphingDialogTrigger>

            <MorphingDialogContent className="bg-zinc-900 border border-white/10">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-gray-400 mb-4">{subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-gray-300 whitespace-pre-line">{description}</p>
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        查看项目
                    </a>
                </div>
            </MorphingDialogContent>
        </MorphingDialog>
    );
};

export default ProjectCard;