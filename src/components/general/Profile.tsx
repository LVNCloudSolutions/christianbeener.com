import IconLink from "../general/IconLink";
import { ICON_LINKS } from "../../utils/constants";

export default function Profile() {
	return (
		<div className="lg:col-span-1 md:col-span-2 text-center md:text-left p-4">
			<div className="h-52 w-52 rounded-full mx-auto md:mx-0 mb-4 overflow-hidden border-4 border-primary shadow-xl">
				<img
					src="/assets/headshot_glasses_square.jpg"
					alt="Christian Beener Profile"
					className="w-full h-full object-cover"
				/>
			</div>
			<h1 className="text-2xl text-light font-bold">Christian Beener</h1>
			<p className="text-sm text-primary font-medium mt-1">Austin, TX</p>
			<div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
				{ICON_LINKS.map((linkConfig) => {
					return <IconLink {...linkConfig} key={linkConfig.title} />;
				})}
			</div>
		</div>
	);
}
