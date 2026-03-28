const loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  loading.classList.add("loaded");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  speed: 300,
  autoplay: {
    delay: 3000,
    deiableOnInteraction: false,
    waitForTransition: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
