const cityButtons = document.querySelectorAll('.sort__button');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('sort__button')) {
        cityButtons.forEach(el => {
            el.classList.remove('_current');
        });
        e.target.classList.add('_current');
    }
})