function showTip() {
  alert("Tip: Hydrate inside out — drink water and use essence!");
}

window.addEventListener("scroll", function() {
  let scroll = window.pageYOffset;
  document.body.style.backgroundPosition = `center ${scroll * 0.3}px`;
});
