"use client"
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import HeaderNav from "@/app/ui/main/components/HeaderNav";
import React from "react";
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import {theme} from "@/app/theme";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body
            className={"antialiasing bg-black"}
        >
        <MantineProvider
            theme={theme}
            withGlobalStyles
            withNormalizeCSS
        >
            <HeaderNav/>
            <div className="mt-10 ">
                {children}
            </div>
            {/*<div className="text-center text-white mt-10 bg-gray-800 p-4">*/}
            {/*    <p>底栏内容</p>*/}
            {/*    <nav>*/}
            {/*        <a href="#" className="mx-2">关于我们</a>*/}
            {/*        <a href="#" className="mx-2">联系我们</a>*/}
            {/*        <a href="#" className="mx-2">帮助中心</a>*/}
            {/*    </nav>*/}
            {/*</div>*/}
            <footer className="text-center text-white mt-10 pb-8">
                <p><a href={"https://beian.miit.gov.cn/"}>晋ICP备2024031528号-1</a></p>
                <p>版权所有 © 2025 JavierChen. 保留所有权利。</p>
            </footer>
        </MantineProvider>
        </body>
        </html>
    );
}
