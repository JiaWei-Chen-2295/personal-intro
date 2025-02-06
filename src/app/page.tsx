import FirstContainer from "@/app/ui/main/containers/first_container";

export default function Page() {
    return (
        <div className="h-screen w-screen relative">
            <FirstContainer/>

            <div className={"h-full w-full"}>
                <div
                >
                    <h1 className={"font-bold text-5xl text-white pt-24 pl-3"}>陈佳玮的个人主页</h1>
                    <h1 className={"font-bold text-5xl text-white pt-1.5 pl-3"}>Hi! I am JavierChen</h1>
                    <p className={"font-bold text-white pt-16 pl-6"}>
                        一个喜欢钻研业务逻辑，写出漂亮界面的攻城狮
                    </p>
                </div>
            </div>
        </div>
    );
}
