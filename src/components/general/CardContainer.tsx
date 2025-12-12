import type { DisplayCard } from "../../utils/types";

export default function CardContainer({ card }: { card: DisplayCard }) {
	let cardContent;
	if (card.content.type === "text") {
		cardContent = (
			<p className="text-left text-slate-400 mb-4">
				{card.content.items as string}
			</p>
		);
	} else if (card.content.type === "list") {
		cardContent = (
			<ul className="text-left list-none list-inside text-sm text-slate-400 font-mono">
				{(card.content.items as { [key: string]: string }[]).map(
					(detail, index) => {
						const key = Object.keys(detail)[0];
						return (
							<li key={index}>
								<strong>{key}</strong>:{" "}
								{detail[key as keyof typeof detail]}
							</li>
						);
					}
				)}
			</ul>
		);
	}
	return (
		<>
			<div
				key={card.title}
				className="p-6 bg-dark rounded-xl shadow-lg border-b-0 border-x-0 border-t-4 border-primary flex flex-col gap-1 justify-between"
			>
				<div className="text-center">
					<h3 className="text-xl font-bold text-primary">
						{card.title}
					</h3>
					<h4 className="text-sm mb-2 text-white">{card.subtitle}</h4>
					{cardContent}
				</div>
				{card.category === "projects" ? (
					<div>
						<p className="text-xs text-accent font-mono mb-2">
							Tech: {card.tags.join(", ")}
						</p>
						<a
							className="card-link text-primary underline text-sm font-semibold transition duration-300"
							href={card.url}
							target="_blank"
						>
							View on {card.src}
						</a>
					</div>
				) : null}
			</div>
		</>
	);
}
