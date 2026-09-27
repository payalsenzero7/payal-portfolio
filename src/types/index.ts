export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: 'data-analysis' | 'machine-learning' | 'dashboard';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export type SkillCategory = 'ba-tools' | 'data-analytics' | 'methodologies' | 'soft-skills';

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
