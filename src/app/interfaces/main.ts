export interface NavBarList {
  title: string;
  label: string;
}

export interface SkillData {
  skillName: string;
  skillColor: string;
  iconClass: string;
}

export interface SkillCategories {
  categoryName: string;
  skills: SkillData[];
}

export interface AbouData {
  title: string;
  content: string;
}

export interface Projects {
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  github: string;
  liveDemo: string;
}

export interface Educations {
  degree: string;
  institution: string;
  duration: string;
  year: number;
}

export interface Experiences {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  year: number;
}
