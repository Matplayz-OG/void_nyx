function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;

  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');

  if (timeEl && dateEl) {
    timeEl.textContent = `${hours}:${minutes}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
  }
}

window.addEventListener("load", () => {
  updateTime();
  setInterval(updateTime, 60000);
});

const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const body = document.getElementById("main-body");

  function setTheme(theme) {
    if (theme === "light") {
      body.classList.add("light");
      icon.textContent = "🌙";
    } else {
      body.classList.remove("light");
      icon.textContent = "☀️";
    }
    localStorage.setItem("theme", theme);
  }

  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });

  // Init theme on load
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);
