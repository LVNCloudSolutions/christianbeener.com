interface CardList {
	[key: string]: string;
}

interface DisplayCard {
	// Mandatory fields
	category: "skills" | "projects";
	title: string;
	subtitle?: string;
	tags: string[];
	content: {
		type: "text" | "list";
		items: string | CardList[];
	};

	// Optional fields for project cards
	url?: string;
	status?: "complete" | "in progress" | "planned";
	src?: string;
}

interface ExperienceItem {
	role: string;
	employer: string;
	location: string;
	startDate: Date;
	endDate: Date | null;
	highlights: ExperienceHighlight[];
}

interface ExperienceHighlight {
	title: string;
	description: string;
}

export type { DisplayCard, ExperienceItem };
