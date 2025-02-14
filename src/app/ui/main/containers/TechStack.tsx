import {IconBrandNextjs} from '@tabler/icons-react'
import TechStackCard from "@/app/ui/main/components/TechStackCard";
import {SiSpring, SiSpringboot, SiPython, SiTypescript} from "react-icons/si";
import {FaJava, FaReact, FaVuejs} from "react-icons/fa";
import React from "react";

const TechStack = () => {

    // 技术栈掌握详情
    const myTechs = [
        {
            name: 'Java',
            level: 90,
            icon: <FaJava/>,
            color: '#fefefe',
            description: '我使用 Java 进行日常数据结构与算法学习，熟练使用 Java 的框架'
        },
        {
            name: 'Spring MVC',
            level: 90,
            icon: <SiSpring/>,
            color: '#6cb52d'
        },
        {
            name: 'Spring Boot',
            level: 90,
            icon: <SiSpringboot/>,
            color: '#6cb52d'
        },
        {
            name: 'TypeScript',
            level: 95,
            icon: <SiTypescript/>,
            color: '#3178c6'
        },
        {
            name: 'Vue.js',
            level: 95,
            icon: <FaVuejs/>,
            color: '#327859'
        },
        {
            name: 'React',
            level: 95,
            icon: <FaReact/>,
            color: '#3178c6'
        },
        {
            name: 'Next.js',
            level: 95,
            icon: <IconBrandNextjs/>,
            color: '#ffffff'
        },
        {
            name: 'Python',
            level: 90,
            icon: <SiPython/>,
            color: '#ffdc52'
        },

    ]

    return (
        <>

            <div className={"h-full w-full overflow-hidden"}
                 data-aos="fade-up"
                 data-aos-duration="1000"
            >
                <div className={"pt-20 flex items-center content-center flex-col"}>

                    <h2>
                    <span className="text-6xl font-bold text-white">
                        我的技术栈
                    </span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto p-4 pt-10">
                    <TechStackCard technologies={myTechs}/>
                </div>
            </div>
        </>
    )
}

export default TechStack;
