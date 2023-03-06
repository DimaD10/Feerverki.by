const filter = document.querySelector(".aside-filter");
const list = document.querySelector(".product-list-main-list");

checkFilterActivity();
if (window.innerWidth > 991.98) {
    if (filter.classList.contains("_opened") || filter.classList.contains("_opened-desktop")) {
        document.querySelector('.filter-button__text').textContent = 'Подбор по параметрам';
    } else {
        document.querySelector('.filter-button__text').textContent = 'Скрыть фильтр';
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-button')) {
        if (window.innerWidth < 1200) {
            filter.classList.add("_opened");
            body.style.overflow = `hidden`;
            checkFilterActivity();
        } else {
            filter.classList.toggle("_opened-desktop");

            list.classList.toggle("product-list_full-width");
            list.classList.toggle("product-list_short-width");

            if (filter.classList.contains("_opened") || filter.classList.contains("_opened-desktop")) {
                document.querySelector('.filter-button__text').textContent = 'Подбор по параметрам';
            } else {
                document.querySelector('.filter-button__text').textContent = 'Скрыть фильтр';
            }
        }
    } else if (e.target.dataset.action === "close-filters") {
        filter.classList.remove("_opened");
        body.style.overflow = `auto`;
        if (window.innerWidth < 1200) {
            filter.classList.remove("_opened");
            body.style.overflow = `auto`;
            checkFilterActivity();
        }
    }
})

function checkFilterActivity() {
    if (filter.classList.contains("_opened") || filter.classList.contains("_opened-desktop")) {
        document.querySelector('.filter-button__text').textContent = 'Скрыть фильтр';
    } else {
        document.querySelector('.filter-button__text').textContent = 'Подбор по параметрам';
    }
}
