import { IconBrandNextjs } from '@tabler/icons-react'
import TechStackCard from "@/app/ui/main/components/TechStackCard"
import ProjectCard from "@/app/ui/main/components/ProjectCard"
import {SiSpring, SiSpringboot, SiPython, SiTypescript, SiKotlin, SiJetpackcompose} from "react-icons/si"
import { FaJava, FaReact, FaVuejs } from "react-icons/fa"
import React, { useState, useEffect, useRef } from "react"
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

const TechStack = () => {
    const [selectedTech, setSelectedTech] = useState<string | null>(null)
    const [hoveredTech, setHoveredTech] = useState<string | null>(null)
    const [techPositions, setTechPositions] = useState<Record<string, DOMRect>>({})
    const [projectPositions, setProjectPositions] = useState<Record<string, DOMRect>>({})
    const [mounted, setMounted] = useState(false)
    const svgRef = useRef<SVGSVGElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    // 技术栈掌握详情
    const myTechs = [
        {
            name: 'Java',
            level: 80,
            icon: <FaJava />,
            color: '#fefefe',
            description: '我使用 Java 进行日常数据结构与算法学习，熟练使用 Java 的框架'
        },
        {
            name: 'Spring MVC',
            level: 80,
            icon: <SiSpring />,
            color: '#6cb52d'
        },
        {
            name: 'Spring Boot',
            level: 60,
            icon: <SiSpringboot />,
            color: '#6cb52d'
        },
        {
            name: 'TypeScript',
            level: 70,
            icon: <SiTypescript />,
            color: '#3178c6'
        },
        {
            name: 'Vue.js',
            level: 80,
            icon: <FaVuejs />,
            color: '#327859'
        },
        {
            name: 'React',
            level: 60,
            icon: <FaReact />,
            color: '#3178c6'
        },
        {
            name: 'Next.js',
            level: 70,
            icon: <IconBrandNextjs />,
            color: '#ffffff'
        },
        {
            name: 'Python',
            level: 80,
            icon: <SiPython />,
            color: '#ffdc52'
        },
        {
            name: 'Kotlin',
            level: 60,
            icon: <SiKotlin />,
            color: '#905cc0'
        },
        {
            name: 'Jetpack Compose',
            level: 50,
            icon: <SiJetpackcompose />,
            color: '#0473fa'
        }
    ]

    // 项目数据
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
        }
    ]

    // 更新技术栈和项目卡片的位置
    useEffect(() => {
        if (!mounted) return

        const updatePositions = () => {
            const newTechPositions: Record<string, DOMRect> = {}
            const newProjectPositions: Record<string, DOMRect> = {}

            myTechs.forEach(tech => {
                const element = document.getElementById(`tech-${tech.name}`)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    newTechPositions[tech.name] = {
                        ...rect,
                        x: rect.x + window.scrollX,
                        y: rect.y + window.scrollY
                    }
                }
            })

            projects.forEach(project => {
                project.techStack.forEach(tech => {
                    const element = document.querySelector(`[data-project-tech="${tech}"]`)
                    if (element) {
                        const rect = element.getBoundingClientRect()
                        newProjectPositions[tech] = {
                            ...rect,
                            x: rect.x + window.scrollX,
                            y: rect.y + window.scrollY
                        }
                    }
                })
            })

            setTechPositions(newTechPositions)
            setProjectPositions(newProjectPositions)
        }

        updatePositions()
        window.addEventListener('resize', updatePositions)
        window.addEventListener('scroll', updatePositions)

        return () => {
            window.removeEventListener('resize', updatePositions)
            window.removeEventListener('scroll', updatePositions)
        }
    }, [mounted])

    const activeTech = hoveredTech || selectedTech
    const techPosition = activeTech ? techPositions[activeTech] : null
    const projectPosition = activeTech ? projectPositions[activeTech] : null

    return (
        <>
            {/* 连接线 - 使用 Portal 渲染到 body */}
            {mounted && createPortal(
                <svg 
                    ref={svgRef}
                    className="fixed inset-0 w-full h-full pointer-events-none"
                    style={{ 
                        zIndex: 9999,
                        mixBlendMode: 'screen',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        overflow: 'visible'
                    }}
                >
                    {activeTech && techPosition && projectPosition && (
                        <>
                            {/* 发光效果 */}
                            <motion.path
                                d={`M ${techPosition.x + techPosition.width/2} ${techPosition.y + techPosition.height/2} 
                                   L ${projectPosition.x + projectPosition.width/2} ${projectPosition.y + projectPosition.height/2}`}
                                stroke={myTechs.find(t => t.name === activeTech)?.color || '#fff'}
                                strokeWidth="4"
                                strokeDasharray="5,5"
                                fill="none"
                                filter="url(#glow)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            {/* 主线条 */}
                            <motion.path
                                d={`M ${techPosition.x + techPosition.width/2} ${techPosition.y + techPosition.height/2} 
                                   L ${projectPosition.x + projectPosition.width/2} ${projectPosition.y + projectPosition.height/2}`}
                                stroke={myTechs.find(t => t.name === activeTech)?.color || '#fff'}
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </>
                    )}
                    {/* 发光滤镜定义 */}
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                </svg>,
                document.body
            )}

            {/* 内容部分 */}
            <div ref={containerRef} className="min-h-screen w-full bg-black relative">
                {/* 技术栈部分 */}
                <div className="pt-20 flex items-center content-center flex-col">
                    <h2>
                        <span className="text-6xl font-bold text-white">我的技术栈</span>
                    </h2>
                </div>

                <div className="w-4/5 mx-auto py-10">
                    <TechStackCard 
                        technologies={myTechs} 
                        onTechHover={setHoveredTech}
                        onTechClick={setSelectedTech}
                        selectedTech={selectedTech}
                        hoveredTech={hoveredTech}
                    />
                </div>

                {/* 项目部分 */}
                <div className="w-4/5 mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack
