import Profile from "../general/Profile";
import Summary from "../general/Summary";

export default function About() {
	return (
		<section
			id="about"
			className="min-h-full flex items-center px-4 py-16 bg-dark"
		>
			<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 lg:grid-cols-4 sm:gap-12 md:gap-8 items-center w-full">
				<Profile />

				<Summary />
			</div>
		</section>
	);
}
