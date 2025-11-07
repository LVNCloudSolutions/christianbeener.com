document.addEventListener("DOMContentLoaded", () => {
	const recruiterForm = document.getElementById("recruiter-form");
	const serviceForm = document.getElementById("service-form");
	const backToTop = document.getElementById("back-to-top");

	// Back to Top Button Functionality
	if (!backToTop) return;
	window.onscroll = function () {
		// Show button if scroll position is greater than 300px from the top
		if (
			document.body.scrollTop > 300 ||
			document.documentElement.scrollTop > 300
		) {
			backToTop.classList.remove("opacity-0");
			backToTop.classList.add("opacity-100");
			backToTop.style.pointerEvents = "auto"; // Re-enable clicks
		} else {
			backToTop.classList.remove("opacity-100");
			backToTop.classList.add("opacity-0");
			backToTop.style.pointerEvents = "none"; // Disable clicks when hidden
		}
	};

	// 1. Set the initial active state to the service tab
	document
		.querySelectorAll(".tab-content")
		.forEach((content) => content.classList.remove("active"));
	document.getElementById("service").classList.add("active");

	// 2. Call showTab to correctly apply the primary color styles on load
	showTab("service");

	// 3. Handle submit events for both forms
	if (recruiterForm) {
		recruiterForm.addEventListener("submit", handleSubmit);
	}
	if (serviceForm) {
		serviceForm.addEventListener("submit", handleSubmit);
	}
});

// Hamburger Menu Toggle Functionality
function toggleMenu() {
	const mobileMenu = document.getElementById("mobile-menu");
	const toggleButton = document.getElementById("menu-toggle");

	const isOpen = mobileMenu.classList.contains("mobile-menu-on");

	if (!isOpen) {
		// OPEN MENU: Apply visible and "on" state
		mobileMenu.classList.remove("mobile-menu-off");
		mobileMenu.classList.add("mobile-menu-on");
		toggleButton
			.querySelector("i")
			.classList.replace("fa-bars", "fa-xmark");
	} else {
		// CLOSE MENU: Apply hidden and "off" state
		mobileMenu.classList.remove("mobile-menu-on");
		mobileMenu.classList.add("mobile-menu-off");
		toggleButton
			.querySelector("i")
			.classList.replace("fa-xmark", "fa-bars");
	}
}

function closeMenu() {
	const mobileMenu = document.getElementById("mobile-menu");
	const toggleButton = document.getElementById("menu-toggle");

	// Only close if it's currently open
	if (mobileMenu.classList.contains("mobile-menu-on")) {
		mobileMenu.classList.remove("mobile-menu-on");
		mobileMenu.classList.add("mobile-menu-off");
		toggleButton
			.querySelector("i")
			.classList.replace("fa-xmark", "fa-bars");
	}
}

// Function to close the menu when a link is clicked
function closeMenu() {
	const mobileMenu = document.getElementById("mobile-menu");
	const toggleButton = document.getElementById("menu-toggle");

	if (!mobileMenu.classList.contains("hidden")) {
		mobileMenu.classList.add("hidden");
		toggleButton
			.querySelector("i")
			.classList.replace("fa-xmark", "fa-bars");
	}
}

function showTab(tabId) {
	// Hide all tab contents and clear messages
	document.querySelectorAll(".tab-content").forEach((content) => {
		content.classList.remove("active");
		const messageDiv = content.querySelector(".form-message");
		if (messageDiv) messageDiv.textContent = "";
	});

	// Show the selected tab content
	document.getElementById(tabId).classList.add("active");

	// Update button styles: All buttons have the hover effect now
	document.querySelectorAll(".tab-button").forEach((button) => {
		const isTarget = button.getAttribute("onclick").includes(tabId);

		// Ensure all buttons have the required hover class
		button.classList.add("hover:bg-primary/90", "hover:text-white");

		if (isTarget) {
			// ACTIVATE: Primary Blue with White text
			button.classList.remove("bg-slate-700", "text-slate-300");
			button.classList.add("bg-primary", "text-white"); // Enforce bg-primary for active tab
		} else {
			// DEACTIVATE: Subtle Gray with Light text
			button.classList.remove("bg-primary", "text-white");
			button.classList.add("bg-slate-700", "text-slate-300");
		}
	});
}

/**
 * Shows a non-blocking toast notification.
 */
function showToast(message, isError = false) {
	const toast = document.getElementById("toast-notification");
	const toastMessage = document.getElementById("toast-message");
	const toastIcon = toast.querySelector("i"); // Grab the icon for visual change
	const toastDiv = toast.querySelector("div"); // Grab the inner div for background color

	// 1. Reset all error/success styling
	toastDiv.classList.remove(
		"bg-primary",
		"text-white",
		"bg-red-500",
		"text-white"
	);
	toastIcon.classList.remove("fa-check-circle", "fa-triangle-exclamation");

	// 2. Set message and visibility
	if (isError) {
		// ERROR STYLE: Red background, White/Light text
		toastDiv.classList.add("bg-red-500", "text-white");
		toastIcon.classList.add("fa-triangle-exclamation"); // Use a clear error icon
	} else {
		// SUCCESS STYLE: Green background, White text
		toastDiv.classList.add("bg-green-500", "text-white");
		toastIcon.classList.add("fa-check-circle");
	}

	toastMessage.textContent = message;
	toast.classList.remove("hidden", "opacity-0");
	toast.classList.add("opacity-100");

	// Hide toast after 4 seconds (4000 milliseconds)
	setTimeout(() => {
		toast.classList.remove("opacity-100");
		toast.classList.add("opacity-0");

		// Hide completely after the fade transition ends
		setTimeout(() => {
			toast.classList.add("hidden");
		}, 300); // Must match the transition duration in CSS
	}, 4000);
}

/**
 * Handles form submission success/failure by checking the network response.
 * NOTE: The HTML form now uses the standard 'action' attribute to submit data.
 */

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
async function handleSubmit(event) {
	event.preventDefault();
	const loader = document.getElementById("form-loader");
	const formMessage = event.target
		.closest(".tab-content")
		.querySelector(".form-message");

	loader.classList.remove("hidden");
	formMessage.textContent = "";

	try {
		// 1. Execute reCAPTCHA v3 and get the security token
		const token = await grecaptcha.execute(
			"6LdP1AUsAAAAAH1nR1KgJWdEzFM4URRQmUuw52Vq",
			{ action: "submit" }
		);
		console.log("reCAPTCHA token:", token);

		// 2. Convert form data to JSON object and add the token
		const dataObject = formDataToJSON(event.target);
		dataObject["g-recaptcha-response"] = token; // Add the token to the data object

		console.log("Form Data Object:", dataObject);
		// 3. Send the JSON string to Formspree
		const response = await fetch(event.target.action, {
			method: event.target.method,
			body: JSON.stringify(dataObject),
			headers: {
				"Content-Type": "application/json", // Critical for JSON body
				Accept: "application/json",
			},
		});

		loader.classList.add("hidden");

		if (response.ok) {
			event.target.reset();
			showToast("Service request submitted. I'll be in touch!");
		} else {
			// Read and display specific error from Formspree
			const errorData = await response.json();
			const errorMessage = errorData.errors
				? errorData.errors.map((e) => e.message).join(", ")
				: "Submission failed.";
			showToast("Error: " + errorMessage, true);
		}
	} catch (error) {
		loader.classList.add("hidden");
		showToast("Network error or reCAPTCHA failed. Please refresh.", true);
	}
}

// Function to smoothly scroll the window to the top
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
