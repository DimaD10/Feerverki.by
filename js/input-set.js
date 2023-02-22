const inputPhone = document.querySelector(".order-form__el_phone-number");


if (inputPhone) {
    inputPhone.addEventListener('click', (e) => {
        inputPhone.querySelector('.order-form__input').placeholder = "";
        inputPhone.querySelector('.order-form__input').value = "+375 ()";
    });
    inputPhone.addEventListener('input', (e) => {
        console.log("true");
        console.log(e);
        //inputPhone.querySelector('.order-form__input').value = "+375 ()";
    });
}