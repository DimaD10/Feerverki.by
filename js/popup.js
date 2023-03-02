const vModal = document.querySelector(".video-popup");
const oModal = document.querySelector(".order-on-one-click");
const tModal = document.querySelector(".thanks-popup");

const popups = document.querySelectorAll(".popup");

document.addEventListener("click", (e) => {
    if(e.target.dataset.action === "open-video-popup") {
        if (e.target.closest(".product-card__wrapper").querySelector(".popup-video")) {
            let video = e.target.closest(".product-card__wrapper").querySelector(".popup-video").innerHTML;
            vModal.querySelector(".close-video-popup__video").innerHTML = video;
            
            vModal.classList.add("_opened");
            body.style.overflow = `hidden`;
        } else {
            vModal.querySelector(".close-video-popup__video").innerHTML = `<div class="popup-video__text">Видео не найдено...</div>`;

            vModal.classList.add("_opened");
            body.style.overflow = `hidden`;
        }
        
    } else if (e.target.dataset.action === "close-video-popup") {
        vModal.classList.remove("_opened");
        body.style.overflow = `auto`;
    }
})
document.addEventListener("click", (e) => {
    if (e.target.dataset.action === 'order-to-one-click') {
        oModal.classList.add("_opened");
        body.style.overflow = `hidden`;
    } else if (e.target.dataset.action === "close-order-on-one-click") {
        oModal.classList.remove("_opened");
        body.style.overflow = `auto`;
    } else if (e.target.dataset.action === "close-thanks") {
        tModal.classList.remove("_opened");
        body.style.overflow = `auto`;
    }
})

document.addEventListener('keydown', function(event) {
    if(vModal.classList.contains("_opened")) {
        if (event.key == 'Escape') {
            vModal.classList.remove('_opened');
            body.style.overflow = `auto`;  
        }
    } else if (oModal.classList.contains("_opened")) {
        if (event.key == 'Escape') {
            oModal.classList.remove('_opened');
            body.style.overflow = `auto`;  
        }
    } else if (tModal.classList.contains("_opened")) {
        if (event.key == 'Escape') {
            tModal.classList.remove('_opened');
            body.style.overflow = `auto`;  
        }
    }
});
vModal.addEventListener('click', (e) => {
    if (e.target == vModal && e.target !== vModal.querySelector(".video-popup__wrapper")) {
        vModal.classList.remove('_opened');
        body.style.overflow = `auto`;  
    }
});
oModal.addEventListener('click', (e) => {
    if (e.target == oModal && e.target !== oModal.querySelector(".order-on-one-click__wrapper")) {
        oModal.classList.remove('_opened');
        body.style.overflow = `auto`;  
    }
});
tModal.addEventListener('click', (e) => {
    if (e.target == tModal && e.target !== tModal.querySelector(".thanks-popup__wrapper")) {
        tModal.classList.remove('_opened');
        body.style.overflow = `auto`;  
    }
});

function callThanksPopup() {
    tModal.classList.add("_opened");
    body.style.overflow = `auto`;
}


//callThanksPopup();  // - откритие модалки с благодарностью