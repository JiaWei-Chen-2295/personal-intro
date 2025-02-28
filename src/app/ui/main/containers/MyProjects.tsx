import React from 'react';
import ProjectCard from "@/app/ui/main/components/ProjectCard";
import {TextShimmerWave} from "@/app/ui/common/text-shimmer-wave";
import {AnimatedGroup} from '@/app/ui/common/animated-group';


const MyProjects = () => {
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
        },
        {
            title: 'AI我的英语',
            subtitle: 'AI驱动自定义英语学习语料app',
            description: `
                技术栈: Kotlin + Jetpack Compose + OkHttp
            `,
            imageUrl: '/andriod_app/big.jpg',
            projectUrl: 'https://www.are.na/block/12759029',
        }, {
            title: '纪念小程序',
            subtitle: '智能图片集',
            description: `
                技术栈: Vue3 + Tailwind CSS + Pinia + axios
            `,
            imageUrl: '/record-me.jpg',
            projectUrl: 'https://www.are.na/block/12759029',
        }, {
            title: '灵魂之交',
            subtitle: '大数据用户推荐',
            description: `
                技术栈: Spring Boot + Mybatis Plus + swagger API 文档 + Vue3 + vant UI + ElasticSearch
            `,
            imageUrl: '/friend-match.png',
            projectUrl: 'https://www.are.na/block/12759029',
        },
    ];

    return (
        <div id="project" className="h-full min-h-screen w-full">
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
            <div className="flex items-center content-center flex-col">
                <AnimatedGroup
                    className='grid grid-cols-1 gap-11 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
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

        </div>
    );
};

export default MyProjects;
