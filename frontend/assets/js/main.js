
async function loadComponents(targetId, file) {
    try {
        const response = await fetch(`../components/${file}`);
        if(!response.ok) throw new Error(`Failed to load ${file}`);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", async() => {
    await loadComponents("navbar-loader", "header.html");
    await loadComponents("footer-loader", "footer.html");

    // Interlink sidebar and header links after loading
    setTimeout(() => {
        // Sidebar links
        const sidebarLinks = [
            { selector: 'a[href*="dashboard.html"]', page: 'dashboard.html' },
            { selector: 'a[href*="attendence.html"]', page: 'attendence.html' },
            { selector: 'a[href*="profile.html"]', page: 'profile.html' },
            { selector: 'a[href*="login.html"]', page: 'login.html' }
        ];
        sidebarLinks.forEach(link => {
            const el = document.querySelector(link.selector);
            if (el) {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = link.page;
                });
            }
        });

        // Header links (example: Home, News, About, Contact)
        const headerLinks = [
            { selector: 'a.nav-link.active', page: 'index.html' },
            { selector: 'a.nav-link[href="#"]', page: 'news.html' },
            { selector: 'a.dropdown-item[href="#"]', page: 'about.html' },
            { selector: 'a.dropdown-item[href="#"]', page: 'contact.html' },
            { selector: 'a.dropdown-item[href="#"]:last-child', page: 'report.html' }
        ];
        headerLinks.forEach(link => {
            const el = document.querySelector(link.selector);
            if (el) {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = link.page;
                });
            }
        });
    }, 500);
});