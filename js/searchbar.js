const searchbar = document.querySelector('.header-search-overlay');

document.addEventListener('click', (e) => {
    if (e.target.dataset.action === "search") {
        searchbar.classList.add('overlay-active');
    } else if (e.target.dataset.action === "close-searchbar") {
        searchbar.classList.remove('overlay-active');
    }
});