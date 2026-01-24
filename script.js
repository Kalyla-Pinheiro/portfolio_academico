(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const langBtn = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  /* ======== TEMA ======== */
  const savedTheme = localStorage.getItem("kalyla-theme") || "dark";
  root.setAttribute("data-theme", savedTheme);

  function updateThemeIcon() {
    const mode = root.getAttribute("data-theme");
    themeBtn.innerHTML =
      mode === "light"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }
  updateThemeIcon();

  themeBtn.addEventListener("click", () => {
    const mode = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", mode);
    localStorage.setItem("kalyla-theme", mode);
    updateThemeIcon();
  });

  /* ======== IDIOMA ======== */
  const savedLang = localStorage.getItem("kalyla-lang") || "pt";
  setLanguage(savedLang);

  function setLanguage(lang) {
    const pt = document.querySelectorAll(".lang-pt");
    const en = document.querySelectorAll(".lang-en");

    if (lang === "pt") {
      pt.forEach(el => el.style.display = "");
      en.forEach(el => el.style.display = "none");
      langLabel.textContent = "EN";
    } else {
      pt.forEach(el => el.style.display = "none");
      en.forEach(el => el.style.display = "";
      langLabel.textContent = "PT";
    }

    localStorage.setItem("kalyla-lang", lang);
  }

  langBtn.addEventListener("click", () => {
    const newLang =
      localStorage.getItem("kalyla-lang") === "pt" ? "en" : "pt";
    setLanguage(newLang);
  });
})();
