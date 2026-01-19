import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'smart-oj',
    title: '智能 OJ 微服务',
    subtitle: '高并发在线评测系统',
    period: '2025.3.23 - 2025.5.14',
    status: 'Completed',
    description: '基于 Spring Cloud 微服务构建的分布式在线评测系统，利用消息队列和容器技术处理高并发代码提交。',
    longDescription: '设计了高可用的微服务架构以安全地处理代码编译和执行。系统使用 RabbitMQ 消息队列进行异步削峰填谷，确保主服务在重负载下保持响应。采用 Docker 容器为运行不可信的用户代码提供了安全的隔离沙箱环境。',
    tags: ['Spring Cloud', 'React', 'Docker', 'RabbitMQ'],
    image: '/oj/image.png',
    githubUrl: 'https://github.com/JiaWei-Chen-2295/smarter-oj-microsevice',
    techStack: [
      { name: 'Spring Boot', category: 'backend' },
      { name: 'Spring Cloud', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'Redux', category: 'frontend' },
      { name: 'Docker', category: 'devops' },
      { name: 'RabbitMQ', category: 'backend' },
    ],
    architecture: {
      type: 'microservices',
      diagram: '/oj/arch.png',
      features: [
        'RabbitMQ 解耦提交处理',
        'Docker 隔离代码执行环境',
        'Spring Cloud 服务发现与配置管理'
      ]
    }
  },
  {
    id: 'rpc-framework',
    title: 'RPC 框架',
    subtitle: '高性能响应式 RPC 通信框架',
    period: '2025.5.16 - 2025.5.29',
    status: 'Completed',
    description: '实现了响应式编程模式的自定义轻量级 RPC 框架，专为超低延迟的分布式通信设计。',
    longDescription: '从底层构建以深入探究分布式系统原理。该框架利用 Vert.x 实现非阻塞 I/O 模型，使用 etcd 作为高可用服务注册中心。支持自定义序列化协议和多种负载均衡策略，性能表现优异。',
    tags: ['Vert.x', 'etcd', 'Redis', 'Spring Boot'],
    image: '/rpc/image.png',
    githubUrl: 'https://github.com/JiaWei-Chen-2295/jc-simple-rpc',
    techStack: [
      { name: 'Vert.x', category: 'backend' },
      { name: 'Reactive', category: 'backend' },
      { name: 'etcd', category: 'devops' },
      { name: 'Redis', category: 'database' },
      { name: 'Spring Boot Starter', category: 'backend' },
    ],
    architecture: {
      type: 'distributed',
      diagram: '/rpc/arch/image.png',
      features: [
        '非阻塞响应式 I/O 模型',
        '基于 etcd 的服务发现机制',
        '支持序列化扩展的自定义协议'
      ]
    }
  },
  {
    id: 'smart-agent',
    title: '智能 Agent 学习助手',
    subtitle: 'AI 驱动的个性化教育伴侣',
    period: '2025.3 - 至今',
    status: 'In Progress',
    description: '利用大语言模型提供个性化学习计划生成和实时智能问答的辅助学习系统。',
    longDescription: '集成 Spring AI 框架编排与大语言模型的交互流程。利用 PostgreSQL (pgvector) 存储向量嵌入，通过 RAG 技术根据课程资料提供精准的上下文感知回答，极大提升学习效率。',
    tags: ['Spring AI', 'PostgreSQL', 'Spring Boot'],
    image: '/ai_agent/document.png',
    githubUrl: 'https://github.com/JiaWei-Chen-2295/jc-ai-agent',
    techStack: [
      { name: 'Spring Boot', category: 'backend' },
      { name: 'Spring AI', category: 'ai' },
      { name: 'Spring Data JPA', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
    ],
    architecture: {
      type: 'microservices',
      diagram: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      features: [
        'RAG (检索增强生成) 架构实现',
        'PostgreSQL 向量相似度搜索',
        '上下文感知的 Prompt 工程'
      ]
    }
  }
];
