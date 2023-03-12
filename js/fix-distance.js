const headerHeight = document.querySelector('.header');
const gutter = headerHeight.offsetHeight + 60;
const markers = document.querySelectorAll(".navigation-marker");

markers.forEach(el => {
    el.style.top = `-${gutter}px`;
})