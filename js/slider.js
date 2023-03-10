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
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        767.98: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        991.98: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 44,
        }
    },
});

const gallerySlider = new Swiper('.festival-gallery__slider', {
    loop: true,
    disableOnInteraction: false,
    
    navigation: {
        nextEl: '.festival-gallery__button-next',
        prevEl: '.festival-gallery__button-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        567.98: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
});

const productSlider = new Swiper('.product-list-slider', {
    loop: true,
    slidesPerView: 4,
    
    pagination: {
        el: '.product-list-slider__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.product-list-slider__btn-next',
        prevEl: '.product-list-slider__btn-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        567.98: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
});

const sliderForProduct = new Swiper('.product-preview__slider-show', {
    loop: true,
    slidesPerView: 1,

    effect: 'fade',

    navigation: {
        nextEl: '.product-btn-next',
        prevEl: '.product-btn-prev',
    },

    thumbs: {
        swiper: {
            el: '.product-preview__thumbs',
            slidesPerView: 4,
        }
    }
});
/*
const thumbsForProduct = new Swiper('.product-preview__thumbs', {
    loop: true,
    slidesPerView: 1,
    direction: vertical,
});*/