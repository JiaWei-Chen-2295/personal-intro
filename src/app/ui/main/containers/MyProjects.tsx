import React, { useState } from 'react';
import ProjectCard from "@/app/ui/main/components/ProjectCard";
import {TextShimmerWave} from "@/app/ui/common/text-shimmer-wave";
import {AnimatedGroup} from '@/app/ui/common/animated-group';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';

const MyProjects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const projects = [
        {
            title: '用户授权系统',
            subtitle: '全栈后台统一用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
            techStack: ['Spring Boot', 'React', 'Docker'],
            status: '已完成'
        },
        {
            title: 'AI我的英语',
            subtitle: 'AI驱动自定义英语学习语料app',
            description: `
                技术栈: Kotlin + Jetpack Compose + OkHttp
            `,
            imageUrl: '/andriod_app/small.jpg',
            projectUrl: 'https://www.are.na/block/12759029',
            techStack: ['Kotlin', 'Android'],
            status: '进行中'
        },
        {
            title: '纪念小程序',
            subtitle: '智能图片集',
            description: `
                技术栈: Vue3 + Tailwind CSS + Pinia + axios
            `,
            imageUrl: '/record-me.jpg',
            projectUrl: 'https://www.are.na/block/12759029',
            techStack: ['Vue3', 'Tailwind CSS'],
            status: '已完成'
        },
        {
            title: '灵魂之交',
            subtitle: '大数据用户推荐',
            description: `
                技术栈: Spring Boot + Mybatis Plus + swagger API 文档 + Vue3 + vant UI + ElasticSearch
            `,
            imageUrl: '/friend-match.png',
            projectUrl: 'https://www.are.na/block/12759029',
            techStack: ['Spring Boot', 'Vue3', 'ElasticSearch'],
            status: '已完成'
        },
    ];

    // 获取所有唯一的技术栈标签
    const allTechStack = Array.from(new Set(projects.flatMap(project => project.techStack)));

    // 过滤项目
    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTech = !selectedTech || project.techStack.includes(selectedTech);
        return matchesSearch && matchesTech;
    });

    return (
        <div id="project" className="h-full min-h-screen w-full relative overflow-hidden">
            {/* 背景效果 */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="pt-20 flex items-center content-center flex-col">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-6xl font-bold text-white">
                        我的项目
                    </span>
                </motion.h2>

                <TextShimmerWave
                    className='font-mono text-sm text-center my-8'
                    duration={1}
                >
                    点击卡片查看详情和体验网址...
                </TextShimmerWave>

                {/* 搜索和筛选区域 */}
                <div className="w-full max-w-4xl px-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div className="relative flex-1 max-w-md">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="搜索项目..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFilter className="text-gray-400" />
                            <select
                                value={selectedTech || ''}
                                onChange={(e) => setSelectedTech(e.target.value || null)}
                                className="px-4 py-2 rounded-lg bg-white/10 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">所有技术栈</option>
                                {allTechStack.map(tech => (
                                    <option key={tech} value={tech}>{tech}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* 项目卡片网格布局 */}
            <div className="flex items-center content-center flex-col">
                <AnimatedGroup
                    className='grid grid-cols-1 gap-11 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
                    preset='scale'
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            techStack={project.techStack}
                            status={project.status}
                        />
                    ))}
                </AnimatedGroup>
            </div>
        </div>
    );
};

export default MyProjects;
