// Authentication and navigation helpers
document.addEventListener("DOMContentLoaded", () => {
	// Login button handler
	const loginForm = document.querySelector("form");
	if (loginForm) {
		loginForm.addEventListener("submit", function(e) {
			e.preventDefault();
			// Simulate login and redirect to dashboard
			window.location.href = "dashboard.html";
		});
	}

	// Logout button handler
	const logoutBtn = document.querySelector("button.logout-btn");
	if (logoutBtn) {
		logoutBtn.addEventListener("click", function() {
			// Simulate logout and redirect to login
			window.location.href = "login.html";
		});
	}
});
