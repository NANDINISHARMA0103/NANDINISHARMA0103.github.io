document.addEventListener("DOMContentLoaded", () => {
    // Mobile nav toggle
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => nav.classList.toggle("open"));
    }
  
    // Highlight active nav link based on current page
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-nav a").forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  
    // One-time hero entrance animation
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("reveal");
  
    // Animate skill bars when they scroll into view
    const bars = document.querySelectorAll(".skill-fill");
    if (bars.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.level + "%";
            observer.unobserve(bar);
          }
        });
      }, { threshold: 0.4 });
      bars.forEach(bar => observer.observe(bar));
    }
  
    // Contact form (front-end only demo — no backend)
    const form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.innerHTML = "<p style='font-weight:600;'>Thanks for reaching out! I'll get back to you soon.</p>";
      });
    }
  });