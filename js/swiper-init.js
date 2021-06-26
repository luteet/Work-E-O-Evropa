
const swiper = new Swiper('.last-vacancies__slider', {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoHeight: true,
    centeredSlides: true,
    loop: true,

    breakpoints: {
        // when window width is >= 320px
        992: {
          slidesPerView: 3,
          
        },
        600: {
            slidesPerView: 2,
            
        }
        
      }
});
