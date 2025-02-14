'use client'
import {SparklesCore} from "@/app/ui/common/sparkles";
import EarthScene from "@/app/ui/main/components/EarthScene";
import {CardBody, CardContainer, CardItem} from "@/app/ui/common/3d-card";
import {TextLoop} from "@/app/ui/common/text-loop";
import {isMobileDevice} from "@/lib/MobileDeviceUtil"

export default function FirstContainer() {

    const authorNameList = ["陈佳玮", "JavierChen"];

    return (
        <div className={"h-full w-full"}>
            <SparklesCore
                background="#00000000"
                particleColor="#ffffff"
                particleDensity={80}
                speed={4}
                minSize={1}
                maxSize={3}
                className="h-screen w-screen absolute top-0 left-0 z-0 overflow-hidden"
            />
            <div className="grid grid-cols-3 gap-2 bg-black min-h-screen ">

                {!isMobileDevice() && <div className="h-screen">
                    <div className="ThreeScene-container">
                        <EarthScene/>
                    </div>
                </div>}


                <div
                    className={"col-span-2 sm:col-span-3 lg:col-span-2 xl:col-span-2"}
                >
                    <CardContainer
                        className="inter-var p-6 flex justify-center items-center blur(20)"
                    >
                        <CardBody
                            className={"bg-gray-50 flex flex-col justify-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl pt-6 pb-6 border blur(30)"}
                        >
                            <CardItem
                                className={"text-black text-2xl flex flex-col w-full justify-center items-center dark:text-white"}
                            >
                                <h2>This is</h2>
                            </CardItem>
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white items-center flex justify-center p-4 overflow-hidden w-full">
                                <div
                                    className={"min-h-full min-w-full flex flex-col justify-center items-center w-full border-b-2"}
                                >

                                    <TextLoop className='text-4xl'
                                              interval={5.525}
                                    >
                                        {authorNameList.map((authorName, index) => <span
                                            key={index}>{authorName}</span>)}
                                    </TextLoop>


                                </div>


                            </CardItem>


                            <CardItem
                                className={"text-xl font-bold text-neutral-600 dark:text-white p-4 flex flex-col items-center overflow-hidden w-full"}
                            >
                                <div
                                    className={"min-h-full min-w-full flex flex-col justify-center items-center w-full"}
                                >
                                    <h1 className="font-bold text-5xl text-black items-center dark:text-white">的个人主页</h1>
                                    <p className={"font-bold text-black items-center pt-5 dark:text-white"}>
                                        一个喜欢钻研业务逻辑，写出漂亮界面的攻城狮
                                    </p>
                                </div>

                            </CardItem>
                        </CardBody>

                    </CardContainer>

                </div>


            </div>

        </div>

    )
}
