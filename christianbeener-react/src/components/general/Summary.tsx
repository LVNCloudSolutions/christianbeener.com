import {
	MessageTextSolid as MessageIcon,
	Code as CodeIcon,
} from "iconoir-react";
import IconLinkButton from "./IconLinkButton";

export default function Summary() {
	return (
		<div className="md:col-span-3 p-4 border-l-4 border-accent pl-8">
			<h1 className="text-4xl sm:text-4xl font-extrabold mb-5 leading-tight text-white">
				Full Stack Engineering & DevOps
			</h1>
			<p className="text-xl text-slate-400 mb-5">
				I'm Christian, a passionate Full Stack Engineer and DevOps
				specialist based in Austin, TX. With a strong foundation in both
				front-end and back-end development, I thrive on creating
				seamless, efficient, and scalable applications. My expertise
				spans a variety of technologies, and I'm dedicated to continuous
				learning and innovation in the ever-evolving tech landscape.
			</p>
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:space-x-4">
				<IconLinkButton
					text={"Connect with me"}
					isPrimary={true}
					url={"#contact"}
					icon={MessageIcon}
				/>
				<IconLinkButton
					text={"Current Projects"}
					isPrimary={false}
					url={"#projects"}
					icon={CodeIcon}
				/>
			</div>
		</div>
	);
}
