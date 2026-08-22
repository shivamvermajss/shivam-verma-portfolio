import type { PortfolioContent, NavItem } from "@/types/portfolio";
import { projectsData } from "./projects";
import { credentialsData } from "./credentials";

/**
 * CENTRALIZED NAVIGATION ITEMS
 * Shared across desktop navbar, mobile drawer, and ScrollSpy
 */
export const navigationItems: NavItem[] = [
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/**
 * SOURCE OF TRUTH DATA STORE
 * Sourced with verified personal identity, education, projects, and socials.
 * Zero invented statistics or synthetic claims.
 */
export const portfolioData: PortfolioContent = {
  personal: {
    name: "Shivam Verma",
    title: "Full Stack Developer",
    tagline: "MERN Stack Developer · Problem Solver",
    bio: "Full-stack engineer specializing in the MERN stack, robust RESTful APIs, real-time architectures, and modern web products. Turning complex requirements into fast, scalable, and intuitive digital experiences.",
    location: "Noida, India",
    email: "shivamvermacse2026@gmail.com",
    availability: "Available for Work",
    resumeUrl: "/resume/Shivam_resume.pdf", // Verified resume asset in public/resume/Shivam_resume.pdf
  },
  resume: {
    label: "RESUME",
    title: "Shivam Verma — Resume",
    documentUrl: "/resume/Shivam_resume.pdf",
    filename: "Shivam_resume.pdf",
  },
  about: {
    eyebrow: "05 / ABOUT ME",
    heading: {
      line1: "THE PERSON",
      line2: "BEHIND THE CODE.",
    },
    introParagraphs: [
      "I'm a final-year Computer Science student and full-stack developer focused on engineering practical, high-performance web applications from responsive interfaces to scalable backend architectures.",
    ],
    storyChapters: [
      {
        id: "building",
        number: "01",
        title: "BUILDING",
        preview: "Turning frontend interfaces, backend APIs, and data models into complete systems.",
        content:
          "I engineer practical end-to-end web applications with the MERN stack, bridging responsive user interfaces with robust RESTful APIs, secure JWT authentication, and database schemas. My project work is where individual technologies come together into dependable, deployed systems.",
        metadata: ["FULL-STACK", "MERN", "WEB APPLICATIONS"],
        connectedBentoNode: "technical-focus",
      },
      {
        id: "how-i-work",
        number: "02",
        title: "HOW I WORK",
        preview: "Iterative engineering driven by architecture design, testing, and continuous learning.",
        content:
          "I prioritize learning by building. From wireframing component hierarchies to architecting schema models and API routes, I iterate through debugging, optimization, and real-world implementation to ensure clean code and scalable structure.",
        metadata: ["APIS", "AUTHENTICATION", "DATA FLOW", "PERFORMANCE"],
        connectedBentoNode: "engineering-approach",
      },
      {
        id: "whats-next",
        number: "03",
        title: "WHAT'S NEXT",
        preview: "Expanding technical depth across modern full-stack architectures and high-impact systems.",
        content:
          "As a final-year Computer Science student, I'm focused on deepening full-stack engineering practices, mastering distributed systems patterns, and contributing to production-grade applications that solve meaningful real-world problems.",
        metadata: ["FULL-STACK DEV", "CONTINUOUS LEARNING", "PRODUCTION QUALITY"],
        connectedBentoNode: "identity",
      },
    ],
    explorationHeading: {
      title: "WHAT I EXPLORE",
      subtitle: "Areas that shape the way I build, design systems, and learn.",
    },
    explorationCards: [
      {
        id: "explore-build",
        number: "01",
        title: "BUILD",
        description:
          "Turning responsive interfaces, RESTful APIs, data schemas, and deployment pipelines into complete, dependable web applications.",
        tags: ["FULL-STACK", "MERN", "DEPLOYMENT"],
        iconName: "Layers",
      },
      {
        id: "explore-systems",
        number: "02",
        title: "SYSTEMS",
        description:
          "Connecting frontend state with robust backend APIs, JWT authentication, real-time WebSockets, and database persistence.",
        tags: ["APIS", "AUTH", "DATA FLOW"],
        iconName: "GitBranch",
      },
      {
        id: "explore-learn",
        number: "03",
        title: "LEARN",
        description:
          "Expanding technical depth through verified certifications in AI foundations, SWE job simulations, and cybersecurity courses.",
        tags: ["AI FOUNDATIONS", "SWE SIMULATION", "SECURITY"],
        iconName: "Compass",
      },
      {
        id: "explore-iterate",
        number: "04",
        title: "ITERATE",
        description:
          "Refining application workflows through debugging, schema optimization, performance tuning, and responsive UI polish.",
        tags: ["DEBUGGING", "PERFORMANCE", "RESPONSIVE UI"],
        iconName: "RefreshCw",
      },
    ],
    attributes: [
      { label: "DEGREE", value: "B.Tech in Computer Science" },
      { label: "FOCUS", value: "Full Stack Development (MERN)" },
      { label: "INSTITUTION", value: "JSS Academy of Tech. Education" },
      { label: "LOCATION", value: "Noida, Uttar Pradesh" },
    ],
    technicalFocus: {
      title: "Full-Stack Web Engineering",
      description:
        "Building end-to-end web applications across modern frontend architectures, RESTful APIs, JWT authentication, and database schemas.",
      technologies: ["MERN", "React", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs"],
    },
    educationHighlight: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JSS Academy of Technical Education",
      period: "2023 — 2026",
      score: "7.77 CGPA",
      scoreLabel: "Cumulative GPA",
      location: "Noida, U.P.",
    },
  },
  projects: projectsData,
  skills: [
    {
      title: "Core Development",
      skills: [
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Express.js", category: "Backend" },
        { name: "MongoDB", category: "Database" },
        { name: "JavaScript", category: "Language" },
        { name: "TypeScript", category: "Language" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "RESTful APIs", category: "Architecture" },
        { name: "WebSockets", category: "Real-Time" },
      ],
    },
  ],
  experiences: [
    {
      id: "smartbridge-smartinternz",
      role: "Full Stack Developer Intern",
      company: "SmartBridge & SmartInternz",
      location: "Remote",
      startDate: "September 2025",
      endDate: "October 2025",
      description: [
        "Developed full-stack web applications using the MERN stack.",
        "Improved overall application performance by 25%.",
        "Designed and implemented RESTful APIs for authentication, data flow, and backend operations.",
        "Implemented JWT-based authentication and authorization for 100+ users.",
        "Collaborated on real-world projects.",
        "Optimized backend logic and reduced response time by 30%.",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "MERN"],
    },
  ],
  education: [
    {
      id: "edu-jss",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "JSS Academy of Technical Education",
      location: "Noida, India",
      startYear: "2023",
      endYear: "2026",
      highlights: ["CGPA: 7.77"],
    },
  ],
  certifications: credentialsData,
  credentials: credentialsData,
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/shivamvermajss",
      iconName: "github",
      label: "GitHub - shivamvermajss",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shivam-verma-227b37384/",
      iconName: "linkedin",
      label: "LinkedIn - Shivam Verma",
    },
  ],
};
