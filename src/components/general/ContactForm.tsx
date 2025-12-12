import { useState, useEffect } from "react";
// 🎯 NEW: Import Formspree and ReCAPTCHA hooks
import { useForm, ValidationError } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { SERVICES } from "../../utils/constants";
import SendButton from "./SendButton";
import ToastNotification from "./ToastNotification";

const getFormHash = (actionUrl: string) => actionUrl.split("/").pop() || "";

// Define the expected props, including the setters (which we still use for the Toast)
interface ContactFormProps {
	form: {
		id: "services" | "recruiter";
		title: string;
		subtitle: string;
		action: string; // This holds the Formspree URL
		textarea: { name: string; rows: number };
	};
}

// --- Select Options (Remains the same) ---
const SelectOptions = () => {
	return SERVICES.map((service, index) => {
		return (
			<option key={index} value={service.value}>
				{service.option}
			</option>
		);
	});
};

interface TextAreaProps {
	textarea: { name: string; rows: number };
}

const TextArea = ({ textarea }: TextAreaProps) => {
	return (
		<div>
			<textarea
				placeholder={textarea.name}
				name={textarea.name}
				rows={textarea.rows}
				required
				className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono lg:h-full"
			></textarea>
		</div>
	);
};

export default function ContactForm({ form }: ContactFormProps) {
	// 1. Initialize Formspree and ReCAPTCHA hooks
	const { executeRecaptcha } = useGoogleReCaptcha();
	const formHash = getFormHash(form.action);

	const [state, handleSubmit] = useForm(formHash, {
		data: { "g-recaptcha-response": executeRecaptcha }, // Inject ReCAPTCHA handler
	});

	// NEW: State for Toast and Submission Status
	const [toastStatus, setToastStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [toastMessage, setToastMessage] = useState("");
	const handleToastClose = () => {
		setToastStatus("idle");
		setToastMessage("");
	};

	// 2. Sync Formspree state to your custom Toast state
	useEffect(() => {
		if (state.succeeded) {
			setToastStatus("success");
			setToastMessage("Message sent! I'll be in touch.");

			// OPTIONAL: Manually reset form fields on success for uncontrolled form
			const currentForm = document.getElementById(
				form.id + "-form"
			) as HTMLFormElement;
			if (currentForm) currentForm.reset();
		} else if (state.errors) {
			// Only show errors after attempt
			setToastStatus("error");
			setToastMessage("Uh oh! Something went wrong.");
		}
	}, [
		state.succeeded,
		state.errors,
		setToastStatus,
		setToastMessage,
		form.id,
	]);

	return (
		<>
			<div
				id={form.id}
				className="tab-content py-4 px-8 bg-card rounded-xl shadow-2xl border border-slate-700"
			>
				<h3 className="text-2xl font-bold mb-2 text-primary">
					{form.title}
				</h3>
				<p className="text-slate-400 mb-4 text-sm">{form.subtitle}</p>

				{/* 3. Attach Formspree handleSubmit hook */}
				<form
					id={form.id + "-form"}
					onSubmit={handleSubmit}
					className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
				>
					<div className="space-y-4">
						{/* Input 1: UNCONTROLLED (Value/OnChange REMOVED) */}
						<input
							type="text"
							name="Name/Company"
							placeholder="Your Name / Company"
							required
							className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
						/>
						{/* Input 2: UNCONTROLLED */}
						<input
							type="email"
							name="Email"
							placeholder="Your Email"
							required
							className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
						/>

						{/* Conditional Select: UNCONTROLLED */}
						{form.id === "services" ? (
							<select
								name="Service"
								className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
							>
								<SelectOptions />
							</select>
						) : null}
					</div>

					{/* Text Area: UNCONTROLLED */}
					<TextArea textarea={form.textarea} />

					{/* Hidden input is NOT needed for Formspree/Hooks */}

					<div className="lg:col-span-2">
						<SendButton isSubmitting={state.submitting} />
					</div>

					{/* Display Formspree Errors (Optional, but good for debugging) */}
					<ValidationError
						className="text-red-500 lg:col-span-2"
						field="email"
						errors={state.errors}
					/>
				</form>
			</div>

			<ToastNotification
				status={toastStatus}
				message={toastMessage}
				onClose={handleToastClose}
			/>
		</>
	);
}
