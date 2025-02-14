'use client'

import { Card, Progress, Text, rem } from '@mantine/core'
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
    technologies?: Technology[]
}

const TechStackCard = ({ technologies }: TechStackProps) => {
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-14">
                    {techItems.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            variants={cardVariants}
                            className="group relative p-4 rounded-lg transition-all h-full w-auto"
                            style={{
                                background: `linear-gradient(45deg, ${tech.color}10, ${tech.color}05)`,
                                backdropFilter: 'blur(10px)',
                                minHeight: rem(120)
                            }}
                            onMouseEnter={() => setActiveTechIndex(index)}
                            onMouseLeave={() => setActiveTechIndex(null)}
                            onClick={() => setActiveTechIndex(index)}>
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{
                                            background: `${tech.color}20`,
                                            color: tech.color
                                        }}>
                                        {tech.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-2">
                                            <Text className="font-semibold text-gray-200">{tech.name}</Text>
                                            <Text className="text-sm" style={{ color: tech.color }}>
                                                {tech.level}%
                                            </Text>
                                        </div>
                                        <Progress
                                            value={tech.level}
                                            color={tech.color}
                                            classNames={{
                                                root: 'h-2 bg-gray-800',
                                                section: 'bg-gradient-to-r from-transparent to-white/50'
                                            }}
                                            radius="sm"
                                        />
                                    </div>
                                </div>

                                {/* 响应式描述文字 */}
                                {(activeTechIndex === index) && (
                                    <div className="mt-auto p-2 text-sm text-gray-300 transition-opacity duration-300">
                                        {tech.description || '暂无描述'}
                                    </div>
                                )}
                            </div>

                            {/* 光效 */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 50%, ${tech.color}, transparent)`
                                }}
                            />
                        </motion.div>
                    ))}
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
