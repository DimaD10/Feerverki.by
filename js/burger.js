const burgerMenu = document.querySelector('.header-bottom');
const body = document.querySelector("body");
const cartBtn = document.querySelector(".cart-parrent");

document.addEventListener('click', (e) => {
    if (e.target.classList.contains("header__burger")) {
        burgerMenu.classList.add('_active');
        body.style.overflow = `hidden`;
        cartBtn.classList.add('_full');
    } else if (e.target.dataset.action === "close-burger") {
        burgerMenu.classList.remove('_active');
        body.style.overflow = `auto`;
        cartBtn.classList.remove('_full');
    }
});