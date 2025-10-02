export interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'embedded' | 'simulation' | 'ai' | 'other';
  images?: { url: string; alt: string }[];
  thumbnail?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  startDate?: Date;
  endDate?: Date;
  status: 'completed' | 'in-progress' | 'planned';
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  _id: string;
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases' | 'platforms' | 'other';
  proficiency: number;
  icon?: string;
  yearsOfExperience: number;
  featured: boolean;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  status: string;
  message: string;
  data: T;
}
