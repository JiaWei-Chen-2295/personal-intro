'use client'
import FirstContainer from "@/app/ui/main/containers/first_container";
import {LampContainer} from "@/app/ui/common/lamp";
import {motion} from "framer-motion";
import {WobbleCard} from "@components/ui/wobble-card";
import Image from "next/image";
import {Progress} from 'antd';
import type { ProgressProps } from 'antd';
 // @ts-expect-error aos
import AOS from 'aos';

export default function Page() {

    // div 动画库
    AOS.init()

    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#108ee9',
        '100%': '#87d068',
    };

    return (
        <div className="h-screen w-screen relative">
            <FirstContainer/>
            <LampContainer>
                <motion.h1
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-gradient-to-br from-slate-300 to-slate-350 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <p>技术栈</p>
                </motion.h1>
            </LampContainer>

            <div className={"h-full w-full"}
                 data-aos="fade-up"
                 data-aos-duration="1000"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"

                >
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-3 bg-green-800 min-h-[350px] lg:min-h-[600px] xl:min-h-[300px]">
                        <div className="max-w-sm">
                            <h2 className="max-w-sm md:max-w-lg  text-left  text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                               Spring + Spring MVC + Spring Boot
                            </h2>
                            <Progress percent={66} strokeColor={twoColors} />
                            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                Java WEB 方面的框架
                            </p>
                        </div>
                        <Image
                            src="/linear.webp"
                            width={350}
                            height={350}
                            alt="linear demo image"
                            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[350px] lg:min-h-[300px]"
                        className=""
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Javascript & TypeScript
                            </h2>
                            <Progress percent={60} strokeColor={twoColors} />
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                驱动网页的脚本语言
                            </p>
                        </div>
                        <Image
                            src="/linear.webp"
                            width={350}
                            height={350}
                            alt="linear demo image"
                            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-yellow-700">
                        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Python
                        </h2>
                        <Progress percent={70} strokeColor={twoColors} />
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            爬虫，数据采集，分析的有力工具
                        </p>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-900">
                        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Vue.js
                        </h2>
                        <Progress percent={75} strokeColor={twoColors} />
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            快速搭建web界面的框架
                        </p>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[350px] lg:min-h-[300px] bg-blue-800"
                        className=""
                    >
                        <div className="max-w-xs ">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                React
                            </h2>
                            <Progress percent={60} strokeColor={twoColors} />
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                一个用于界面的库
                            </p>
                        </div>
                        <Image
                            src="/linear.webp"
                            width={350}
                            height={350}
                            alt="linear demo image"
                            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>

                </div>
            </div>
        </div>
    );
}
