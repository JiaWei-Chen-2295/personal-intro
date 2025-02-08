'use client'

import FirstContainer from "@/app/ui/main/containers/FirstContainer";
// @ts-expect-error aos
import AOS from 'aos';
import {useEffect} from "react";
import TechStack from "@/app/ui/main/containers/TechStack";
import MyProjects from "@/app/ui/main/containers/MyProjects";

export default function Page() {
    // div 动画库
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="h-screen w-screen relative">
            <FirstContainer />
            <TechStack />
            <MyProjects />
        </div>
    );
}
