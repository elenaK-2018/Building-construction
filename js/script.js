const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  header.classList.toggle("open");
  document.body.classList.toggle("stop-scroll");
});

const search = document.querySelector(".header__form");
const body = document.querySelector("body");



search.addEventListener("click", (e) => {
  e.stopPropagation();
  search.classList.add("header__form--active");
});

body.addEventListener("click", () => {
  search.classList.remove("header__form--active");
});


// Закрыть меню при клике на Esc
window.addEventListener("keydown", (e) => {
  if(e.key === "Escape") {
    document.querySelector(".header").classList.remove("open")
  }
});


// Закрыть меню при клике вне его
burger.addEventListener("click", (e) => {
  e._isClickWithInMenu = true;
});
nav.addEventListener("click", (e) => {
  e._isClickWithInMenu = true;
});
body.addEventListener("click", (e) => {
  if  (e._isClickWithInMenu)  return;
  header.classList.remove("open")
});


// const navItems = document.querySelector(".nav__list");


// navItems.forEach(el => {
//   el.addEventListener ("click", () => {
//     header.classList.remove("open");
//   });
// });

const play = document.querySelector(".about__play");
const video = document.querySelector(".about__video video");

play.addEventListener("click", () =>  {
    video.play();
    video.setAttribute("controls", "controls");
    // play.setAttribute('hidden', true);
    play.classList.add("about__play--hidden");
});

//галерея

const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView:1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

})


  