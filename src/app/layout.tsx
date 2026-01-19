import "./globals.css";
import '@mantine/core/styles.css';
import '@ant-design/v5-patch-for-react-19';
import React from "react";
import { ColorSchemeScript } from '@mantine/core'
import ClientLayout from "@/app/ui/main/components/ClientLayout";

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
            <body className="antialiasing bg-black">
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
