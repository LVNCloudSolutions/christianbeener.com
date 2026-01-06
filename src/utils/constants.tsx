import {
	User as UserIcon,
	Brain as BrainIcon,
	Code as CodeIcon,
	Clock as ClockIcon,
	MessageText as MessageIcon,
	DownloadCircle as DownloadIcon,
	ProfileCircle as ProfileIcon,
	Suitcase as SuitcaseIcon,
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
		icon: BrainIcon,
		title: "Skills",
		url: "#skills",
	},
	{
		icon: ClockIcon,
		title: "Experience",
		url: "#experience",
	},
	{
		icon: CodeIcon,
		title: "Projects",
		url: "#projects",
	},
	{
		icon: MessageIcon,
		title: "Contact",
		url: "#contact",
	},
	{
		icon: DownloadIcon,
		title: "Resume",
		url: "/downloads/Christian_Beener_resume_2026-download.pdf",
		target: "_blank",
		download: "Christian_Beener_resume_2026-download.pdf",
	},
];

// Display sections
const SECTIONS = [
	{
		id: "skills",
		title: "End-to-End Tech Stack",
		bgColor: "bg-card",
	},
	{
		id: "experience",
		title: "Professional Experience",
		bgColor: "bg-dark",
	},
	{
		id: "projects",
		title: "Current Projects",
		bgColor: "bg-card",
	},
	{
		id: "contact",
		title: "Contact",
		bgColor: "bg-dark",
	},
];

// Experience formatted for timeline display
const EXPERIENCE: ExperienceItem[] = [
	{
		role: "Independent Consulting",
		employer: "Self-Employed",
		location: "Austin, TX",
		startDate: new Date("10/01/2025"),
		endDate: null,
		highlights: [
			{
				title: "IaC Templating",
				description:
					"Actively building reusable Infrastructure as Code (IaC templates to ensure client solutions start with secure, scalable foundations.",
			},
			{
				title: "Full-Stack Development",
				description:
					"Building reusable React components to simplify design/development for ongoing projects.",
			},
			{
				title: "Workflow Automation",
				description:
					"Designing and implementing automated CI/CD pipelines for containerized applications, focusing on reliability and speed in deployment cycles.",
			},
			{
				title: "Career Growth",
				description:
					"Preparing for the AWS Solutions Architect - Associate certification to expand and formalize expertise in cloud architecture design.",
			},
		],
	},
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
	{
		role: "Project Manager / Full-Stack Developer",
		employer: "Uh Capstone Project",
		location: "Houston, TX",
		startDate: new Date("08//01/2020"),
		endDate: new Date("05//01/2021"),
		highlights: [
			{
				title: "Leadership",
				description:
					"Directed a 9-member team to deliver full-stack Java and AWS business app valued at $50K.",
			},
			{
				title: "Oversaw SDLC",
				description:
					"Requirements, architecture, coding, testing, and deployment.",
			},
			{
				title: "Full-Stack Development",
				description:
					"Developed backend services and responsive UI integrated with AWS-hosted data pipelines.",
			},
		],
	},
];

// Skills formatted for Card display
const SKILLS: DisplayCard[] = [
	{
		category: "skills",
		title: "Full-Stack Development",
		subtitle: "Robust & Scalable Applications",
		tags: [],
		content: {
			type: "list",
			items: [
				{
					Frontend:
						"Angular, React, TailwindCSS, JavaScript/TypeScript",
				},
				{ Data: "MySQL, PostgreSQL, MongoDB, SQL/NoSQL Design" },
				{ Specialty: "Legacy System Modernization" },
			],
		},
	},
	{
		category: "skills",
		title: "Cloud Infrastructure",
		subtitle: "Automation & Provisioning",
		tags: [],
		content: {
			type: "list",
			items: [
				{ AWS: "EC2, S3, RDS, IAM, SES" },
				{
					DevOps: "Terraform, Pulumi, CI/CD Pipelines (GitHub Actions)",
				},
				{
					Containers:
						"Docker, Kubernetes, and Containerized Deployment",
				},
			],
		},
	},
	{
		category: "skills",
		title: "Optimized Workflows",
		subtitle: "Agile & Efficient Delivery",
		tags: [],
		content: {
			type: "list",
			items: [
				{ Tools: "Git, VS Code, Linux Environments" },
				{
					"Agile Delivery":
						"SCRUM/Kanban, Sprint Planning, Project Management",
				},
				{
					"Testing & Quality":
						"Unit & Integration Testing, AI-Assisted Code Review",
				},
			],
		},
	},
];
// Projects formatted for Card display
const PROJECTS: DisplayCard[] = [
	{
		category: "projects",
		title: "Dynamic Website Update",
		subtitle: "Full-Stack Development",
		tags: ["React", "TypeScript", "TailwindCSS"],
		content: {
			type: "text",
			items: `
            A complete rebuild of this website using the latest React and TailwindCSS
			technologies to enhance performance, responsiveness, and user experience.
        `,
		},
		url: "https://github.com/cbeens/christianbeener.com",
		src: "GitHub",
	},
	{
		category: "projects",
		title: "IaC using Terraform",
		subtitle: "DevOps Automation",
		tags: ["IaC", "Terraform", "AWS"],
		content: {
			type: "text",
			items: `
				An ongoing project to create reusable Infrastructure as Code (IaC) templates
				for provisioning secure and scalable AWS
				cloud resources using
				Terraform.
			`,
		},
		url: "https://github.com/lvncloudsolutions/terraform-projects",
		src: "GitHub",
	},
	{
		category: "projects",
		title: "SAA-C03 Certification",
		subtitle: "AWS Solutions Architect - Associate",
		tags: ["AWS", "Cloud", "Infrastructure"],
		content: {
			type: "text",
			items: `
				Currently studying for the AWS Certified Solutions Architect - Associate (SAA-C03)
				exam, focusing on designing resilient
				architectures, high-performing systems, and
				cost-optimized solutions on AWS.
			`,
		},
		url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
		src: "AWS",
	},
];
// Combined card array for simpler processing...
const CARDS: DisplayCard[] = [...SKILLS, ...PROJECTS];

// Tabs for tab group
const TABS = [
	{
		name: "Services",
		icon: SuitcaseIcon,
	},
	{
		name: "Recruiters",
		icon: ProfileIcon,
	},
];

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
	title: "Full-Stack Engineering & DevOps",
	summary: `Hello! I'm Christian, an intrepid Full-Stack Engineer and DevOps enthusiast based in Austin, TX. With a strong foundation in both front-end and back-end development, I thrive on creating seamless, efficient, and scalable applications. My expertise spans a variety of technologies, and I'm dedicated to continuous learning and innovation in the ever-evolving tech landscape.`,
};

const SERVICES = [
	{
		option: "Static Website Development",
		value: "static-website-development",
	},
	{
		option: "CI/CD Pipeline Setup",
		value: "ci-cd-pipeline-setup",
	},
	{
		option: "AWS/Terraform Infrastructure",
		value: "aws-terraform-infrastructure",
	},
	{
		option: "Full-Stack Consulting",
		value: "full-stack-consulting",
	},
	{
		option: "Other Inquiry",
		value: "other-inquiry",
	},
];

const RECRUITER_FORM = {
	id: "recruiter",
	title: "Job Offers & Inquiries",
	subtitle: "Let me know if you're hiring!",
	action: "https://formspree.io/f/mjkjbbbj",
	textarea: {
		name: "Job Details",
		rows: 3,
	},
};

const SERVICE_FORM = {
	id: "services",
	title: "Contract Services",
	subtitle:
		"For quick, fixed-price DevOps projects, cloud consultation, or inquiries about LVN Cloud Solutions.",
	action: "https://formspree.io/f/xrbrzzza",
	textarea: {
		name: "Project Details",
		rows: 4,
	},
};

export {
	NAV_LINKS,
	SECTIONS,
	EXPERIENCE,
	CARDS,
	TABS,
	ICON_LINKS,
	BIO,
	SERVICES,
	RECRUITER_FORM,
	SERVICE_FORM,
};
