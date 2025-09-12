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
})