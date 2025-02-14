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
            <div className="mt-10">
                {children}
            </div>

        </MantineProvider>

        </body>
        </html>
    );
}
