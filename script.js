const mobile_menu = document.getElementById("mobile_menu");
const hamburger = document.getElementById("hamburger");
const x = document.getElementById("x");

function sidebarMenuShow() {
    mobile_menu.classList.toggle("show");
    hamburger.classList.toggle("hide");
    x.classList.toggle("show");
}