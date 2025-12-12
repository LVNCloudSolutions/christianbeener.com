import { SERVICES } from "../../constants";
import SendButton from "./SendButton";

const SelectOptions = () => {
	return SERVICES.map((service, index) => {
		return (
			<option key={index} value={service.value}>
				{service.option}
			</option>
		);
	});
};

const TextArea = ({ textarea }: { textarea: any }) => {
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

export default function ContactForm({ form }: { form: any }) {
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
				action={form.action}
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
					{form.id === "services" ? (
						<select
							name="Service"
							className="w-full p-3 rounded-lg bg-dark text-light border border-slate-700 focus:ring-primary focus:border-primary font-mono"
						>
							<SelectOptions />
						</select>
					) : null}
				</div>

				<TextArea textarea={form.textarea} />
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
}
