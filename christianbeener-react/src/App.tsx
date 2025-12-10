import StickyNavbar from "./components/StickyNavbar";
import Profile from "./components/Profile";
import Section from "./components/Section";
import { SECTIONS } from "./constants";
import "./App.css";

function App() {
	const sections = SECTIONS;
	return (
		<>
			<StickyNavbar></StickyNavbar>
			<Profile></Profile>
			{sections.map((section) => (
				<Section
					key={section.id}
					id={section.id}
					title={section.title}
					bgColor={section.bgColor}
				/>
			))}
			<footer className="sticky text-center py-6 px-8 border-t border-slate-600 text-slate-400 text-xs">
				<p>
					&copy; 2025 Christian Beener, All rights reserved. | Built
					with React and TailwindCSS.
				</p>
			</footer>
		</>
	);
}

export default App;
