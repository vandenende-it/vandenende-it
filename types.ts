export enum Section {
  HOME = 'home',
  SERVICES = 'services',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectHighlight {
  name: string;
  details: string;
  tech?: string[];
}

export interface ExperienceItem {
  id: string;
  era: string;
  role: string;
  period: string;
  summary: string;
  highlights?: string[];
  projects?: ProjectHighlight[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ContactFormState {
  email: string;
  name: string;
  message: string;
}