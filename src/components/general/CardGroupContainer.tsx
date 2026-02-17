import { CARDS } from "../../utils/constants";
import CardContainer from "./CardContainer";

export default function CardGroupContainer({
	isPhilosophy,
}: {
	isPhilosophy: boolean;
}) {
	// Determine which cards to display based on the isPhilosophy prop
	const cards = CARDS.filter((card) =>
		isPhilosophy
			? card.category === "philosophy"
			: card.category === "skills",
	);

	const cardContainers = cards
		.slice(0, 3)
		.map((card, index) => <CardContainer key={index} card={card} />);

	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 text-left">
				<div className="col-span-3 grid md:grid-cols-3 gap-8 text-left">
					{cardContainers}
				</div>
			</div>
		</>
	);
}
