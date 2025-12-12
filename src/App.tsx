import Navbar from "./components/general/Navbar";
import About from "./components/sections/About";
import Section from "./components/general/Section";
import { SECTIONS } from "./utils/constants";
import "./styles/App.css";

function App() {
	const sections = SECTIONS;
	return (
		<>
			<Navbar></Navbar>
			<About></About>
			{sections.map((section: any) => (
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
