import {
	Card,
	CardBody,
	CardFooter,
	Typography,
} from "@material-tailwind/react";
import type { DisplayCard } from "../types";

export default function CardContainer({ card }: { card: DisplayCard }) {
	let cardContent;
	if (card.content.type === "text") {
		cardContent = (
			<Typography as="p" className="text-slate-400 mb-4 text-sm">
				{card.content.items as string}
			</Typography>
		);
	} else if (card.content.type === "list") {
		cardContent = (
			<Typography
				as="ul"
				className="list-none list-inside text-sm text-slate-400 space-y-1 font-mono"
			>
				{(card.content.items as { [key: string]: string }[]).map(
					(detail, index) => {
						const key = Object.keys(detail)[0];
						return (
							<li key={index}>
								<strong>{key}</strong>:<br />
								{detail[key as keyof typeof detail]}
							</li>
						);
					}
				)}
			</Typography>
		);
	}
	return (
		<>
			<Card
				key={card.title}
				className="p-6 bg-dark rounded-xl shadow-lg border-b-0 border-x-0 border-t-4 border-primary flex flex-col gap-1 justify-between"
			>
				<CardBody>
					<Typography
						as="h3"
						className="text-xl font-bold mb-2 text-white"
					>
						{card.title}
					</Typography>
					{cardContent}
				</CardBody>
				{card.category === "projects" ? (
					<CardFooter>
						<Typography
							as="p"
							className="text-xs text-accent font-mono mb-2"
						>
							Tech: {card.tags.join(", ")}
						</Typography>
						<Typography
							as="a"
							href={card.url}
							className="text-primary hover:text-light underline text-sm font-semibold transition duration-300"
							target="_blank"
						>
							View on {card.src}
						</Typography>
					</CardFooter>
				) : null}
			</Card>
		</>
	);
}
