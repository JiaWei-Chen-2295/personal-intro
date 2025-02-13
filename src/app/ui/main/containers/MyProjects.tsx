import React from 'react';
import ProjectCard from "@/app/ui/main/components/ProjectCard";
import {TextShimmerWave} from "@/app/ui/common/text-shimmer-wave";
import { AnimatedGroup } from '@/app/ui/common/animated-group';

const MyProjects = () => {
    const projects = [
        {
            title: '用户中心',
            subtitle: '全栈后台用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },
        {
            title: '用户中心',
            subtitle: '全栈后台用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro + Nginx
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },{
            title: '用户中心',
            subtitle: '全栈后台用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro + Nginx
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },{
            title: '用户中心',
            subtitle: '全栈后台用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro + Nginx
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },{
            title: '用户中心',
            subtitle: '全栈后台用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro + Nginx
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },{
            title: '用户中心',
            subtitle: '全栈后台用户管理系统',
            description: `
                技术栈: Spring Boot + Mybatis Plus + React + umi.js + Ant Design Pro + Nginx
                部署: Docker + Nginx + Linux 部署
                功能: 用户注册、登录、查询等基础功能
            `,
            imageUrl: '/user_center.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },
    ];

    return (
        <div id="project" className="h-full w-full">
            <div className={"pt-20 flex items-center content-center flex-col"}>

                <h2>
                    <span className="text-6xl font-bold text-white">
                        我的项目
                    </span>
                </h2>

                {/* 动画文字提示 */}
                <TextShimmerWave
                    className='font-mono text-sm text-center my-8'
                    duration={1}
                >
                    点击卡片查看详情和体验网址...
                </TextShimmerWave>
            </div>


            {/* 项目卡片网格布局 */}
            <AnimatedGroup
                className='grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
                preset='scale'
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                    />
                ))}
            </AnimatedGroup>
        </div>
    );
};

export default MyProjects;
