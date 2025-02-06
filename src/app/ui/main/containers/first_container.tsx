'use client'
import {SparklesCore} from "@/app/ui/common/sparkles";
import ThreeScene from "@/app/ui/main/earth_scence";
import {CardBody, CardContainer, CardItem} from "@/app/ui/common/3d-card";
import {TextAnimate} from "@/app/ui/common/word-in";
import {useState, useMemo} from "react";
import {TypewriterEffect} from "@/app/ui/common/typewriter-effect";
import {AnimatePresence} from "framer-motion";

export default function FirstContainer() {

    const authorNameList = ["陈佳玮", "JavierChen"];
    const [authorNameIndex, setAuthorNameIndex] = useState<number>(0);

    // setTimeout(() => {
    //     setAuthorNameIndex((authorNameIndex + 1) % authorNameList.length);
    // }, 5525);

    const authorName = useMemo(() => authorNameList[authorNameIndex], [authorNameIndex]);

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
            <div className="grid grid-cols-3 gap-2 bg-black min-h-screen">

                <div className="h-screen">
                    <div className="ThreeScene-container">
                        <ThreeScene
                        />

                    </div>
                </div>
                <div
                    className={"col-span-2"}
                >
                    <CardContainer
                        className="inter-var p-6 flex justify-center items-center"
                    >
                        <CardBody
                            className={"bg-gray-50 flex flex-col justify-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl pt-6 pb-6 border"}
                        >
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white items-center flex justify-center p-4 overflow-hidden w-full">
                                <div
                                    className={"min-h-full min-w-full flex flex-col justify-center items-center w-full border-b-2"}
                                >
                                    {/*<TypewriterEffect words={[{text: authorName}]} />*/}
                                    <TextAnimate text={authorName}/>
                                </div>

                            </CardItem>


                            <CardItem
                                className={"text-xl font-bold text-neutral-600 dark:text-white p-4 flex flex-col items-center overflow-hidden w-full"}
                            >
                                <div
                                    className={"min-h-full min-w-full flex flex-col justify-center items-center w-full"}
                                >
                                    <h1 className="font-bold text-5xl text-white items-center">的个人主页</h1>
                                    <p className={"font-bold text-white items-center pt-5"}>
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
