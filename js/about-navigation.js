const gutter = header.offsetHeight + document.querySelector('.navigation-list').offsetHeight + 60;
const markers = document.querySelectorAll(".navigation-marker");

markers.forEach(el => {
    el.style.top = `-${gutter}px`;
})



window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

let navButtons = document.querySelectorAll('.navigation-list__button');


function checkScroll() {
    let scrollPos = window.scrollY;
    let navigation = document.querySelector(".main__navigation").offsetTop;

    if((scrollPos + header.offsetHeight) > navigation) {
        document.querySelector(".navigation-list").classList.add('nav-fixed')
    } else {
        document.querySelector(".navigation-list").classList.remove('nav-fixed')
    }

    if (scrollPos + gutter >= document.getElementById('video-present-content').offsetTop) {
        navButtons.forEach(el => {
            el.classList.remove("_current");
        })
        document.querySelector('[data-translate="video-present"]').classList.add('_current');

    }
    if (scrollPos + gutter >= document.getElementById('description-content').offsetTop) {
        navButtons.forEach(el => {
            el.classList.remove("_current");
        })
        document.querySelector('[data-translate="description"]').classList.add('_current');

    }
    if (scrollPos + gutter >= document.getElementById('characteristics-content').offsetTop) {
        navButtons.forEach(el => {
            el.classList.remove("_current");
        })
        document.querySelector('[data-translate="characteristics"]').classList.add('_current');

    }
    if (scrollPos + gutter >= document.getElementById('festival-gallery-content').offsetTop) {
        navButtons.forEach(el => {
            el.classList.remove("_current");
        })
        document.querySelector('[data-translate="festival-gallery"]').classList.add('_current');

    }
    if (scrollPos + gutter >= document.getElementById('sets-content').offsetTop) {
        navButtons.forEach(el => {
            el.classList.remove("_current");
        })
        document.querySelector('[data-translate="sets"]').classList.add('_current');

    }
}