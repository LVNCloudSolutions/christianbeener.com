import { Card, CardBody, Typography } from "@material-tailwind/react";
import { SECTION_CARDS } from "../constants";

export default function Skills() {
	const cards = SECTION_CARDS;
	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 text-left">
				{cards.map((card) => (
					<Card
						key={card.title}
						className="p-6 bg-dark rounded-xl shadow-lg border-b-0 border-x-0 border-t-4 border-primary"
					>
						<CardBody>
							<Typography
								as="h3"
								className="text-xl font-bold mb-2"
							>
								{card.title}
							</Typography>
							<Typography
								as="p"
								className="text-slate-400 font-semibold mb-3 text-sm"
							>
								{card.subtitle}
							</Typography>
							<Typography
								as="ul"
								className="list-none list-inside text-sm text-slate-400 space-y-1 font-mono"
							>
								{card.details.map((detail, index) => {
									const key = Object.keys(detail)[0];
									return (
										<li key={index}>
											<strong>{key}</strong>:<br />
											{detail[key as keyof typeof detail]}
										</li>
									);
								})}
							</Typography>
						</CardBody>
					</Card>
				))}
			</div>
		</>
	);
}
