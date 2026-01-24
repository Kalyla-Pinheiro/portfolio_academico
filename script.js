const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const body = document.body;

let dark = true;
let pt = true;

themeToggle.onclick = () => {
  dark = !dark;
  body.setAttribute("data-theme", dark ? "dark" : "light");
  themeToggle.textContent = dark ? "🌙" : "☀️";
};

langToggle.onclick = () => {
  pt = !pt;

  document.querySelectorAll(".lang-pt").forEach(el => el.style.display = pt ? "block" : "none");
  document.querySelectorAll(".lang-en").forEach(el => el.style.display = pt ? "none" : "block");

  langToggle.textContent = pt ? "EN" : "PT";
};
