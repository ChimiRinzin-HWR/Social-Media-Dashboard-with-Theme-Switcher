const html = document.querySelector("html");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    html.classList.toggle("light-theme");
})