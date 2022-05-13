// ========= SHOW MENU MOBILE ===================
const icon = document.querySelector("#icon");
const humberger = document.querySelector(".humberger");

// saat menu ikon di klik, akan tampil menu-menu dan akan meremove menu yang dipilih
icon.addEventListener("click", function () {
    icon.classList.toggle("active");
    humberger.classList.toggle("show");
});

// ========ACTIVE AND REMOVE MENU MOBILE=====
const navLink = document.querySelectorAll(".link");

function linkAction() {
    // active link
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    // remove link
    const navMenu = document.getElementById("menu_link");
    navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
