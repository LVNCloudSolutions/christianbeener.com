import SectionHeading from "../SectionHeading";
import CardGroupContainer from "./CardGroupContainer";
import Contact from "./Contact";

export default function Section(config: {
	id: string;
	title: string;
	bgColor: string;
}) {
	const SectionContent = () => {
		switch (config.id) {
			case "skills":
				return <CardGroupContainer isProjects={false} />;
			case "projects":
				return <CardGroupContainer isProjects={true} />;
			case "contact":
				return <Contact />;
			default:
				return null;
		}
	};

	return (
		<>
			<section
				id={config.id}
				className={`py-16 px-4 ${config.bgColor} text-light`}
			>
				<div className="max-w-5xl mx-auto px-4">
					<SectionHeading title={config.title} />
					<SectionContent />
				</div>
			</section>
		</>
	);
}
