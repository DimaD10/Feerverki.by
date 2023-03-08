document.querySelectorAll('.order-form__input').forEach(el => {
    el.onfocus = (e) => {
        e.target.closest('.order-form__el').classList.add('_input-focus');
    }
    el.onblur = (e) => {
        e.target.closest('.order-form__el').classList.remove('_input-focus');
    }
})