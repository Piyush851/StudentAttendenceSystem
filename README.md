
# Student Attendance System

## Overview
The Student Attendance System is a modern, web-based application designed to streamline and secure the process of tracking student attendance. Built with a focus on usability, security, and extensibility, it provides role-based access for students, teachers, HODs, and admins.

## Features
- **Sidebar Navigation:** Quick access to Dashboard, Attendance, Profile, and Logout.
- **Dashboard:** Mark attendance via barcode scanning, give location consent, and view feature highlights.
- **Role-Based Registration:**
	- Students: Verified by OTP.
	- Teachers: Authenticated by HOD.
	- HOD: Authenticated by Admin.
- **Login/Logout:** Secure authentication and session management.
- **Profile Management:** Edit username, email, and password with instant feedback.
- **Attendance History:** View past attendance records in a user-friendly table.
- **Attendance Report Download:** Export attendance data as CSV.
- **Notifications:** Real-time feedback for attendance status and profile updates.
- **Responsive UI:** Calm, natural, and user-friendly design across all devices.

## Project Structure

```
StudentAttendenceSystem/
├── README.md
├── frontend/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── dashboard.css
│   │   │   ├── login.css
│   │   │   └── main.css
│   │   ├── js/
│   │   │   ├── api.js
│   │   │   ├── attendance.js
│   │   │   ├── auth.js
│   │   │   ├── main.js
│   │   │   └── utils.js
│   ├── components/
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── sidebar.html
│   ├── pages/
│   │   ├── attendence.html
│   │   ├── attendance-history.html
│   │   ├── dashboard.html
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── profile.html
│   │   └── register.html
```

## Getting Started

### Prerequisites
- Node.js (for `npx serve`) or Python (for `http.server`)

### Local Development
1. Open a terminal and navigate to the `frontend` directory.
2. Start a local server:
	 - With Node.js:
		 ```
		 npx serve .
		 ```
	 - With Python:
		 ```
		 python -m http.server 8000
		 ```
3. Open your browser and go to `http://localhost:8000/`.
4. The application will always start at the homepage (`index.html`).

## Usage
- **Mark Attendance:** Go to Dashboard and click "Scan Barcode" (demo placeholder).
- **Give Location Consent:** Click the consent button for location-based attendance.
- **View Attendance History:** Use the sidebar or dashboard link to open attendance-history.
- **Download Report:** Click the download button on the dashboard to export CSV.
- **Edit Profile:** Go to Profile, update your info, and save changes.
- **Register/Login:** Use the registration and login pages for secure access.

## Customization & Deployment
- You can further customize the UI, add backend integration, or deploy to any static hosting service.
- Ensure `index.html` remains in the root of your deployment directory for correct startup behavior.

## Contributing
Feel free to fork the repository, submit issues, or make pull requests for improvements.

## License
This project is open source and available under the MIT License.

