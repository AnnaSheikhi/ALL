document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // اسکرول رو به پایین → مخفی کن
    header.classList.add("hide");
  } else {
    // اسکرول رو به بالا → نمایش بده
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach((bar) => observer.observe(bar));
});
