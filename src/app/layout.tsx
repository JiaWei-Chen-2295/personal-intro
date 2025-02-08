"use client"
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import HeaderNav from "@/app/ui/main/components/HeaderNav";
import React from "react";

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
       <HeaderNav/>
        <div className="mt-10">
            {children}
        </div>

        </body>
        </html>
    );
}
