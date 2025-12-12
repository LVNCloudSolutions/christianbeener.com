import SendButton from "./SendButton";

const RecruiterForm = () => {
	return (
		<div
			id="recruiter"
			className="tab-content py-4 px-8 bg-card rounded-xl shadow-2xl border border-slate-700"
		>
			<h3 className="text-2xl font-bold mb-2 text-primary">
				Full-Time Job Inquiry
			</h3>
			<p className="text-slate-400 mb-4 text-sm">
				For job offers, full-time positions, or general HR inquiries.
			</p>
			<form
				id="recruiter-form"
				action="https://formspree.io/f/mjkjbbbj"
				method="POST"
				className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
			>
				<div className="space-y-4">
					<input
						type="text"
						name="Name/Company"
						placeholder="Your Name / Company"
						required
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					/>
					<input
						type="email"
						name="Email"
						placeholder="Your Email"
						required
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					/>
				</div>
				<div>
					<textarea
						placeholder="Job Details"
						name="Job Details"
						rows={3}
						required
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono lg:h-full"
					></textarea>
				</div>
				<input
					type="hidden"
					name="g-recaptcha-response"
					id="g-recaptcha-response"
				/>
				<div className="lg:col-span-2">
					<SendButton />
				</div>
			</form>
		</div>
	);
};

const ServiceForm = () => {
	return (
		<div
			id="service"
			className="tab-content active py-4 px-8 bg-card rounded-xl shadow-2xl border border-slate-700"
		>
			<h3 className="text-2xl font-bold mb-2 text-primary">
				Contract Services
			</h3>
			<p className="text-slate-400 mb-4 text-sm">
				For professional consultations and inquiries.
			</p>
			<form
				id="service-form"
				action="https://formspree.io/f/xrbrzzza"
				method="POST"
				className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
			>
				<div className="space-y-4">
					<input
						type="text"
						name="Name/Company"
						placeholder="Your Name / Company"
						required
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					/>
					<input
						type="email"
						name="Email"
						placeholder="Your Email"
						required
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					/>
					<select
						name="Service"
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
					>
						<option>Static Website Deployment</option>
						<option>CI/CD Pipeline Setup</option>
						<option>AWS/Terraform Infrastructure</option>
						<option>Full-Stack Consulting</option>
						<option>Other Inquiry</option>
					</select>
				</div>
				<div>
					<textarea
						placeholder="Project Details"
						name="Project Details"
						rows={4}
						required
						className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono lg:h-full"
					></textarea>
				</div>
				<input
					type="hidden"
					name="g-recaptcha-response"
					id="g-recaptcha-response"
				/>
				<div className="lg:col-span-2">
					<SendButton />
				</div>
			</form>
		</div>
	);
};

export default function Form({ activeForm }: { activeForm: string }) {
	return (
		<>{activeForm === "services" ? <ServiceForm /> : <RecruiterForm />}</>
	);
}
