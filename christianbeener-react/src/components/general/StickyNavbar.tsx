import { useState, useEffect } from "react";
import { Menu, Xmark } from "iconoir-react";
import { LINKS } from "../../constants";

function NavList() {
	return (
		<ul className="flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center pt-1">
			{LINKS.map(({ icon: Icon, title, href, download }) => (
				<li key={title}>
					<a
						href={href}
						className="link tech-label flex items-center gap-x-2 p-1"
						download={download}
					>
						<Icon className="h-5 w-5 text-light" />
						{title}
					</a>
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
		<div className="sticky border-none top-0 z-10 w-full h-18 bg-dark shadow-md">
			<div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<a
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
				</a>
				<div className="hidden lg:ml-auto lg:mr-2 lg:block">
					<NavList />
				</div>
				<div
					onClick={() => setOpenNav(!openNav)}
					className="ml-auto grid lg:hidden border-none"
				>
					{openNav ? (
						<Xmark className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</div>
			</div>
			{openNav ? (
				<div>
					<NavList />
				</div>
			) : null}
		</div>
	);
}
