document.addEventListener("click", (e) => {
    if (e.target.dataset.action === "spoiler") {
        let eParrent = e.target.closest(".spoiler");
        eParrent.classList.toggle('_active');

        if (eParrent.classList.contains("_active")) {
            closeSpoiler(eParrent);
        }

    }
});