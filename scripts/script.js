document.addEventListener("DOMContentLoaded", () => {
	// 1. Set the initial active state to the service tab
	document
		.querySelectorAll(".tab-content")
		.forEach((content) => content.classList.remove("active"));
	document.getElementById("service").classList.add("active");

	// 2. Call showTab to correctly apply the primary color styles on load
	showTab("service");
});

// Hamburger Menu Toggle Functionality
function toggleMenu() {
	const mobileMenu = document.getElementById("mobile-menu");
	const toggleButton = document.getElementById("menu-toggle");
	const body = document.body;

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
	const body = document.body;

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
	const body = document.body;

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
		button.classList.add("hover:bg-c-primary/90", "hover:text-white");

		if (isTarget) {
			// ACTIVATE: Primary Blue with White text
			button.classList.remove("bg-slate-700", "text-slate-300");
			button.classList.add("bg-c-primary", "text-white"); // Enforce bg-c-primary for active tab
		} else {
			// DEACTIVATE: Subtle Gray with Light text
			button.classList.remove("bg-c-primary", "text-white");
			button.classList.add("bg-slate-700", "text-slate-300");
		}
	});
}

/**
 * Shows a non-blocking toast notification.
 */
function showToast(message) {
	const toast = document.getElementById("toast-notification");
	const toastMessage = document.getElementById("toast-message");

	// Set message and make visible
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
 * Handles form submission by showing a loader, simulating a network delay,
 * and displaying a success toast.
 */
function handleFormSubmit(event, targetEmail) {
	event.preventDefault();

	const form = event.target;
	const loader = document.getElementById("form-loader");

	// 1. Show the loader and disable scrolling
	loader.classList.remove("hidden");
	docume;

	// Simulate network delay for 1500ms (1.5 seconds)
	setTimeout(() => {
		// --- Simulate Backend Response ---

		// 2. Hide the loader
		loader.classList.add("hidden");

		// 3. Show the success message (Toast notification)
		const successMsg = `Message sent! I will respond shortly.`;
		showToast(successMsg);

		form.reset();
	}, 1500);
}
