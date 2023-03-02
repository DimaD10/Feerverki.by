const shortPopup = document.querySelector(".popup-added-to-cart");
const cartPopup = document.querySelector(".popup-cart");

function hideShortCart() {
    shortPopup.classList.remove("_showed");
    shortPopup.closest(".header-actions__actions-wrapper").querySelector(".cart-parrent").classList.remove('_showed');
}
function showShortCart() {
    if (cartPopup.classList.contains("_showed")) {
        cartPopup.classList.remove("_showed");
    }
    shortPopup.classList.add("_showed");
    shortPopup.closest(".header-actions__actions-wrapper").querySelector(".cart-parrent").classList.add('_showed');

}


document.addEventListener('click', (e) => {
    if (e.target.dataset.add === "cart") {
        showShortCart();
        window.setTimeout(hideShortCart, 6000);
    }

    if(e.target.dataset.status === "cart") {
        e.target.classList.toggle("_active");
        cartPopup.classList.toggle("_showed");
        e.target.closest(".header-actions__actions-wrapper").querySelector(".cart-parrent").classList.toggle('_showed');
        checkScrolling(e.target);
    }

    if (e.target.dataset.open === "open-full-cart") {
        hideShortCart();

        cartPopup.closest(".header-actions__actions-wrapper").querySelector("[data-status='cart']").classList.toggle('_active');
        cartPopup.classList.toggle("_showed");
        cartPopup.closest(".header-actions__actions-wrapper").querySelector(".cart-parrent").classList.toggle('_show-second');

        
        
        window.addEventListener("scroll", (e) => {
            if(cartPopup.classList.contains("_showed")) {
                cartPopup.closest(".header-actions__actions-wrapper").querySelector("[data-status='cart']").classList.toggle('_active');
                cartPopup.classList.toggle("_showed");
                cartPopup.closest(".header-actions__actions-wrapper").querySelector(".cart-parrent").classList.remove('_show-second');
            }
        })
    }
})

function checkScrolling(el) {
    window.addEventListener("scroll", (e) => {
        if(cartPopup.classList.contains("_showed")) {
            el.classList.toggle("_active");
            cartPopup.classList.toggle("_showed");
            el.closest(".header-actions__actions-wrapper").querySelector(".cart-parrent").classList.remove('_showed');
        }
    })
}

