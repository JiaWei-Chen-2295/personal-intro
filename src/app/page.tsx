'use client'

import FirstContainer from "@/app/ui/main/containers/FirstContainer";
// @ts-expect-error aos
import AOS from 'aos';
import {useEffect} from "react";
import TechStack from "@/app/ui/main/containers/TechStack";
import MyProjects from "@/app/ui/main/containers/MyProjects";
import Head from "next/head";

export default function Page() {

    // div 动画库
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
        <Head>
            <title>陈佳玮的个人主页</title>
        </Head>
        <div className={"overflow-x-hidden"}>
            <FirstContainer />
            <TechStack />
            <MyProjects />
        </div>
        </>
    );
}
