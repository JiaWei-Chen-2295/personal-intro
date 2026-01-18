'use client'
import React from 'react'
import { Card, Text, rem } from '@mantine/core'
import { motion } from 'framer-motion'
import { IconBrandReact, IconBrandPython, IconCloud } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

interface Technology {
    name: string
    level: number
    icon: React.ReactNode
    color: string
    description?: string
}

interface TechStackProps {
    technologies: {
        name: string
        level: number
        icon: React.ReactNode
        color: string
        description?: string
    }[]
    onTechHover: (tech: string | null) => void
    onTechClick: (tech: string | null) => void
    selectedTech: string | null
    hoveredTech: string | null
}

const TechStackCard: React.FC<TechStackProps> = ({
    technologies,
    onTechHover,
    onTechClick,
    selectedTech,
    hoveredTech
}) => {
    const defaultTechs: Technology[] = [
        {
            name: 'React',
            level: 90,
            icon: <IconBrandReact />,
            color: '#61DAFB',
            description: '构建现代用户界面的首选库'
        },
        {
            name: 'Python',
            level: 85,
            icon: <IconBrandPython />,
            color: '#3776AB',
            description: '通用编程语言，擅长数据分析和后端开发'
        },
        {
            name: 'AWS',
            level: 75,
            icon: <IconCloud />,
            color: '#FF9900',
            description: '全球领先的云服务平台'
        }
    ]

    const [techItems, setTechItems] = useState<Technology[]>([])
    const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null)

    useEffect(() => {
        setTechItems(technologies || defaultTechs)
    }, [technologies])

    // 响应式布局配置
    const cardVariants = {
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        }
    }

    return (
        <motion.div whileHover="hover" initial="rest" animate="rest">
            <Card
                padding="lg"
                radius="md"
                className="overflow-hidden bg-gradient-to-br from-gray-900 to-black backdrop-blur-lg"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>
                {/* 响应式网格布局 */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {techItems.map((tech, index) => {
                        const isActive = selectedTech === tech.name || hoveredTech === tech.name
                        return (
                            <motion.div
                                key={tech.name}
                                id={`tech-${tech.name}`}
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                                    isActive ? 'scale-105 shadow-lg' : ''
                                }`}
                                style={{
                                    backgroundColor: isActive ? `${tech.color}20` : 'transparent',
                                    border: `1px solid ${isActive ? tech.color : 'transparent'}`,
                                }}
                                onMouseEnter={() => {
                                    onTechHover(tech.name)
                                    setActiveTechIndex(index)
                                }}
                                onMouseLeave={() => {
                                    onTechHover(null)
                                    setActiveTechIndex(null)
                                }}
                                onClick={() => onTechClick(selectedTech === tech.name ? null : tech.name)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex items-center gap-2">
                                    <div style={{ color: tech.color }}>{tech.icon}</div>
                                    <span className="text-white font-medium">{tech.name}</span>
                                </div>
                                <div className="mt-2">
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: tech.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${tech.level}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                {tech.description && (
                                    <p className="mt-2 text-sm text-gray-400">{tech.description}</p>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
                {/* 网格背景 */}
                <div
                    className="absolute inset-0 -z-10 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
            </Card>
        </motion.div>
    )
}

export default TechStackCard
