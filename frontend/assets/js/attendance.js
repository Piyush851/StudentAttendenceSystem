// Attendance interactivity
document.addEventListener("DOMContentLoaded", () => {
	// Example: Mark attendance button
	const markBtn = document.getElementById("scan-barcode-btn");
	if (markBtn) {
		markBtn.addEventListener("click", function() {
			// Simulate barcode scan and show result
			document.getElementById("barcode-result").innerText = "Attendance marked!";
		});
	}

	// Example: View history button (if exists)
	const historyBtn = document.getElementById("view-history-btn");
	if (historyBtn) {
		historyBtn.addEventListener("click", function() {
			window.location.href = "attendance-history.html";
		});
	}
});
