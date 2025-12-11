import {
	User,
	Brain,
	Code,
	Clock,
	MessageText,
	DownloadCircle,
} from "iconoir-react";
import type { DisplayCard } from "./types";

const LINKS = [
	{
		icon: User,
		title: "About",
		href: "#about",
	},
	{
		icon: Brain,
		title: "Skills",
		href: "#skills",
	},
	{
		icon: Clock,
		title: "Experience",
		href: "#experience",
	},
	{
		icon: Code,
		title: "Projects",
		href: "#projects",
	},
	{
		icon: MessageText,
		title: "Contact",
		href: "#contact",
	},
	{
		icon: DownloadCircle,
		title: "Resume",
		href: "/downloads/Christian_Beener_resume_2026-download.pdf",
		target: "_blank",
		download: "Christian_Beener_resume_2026-download.pdf",
	},
];

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

const SKILLS: DisplayCard[] = [
	{
		category: "skills",
		title: "Fullstack Development",
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
		subtitle: "Agile & Efficient Development",
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

const PROJECTS: DisplayCard[] = [
	{
		category: "projects",
		title: "Dynamic Website Update",
		subtitle: "Fullstack development",
		tags: ["React", "TypeScript", "TailwindCSS"],
		content: {
			type: "text",
			items: `
            A complete rebuild of this website using the latest React and TailwindCSS
			technologies to enhance performance, responsiveness, and user experience.
        `,
		},
		url: "https://github.com/lvncloudsolutions/christianbeener.com",
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

const CARDS: DisplayCard[] = [...SKILLS, ...PROJECTS];

export { LINKS, SECTIONS, CARDS };
