document.addEventListener("DOMContentLoaded", () => {
  const toggle  = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", (e) => {
    const isOpen = nav.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "close navigation" : "open navigation");

  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "open navigation");
    }
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains("active")) {
      nav.classList.remove("active")
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "open navigation");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      nav.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "open navigation");
      toggle.focus(); 
    }
  });
});