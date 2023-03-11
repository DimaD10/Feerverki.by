$('.product-preview__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});


/*
$('.product-preview__slider-show').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-preview__thumbs',
  draggable: false,
  swipe: false,
});

$('.product-preview__thumbs').slick({
  infinite: false,
  //autoplay: false,
  slidesToShow: 4,
  asNavFor: '.product-preview__slider-show',
  focusOnSelect: true,
  vertical: true,
  //draggable: false,
  //swipe: false,

  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        vertical: false,
      }
    }
  ]
});*/