const burgerMenu = document.querySelector('.header-bottom');
const body = document.querySelector("body");

document.addEventListener('click', (e) => {
    if (e.target.classList.contains("header__burger")) {
        burgerMenu.classList.add('_active');
        body.style.overflow = `hidden`;
    } else if (e.target.dataset.action === "close-burger") {
        burgerMenu.classList.remove('_active');
        body.style.overflow = `auto`;
    }
});