import { IconBrandNextjs } from '@tabler/icons-react'
import TechStackCard from "@/app/ui/main/components/TechStackCard"
import {SiSpring, SiSpringboot, SiPython, SiTypescript, SiKotlin, SiJetpackcompose} from "react-icons/si"
import { FaJava, FaReact, FaVuejs } from "react-icons/fa"
import React from "react"

const TechStack = () => {
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

    return (
        <>
            {/* 外层容器 */}
            <div
                className="h-full min-h-screen w-full  bg-black scrollbar-hide overflow-y-auto scroll-smooth"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                {/* 内容区域 */}
                <div className="pt-20 flex items-center content-center flex-col">
                    <h2>
                        <span className="text-6xl font-bold text-white">我的技术栈</span>
                    </h2>
                </div>
                {/* 技术栈卡片 */}
                <div
                    className="w-4/5 mx-auto py-10 sm:min-h-max"
                >
                    <TechStackCard technologies={myTechs} />
                </div>
            </div>
        </>
    )
}

export default TechStack
