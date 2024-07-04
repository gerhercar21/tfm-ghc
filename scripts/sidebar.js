let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

function toggleSidebar() {
    sidebar.classList.toggle("active");
}

btn.onclick = toggleSidebar;
searchBtn.onclick = toggleSidebar;

function checkSidebarState() {
    if (window.innerWidth <= 991) {
        sidebar.classList.remove("active");
    }
}

// Verificar el estado del sidebar al cargar la página
window.onload = checkSidebarState;

// Verificar el estado del sidebar al redimensionar la ventana
window.onresize = checkSidebarState;
