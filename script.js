const revealTargets = document.querySelectorAll(
  ".section-heading, .metric-card, .skill-card, .timeline-item, .project-card, .education-panel, .honor-panel"
  + ", .thesis-card, .result-strip, .route-panel, .comparison-panel, .results-gallery"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => observer.observe(target));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const topbarHeight = document.querySelector(".topbar")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - topbarHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

window.addEventListener("load", () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  const alignHashTarget = () => {
    const topbarHeight = document.querySelector(".topbar")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - topbarHeight - 16;
    window.scrollTo({ top, behavior: "auto" });
  };
  window.setTimeout(alignHashTarget, 80);
  window.setTimeout(alignHashTarget, 420);
});
