import { Experience, Project, SkillCategory } from "../types/expriences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Togggle",
    role: "Senior Software Engineer (Decentralized KYC)",
    period: "May '22 - Feb '25",
    description: [
      "Developed a user-friendly platform that simplifies the KYC process, significantly reducing customer onboarding time.",
      "Designed and built intuitive dashboards for users and administrators, incorporating analytics for data-driven insights.",
      "Implemented advanced features such as real-time QR-based verification and PEP (Politically Exposed Persons) checks.",
      "Enabled organizations to customize the KYC platform to align with their branding.",
    ],
    technologies: [
      "Typescript",
      "NextJS",
      "GraphQL",
      "React-Query",
      "NestJS",
      "Redux",
      "Redis",
      "Socket.io",
      "Docker",
      "TailwindCSS",
    ],
    link: "https://kyc.togggle.io",
  },
  {
    company: "Bookscribs",
    role: "Senior Software Engineer (Team Lead)",
    period: "Mar '21 - Apr '22",
    description: [
      "Developed a scalable story management dashboard, improving content creation efficiency by 15%.",
      "Architected and implemented a robust internal notification system, reducing response times by 10%.",
      "Mentored and supervised a team of three front-end developers, fostering professional growth.",
      "Standardized API development and provided targeted training to the engineering team.",
    ],
    technologies: [
      "NodeJS",
      "ReactJS",
      "Redux",
      "REST API",
      "D3",
      "Python",
      "FastAPI",
      "Docker",
      "Socket.io",
    ],
    link: "https://bookscribs.com",
  },
  {
    company: "Kount BI",
    role: "Full Stack Developer (Financial Analytics)",
    period: "Sep '19 - Feb '20",
    description: [
      "Built a dashboard showing business performance metrics for small to medium-sized businesses.",
      "Created Account Receivable Management system to streamline payment collection.",
      "Implemented complex data visualizations using D3.js based on custom financial designs.",
      "Integrated Stripe and QuickBooks OAuth for secure third-party financial data access.",
    ],
    technologies: [
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "MongoDB",
      "D3JS",
      "Stripe API",
      "QuickBooks API",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Kounter",
    description:
      "A fee management system with a dashboard for fee tracking and interfaces for uploading fees and generating reports.",
    technologies: ["Node.js", "React.js", "D3", "Next.js", "TypeScript"],
  },
  {
    title: "Etherzen",
    description:
      "A project flow management system with a dashboard for tracking projects and interfaces for task creation and editing.",
    technologies: ["Node.js", "React.js", "TypeScript", "D3"],
  },
  {
    title: "Emotion Recognition System",
    description:
      "A government-funded academic project for autistic individuals using image processing and PCA/KNN algorithms in Python.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Redux",
      "TailwindCSS",
      "Material-UI",
      "styled-components",
      "React-Query",
    ],
  },
  {
    name: "Backend",
    skills: [
      "NodeJS",
      "NestJS",
      "FastAPI",
      "Python",
      "GraphQL",
      "REST APIs",
      "WebSocket",
      "Socket.io",
    ],
  },
  {
    name: "Database & DevOps",
    skills: [
      "MongoDB",
      "Redis",
      "Docker",
      "AWS Amplify",
      "EC2",
      "PostHog",
      "xState",
    ],
  },
  {
    name: "Visuals & Data",
    skills: ["D3.js", "Recharts", "Analytics", "Financial Modeling"],
  },
];
