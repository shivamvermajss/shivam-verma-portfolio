export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface AvailabilityStatus {
  label: string;
  status: "available" | "busy" | "open";
}

export interface PersonalDetails {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string | AvailabilityStatus;
  resumeUrl?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface BentoSpanConfig {
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  technologies?: string[];
  capabilities?: string[];
  highlights?: string[];
  thumbnailUrl?: string;
  image?: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  priority?: number;
  bentoSpan?: BentoSpanConfig;
  metrics?: ProjectMetric[];
}

export interface SkillItem {
  name: string;
  category: string;
  iconName?: string;
  proficiency?: number;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  highlights?: string[];
}

export type CredentialCategory =
  | "Professional Certification"
  | "Job Simulation"
  | "Course Certification"
  | "Internship / Professional Credential"
  | string;

export type CredentialDomain =
  | "ai"
  | "full-stack"
  | "software-engineering"
  | "security";

export type CredentialFilterId = "all" | CredentialDomain;

export interface VerifiedCredential {
  id: string;
  title: string;
  issuer: string;
  issuerShort?: string;
  issuerOrganization?: string;
  type: string;
  category: CredentialCategory;
  domain?: CredentialDomain;
  date?: string;
  issueDate?: string;
  completionDate?: string;
  period?: string;
  credentialId?: string;
  enrolmentCode?: string;
  userVerificationCode?: string;
  recipient?: string;
  description?: string;
  skills: string[];
  skillsVerified?: string[];
  verificationUrl?: string;
  sourceUrl?: string;
  fileUrl?: string;
  featured?: boolean;
  isPriority?: boolean;
  relatedExperienceId?: string;
  relatedExperienceRole?: string;
}

export type CredentialItem = VerifiedCredential;
export type Certification = VerifiedCredential;

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  label: string;
}

export interface AboutAttribute {
  label: string;
  value: string;
}

export interface StoryChapter {
  id: string;
  number: string;
  title: string;
  preview: string;
  content: string;
  metadata?: string[];
  connectedBentoNode?: "identity" | "education" | "technical-focus" | "engineering-approach";
}

export interface ExplorationCard {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface AboutData {
  eyebrow: string;
  heading: {
    line1: string;
    line2: string;
  };
  introParagraphs: string[];
  storyChapters?: StoryChapter[];
  explorationHeading?: {
    title: string;
    subtitle: string;
  };
  explorationCards?: ExplorationCard[];
  attributes: AboutAttribute[];
  technicalFocus: {
    title: string;
    description: string;
    technologies: string[];
  };
  educationHighlight: {
    degree: string;
    institution: string;
    period: string;
    score: string;
    scoreLabel: string;
    location: string;
  };
}

export interface ResumeData {
  label: string;
  title: string;
  documentUrl: string;
  filename?: string;
}

export interface PortfolioContent {
  personal: PersonalDetails;
  projects: Project[];
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  certifications: VerifiedCredential[];
  credentials?: VerifiedCredential[];
  about?: AboutData;
  resume?: ResumeData;
  socials: SocialLink[];
}

