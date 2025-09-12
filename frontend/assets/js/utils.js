// General utility navigation
document.addEventListener("DOMContentLoaded", () => {
	// Example: Profile navigation
	const profileBtn = document.getElementById("profile-nav-btn");
	if (profileBtn) {
		profileBtn.addEventListener("click", function() {
			window.location.href = "profile.html";
		});
	}
});
