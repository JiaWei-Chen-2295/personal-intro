import { JetBrains_Mono } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    preload: true,
    variable: "--font-english-default"
});

