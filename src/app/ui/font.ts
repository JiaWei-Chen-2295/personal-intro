import { JetBrains_Mono, Inter, Noto_Sans_SC } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
    preload: true,
    variable: "--font-english-default"
});

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const notoSansSC = Noto_Sans_SC({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    display: "swap",
    variable: "--font-noto-sans-sc",
});
