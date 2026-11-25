export interface ExperienceItem {
  id: string;
  company: string;
  companyMonogram: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  period: string;
  summary: string;
  responsibilities: string[];
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
  technologies: string[];
  isFeatured?: boolean;
}

import type { VerifiedCredential } from "@/types/portfolio";
export { credentialsData } from "./credentials";

export type CredentialItem = VerifiedCredential;

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  startYear: string;
  endYear: string;
  score: string;
  scoreLabel: string;
  location: string;
  isPrimary?: boolean;
}

export interface ProgressMarker {
  id: string;
  title: string;
  subtitle: string;
  category: "experience" | "credential" | "education";
  period: string;
}

/**
 * SINGLE SOURCE OF TRUTH: EXPERIENCE DATA
 * Strictly sourced from uploaded resume.
 */
export const experienceData: ExperienceItem[] = [
  {
    id: "smartbridge-smartinternz",
    company: "SmartBridge & SmartInternz",
    companyMonogram: "SB",
    role: "Full Stack Developer Intern",
    type: "MERN",
    location: "Remote",
    startDate: "September 2025",
    endDate: "October 2025",
    period: "Sep 2025 — Oct 2025",
    summary:
      "Developed full-stack web applications using the MERN stack, with focus on scalable RESTful APIs, secure JWT authentication, backend query optimization, and application performance.",
    responsibilities: [
      "Developed full-stack web applications using the MERN stack.",
      "Improved overall application performance by 25%.",
      "Designed and implemented RESTful APIs for authentication, data flow, and backend operations.",
      "Implemented JWT-based authentication and authorization for 100+ users.",
      "Collaborated on real-world projects adhering to production workflows.",
      "Optimized backend logic and reduced response time by 30%.",
    ],
    metrics: [
      {
        value: "25%",
        label: "Performance Boost",
        description: "Application performance improvement",
      },
      {
        value: "100+",
        label: "Users Supported",
        description: "Secured via JWT-based authentication",
      },
      {
        value: "30%",
        label: "Response Latency",
        description: "Backend response-time reduction",
      },
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "MERN"],
    isFeatured: true,
  },
];


/**
 * SINGLE SOURCE OF TRUTH: EDUCATION FOUNDATION
 * Strictly sourced from uploaded resume.
 */
export const educationData: EducationItem[] = [
  {
    id: "edu-btech",
    institution: "JSS Academy of Technical Education",
    degree: "B.Tech in Computer Science and Engineering",
    field: "Computer Science & Engineering",
    period: "2023 — 2026",
    startYear: "2023",
    endYear: "2026",
    score: "7.77 CGPA",
    scoreLabel: "Cumulative GPA",
    location: "Noida, U.P.",
    isPrimary: true,
  },
  {
    id: "edu-diploma",
    institution: "Hewett Polytechnic Lucknow",
    degree: "Diploma in Electrical Engineering",
    field: "Electrical Engineering",
    period: "2021 — 2023",
    startYear: "2021",
    endYear: "2023",
    score: "72%",
    scoreLabel: "Academic Aggregate",
    location: "Lucknow, U.P.",
  },
  {
    id: "edu-highschool",
    institution: "St Thomas Inter College",
    degree: "High School (Class X)",
    field: "General Science & Mathematics",
    period: "2018",
    startYear: "2018",
    endYear: "2018",
    score: "86%",
    scoreLabel: "Board Examination",
    location: "Mirzapur, U.P.",
  },
];

/**
 * PROGRESS MARKERS STRIP
 * High-level verified milestone indicators
 */
export const progressMarkers: ProgressMarker[] = [
  {
    id: "pm-1",
    title: "B.Tech in Computer Science",
    subtitle: "JSS Academy of Technical Education · 7.77 CGPA",
    category: "education",
    period: "2023 — 2026",
  },
  {
    id: "pm-2",
    title: "Full Stack Developer Intern (MERN)",
    subtitle: "SmartBridge & SmartInternz · Production APIs & Auth",
    category: "experience",
    period: "Sep — Oct 2025",
  },
  {
    id: "pm-3",
    title: "AI Foundations Associate",
    subtitle: "Oracle Cloud Infrastructure 2025 Certified",
    category: "credential",
    period: "Nov 2025",
  },
  {
    id: "pm-4",
    title: "Software Engineering Simulation",
    subtitle: "JPMorgan / Forage · Kafka, H2 & REST Controllers",
    category: "credential",
    period: "Nov 2025",
  },
];
