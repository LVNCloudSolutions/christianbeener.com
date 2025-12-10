import { useState, useEffect } from "react";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import "./Profile.module.css";

// TODO: USE MATERIAL TAILWIND COMPONENTS FOR BUTTONS AND TYPOGRAPHY
export default function Profile() {
	return (
		<>
			<section
				id="about"
				className="min-h-full flex items-center px-4 py-16 bg-dark"
			>
				<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 lg:grid-cols-4 sm:gap-12 md:gap-8 items-center w-full">
					<div className="lg:col-span-1 md:col-span-2 text-center md:text-left p-4">
						<div className="h-52 w-52 rounded-full mx-auto md:mx-0 mb-4 overflow-hidden bg-light border-4 border-primary shadow-xl">
							<img
								src="/assets/headshot_glasses_square.jpg"
								alt="Christian Beener Profile"
								className="w-full h-full object-cover"
							/>
						</div>
						<p className="text-2xl text-light font-bold">
							Christian Beener
						</p>
						<p className="text-sm text-primary font-medium mt-1">
							Austin, TX
						</p>
						<div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
							<a
								href="https://linkedin.com/in/christianbeener"
								target="_blank"
								className="text-slate-300 hover:text-primary transition duration-300"
							>
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
							<a
								href="https://www.upwork.com/freelancers/~01d6483b90641b9ead"
								target="_blank"
								className="text-slate-300 hover:text-primary transition duration-300"
							>
								<i className="fa-brands fa-square-upwork"></i>
							</a>
							<a
								href="https://github.com/lvncloudsolutions"
								target="_blank"
								className="text-slate-300 hover:text-primary transition duration-300"
							>
								<i className="fa-brands fa-github"></i>
							</a>
							<a
								href="https://www.hackerrank.com/profile/christianbeener"
								target="_blank"
								className="text-slate-300 hover:text-primary transition duration-300"
							>
								<i className="fa-brands fa-hackerrank"></i>
							</a>
						</div>
					</div>

					<div className="md:col-span-3 p-4 border-l-4 border-accent pl-8">
						<h1 className="text-4xl sm:text-4xl font-extrabold mb-5 leading-tight text-white">
							Automating Software Delivery on AWS
						</h1>
						<p className="text-xl text-slate-400 mb-5">
							With over 5-years of full-stack development
							experience using the
							<strong>
								MEAN Stack, Java/Spring, Dockerized containers,
								and AWS Cloud Services
							</strong>
							, I can help you and your team get off the ground
							and scale faster with reliable, automated cloud
							infrastructure and efficient development workflows.
							Watch my current projects on GitHub as this simple
							site evolves!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:space-x-4">
							<a
								href="#contact"
								className="px-8 py-3 bg-primary text-center text-white font-bold rounded-lg shadow-lg hover:bg-primary/90 transition duration-300"
							>
								<i className="fa-solid fa-message mr-1"></i>
								Connect with Me
							</a>
							<a
								href="#projects"
								className="px-8 py-3 text-center bg-slate-700 text-slate-300 font-bold rounded-lg shadow-lg hover:bg-primary/90 transition duration-300"
							>
								<i className="fa-solid fa-diagram-project mr-1"></i>
								Current Projects
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
