import { Experience, Project, SkillCategory } from "../types/expriences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Togggle",
    role: "Software Engineer (Decentralized KYC)",
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
    role: "Software Engineer (Team Lead)",
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
    title: "Journal",
    description:
      "A Personal Journaling App which behaves like a personal diary, allowing users to record their thoughts, feelings, and experiences.",
    technologies: [
      "Node.js",
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Python",
      "Langgraph",
    ],
    status: "Development",
    caseStudy: {
      problem: "A traditional journaling app with agentic capabilities.",
      solution: "Built a personal companion which sounds like a bestfriend.",
      impact:
        "In today digital age, people are more connected than ever before. But still feelings alone Journal companion will be your best friend.",
      architecture:
        "A nextjs application with python backend utilize nextjs as proxy to handle api calls.",
    },
    githubLink: "https://github.com/imkrish7/journal-app.git",
  },
  {
    title: "Agentorage",
    description:
      "Agentic personal cloud storage which enables users to store and manage their data securely and privately.",
    technologies: [
      "Node.js",
      "React.js",
      "TypeScript",
      "Shadcn UI",
      "TailwindCSS",
      "Prisma",
      "Shadcn UI",
      "TailwindCSS",
      "NextAuth",
      "Prisma",
    ],
    githubLink: "https://github.com/imkrish7/agentorage.git",
    caseStudy: {
      problem:
        "Traditional fee management in educational institutions was fragmented, leading to 20% reconciliation errors and delayed reporting.",
      solution:
        "Engineered a centralized platform using Next.js and D3.js. Built a real-time tracking engine that synchronizes transaction logs across multiple payment gateways.",
      impact:
        "Reduced manual reconciliation time by 80% and provided administrators with instant financial visibility.",
      architecture:
        "Monolithic frontend with microservices handling report generation via Redis queues.",
    },
  },
  {
    title: "Emotion Recognition System",
    description:
      "A government-funded academic project for autistic individuals using image processing and PCA/KNN algorithms in Python.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
    caseStudy: {
      problem: "A project for autistic individuals using image processing.",
      solution:
        "Implemented a real-time emotion recognition system using OpenCV and machine learning algorithms in Python.",
      impact:
        "It helps bridging the gap between autistic individuals and their caregivers by providing real-time emotional feedback.",
      architecture:
        "A python script that uses OpenCV and machine learning algorithms to recognize emotions in real-time.",
    },
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
