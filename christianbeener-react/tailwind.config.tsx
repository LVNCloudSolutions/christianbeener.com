import { mtConfig } from "@material-tailwind/react";

const customColors = {
	primary: "#3b82f6", // Trustworthy Blue (Buttons, Accents)
	dark: "#0f172a", // Deep Slate (Main Background)
	light: "#f1f5f9", // Light Gray (Text)
	card: "#1e293b", // Dark Card Background
	accent: "#64748b", // Slate Gray (Borders/Dividers)
	white: "#ffffff", // Pure White
};

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [mtConfig],
};
