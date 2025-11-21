// NOTE: The 'projects' array is now available globally after loading projects.js.

// --- CAROUSEL STATE MANAGEMENT ---
let currentProjectIndex = 0;
// Note: We redefine projectsPerView here as it depends on window width and assumes 'projects' is now accessible
const projectsPerView =
	window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

// --- FIX: Updated date format function ---
function formatDate(date) {
	if (!date) return "Present";
	// Returns format MMM YYYY (e.g., Nov 2025)
	return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getStatusBadge(project) {
	const now = new Date();

	// Check if the project is marked as explicitly complete OR if the target end date has passed
	if (project.isComplete || (project.endDate && project.endDate < now)) {
		return '<span class="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full mb-3"><i class="fa-solid fa-check-circle mr-1"></i>Complete</span>';
	} else {
		return '<span class="inline-block bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full mb-3"><i class="fa-solid fa-hourglass-half mr-1"></i>In Progress</span>';
	}
}

function getIcon(source) {
	if (source === "AWS") return "fa-brands fa-amazon";
	if (source === "GitHub") return "fa-brands fa-github";
	return "fa-solid fa-link";
}

function renderProjects() {
	const container = document.getElementById("projects-container");
	// Safety check for global access to data
	if (!container || typeof projects === "undefined" || projects.length === 0)
		return;

	container.innerHTML = ""; // Clear existing content

	// Determine the slice of projects to display
	const endIndex = Math.min(
		currentProjectIndex + projectsPerView,
		projects.length
	);
	const projectsToShow = projects.slice(currentProjectIndex, endIndex);

	let htmlContent = "";

	projectsToShow.forEach((project) => {
		const statusBadge = getStatusBadge(project);

		// Custom date range logic
		let dateRange;
		if (project.isComplete) {
			dateRange = `Completed: ${formatDate(project.endDate)}`;
		} else {
			// For in-progress: Show Start Date - Present (or target End Date)
			const endDateString = project.endDate
				? formatDate(project.endDate)
				: "Present";
			dateRange = `${formatDate(project.startDate)} - ${endDateString}`;
		}

		const sourceIcon = getIcon(project.src);

		htmlContent += `
            <div class="project-card bg-dark p-6 rounded-xl shadow-lg border-t-4 border-primary/50 flex flex-col justify-between">
                <div>
                    ${statusBadge}
                    <span class="float-end text-xs text-accent font-mono">${dateRange}</span>
                    <h3 class="text-xl font-bold mb-2 text-primary">
                        ${project.title}
                    </h3>
                    <p class="text-slate-400 mb-4 text-sm project-description">
                        ${project.description}
                    </p>
                </div>
                <div>
                    <p class="text-xs text-accent font-mono mb-2">
                        Tech: ${project.techStack}
                    </p>
                    <a href="${
						project.url
					}" target="_blank" class="text-primary hover:text-light underline text-sm font-semibold transition duration-300">
                        <i class="${sourceIcon} mr-1"></i>
                        ${
							project.src === "AWS"
								? "View Details"
								: "View on GitHub"
						}
                    </a>
                </div>
            </div>
        `;
	});

	container.innerHTML = htmlContent;
	updateCarouselControls();
}

function updateCarouselControls() {
	const prevBtn = document.getElementById("prev-project");
	const nextBtn = document.getElementById("next-project");

	if (!prevBtn || !nextBtn || projects.length <= projectsPerView) {
		if (prevBtn) prevBtn.classList.add("hidden");
		if (nextBtn) nextBtn.classList.add("hidden");
		return;
	} else {
		prevBtn.classList.remove("hidden");
		nextBtn.classList.remove("hidden");
	}

	// Logic for Previous button
	if (currentProjectIndex === 0) {
		prevBtn.classList.add("opacity-50", "cursor-not-allowed");
		prevBtn.disabled = true;
	} else {
		prevBtn.classList.remove("opacity-50", "cursor-not-allowed");
		prevBtn.disabled = false;
	}

	// Logic for Next button
	if (currentProjectIndex + projectsPerView >= projects.length) {
		nextBtn.classList.add("opacity-50", "cursor-not-allowed");
		nextBtn.disabled = true;
	} else {
		nextBtn.classList.remove("opacity-50", "cursor-not-allowed");
		nextBtn.disabled = false;
	}
}

// --- START GLOBAL FUNCTIONS (Exposed to HTML onclick events) ---

// CAROUSEL NAVIGATION
window.prevProject = function () {
	if (currentProjectIndex > 0) {
		currentProjectIndex -= projectsPerView;
		if (currentProjectIndex < 0) currentProjectIndex = 0;
		renderProjects();
	}
};

window.nextProject = function () {
	if (currentProjectIndex + projectsPerView < projects.length) {
		currentProjectIndex += projectsPerView;
		renderProjects();
	}
};

// MENU TOGGLE
window.toggleMenu = function () {
	const mobileMenu = document.getElementById("mobile-menu");
	const toggleButton = document.getElementById("menu-toggle");

	const isOpen = mobileMenu.classList.contains("mobile-menu-on");

	if (!isOpen) {
		// OPEN MENU
		mobileMenu.classList.remove("mobile-menu-off");
		mobileMenu.classList.add("mobile-menu-on");
		toggleButton
			.querySelector("i")
			.classList.replace("fa-bars", "fa-xmark");
	} else {
		window.closeMenu();
	}
};

window.closeMenu = function () {
	const mobileMenu = document.getElementById("mobile-menu");
	const toggleButton = document.getElementById("menu-toggle");

	if (mobileMenu && mobileMenu.classList.contains("mobile-menu-on")) {
		// CLOSE MENU
		mobileMenu.classList.remove("mobile-menu-on");
		mobileMenu.classList.add("mobile-menu-off");
		toggleButton
			.querySelector("i")
			.classList.replace("fa-xmark", "fa-bars");
	}
};

// TAB SWITCHER
window.showTab = function (tabId) {
	// 1. Hide all tab contents and clear messages
	document.querySelectorAll(".tab-content").forEach((content) => {
		content.classList.remove("active");
		const messageDiv = content.querySelector(".form-message");
		if (messageDiv) content.removeChild(messageDiv);
	});

	// 2. Show the selected tab content
	document.getElementById(tabId).classList.add("active");

	// 3. Update button styles
	document.querySelectorAll(".tab-button").forEach((button) => {
		const isTarget = button.getAttribute("onclick").includes(tabId);

		if (isTarget) {
			button.classList.remove(
				"bg-slate-700",
				"text-slate-300",
				"text-light"
			);
			button.classList.add("bg-primary", "text-white");
		} else {
			button.classList.remove("bg-primary", "text-white");
			button.classList.add("bg-slate-700", "text-light");
		}
	});
	window.closeMenu();
};

/**
 * Shows a non-blocking toast notification.
 */
window.showToast = function (message, isError = false) {
	const toast = document.getElementById("toast-notification");
	const toastMessage = document.getElementById("toast-message");
	const toastIcon = toast.querySelector("i");
	const toastDiv = toast.querySelector("div");

	toastDiv.classList.remove(
		"bg-primary",
		"text-white",
		"bg-red-500",
		"bg-green-500"
	);
	toastIcon.classList.remove("fa-check-circle", "fa-triangle-exclamation");
	toastIcon.classList.add("fa-solid");

	if (isError) {
		toastDiv.classList.add("bg-red-500", "text-white");
		toastIcon.classList.add("fa-triangle-exclamation");
	} else {
		toastDiv.classList.add("bg-green-500", "text-white");
		toastIcon.classList.add("fa-check-circle");
	}

	toastMessage.textContent = message;
	toast.classList.remove("hidden", "opacity-0");
	toast.classList.add("opacity-100");

	setTimeout(() => {
		toast.classList.remove("opacity-100");
		toast.classList.add("opacity-0");
		setTimeout(() => {
			toast.classList.add("hidden");
		}, 300);
	}, 4000);
};

// --- Helper function to convert FormData to a plain object ---
function formDataToJSON(formElement) {
	const formData = new FormData(formElement);
	const dataToSend = {};
	formData.forEach((value, key) => {
		dataToSend[key] = value;
	});
	return dataToSend;
}

// --- Main Submission Logic ---
window.handleSubmit = async function (event) {
	event.preventDefault();
	const loader = document.getElementById("form-loader");

	// NOTE: This check handles the case where the script loads but the captcha service doesn't finish loading yet.
	if (
		typeof grecaptcha === "undefined" ||
		typeof grecaptcha.execute !== "function"
	) {
		window.showToast(
			"Error: reCAPTCHA service not loaded. Please try again.",
			true
		);
		return;
	}

	loader.classList.remove("hidden");

	try {
		// --- Mock Submission Logic ---
		await new Promise((resolve) => setTimeout(resolve, 1500));

		loader.classList.add("hidden");
		event.target.reset();
		window.showToast("Service request submitted. I'll be in touch!");
	} catch (error) {
		loader.classList.add("hidden");
		window.showToast(
			"Network error or reCAPTCHA failed. Please refresh.",
			true
		);
	}
};

// SMOOTH SCROLL
window.scrollToTop = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

// --- DOM Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
	const mobileMenu = document.getElementById("mobile-menu");

	// Initialize mobile menu state (ensure it starts off-screen)
	mobileMenu.classList.add("mobile-menu-off");

	// 1. Set the initial active state to the service tab
	// We call renderProjects AFTER showTab because showTab calls closeMenu()
	window.showTab("service");

	// 2. Initial Project Render (Called after necessary DOM elements are initialized)
	renderProjects();

	// 3. Handle submit events for both forms (Attach handlers after DOM is ready)
	const recruiterForm = document.getElementById("recruiter-form");
	const serviceForm = document.getElementById("service-form");
	if (recruiterForm) {
		recruiterForm.addEventListener("submit", handleSubmit);
	}
	if (serviceForm) {
		serviceForm.addEventListener("submit", handleSubmit);
	}
});
