import SectionHeading from "../SectionHeading";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Section(config: {
	id: string;
	title: string;
	bgColor: string;
}) {
	const SectionContent = () => {
		switch (config.id) {
			case "skills":
				return <Skills />;
			case "experience":
				return <Experience />;
			case "projects":
				return <Projects />;
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
