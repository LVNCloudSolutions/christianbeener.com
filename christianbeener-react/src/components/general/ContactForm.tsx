import React, { useState, type Dispatch, type SetStateAction } from "react";
import { SERVICES } from "../../constants";
import SendButton from "./SendButton";

// Define the expected props, including the setters
interface ContactFormProps {
	form: {
		id: "services" | "recruiter";
		title: string;
		subtitle: string;
		action: string;
		textarea: { name: string; rows: number };
	};
	setToastStatus: Dispatch<
		SetStateAction<"idle" | "submitting" | "success" | "error">
	>;
	setToastMessage: Dispatch<SetStateAction<string>>;
}

const initialFormState = {
	nameCompany: "",
	email: "",
	service: "Static Website Deployment",
	message: "",
};

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
	value: string; // New: Value from state
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({ textarea, value, onChange }: TextAreaProps) => {
	return (
		<div>
			<textarea
				placeholder={textarea.name}
				name="message"
				rows={textarea.rows}
				required
				value={value}
				onChange={onChange}
				className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono lg:h-full"
			></textarea>
		</div>
	);
};

export default function ContactForm({
	form,
	setToastStatus,
	setToastMessage,
}: ContactFormProps) {
	const [formData, setFormData] = useState(initialFormState);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const inputName =
			e.target.name === "Name/Company"
				? "nameCompany"
				: e.target.name === "Email"
				? "email"
				: e.target.name === "Service"
				? "service"
				: "message";

		setFormData((prev) => ({
			...prev,
			[inputName]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setIsSubmitting(true);
		setToastStatus("submitting");
		setToastMessage("Sending message...");

		const payload = {
			"Name/Company": formData.nameCompany,
			Email: formData.email,
			...(form.id === "services" && { Service: formData.service }),

			[form.textarea.name]: formData.message,
			"g-recaptcha-response":
				(
					document.getElementById(
						"g-recaptcha-response"
					) as HTMLInputElement
				)?.value || "",
		};

		try {
			const response = await fetch(form.action, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				setToastStatus("success");
				setToastMessage("Message sent!");
				setFormData(initialFormState);
			} else {
				const data = await response.json();
				setToastStatus("error");
				setToastMessage(data.error || "Uh Oh! Something went wrong.");
			}
		} catch (err) {
			setToastStatus("error");
			setToastMessage("Network error. Check your connection.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// NOTE: You will need to update the prop definition for the TextArea component
	// in its separate file to accept 'value' and 'onChange'.

	return (
		<div
			id={form.id}
			className="tab-content py-4 px-8 bg-card rounded-xl shadow-2xl border border-slate-700"
		>
			<h3 className="text-2xl font-bold mb-2 text-primary">
				{form.title}
			</h3>
			<p className="text-slate-400 mb-4 text-sm">{form.subtitle}</p>

			<form
				id={form.id + "-form"}
				onSubmit={handleSubmit}
				className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
			>
				<div className="space-y-4">
					<input
						type="text"
						name="Name/Company"
						placeholder="Your Name / Company"
						required
						value={formData.nameCompany}
						onChange={handleInputChange}
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					/>
					<input
						type="email"
						name="Email"
						placeholder="Your Email"
						required
						value={formData.email}
						onChange={handleInputChange}
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					/>

					{form.id === "services" ? (
						<select
							name="Service"
							value={formData.service}
							onChange={handleInputChange}
							className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
						>
							<SelectOptions />
						</select>
					) : null}
				</div>

				<TextArea
					textarea={form.textarea}
					value={formData.message}
					onChange={handleInputChange}
				/>

				<input
					type="hidden"
					name="g-recaptcha-response"
					id="g-recaptcha-response"
				/>

				<div className="lg:col-span-2">
					<SendButton isSubmitting={isSubmitting} />
				</div>
			</form>
		</div>
	);
}
