// ---------------------MENU MANAGEMENT------------------------------
const menuBtn = document.querySelector(".btnMenu");
const menu = document.querySelector("nav");
const  closeBtn = document.querySelector(".menuList li img");


menuBtn.addEventListener("click", () => {
    menu.style.transform = "translateX(0%)";
    menu.style.opacity = "1";
});

closeBtn.addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
    menu.style.opacity = "0";
    menu.style.cursor = "pointer";
});

// --------------------------UPDATE FORM MANAGEMENT-----------------------
const updateBtn = document.querySelector(".update");
const updateZone = document.querySelector(".upd");

updateBtn.addEventListener("click", () => {
    updateZone.style.opacity = "1";
    updateZone.style.scale = "1";
})

