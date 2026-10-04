export type PageId = 
  | 'home'
  | 'about'
  | 'services'
  | 'financial-services'
  | 'medical-billing'
  | 'usa-tax'
  | 'consulting'
  | 'marketing'
  | 'operational-efficiency'
  | 'industries'
  | 'why-us'
  | 'insights'
  | 'contact';

export interface ServiceDetail {
  id: string;
  pageId: PageId;
  title: string;
  shortDescription: string;
  tagline: string;
  overview: string;
  servicesIncluded: string[];
  whoItIsFor: string[];
  businessBenefits: string[];
  keyOutcomes: string[];
  imagePath?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface ConsultationFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  serviceRequired: string;
  companySize: string;
  message: string;
}
