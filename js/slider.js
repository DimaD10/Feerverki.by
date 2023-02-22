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