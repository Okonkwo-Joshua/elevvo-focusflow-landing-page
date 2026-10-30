const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    toggleBtn.textContent = "☀️ Light";
    toggleBtn.setAttribute("aria-label", "Switch to dark theme");
  } else {
    toggleBtn.textContent = "🌙 Dark";
    toggleBtn.setAttribute("aria-label", "Switch to light theme");
  }
});
