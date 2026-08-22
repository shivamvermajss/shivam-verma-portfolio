import { Project } from "@/types/portfolio";

export interface ProjectsSectionCopy {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
}

export const projectsSectionCopy: ProjectsSectionCopy = {
  eyebrow: "SELECTED WORK",
  title: "PROJECTS THAT",
  highlightedTitle: "SHIP",
  description:
    "A curated collection of full-stack web applications, real-time architectures, and SaaS products built with end-to-end engineering depth.",
};

/**
 * SINGLE SOURCE OF TRUTH: PROJECTS DATA
 * Verified project descriptions, technical stacks, capabilities, and URLs.
 * Zero synthetic metrics or unverified claims.
 */
export const projectsData: Project[] = [
  {
    id: "imagify",
    title: "Imagify",
    slug: "imagify",
    tagline: "AI IMAGE GENERATION SAAS",
    category: "AI / SaaS",
    description:
      "An AI-powered SaaS platform that turns text prompts into generated images with JWT authentication, credit-based usage, and integrated payment workflows.",
    tags: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Stripe"],
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    capabilities: [
      "AI-Powered Text-to-Image Generation",
      "Credit-Based Usage Tracking & Deduction",
      "JWT Authentication & Protected Routes",
      "Razorpay & Stripe Payment Integration",
      "MVC Backend Architecture & REST APIs",
      "Password Hashing using bcrypt",
      "Vercel Frontend & Render Backend Deployment",
    ],
    highlights: [
      "AI TEXT-TO-IMAGE",
      "CREDIT-BASED USAGE",
      "JWT AUTHENTICATION",
      "PAYMENT INTEGRATION",
      "MVC BACKEND",
    ],
    featured: true,
    priority: 1,
    liveUrl: "https://imagify-coral.vercel.app",
    githubUrl: "https://github.com/shivamvermajss/Imagify",
  },
  {
    id: "quickchat",
    title: "QuickChat",
    slug: "quickchat",
    tagline: "Real-Time Chat & Media Collaboration Platform",
    category: "Real-Time / Full Stack",
    description:
      "Low-latency real-time chat application featuring bi-directional Socket.IO messaging, online presence tracking, image sharing via Cloudinary, and persistent conversation history.",
    tags: ["React", "Vite", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Cloudinary"],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary"],
    capabilities: [
      "Authentication & Protected Sessions",
      "Bi-Directional Real-Time Messaging",
      "Online / Offline Presence Tracking",
      "Image Messaging via Cloudinary",
      "Seen & Unseen Message Status",
      "User Search & Profiles",
      "Media Gallery & Responsive UI",
    ],
    highlights: [
      "Socket.IO WebSockets",
      "Online Presence",
      "Cloudinary Media",
      "Message Status",
      "User Search",
    ],
    featured: false,
    priority: 2,
    bentoSpan: { colSpan: 2, rowSpan: 1 },
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: "staysphere",
    title: "StaySphere",
    slug: "staysphere",
    tagline: "Full-Stack Accommodation & Property Booking Platform",
    category: "Booking Platform / Full Stack",
    description:
      "Full-stack accommodation rental and booking platform featuring comprehensive listing CRUD, Passport.js session authentication, interactive review workflows, and Cloudinary image management.",
    tags: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "EJS"],
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "EJS", "Bootstrap", "CSS", "JavaScript"],
    capabilities: [
      "User Authentication & Authorization",
      "Listings & Accommodation CRUD",
      "Booking Structure & Dates",
      "Review & Rating Workflows",
      "Cloudinary Image Upload Pipeline",
      "Session Handling & Cookies",
      "RESTful Routing Architecture",
    ],
    highlights: [
      "Passport.js Auth",
      "Listings CRUD",
      "Reviews & Ratings",
      "Cloudinary Uploads",
      "RESTful Routes",
    ],
    featured: false,
    priority: 3,
    bentoSpan: { colSpan: 1, rowSpan: 1 },
    liveUrl: "https://staysphere-yinn.onrender.com",
    githubUrl: "https://github.com/shivamvermajss/StaySphere",
  },
  {
    id: "threadly",
    title: "Threadly",
    slug: "threadly",
    tagline: "Full-Stack Social Networking & Media Platform",
    category: "Social Platform",
    description:
      "Full-stack social media platform with user profiles, follow relationships, multimedia posts, likes, comments, bookmarking, search, and instant notifications.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS"],
    capabilities: [
      "Authentication & JWT Tokens",
      "User Profiles & Bio Management",
      "Follow & Unfollow Social Graph",
      "Multimedia Post Publishing",
      "Likes, Comments & Post Saves",
      "User & Post Search",
      "Instant Notification Feeds",
    ],
    highlights: [
      "Follow Social Graph",
      "Posts & Feeds",
      "JWT Authentication",
      "Cloudinary Media",
      "Notifications",
    ],
    featured: false,
    priority: 4,
    bentoSpan: { colSpan: 1, rowSpan: 1 },
    liveUrl: "https://threadly-social-app.vercel.app/",
    githubUrl: "https://github.com/shivamvermajss/threadly-social-app",
  },
  {
    id: "youtube-watch-party",
    title: "YouTube Watch Party",
    slug: "youtube-watch-party",
    tagline: "Real-Time Synchronized Video Playback Platform",
    category: "Real-Time / Collaboration",
    description:
      "Multi-user synchronized YouTube streaming platform enabling friends to watch together in private rooms with host controls, moderator roles, and live emoji reactions.",
    tags: ["React", "Socket.IO", "YouTube IFrame API", "Node.js", "Express.js", "MongoDB"],
    technologies: ["React", "Node.js", "Express.js", "Socket.IO", "MongoDB Atlas", "Mongoose", "Tailwind CSS", "Vite", "React YouTube", "YouTube IFrame API"],
    capabilities: [
      "Synchronized Multi-User Playback",
      "Private Rooms & Access Codes",
      "Host & Moderator Role Controls",
      "Host Transfer & Participant Removal",
      "Real-Time Emoji Reactions",
      "Live Connection State Synchronization",
    ],
    highlights: [
      "Synchronized Playback",
      "Socket.IO Room Sync",
      "Host & Mod Roles",
      "Emoji Reactions",
      "YouTube IFrame API",
    ],
    featured: false,
    priority: 5,
    bentoSpan: { colSpan: 1, rowSpan: 1 },
    liveUrl: "https://youtube-watch-party-omega.vercel.app",
    githubUrl: undefined,
  },
  {
    id: "smart-meet",
    title: "Smart Meet",
    slug: "smart-meet",
    tagline: "Video Conferencing & Meeting Management Platform",
    category: "Video Collaboration",
    description:
      "Video conferencing application supporting instant room creation, scheduled meetings, participant management, in-meeting chat, and real-time audio/video streams.",
    tags: ["React", "Agora RTC", "Socket.IO", "Node.js", "Express.js", "MongoDB"],
    technologies: ["React", "Node.js", "Express.js", "Socket.IO", "Agora RTC", "MongoDB"],
    capabilities: [
      "Instant & Scheduled Meeting Creation",
      "Meeting Joining & Access Control",
      "User Profiles & Authentication",
      "Participant List Management",
      "Real-Time In-Meeting Chat",
      "Agora Video/Audio Channel Integration",
    ],
    highlights: [
      "Agora RTC Video",
      "Socket.IO Signaling",
      "Scheduled Meetings",
      "In-Meeting Chat",
      "Participant Controls",
    ],
    featured: false,
    priority: 6,
    bentoSpan: { colSpan: 1, rowSpan: 1 },
    liveUrl: undefined,
    githubUrl: undefined,
  },
];

export const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
export const secondaryProjects = projectsData.filter((p) => !p.featured);
