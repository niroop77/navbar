document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  /* LOAD SAVED THEME */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  /* THEME TOGGLE */
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });

  /* MOBILE NAV MENU */
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";

    if (window.innerWidth <= 768) {
      themeToggle.classList.toggle("hide-toggle", navMenu.classList.contains("active"));
    }
  });

});
