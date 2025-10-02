import api from '@/lib/axios';
import type { Project, Skill, Experience, ContactForm, ApiResponse } from '@/types';

// Projects
export const projectsApi = {
  getAll: (params?: { category?: string; featured?: boolean }) => 
    api.get('/projects', { params }) as Promise<ApiResponse<{ projects: Project[] }>>,
  
  getById: (id: string) => 
    api.get(`/projects/${id}`) as Promise<ApiResponse<Project>>,
  
  getFeatured: () => 
    api.get('/projects/featured') as Promise<ApiResponse<Project[]>>,
};

// Skills
export const skillsApi = {
  getAll: (params?: { category?: string; featured?: boolean }) => 
    api.get('/skills', { params }) as Promise<ApiResponse<{ skills: Skill[]; grouped: Record<string, Skill[]> }>>,
};

// Experiences
export const experiencesApi = {
  getAll: () => 
    api.get('/experiences') as Promise<ApiResponse<Experience[]>>,
  
  getById: (id: string) => 
    api.get(`/experiences/${id}`) as Promise<ApiResponse<Experience>>,
};

// Contact
export const contactApi = {
  submit: (data: ContactForm) => 
    api.post('/contact', data) as Promise<ApiResponse>,
};
