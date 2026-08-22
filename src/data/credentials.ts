import { VerifiedCredential, CredentialFilterId } from "@/types/portfolio";

export interface CredentialFilterOption {
  id: CredentialFilterId;
  label: string;
}

export const CREDENTIAL_FILTERS: CredentialFilterOption[] = [
  { id: "all", label: "ALL" },
  { id: "ai", label: "AI & CLOUD" },
  { id: "full-stack", label: "FULL STACK" },
  { id: "software-engineering", label: "SOFTWARE ENG" },
  { id: "security", label: "SECURITY" },
];

/**
 * AUTHORITATIVE VERIFIED CREDENTIALS DATASET
 * Sourced directly from verified certificate documentation in public/certificates/.
 * Zero synthetic claims, fabricated credential IDs, or unbacked skills.
 */
export const credentialsData: VerifiedCredential[] = [
  {
    id: "oracle-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issuerShort: "ORACLE",
    type: "Professional Certification",
    category: "Professional Certification",
    domain: "ai",
    issueDate: "November 05, 2025",
    date: "Nov 05, 2025",
    fileUrl: "/certificates/oracle-ai.pdf",
    credentialId: "103093690OCI25AICFA",
    skills: ["AI", "Cloud", "Generative AI Core Concepts", "Cloud Architectures"],
    featured: true,
    isPriority: true,
  },
  {
    id: "forage-jpmorgan-swe",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    issuerOrganization: "JPMorgan Chase & Co.",
    issuerShort: "FORAGE · JPMORGAN CHASE & CO.",
    type: "Certificate of Completion",
    category: "Job Simulation",
    domain: "software-engineering",
    issueDate: "November 15, 2025",
    date: "Nov 15, 2025",
    fileUrl: "/certificates/jpmorgan.pdf",
    enrolmentCode: "8bTch9bZ3i4yuY2a9",
    userVerificationCode: "gSW8MoYhEMPtwL7Nc",
    skills: ["Software Engineering", "REST APIs", "Kafka", "H2"],
    featured: false,
  },
  {
    id: "smartbridge-mern-internship",
    title: "Full Stack Developer – MERN Stack",
    issuer: "SmartBridge & SmartInternz",
    issuerShort: "SMARTBRIDGE & SMARTINTERNZ",
    recipient: "Shivam Verma",
    type: "Virtual Internship Completion Certificate",
    category: "Internship / Professional Credential",
    domain: "full-stack",
    period: "01 September 2025 – 29 October 2025",
    issueDate: "November 13, 2025",
    date: "Nov 13, 2025",
    credentialId: "VIP-FSD-2025-26164",
    fileUrl: "/certificates/smartinternz.pdf",
    skills: ["MERN", "Full Stack Development", "REST APIs", "JWT"],
    relatedExperienceId: "smartbridge-smartinternz",
    relatedExperienceRole: "Full Stack Developer Intern",
    featured: false,
  },
  {
    id: "infosys-ethical-hacking",
    title: "Complete Ethical Hacking Course with Case Studies",
    issuer: "Infosys / Wingspan",
    issuerShort: "INFOSYS / WINGSPAN",
    recipient: "Shivam Verma",
    type: "Course Certification",
    category: "Course Certification",
    domain: "security",
    completionDate: "May 16, 2024",
    issueDate: "May 29, 2024",
    date: "May 29, 2024",
    verificationUrl: "https://verify.onwingspan.com",
    fileUrl: "/certificates/infosys.pdf",
    skills: ["Ethical Hacking", "Cybersecurity", "Network Security", "Vulnerability Analysis"],
    featured: false,
  },
];
