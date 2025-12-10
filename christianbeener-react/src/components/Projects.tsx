import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Typography,
} from "@material-tailwind/react";
import { PROJECT_CARDS } from "../constants";

export default function Projects() {
	const projects = PROJECT_CARDS;
	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 text-left">
				{projects.map((project) => {
					return (
						<Card
							key={project.title}
							className="p-6 bg-dark rounded-xl shadow-lg border-b-0 border-x-0 border-t-4 border-primary flex flex-col gap-1 justify-between"
						>
							<CardBody>
								<Typography
									as="h3"
									className="text-xl font-bold mb-2 text-white"
								>
									{project.title}
								</Typography>
								<Typography
									as="p"
									className="text-slate-400 mb-4 text-sm"
								>
									{project.description}
								</Typography>
							</CardBody>
							<CardFooter>
								<Typography
									as="p"
									className="text-xs text-accent font-mono mb-2"
								>
									Tech: {project.tech}
								</Typography>
								<Typography
									as="a"
									href={project.url}
									className="text-primary hover:text-light underline text-sm font-semibold transition duration-300"
									target="_blank"
								>
									View on {project.src}
								</Typography>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</>
	);
}
