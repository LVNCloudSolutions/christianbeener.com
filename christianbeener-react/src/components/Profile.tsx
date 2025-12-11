import { Typography, Button } from "@material-tailwind/react";
import { Linkedin, GithubCircle, Code, MessageText } from "iconoir-react";

export default function Profile() {
	const profileBtn = "flex gap-2 px-4 py-3 text-center font-bold rounded-lg";
	return (
		<section
			id="about"
			className="min-h-full flex items-center px-4 py-16 bg-dark"
		>
			<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 lg:grid-cols-4 sm:gap-12 md:gap-8 items-center w-full">
				<div className="lg:col-span-1 md:col-span-2 text-center md:text-left p-4">
					<div className="h-52 w-52 rounded-full mx-auto md:mx-0 mb-4 overflow-hidden border-4 border-primary shadow-xl">
						<img
							src="/assets/headshot_glasses_square.jpg"
							alt="Christian Beener Profile"
							className="w-full h-full object-cover"
						/>
					</div>
					<Typography
						as="h1"
						className="text-2xl text-light font-bold"
					>
						Christian Beener
					</Typography>
					<Typography
						as="p"
						className="text-sm text-primary font-medium mt-1"
					>
						Austin, TX
					</Typography>
					<div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
						<Typography
							as="a"
							className="link"
							href="https://linkedin.com/in/christianbeener"
							target="_blank"
						>
							<Linkedin className="h-6 w-6" />
						</Typography>
						<Typography
							as="a"
							className="link"
							href="https://github.com/lvncloudsolutions"
							target="_blank"
						>
							<GithubCircle className="h-6 w-6" />
						</Typography>
					</div>
				</div>

				<div className="md:col-span-3 p-4 border-l-4 border-accent pl-8">
					<Typography
						as="h1"
						className="text-4xl sm:text-4xl font-extrabold mb-5 leading-tight text-white"
					>
						Full Stack Engineering & DevOps
					</Typography>
					<Typography as="p" className="text-xl text-slate-400 mb-5">
						I'm Christian, a passionate Full Stack Engineer and
						DevOps specialist based in Austin, TX. With a strong
						foundation in both front-end and back-end development, I
						thrive on creating seamless, efficient, and scalable
						applications. My expertise spans a variety of
						technologies, and I'm dedicated to continuous learning
						and innovation in the ever-evolving tech landscape.
					</Typography>
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:space-x-4">
						<Button
							as="a"
							href="#contact"
							className={profileBtn + " btn primary-btn"}
						>
							<MessageText className="h-5 w-5 stroke-2" />
							Connect with Me
						</Button>
						<Button
							as="a"
							href="#projects"
							className={profileBtn + " btn secondary-btn"}
						>
							<Code className="h-5 w-5 stroke-2" />
							Current Projects
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
