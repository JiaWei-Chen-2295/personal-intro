import "./globals.css";
import '@mantine/core/styles.css';
import '@ant-design/v5-patch-for-react-19';
import React from "react";
import { ColorSchemeScript } from '@mantine/core'
import ClientLayout from "@/app/ui/main/components/ClientLayout";
import type { Metadata } from "next";
import { jetBrainsMono, inter, notoSansSC } from "@/app/ui/font";

export const metadata: Metadata = {
  title: "陈佳玮的个人主页",
  description: "陈佳玮的个人主页 - JavierChen",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark bg-black" suppressHydrationWarning>
            <head>
                <ColorSchemeScript defaultColorScheme="dark" />
            </head>
            <body className={`antialiasing bg-black ${jetBrainsMono.variable} ${inter.variable} ${notoSansSC.variable}`}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
