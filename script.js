document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, i) => {
    sec.style.opacity = "0";
    sec.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
    setTimeout(() => {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }, 500 + i * 400);
  });
});
