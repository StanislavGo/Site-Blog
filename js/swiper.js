const swiperOne = new Swiper(".project_swiper", {
    loop: true,

    breakpoints: {
        1175: {
          slidesPerView: 1,
        },
        1270: {
          slidesPerView: 2,
        },
      },
});

const swiper = new Swiper(".slide-conteiner", {
  loop: true,
  breakpoints:{
    640:{
      slidesPerView: 1,
      centerSlide: true,
    },
    1300:{
      slidesPerView: 2,
      centerSlide: true,
    },
    1500:{
      slidesPerView: 3,
    },
  },
});