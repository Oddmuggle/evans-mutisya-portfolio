export interface Skill {
  name: string;
  category: 'security' | 'infrastructure' | 'development' | 'systems';
  level?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'security' | 'development' | 'infrastructure';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}