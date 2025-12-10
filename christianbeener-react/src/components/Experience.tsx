export default function Experience() {
	return (
		<>
			<div className="relative border-l-4 border-accent space-y-12 ml-4 md:ml-0 md:pl-8">
				<div className="relative pl-8">
					<div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>
					<h3 className="text-2xl font-bold text-primary">
						DevOps Engineering & Consulting
					</h3>
					<p className="text-lg font-semibold text-light mt-1">
						Independent Freelance, Austin, TX
					</p>
					<p className="text-sm text-slate-500 mb-4">
						Oct 2025 - Present
					</p>
					<ul className="list-disc ml-5 space-y-2 text-slate-400 tech-label">
						<li>
							Actively building reusable
							<strong>Infrastructure as Code (IaC)</strong>
							templates (see AWS IaC Boilerplate project) to
							ensure client solutions start with secure, scalable
							foundations.
						</li>
						<li>
							Designing and implementing automated
							<strong>CI/CD pipelines</strong> for containerized
							applications, focusing on reliability and speed in
							deployment cycles.
						</li>
						<li>
							Preparing for the AWS Solutions Architect -
							Associate certification to expand and formalize
							expertise in
							<strong>cloud architecture design</strong>.
						</li>
					</ul>
				</div>

				<div className="relative pl-8">
					<div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>

					<h3 className="text-2xl font-bold text-primary">
						Full-Stack Developer
					</h3>
					<p className="text-lg font-semibold text-light mt-1">
						Fieldd, Austin, TX
					</p>
					<p className="text-sm text-slate-500 mb-4">
						Sep 2024 - Oct 2025
					</p>
					<ul className="list-disc ml-5 space-y-2 text-slate-400 tech-label">
						<li>
							<strong>Mobile App Delivery:</strong>
							Developed and delivered
							<strong>Angular/Ionic</strong> mobile applications
							for iOS/Android, encompassing the full MEAN stack
							and ensuring a cohesive SaaS user experience.
						</li>
						<li>
							<strong>Workflow Automation:</strong>
							Engineered specialized real-time mobile tools (e.g.,
							license plate scanner) that
							<strong>improved field service speed</strong>
							and boosted user engagement.
						</li>
						<li>
							<strong>Internal Tooling:</strong>
							Contributed to a dedicated
							<strong>sales suite</strong> for lead tracking and
							conversion analysis, directly supporting the
							business development team.
						</li>
						<li>
							<strong>Quality & Release:</strong> Managed
							post-launch QA and support, ensuring high stability
							and rapid iteration cycles for the production
							environment.
						</li>
					</ul>
				</div>

				<div className="relative pl-8">
					<div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>

					<h3 className="text-2xl font-bold text-primary">
						Software Engineer
					</h3>
					<p className="text-lg font-semibold text-light mt-1">
						General Motors, Austin, TX
					</p>
					<p className="text-sm text-slate-500 mb-4">
						Jan 2022 - Aug 2024
					</p>
					<ul className="list-disc ml-5 space-y-2 text-slate-400 tech-label">
						<li>
							<strong>Enterprise Modernization:</strong>
							Led the modernization of the core warehousing
							integration platform, successfully linking
							<strong>SAP</strong> and custom WMS via
							<strong>Angular/Spring</strong>.
						</li>
						<li>
							<strong>Tech Stack Upgrades:</strong>
							Executed large-scale migration of legacy codebases
							from Java 8/Spring 2 to Java 17/Spring 3 and Angular
							8 to 14+, significantly improving performance and
							long-term viability.
						</li>
						<li>
							<strong>Process Automation:</strong>
							Developed Python/Kubernetes CronJobs to automate
							compliance report generation, reducing manual
							runtime from hours to seconds.
						</li>
						<li>
							<strong>DevOps & Cloud Orchestration:</strong>
							Managed CI/CD pipelines and container deployment
							strategies using Azure DevOps and
							<strong>Kubernetes</strong> for mission-critical
							logistics systems.
						</li>
					</ul>
				</div>

				<div className="relative pl-8">
					<div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>

					<h3 className="text-2xl font-bold text-primary">
						Project Manager / Full-Stack Developer
					</h3>
					<p className="text-lg font-semibold text-light mt-1">
						UH Capstone Project, Houston, TX
					</p>
					<p className="text-sm text-slate-500 mb-4">
						Aug 2020 - May 2021
					</p>
					<ul className="list-disc ml-5 space-y-2 text-slate-400 tech-label">
						<li>
							Directed a 9-member team to deliver full-stack Java
							and AWS business app valued at $50K.
						</li>
						<li>
							Oversaw SDLC: requirements, architecture, coding,
							testing, and deployment.
						</li>
						<li>
							Developed backend services and responsive UI
							integrated with AWS-hosted data pipelines.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
