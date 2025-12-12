import { EXPERIENCE } from "../../utils/constants";

const formatDate = (date: Date | null): string => {
	if (!date) {
		return "Present";
	}

	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		year: "numeric",
	}).format(date);
};

// This component displays a Timeline of Work Experience
export default function Experience() {
	const experienceItems = EXPERIENCE.map((experience: any, index) => {
		return (
			<>
				<div key={index}>
					<h3 className="text-2xl font-bold text-primary">
						{experience.role}
					</h3>
					<h4 className="text-lg font-semibold text-light mt-1">
						{experience.employer}
					</h4>
					<span className="text-sm text-slate-500 mb-4">
						{`${formatDate(experience.startDate)} - ${formatDate(
							experience.endDate
						)}`}
					</span>
					<ul className="list-disc ml-5 space-y-2 text-slate-400 tech-label">
						{experience.highlights.map(
							(highlight: any, index: number) => {
								return (
									<li key={index}>
										<strong>{highlight.title}: </strong>{" "}
										{highlight.description}
									</li>
								);
							}
						)}
					</ul>
				</div>
			</>
		);
	});

	return (
		<>
			<div className="flex-col">
				<div className="relative border-l-4 border-accent space-y-8 ml-4 md:ml-0 md:pl-4">
					{experienceItems.map((experienceItem, index) => {
						return (
							<div key={index} className="relative pl-4">
								<div className="absolute -left-3.5 md:-left-7.5 top-1 w-6 h-6 rounded-full bg-primary border-4 border-dark"></div>
								{experienceItem}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
