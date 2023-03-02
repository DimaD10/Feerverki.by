const categoryParrent = document.querySelector(".main-product-list");
const categoryes = categoryParrent.querySelectorAll(".product-list__category");
const products = document.querySelectorAll(".product-card");

document.addEventListener('click', (e) => {
    if(e.target.classList.contains("product-list__category")) {
        categoryes.forEach((el) => {
            el.classList.remove('product-list__category_current');

        });
        e.target.classList.add('product-list__category_current');
        //checkCategory(e.target);
    }
})