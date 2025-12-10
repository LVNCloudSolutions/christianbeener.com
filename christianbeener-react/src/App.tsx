import StickyNavbar from "./components/StickyNavbar";
import Profile from "./components/Profile";
import "./App.css";

function App() {
	return (
		<>
			<StickyNavbar></StickyNavbar>
			<Profile></Profile>
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
