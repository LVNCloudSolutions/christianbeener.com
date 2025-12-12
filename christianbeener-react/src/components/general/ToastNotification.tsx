import React, { useEffect } from "react";
import { Mail, Xmark, WarningTriangle } from "iconoir-react";

interface ToastProps {
	status: "success" | "error" | "idle" | "submitting";
	message: string;
	onClose: () => void;
}

export default function ToastNotification({
	status,
	message,
	onClose,
}: ToastProps) {
	// 1. Determine appearance based on status
	let bgColor = "";
	let icon = Mail;
	let ringColor = "";

	if (status === "success") {
		bgColor = "bg-green-700";
		ringColor = "ring-green-400";
		icon = Mail; // Use Mail or another success icon
	} else if (status === "error") {
		bgColor = "bg-red-700";
		ringColor = "ring-red-400";
		icon = WarningTriangle;
	} else if (status === "submitting") {
		bgColor = "bg-blue-700";
		ringColor = "ring-blue-400";
		icon = Mail;
	} else {
		return null; // Don't render if idle
	}

	// 2. useEffect for Auto-Fade/Hide Logic (Replaces the setTimeout)
	useEffect(() => {
		if (status === "success" || status === "error") {
			const timer = setTimeout(() => {
				onClose();
			}, 4000);

			return () => clearTimeout(timer); // Cleanup function
		}
	}, [status, onClose]);

	// 3. Render the Toast (using fixed positioning and transitions)
	return (
		<div
			className={`fixed top-4 right-4 z-50 p-4 rounded-lg text-white shadow-xl transition-all duration-300 transform 
                ${bgColor} ring-2 ${ringColor} max-w-sm`}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					{React.createElement(icon, { className: "h-5 w-5 mr-3" })}
					<p className="font-semibold">{message}</p>
				</div>
				<button
					onClick={onClose}
					className="ml-4 text-white hover:text-gray-200"
				>
					<Xmark className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
