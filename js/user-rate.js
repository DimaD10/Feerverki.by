const ratingItems = document.querySelectorAll(".user-rating__item");
const ratingItemsArr = Array.prototype.slice.call(ratingItems);

ratingItems.forEach(el => {
    el.addEventListener("click", e => {
        const { rateValue } = el.dataset;
        el.parentNode.dataset.rateTotalValue = el.dataset.rateValue;

        // require rateValue
    })
})