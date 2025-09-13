// API navigation demo
document.addEventListener("DOMContentLoaded", () => {
	// Example: Download report button
	const downloadBtn = document.getElementById("download-report-btn");
	if (downloadBtn) {
		downloadBtn.addEventListener("click", function() {
			alert("Report downloaded (demo)");
		});
	}
});
