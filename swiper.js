new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    autoplay: window.innerWidth <= 768 ? { // Ativa autoplay apenas no mobile
      delay: 3000, // Tempo de troca em ms (ajuste conforme necessário)
      disableOnInteraction: false
  } : false,
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
      swiper.params.autoplay = { delay: 3000, disableOnInteraction: false };
      swiper.autoplay.start();
  } else {
      swiper.autoplay.stop();
  }
});