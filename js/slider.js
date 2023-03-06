const swiper = new Swiper('.fisrt-screen__slider', {
    effect: 'fade',
    loop: true,
    speed: 6000,
    autoplay: true,
    autoplay: {
        delay: 10000,
    },
    disableOnInteraction: false,
    simulateTouch: false,
    grabCursor: false,

    pagination: {
        el: '.slider-navigation__pagination',
        type: 'bullets',
        clickable: true,
    },
    
    navigation: {
        nextEl: '.slider-navigation__next',
        prevEl: '.slider-navigation__prev',
    },
});

const categorySlider = new Swiper('.subcategories-slider', {
    slidesPerView: 6,
    spaceBetween: 44,
    disableOnInteraction: false,

    pagination: {
        el: '.subcategories-slider__pagination',
        type: 'bullets',
        clickable: true,
    },
    
    navigation: {
        nextEl: '.subcategories-slider__btn-next',
        prevEl: '.subcategories-slider__btn-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        991.98: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 6,
            spaceBetween: 44,
        }
    },
});