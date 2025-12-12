import { createElement, useEffect } from "react";
import {
	CheckCircle as SuccessIcon,
	WarningTriangle as ErrorIcon,
} from "iconoir-react";

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
	let bgColor = "";
	let icon;

	if (status === "success") {
		bgColor = "bg-green-600";
		icon = SuccessIcon;
	} else if (status === "error") {
		bgColor = "bg-red-600";
		icon = ErrorIcon;
	} else {
		return null;
	}

	useEffect(() => {
		if (status === "success" || status === "error") {
			const timer = setTimeout(() => {
				onClose();
			}, 4000);

			return () => clearTimeout(timer); // Cleanup function
		}
	}, [status, onClose]);

	return (
		<div
			className={`fixed top-4 right-4 z-50 p-4 rounded-lg text-light shadow-xl transition-all duration-300 transform font-mono
                ${bgColor} max-w-sm`}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					{createElement(icon, {
						className: "h-5 w-5 mr-3 stroke-2",
					})}
					<p>{message}</p>
				</div>
			</div>
		</div>
	);
}
