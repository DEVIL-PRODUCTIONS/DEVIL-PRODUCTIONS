// Simple JS for:
// 1. Dynamic year in footer
// 2. Scroll-based reveal animations

document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Intersection Observer for reveal-on-scroll and fade-in-block
  const revealElements = document.querySelectorAll(".reveal-on-scroll, .fade-in-block");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show all
    revealElements.forEach((el) => el.classList.add("visible"));
  }
});
