const productSliders = document.querySelectorAll(".product-preview__slider");
const productPaginations = document.querySelectorAll(".product-preview__pagination");
const productPrevs = document.querySelectorAll(".product-preview__button-prev");
const productNexts = document.querySelectorAll(".product-preview__button-next");

for (let i = 0; i < productPaginations.length; i++) {
  const paginationEl = productPaginations[i];
  const prevEl = productPrevs[i];
  const nextEl = productNexts[i];
  
  paginationEl.classList.add(`product-preview__pagination_${i}`);
  prevEl.classList.add(`product-preview__button-prev_${i}`);
  nextEl.classList.add(`product-preview__button-next_${i}`);
}

for (let i = 0; i < productSliders.length; i++) {
  const el = productSliders[i];

  el.classList.add(`product-preview__slider_${i}`);

  var productSlide = new Swiper('.product-preview__slider_' + i, {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
  
    // If we need pagination
    pagination: {
      el: `.product-preview__pagination_${i}`,
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: `.product-preview__button-next_${i}`,
      prevEl: `.product-preview__button-prev_${i}`,
    },
  });
}
