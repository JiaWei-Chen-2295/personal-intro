export interface TechStack {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'ai' | 'database';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Maintenance';
  tags: string[];
  image: string;
  techStack: TechStack[];
  githubUrl?: string;
  architecture?: {
    type: 'microservices' | 'monolith' | 'distributed';
    diagram: string; // URL or svg component identifier
    features: string[];
  };
}
