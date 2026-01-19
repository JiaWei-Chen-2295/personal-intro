"use client";

import React from "react";
import { MantineProvider } from '@mantine/core';
import { theme } from "@/app/theme";
import HeaderNav from "@/app/ui/main/components/HeaderNav";

interface ClientLayoutProps {
    children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <HeaderNav />
            <div className="mt-10">
                {children}
            </div>
            <footer className="text-center text-white mt-10 pb-8">
                <p>版权所有 © 2026 JavierChen. 保留所有权利。</p>
            </footer>
        </MantineProvider>
    );
};

export default ClientLayout; 