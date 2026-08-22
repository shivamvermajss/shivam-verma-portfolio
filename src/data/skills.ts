export interface SkillItem {
  id: string;
  name: string;
  category: "languages" | "frontend" | "backend" | "database" | "realtime" | "tools" | "coreCS";
  description?: string;
  usedInProjects?: string[]; // Project IDs from projectsData
  isCore?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  skills: SkillItem[];
}

export interface ConstellationNode {
  id: string;
  name: string;
  category: string;
  x: number; // 0 to 100% relative coordinates
  y: number; // 0 to 100% relative coordinates
  isCenter?: boolean;
  connections: string[]; // Connected node IDs
}

/**
 * SINGLE SOURCE OF TRUTH: SKILLS DATA
 * Grounded in verified resume and project repositories.
 * Zero synthetic proficiency percentages or unverified claims.
 */
export const skillsData: Record<string, SkillCategory> = {
  fullstack: {
    id: "fullstack",
    title: "Full-Stack Development",
    eyebrow: "CORE ARCHITECTURE",
    description: "Architecting end-to-end web applications with modular frontends, RESTful APIs, and persistent databases.",
    skills: [
      { id: "react", name: "React.js", category: "frontend", isCore: true, usedInProjects: ["imagify", "quickchat", "threadly", "youtube-watch-party", "smart-meet"], description: "Component-driven UI & SPA architecture" },
      { id: "nodejs", name: "Node.js", category: "backend", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "Event-driven runtime & asynchronous services" },
      { id: "express", name: "Express.js", category: "backend", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "REST routing, middleware & controllers" },
      { id: "mongodb", name: "MongoDB", category: "database", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "Document-oriented NoSQL storage" },
      { id: "rest", name: "RESTful APIs", category: "backend", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly"], description: "Stateless client-server communication" },
      { id: "jwt", name: "JWT Auth", category: "backend", isCore: true, usedInProjects: ["imagify", "threadly"], description: "Token-based secure authentication & session guards" },
    ],
  },
  languages: {
    id: "languages",
    title: "Programming Languages",
    eyebrow: "LANGUAGES",
    description: "Core languages used for systems programming, data structures, and web development.",
    skills: [
      { id: "js", name: "JavaScript (ES6+)", category: "languages", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "Async/await, closures, DOM, ES modules" },
      { id: "java", name: "Java", category: "languages", description: "OOP principles, collections & DSA" },
      { id: "python", name: "Python", category: "languages", description: "Scripting, algorithms & automation" },
      { id: "c", name: "C", category: "languages", description: "Low-level memory management & pointers" },
      { id: "sql", name: "SQL", category: "languages", description: "Relational queries, schema design & joins" },
    ],
  },
  frontend: {
    id: "frontend",
    title: "Frontend Engineering",
    eyebrow: "USER INTERFACE",
    description: "Building responsive, accessible, and high-performance client-side applications.",
    skills: [
      { id: "react-fe", name: "React.js", category: "frontend", isCore: true, usedInProjects: ["imagify", "quickchat", "threadly", "youtube-watch-party", "smart-meet"], description: "Component lifecycle, custom hooks & virtual DOM" },
      { id: "redux", name: "Redux Toolkit", category: "frontend", description: "Predictable global state management & slices" },
      { id: "context", name: "Context API", category: "frontend", description: "Scoped state sharing without prop drilling" },
      { id: "tailwind", name: "Tailwind CSS", category: "frontend", isCore: true, usedInProjects: ["imagify", "quickchat", "threadly", "youtube-watch-party"], description: "Utility-first design systems & responsive layouts" },
      { id: "bootstrap", name: "Bootstrap", category: "frontend", usedInProjects: ["staysphere"], description: "Responsive grid systems & UI components" },
      { id: "html5", name: "HTML5", category: "frontend", isCore: true, description: "Semantic markup & web standards" },
      { id: "css3", name: "CSS3", category: "frontend", isCore: true, description: "Flexbox, Grid, keyframe animations & variables" },
    ],
  },
  backend: {
    id: "backend",
    title: "Backend & Systems",
    eyebrow: "SERVER ARCHITECTURE",
    description: "Designing robust server-side services, data validation pipelines, and secure endpoints.",
    skills: [
      { id: "node-be", name: "Node.js", category: "backend", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "Non-blocking I/O & server runtime" },
      { id: "express-be", name: "Express.js", category: "backend", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "Middleware chains & endpoint routing" },
      { id: "rest-be", name: "RESTful API Design", category: "backend", isCore: true, description: "CRUD operations, HTTP verbs & status codes" },
      { id: "jwt-be", name: "JWT Authentication", category: "backend", isCore: true, usedInProjects: ["imagify", "threadly"], description: "Bearer token verification & route protection" },
      { id: "bcrypt", name: "Password Hashing (bcrypt)", category: "backend", usedInProjects: ["imagify", "threadly"], description: "Salt hashing for credentials security" },
    ],
  },
  database: {
    id: "database",
    title: "Databases & Storage",
    eyebrow: "DATA PERSISTENCE",
    description: "Schema modeling, relational and document stores, and cloud media asset pipelines.",
    skills: [
      { id: "mongodb-db", name: "MongoDB", category: "database", isCore: true, usedInProjects: ["imagify", "quickchat", "staysphere", "threadly", "youtube-watch-party", "smart-meet"], description: "Document collections & aggregation pipelines" },
      { id: "mongoose", name: "Mongoose ODM", category: "database", isCore: true, usedInProjects: ["staysphere", "threadly", "youtube-watch-party"], description: "Schema validation, population & model methods" },
      { id: "mysql", name: "MySQL", category: "database", description: "Structured relational tables, foreign keys & queries" },
      { id: "cloudinary", name: "Cloudinary", category: "database", isCore: true, usedInProjects: ["quickchat", "staysphere", "threadly"], description: "Cloud image upload pipeline & CDN delivery" },
    ],
  },
  realtime: {
    id: "realtime",
    title: "Real-Time Systems",
    eyebrow: "LIVE DATA",
    description: "Bi-directional WebSocket communication, room synchronization, and live event handling.",
    skills: [
      { id: "socketio", name: "Socket.IO", category: "realtime", isCore: true, usedInProjects: ["quickchat", "youtube-watch-party", "smart-meet"], description: "Real-time bi-directional event communication" },
      { id: "websockets", name: "WebSockets", category: "realtime", isCore: true, usedInProjects: ["quickchat"], description: "Persistent low-latency duplex connections" },
    ],
  },
  tools: {
    id: "tools",
    title: "Tools & Delivery",
    eyebrow: "DEVELOPMENT WORKFLOW",
    description: "Version control, API testing, package management, and cloud deployment platforms.",
    skills: [
      { id: "git", name: "Git", category: "tools", isCore: true, description: "Branching, merging & commit workflows" },
      { id: "github", name: "GitHub", category: "tools", isCore: true, description: "Remote repository hosting & collaboration" },
      { id: "postman", name: "Postman", category: "tools", description: "API testing, endpoint debugging & collections" },
      { id: "vscode", name: "VS Code", category: "tools", description: "Primary IDE & developer tooling" },
      { id: "npm", name: "NPM", category: "tools", description: "Package dependency management" },
      { id: "vercel", name: "Vercel", category: "tools", isCore: true, usedInProjects: ["imagify", "threadly", "youtube-watch-party"], description: "Frontend edge deployment & serverless hosting" },
      { id: "render", name: "Render", category: "tools", isCore: true, usedInProjects: ["staysphere", "imagify"], description: "Web services & backend server deployment" },
    ],
  },
  coreCS: {
    id: "coreCS",
    title: "Core Computer Science",
    eyebrow: "ACADEMIC FOUNDATION",
    description: "Foundational computer science principles applied to software engineering and problem solving.",
    skills: [
      { id: "dsa", name: "Data Structures & Algorithms", category: "coreCS", isCore: true, description: "Arrays, Trees, Graphs, Sorting & Dynamic Programming" },
      { id: "oop", name: "Object-Oriented Programming", category: "coreCS", isCore: true, description: "Encapsulation, Inheritance, Polymorphism & Abstraction" },
      { id: "dbms", name: "Database Management Systems", category: "coreCS", isCore: true, description: "ACID properties, Normalization & Query Optimization" },
      { id: "os", name: "Operating Systems", category: "coreCS", description: "Process scheduling, Memory management & Concurrency" },
      { id: "cn", name: "Computer Networks", category: "coreCS", description: "TCP/IP, OSI model, HTTP/HTTPS protocols & DNS" },
    ],
  },
};

/**
 * MARQUEE TECHNOLOGY ITEMS
 * High-performance horizontal infinite stream
 */
export const marqueeSkills = [
  "REACT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "JAVASCRIPT",
  "SOCKET.IO",
  "TAILWIND CSS",
  "SQL",
  "RESTFUL APIS",
  "JWT AUTH",
  "GIT & GITHUB",
  "MONGOOSE",
  "CLOUDINARY",
  "POSTMAN",
  "VERCEL",
  "RENDER",
  "DATA STRUCTURES",
];

/**
 * TECHNOLOGY CONSTELLATION NODES
 * Interactive graph visualizing full-stack architecture relationships
 */
export const constellationNodes: ConstellationNode[] = [
  {
    id: "center-fullstack",
    name: "FULL STACK",
    category: "Core",
    x: 50,
    y: 50,
    isCenter: true,
    connections: ["node-react", "node-node", "node-express", "node-mongo", "node-socket", "node-js", "node-jwt", "node-sql"],
  },
  {
    id: "node-react",
    name: "React.js",
    category: "Frontend",
    x: 22,
    y: 24,
    connections: ["center-fullstack", "node-js"],
  },
  {
    id: "node-node",
    name: "Node.js",
    category: "Runtime",
    x: 78,
    y: 24,
    connections: ["center-fullstack", "node-express"],
  },
  {
    id: "node-express",
    name: "Express.js",
    category: "REST API",
    x: 84,
    y: 54,
    connections: ["center-fullstack", "node-node", "node-jwt"],
  },
  {
    id: "node-mongo",
    name: "MongoDB",
    category: "Database",
    x: 74,
    y: 80,
    connections: ["center-fullstack", "node-express"],
  },
  {
    id: "node-socket",
    name: "Socket.IO",
    category: "Real-Time",
    x: 26,
    y: 80,
    connections: ["center-fullstack", "node-node", "node-react"],
  },
  {
    id: "node-js",
    name: "JavaScript",
    category: "Language",
    x: 16,
    y: 54,
    connections: ["center-fullstack", "node-react", "node-node"],
  },
  {
    id: "node-jwt",
    name: "JWT Auth",
    category: "Security",
    x: 50,
    y: 18,
    connections: ["center-fullstack", "node-express"],
  },
  {
    id: "node-sql",
    name: "SQL",
    category: "Database",
    x: 50,
    y: 84,
    connections: ["center-fullstack", "node-mongo"],
  },
];
