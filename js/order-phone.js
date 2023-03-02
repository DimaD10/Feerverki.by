const orderPhone = document.querySelector('.order-phone');

document.addEventListener('click', (e) => {
    if (e.target.dataset.action === "order-phone") {
        orderPhone.classList.add('_active');
        body.style.overflow = `hidden`;
    } else if (e.target.dataset.action === "order-phone-l") {
        orderPhone.classList.add('_active');
        body.style.overflow = `hidden`;
    } else if (e.target.dataset.action === "close-order") {
        orderPhone.classList.remove('_active');
        body.style.overflow = `auto`;            
    }
});

document.addEventListener('keydown', function(event) {
    if(orderPhone.classList.contains("_active")) {
        if (event.key == 'Escape') {
            orderPhone.classList.remove('_active');
            body.style.overflow = `auto`;  
        }
    }
});

orderPhone.addEventListener('click', (e) => {
    if (e.target == orderPhone && e.target !== orderPhone.querySelector(".order-phone__wrapper")) {
        orderPhone.classList.remove('_active');
        body.style.overflow = `auto`;  
    }
});