const counters = document.querySelectorAll('.card-actions__counter');
counters.forEach((el) => {
    let i = el.querySelector('.card-actions__count').textContent;
    if (i <= 1) {
        el.querySelector(".card-actions__btn_minus").setAttribute('disabled', '');
    } else {
        el.querySelector(".card-actions__btn_minus").removeAttribute('disabled', '');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains("card-actions__btn")) {
        let btnParrent = e.target.closest(".card-actions__counter");
        let countNum = btnParrent.querySelector(".card-actions__count");

        if (e.target.classList.contains("card-actions__btn_plus")) {
            let i = countNum.textContent;
            i++;
            countNum.textContent = i;
            if (i > 1) {
                btnParrent.querySelector(".card-actions__btn_minus").removeAttribute('disabled', '');
            }
        } else if (e.target.classList.contains("card-actions__btn_minus")) {
            let i = countNum.textContent;
            i--;
            countNum.textContent = i;

            if (i <= 1) {
                btnParrent.querySelector(".card-actions__btn_minus").setAttribute('disabled', '');
            }
        }
    }

    if (e.target.dataset.action === "add-to-favorite") {
        e.target.classList.toggle('_favorite');
    }
});

const cards = document.querySelectorAll('.product-card');

cards.forEach((el) => {
    if (el.classList.contains("absent")) {
        let btn = el.querySelector('.product-card__button');
        
        btn.innerHTML = `<span>Подробная информация</span>`;
    }

    el.addEventListener('mouseover', (e) => {
        el.style.zIndex = 100;
    })
    el.addEventListener('click', (e) => {
        el.style.zIndex = 100;
    })
    el.addEventListener('mouseout', (e) => {
        el.style.zIndex = 1;
    })
/*
    document.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target.classList.contains('product-preview__button-prev') || e.target.classList.contains('product-preview__button-next')) {
            e.target.closest(".product-card").style.zIndex = 100;
        }
    })*/
})

