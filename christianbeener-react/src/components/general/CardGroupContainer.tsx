import { useState } from "react";
import { CARDS } from "../../constants";
import CardContainer from "./CardContainer";

// This component will display a group of cards, 3 at a time.
// There will be back and forward buttons
// and it will animate like a carousel.
export default function CardGroupContainer({
	isProjects,
}: {
	isProjects: boolean;
}) {
	// Determine which cards to display based on the isProjects prop
	const cards = CARDS.filter((card) =>
		isProjects ? card.category === "projects" : card.category === "skills"
	);

	// I need to manage the current index of the first card being displayed
	const [currentIndex, setCurrentIndex] = useState(0);

	const cardContainers = cards
		.slice(currentIndex, currentIndex + 3)
		.map((card, index) => <CardContainer key={index} card={card} />);

	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 text-left">
				{/* 
				We should display up to 3 cards in the center columns,
				and leave the first and last columns for navigation buttons.
				*/}
				{/* Navigation Button - Previous */}
				{/* <div className="col-span-1 flex items-center justify-center">
					<button className="bg-primary text-dark font-bold py-2 px-4 rounded-full hover:bg-light transition duration-300">
						&#8592;
					</button>
				</div> */}
				{/* Card Group */}
				<div className="col-span-3 grid md:grid-cols-3 gap-8 text-left">
					{/* We will create a group of 3 CardContainer objects using the cards array */}
					{cardContainers}
				</div>
				{/* Navigation Button - Next */}
				{/* <div className="col-span-1 flex items-center justify-center">
					<button className="bg-primary text-dark font-bold py-2 px-4 rounded-full hover:bg-light transition duration-300">
						&#8594;
					</button>
				</div> */}
			</div>
		</>
	);
}
