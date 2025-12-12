import CardGroupContainer from "./CardGroupContainer";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Section(config: {
	id: string;
	title: string;
	bgColor: string;
}) {
	const SectionHeading = () => {
		return (
			<h2 className="text-4xl font-bold text-center mb-5 border-b-4 border-primary pb-3">
				{config.title}
			</h2>
		);
	};
	const SectionContent = () => {
		switch (config.id) {
			case "skills":
				return <CardGroupContainer isProjects={false} />;
			case "projects":
				return <CardGroupContainer isProjects={true} />;
			case "experience":
				return <Experience />;
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
					<SectionHeading />
					<SectionContent />
				</div>
			</section>
		</>
	);
}
