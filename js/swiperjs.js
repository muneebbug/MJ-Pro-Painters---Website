var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});