export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  status?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    impact: string;
    architecture?: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
