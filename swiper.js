const swiperOne = new Swiper('.project_swiper', {
    loop: true,
    // slidesPerView: 2,
    breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        1175: {
          slidesPerView: 1,
        },
        1270: {
          slidesPerView: 2,
        },
      },
});