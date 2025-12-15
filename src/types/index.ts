export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  percentage?: string;
  relevantCourses: string[];
}

