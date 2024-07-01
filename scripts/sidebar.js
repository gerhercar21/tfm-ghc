let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

function toggleSidebar() {
    let width = window.innerWidth;
    if (width > 575) {
        sidebar.classList.toggle("active");
    }
}

btn.onclick = toggleSidebar;
searchBtn.onclick = toggleSidebar;

window.onresize = function() {
    if (window.innerWidth <= 575) {
        sidebar.classList.remove("active");
    }
};