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
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className={`antialiasing bg-black ${jetBrainsMono.variable} ${inter.variable} ${notoSansSC.variable}`}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
