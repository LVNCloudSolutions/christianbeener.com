import { useState, useEffect } from "react";
import {
	IconButton,
	Typography,
	Collapse,
	Navbar,
} from "@material-tailwind/react";
import {
	User,
	Brain,
	Code,
	Clock,
	MessageText,
	DownloadCircle,
	Menu,
	Xmark,
} from "iconoir-react";

const LINKS = [
	{
		icon: User,
		title: "About",
		href: "#about",
	},
	{
		icon: Brain,
		title: "Skills",
		href: "#skills",
	},
	{
		icon: Clock,
		title: "Experience",
		href: "#experience",
	},
	{
		icon: Code,
		title: "Projects",
		href: "#projects",
	},
	{
		icon: MessageText,
		title: "Contact",
		href: "#contact",
	},
	{
		icon: DownloadCircle,
		title: "Resume",
		href: "/downloads/Christian_Beener_resume_2026-download.pdf",
		target: "_blank",
		download: "Christian_Beener_resume_2026-download.pdf",
	},
];

function NavList() {
	return (
		<ul className="flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center pt-1">
			{LINKS.map(({ icon: Icon, title, href, download }) => (
				<li key={title}>
					<Typography
						as="a"
						href={href}
						className="tech-label flex items-center gap-x-2 p-1"
						download={download}
					>
						<Icon className="h-5 w-5 text-light" />
						{title}
					</Typography>
				</li>
			))}
		</ul>
	);
}

export default function StickyNavbar() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<Navbar className="sticky top-0 z-10 w-full h-18 bg-dark shadow-md">
			<div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<Typography
					as="a"
					href="#"
					className="ml-0 mr-auto flex items-center cursor-pointer"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					<span className="text-2xl font-extrabold text-light bg-primary rounded-full px-2 py-2">
						CB
					</span>
					<span className="text-2xl font-extrabold text-light tracking-light">
						.com
					</span>
				</Typography>
				<div className="hidden lg:ml-auto lg:mr-2 lg:block">
					<NavList />
				</div>
				<IconButton
					size="sm"
					variant="ghost"
					color="secondary"
					onClick={() => setOpenNav(!openNav)}
					className="ml-auto grid lg:hidden"
				>
					{openNav ? (
						<Xmark className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}
