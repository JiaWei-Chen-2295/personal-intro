
export enum Proficiency {
  EXPERT = '精通 (Expert)',
  ADVANCED = '熟练 (Advanced)',
  COMPETENT = '掌握',
  FAMILIAR = '了解',
}

export enum Depth {
  LOW = 10,
  MEDIUM = 40,
  HIGH = 80,
}

export interface TechItem {
  id: string;
  name: string;
  description: string;
  icon: string; // FontAwesome class or Material Symbol name
  iconType: 'fa' | 'material';
  proficiency: Proficiency;
  tags?: string[];
  depth: Depth;
  colSpan: number;
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  englishTitle: string;
  color: string;
  items: TechItem[];
}
