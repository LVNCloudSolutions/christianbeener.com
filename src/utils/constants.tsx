import {
	User as UserIcon,
	Brain as BrainIcon,
	Code as CodeIcon,
	Clock as ClockIcon,
	GithubCircle as GitHubIcon,
	Linkedin as LinkedInIcon,
} from "iconoir-react";
import type { DisplayCard, ExperienceItem } from "./types";

// Navigation Links
const NAV_LINKS = [
	{
		icon: UserIcon,
		title: "About",
		url: "#about",
	},
	{
		icon: CodeIcon,
		title: "Skills",
		url: "#skills",
	},
	{
		icon: ClockIcon,
		title: "Experience",
		url: "#experience",
	},
	{
		icon: BrainIcon,
		title: "Philosophy",
		url: "#philosophy",
	},
];

// Display sections
const SECTIONS = [
	{
		id: "philosophy",
		title: "Philosophy",
		bgColor: "bg-card",
	},
	{
		id: "experience",
		title: "Recent Experience",
		bgColor: "bg-dark",
	},
	{
		id: "skills",
		title: "Skills",
		bgColor: "bg-card",
	},
];

// Experience formatted for timeline display
const EXPERIENCE: ExperienceItem[] = [
	{
		role: "Full-Stack Developer",
		employer: "Fieldd",
		location: "Austin, TX",
		startDate: new Date("09/30/2025"),
		endDate: new Date("10/06/2025"),
		highlights: [
			{
				title: "Mobile App Delivery",
				description:
					"Developed and delivered Angular/Ionic mobile applications for iOS/Android, encompassing the full MEAN stack and ensuring a cohesive SaaS user experience.",
			},
			{
				title: "Workflow Automation",
				description:
					"Engineered specialized real-time mobile tools (e.g., license plate scanner) that improved field service speed and boosted user engagement.",
			},
			{
				title: "Internal Tooling",
				description:
					"Contributed to a dedicated sales suite for lead tracking and conversion analysis, directly supporting the business development team.",
			},
			{
				title: "Quality & Release",
				description:
					"Managed post-launch QA and support, ensuring high stability and rapid iteration cycles for the production environment.",
			},
		],
	},
	{
		role: "Software Engineer",
		employer: "General Motors",
		location: "Austin, TX",
		startDate: new Date("01/01/2022"),
		endDate: new Date("08//01/2024"),
		highlights: [
			{
				title: "Enterprise Modernization",
				description:
					"Led the modernization of the core warehousing integration platform, successfully linking SAP and custom WMS via Angular/Spring.",
			},
			{
				title: "Tech Stack Upgrades",
				description:
					"Executed large-scale migration of legacy codebases from Java 8/Spring 2 to Java 17/Spring 3 and Angular 8 to 14+, significantly improving performance and long-term viability.",
			},
			{
				title: "Process Automation",
				description:
					"Developed Python/Kubernetes CronJobs to automate compliance report generation, reducing manual runtime from hours to seconds.",
			},
			{
				title: "DevOps & Cloud Orchestration",
				description:
					"Managed CI/CD pipelines and container deployment strategies using Azure DevOps and Kubernetes for mission-critical logistics systems.",
			},
		],
	},
];

// Skills formatted for Card display
const SKILLS: DisplayCard[] = [
	{
		category: "skills",
		title: "Integrations & APIs",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					"Restful APIs":
						"Node.js, Express.js, Java/Spring Boot, 3rd-party integrations",
				},
				{ Tools: "Postman, VS Code, ngrok" },
			],
		},
	},
	{
		category: "skills",
		title: "Enterprise Scalability",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					"Cloud Providers":
						"AWS, Azure, DigitalOcean, Google Cloud Platform",
				},
				{
					Tools: "Kubernetes, Docker, YAML",
				},
			],
		},
	},
	{
		category: "skills",
		title: "UX & Delivery",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					"Frontend Development":
						"JavaScript/TypeScript, Angular, React, Ionic/Cordova",
				},
				{
					Tools: "GitHub, Jira, Figma, Agile/Scrum methodologies",
				},
			],
		},
	},
];

const PHILOSOPHY: DisplayCard[] = [
	{
		category: "philosophy",
		title: "Technical Approach",
		subtitle: "How I Solve Problems",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					Discovery:
						"Identify real pain points behind a technical request.",
				},
				{
					Design: "Architect solutions that are scalable, maintainable, and efficient.",
				},
				{
					Validation:
						"Iterate quickly with feedback loops to quickly address user needs and business goals.",
				},
			],
		},
	},
	{
		category: "philosophy",
		title: "Strategic Alignment",
		subtitle: "How I Connect Tech to Business",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					Discovery:
						"Understanding the business objectives behind every technical requirement.",
				},
				{
					Design: "Solutions shouldn't just work technically, but accelerate growth and provide a clear path to value.",
				},
				{
					Validation:
						"Measure success through user feedback to drive future iterations.",
				},
			],
		},
	},
	{
		category: "philosophy",
		title: "Prioritize Partnership",
		subtitle: "How I Collaborate",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					"Cross-Functional Communication":
						"Bridging the gap between technical and non-technical stakeholders.",
				},
				{
					Adaptability:
						"I adapt my communication style and technical approach to fit the unique needs of each situation.",
				},
				{
					"Continuous Learning":
						"Stay curious and open to new ideas and innovations.",
				},
			],
		},
	},
];

// Combined card array for simpler processing...
const CARDS: DisplayCard[] = [...SKILLS, ...PHILOSOPHY];

const ICON_LINKS = [
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/christianbeener",
		icon: LinkedInIcon,
	},
	{
		title: "GitHub",
		url: "https://www.github.com/cbeens",
		icon: GitHubIcon,
	},
];

const BIO = {
	title: "Technical Solutions Expert",
	summary:
		"I am a Strategic Solutions Engineer based in Austin, TX, specializing in the intersection of enterprise architecture and business growth. With a foundation in full-stack engineering and DevOps, I architect scalable solutions that bridge the gap between complex technical requirements and high-value business outcomes. I thrive on performing technical discovery and delivering persuasive demonstrations that prove the art of the possible.",
};

export { NAV_LINKS, SECTIONS, EXPERIENCE, CARDS, ICON_LINKS, BIO };
