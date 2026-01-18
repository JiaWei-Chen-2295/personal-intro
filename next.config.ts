import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // 输出配置
    output: 'standalone',

    // 实验性功能
    experimental: {
        // 服务器操作配置
        serverActions: {
            allowedOrigins: ['localhost:3000'],
            bodySizeLimit: '2mb',
        },
        // 优化包导入
        optimizePackageImports: [
            '@mantine/core',
            '@mantine/hooks',
            'framer-motion',
            'react-icons',
            'lucide-react',
        ],
        // 启用 mdx
        mdxRs: true,
    },

    // 图片优化配置
    images: {
        domains: ['localhost'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp'],
    },

    // 编译器配置
    compiler: {
        // 移除 console.log
        removeConsole: process.env.NODE_ENV === 'production',
        // 启用 Styled Components
        styledComponents: true,
    },

    // webpack 配置
    webpack: (config, { dev, isServer }) => {
        // 生产环境优化
        if (!dev) {
            config.optimization = {
                ...config.optimization,
                minimize: true,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 244000,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    cacheGroups: {
                        defaultVendors: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                            reuseExistingChunk: true,
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true,
                        },
                    },
                },
            };
        }

        // TypeScript 优化
        if (dev) {
            config.module.rules.push({
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
            });
        }

        return config;
    },

    // 环境变量配置
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    },

    // 开发环境配置
    ...(process.env.NODE_ENV === 'development' && {
        // 开发环境启用类型检查和 ESLint
        typescript: {
            ignoreBuildErrors: false,
            tsconfigPath: './tsconfig.json',
        },
        eslint: {
            ignoreDuringBuilds: false,
        },
    }),

    // 生产环境配置
    ...(process.env.NODE_ENV === 'production' && {
        // 生产环境禁用类型检查和 ESLint
        typescript: {
            ignoreBuildErrors: true,
        },
        eslint: {
            ignoreDuringBuilds: true,
        },
        // 生产环境压缩
        swcMinify: true,
        poweredByHeader: false,
    }),
};

export default nextConfig;

