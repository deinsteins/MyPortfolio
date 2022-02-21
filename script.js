// Menu
const menu = document.querySelector(".menu");
const navBarOpen = document.querySelector(".bar");
const navBarClose = document.querySelector(".close");

const navBarLeft = menu.getBoundingClientRect().left;
navBarOpen.addEventListener("click", () => {
  if (navBarLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navBarClose.addEventListener("click", () => {
  if (navBarLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navBarHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navBarHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Colors Changer
const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#0044ff");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});

// AOSjs
AOS.init();

// TypeItjs
new TypeIt(".type-name", {
  speed: 500,
  loop: true,
  waitUntilVisible: true,
})
  .type("Deni Hidayat", { delay: 400 })
  .pause(1000)
  .delete(10)
  .go();

// GASPjs
gsap.from(".logo", { opacity: 0, duration: 1.2, delay: 0.7, y: -15 });
gsap.from(".bar", { opacity: 0, duration: 1.2, delay: 1, x: 20 });
gsap.from(".hero h3", { opacity: 0, duration: 1.2, delay: 1.6, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1.2, delay: 1.8, y: -45 });
gsap.from(".hero a", { opacity: 0, duration: 1.2, delay: 2.2, y: -10 });

gsap.from(".nav-item", {
  opacity: 0,
  duration: 1.5,
  delay: 1,
  y: 33,
  stagger: 0.3,
});

gsap.from(".icons span", {
  opacity: 0,
  duration: 1.5,
  delay: 3,
  x: -33,
  stagger: 0.3,
});
