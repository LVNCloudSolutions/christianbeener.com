import {
	User,
	Brain,
	Code,
	Clock,
	MessageText,
	DownloadCircle,
} from "iconoir-react";

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

const SECTION_CARDS = [
	{
		title: "Fullstack Development",
		subtitle: "Robust & Scalable Applications",
		details: [
			{
				Frontend: "Angular, React, TailwindCSS, JavaScript/TypeScript",
			},
			{ Data: "MySQL, PostgreSQL, MongoDB, SQL/NoSQL Design" },
			{ Specialty: "Legacy System Modernization" },
		],
	},
	{
		title: "Cloud Infrastructure",
		subtitle: "Automation & Provisioning",
		details: [
			{ AWS: "EC2, S3, RDS, IAM, SES" },
			{
				DevOps: "Terraform, Pulumi, CI/CD Pipelines (GitHub Actions)",
			},
			{
				Containers: "Docker, Kubernetes, and Containerized Deployment",
			},
		],
	},
	{
		title: "Optimized Workflows",
		subtitle: "Agile & Efficient Development",
		details: [
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
];

const PROJECT_CARDS = [
	{
		title: "Dynamic Website Update",
		tag: "Fullstack",
		description: `
            A complete rebuild of this website using the latest React and TailwindCSS
			technologies to enhance performance, responsiveness, and user experience.
        `,
		tech: "React, TypeScript, TailwindCSS",
		url: "https://github.com/lvncloudsolutions/christianbeener.com",
		src: "GitHub",
	},
	{
		title: "IaC using Terraform",
		tag: "DevOps",
		description: `
            An ongoing project to create reusable Infrastructure as Code (IaC) templates
            for provisioning secure and scalable AWS
            cloud resources using
            Terraform.
        `,
		tech: "IaC, Terraform, AWS",
		url: "https://github.com/lvncloudsolutions/terraform-projects",
		src: "GitHub",
	},
	{
		title: "SAA-C03 Certification",
		tag: "AWS",
		description: `
            Currently studying for the AWS Certified Solutions Architect - Associate (SAA-C03)
            exam, focusing on designing resilient
            architectures, high-performing systems, and
            cost-optimized solutions on AWS.
        `,
		tech: "AWS, Cloud Architecture",
		url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
		src: "AWS",
	},
];

export { LINKS, SECTIONS, SECTION_CARDS, PROJECT_CARDS };
