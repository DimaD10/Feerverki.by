const sortButtons = document.querySelectorAll(".filter-sort__button");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-sort__button")) {
        sortButtons.forEach((el) => {
            el.classList.remove('_current');
        })
        e.target.classList.add('_current');
    } 
    
    if (e.target.classList.contains("content-list__button")) {
        e.target.classList.toggle('_current');
    }
})