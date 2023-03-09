const cardsList = document.querySelector('.sertificate-list');
document.addEventListener("click", (e) => {
    if (e.target.dataset.show === "show-content") {
        cardsList.classList.toggle('_short');

        if (!cardsList.classList.contains("_short")) {
            e.target.textContent = "Показать меньше";
        } else {
            e.target.textContent = "Показать ещё";
        }
    }
})