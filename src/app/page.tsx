import ThreeScene from "@/app/ui/main/earth_scence";
import {TextAnimate} from "@/app/ui/common/word-in";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

export default function Home() {

    return (
        <>
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
                                    <TextAnimate text={"陈佳玮|JavierChen"} type={"rollIn"}></TextAnimate>
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

            <div
            >
                <h1 className={"font-bold text-5xl text-white pt-24 pl-3"}>陈佳玮的个人主页</h1>
                <h1 className={"font-bold text-5xl text-white pt-1.5 pl-3"}>Hi! I am JavierChen</h1>
                <p className={"font-bold text-white pt-16 pl-6"}>
                    一个喜欢钻研业务逻辑，写出漂亮界面的攻城狮
                </p>
            </div>
        </>
    );
}
