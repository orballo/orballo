const logoDark = document.getElementById("logo");
const logoLight = document.getElementById("logo-light");
const body = document.querySelector("body");
const main = document.querySelector("main");

let clicked = false;

logoDark.addEventListener("click", () => {
  logoDark.style.display = "none";
  logoLight.style.display = "block";
  body.classList.add("inverted");
  main.classList.add("inverted");

  if (window.plausible && !clicked) {
    window.plausible("Click on Logo");
    clicked = true;
  }
});

logoLight.addEventListener("click", () => {
  logoDark.style.display = "block";
  logoLight.style.display = "none";
  body.classList.remove("inverted");
  main.classList.remove("inverted");
});
