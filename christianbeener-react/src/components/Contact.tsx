export default function Contact() {
	return (
		<>
			<p className="text-center text-slate-400 mb-5">
				Please use the tabs below to direct your message to the correct
				channel.
			</p>

			<div className="flex justify-center mb-5 space-x-4">
				<button
					id="service-btn"
					onclick="showTab('service')"
					className="tab-button w-48 px-6 py-2 bg-slate-700 text-light rounded-lg font-semibold transition duration-300 shadow-md cursor-pointer hover:bg-primary/90 hover:text-white"
				>
					<i className="fa-solid fa-briefcase mr-1"></i>
					Services
				</button>
				<button
					id="recruiter-btn"
					onclick="showTab('recruiter')"
					className="tab-button w-48 px-6 py-2 bg-slate-700 text-light rounded-lg font-semibold transition duration-300 shadow-md cursor-pointer hover:bg-primary/90 hover:text-white"
				>
					<i className="fa-solid fa-user-tie mr-1"></i>
					Recruiters
				</button>
			</div>

			<div
				id="service"
				className="tab-content active p-5 bg-card rounded-xl shadow-2xl border border-slate-700"
			>
				<h3 className="text-2xl font-bold mb-4 text-primary">
					Freelance & Contract Services
				</h3>
				<p className="text-slate-400 mb-4 text-sm">
					For quick, fixed-price DevOps projects, cloud consultation,
					or inquiries about LVN Cloud Solutions.
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
							rows="4"
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
						<button
							type="submit"
							className="cursor-pointer w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition duration-300"
						>
							<i className="fa-solid fa-paper-plane mr-1"></i>
							Send
						</button>
					</div>
				</form>
				<div className="form-message mt-4 text-sm font-semibold tech-label"></div>
			</div>

			<div
				id="recruiter"
				className="tab-content p-5 bg-card rounded-xl shadow-2xl border border-slate-700"
			>
				<h3 className="text-2xl font-bold mb-4 text-primary">
					Full-Time Job Inquiry
				</h3>
				<p className="text-slate-400 mb-4 text-sm">
					For job offers, full-time positions, or general HR
					inquiries.
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
							rows="3"
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
						<button
							type="submit"
							className="cursor-pointer w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition duration-300"
						>
							<i className="fa-solid fa-paper-plane mr-1"></i>
							Send
						</button>
					</div>
				</form>
				<div className="form-message mt-4 text-sm font-semibold tech-label"></div>
			</div>
		</>
	);
}
