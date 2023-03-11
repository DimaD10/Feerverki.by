const userRates = document.querySelectorAll(".aside-rate");

if (userRates.length) {
    userRates.forEach((el) => {
        let userMark = el.querySelector(".counter-rate").textContent;
        let userMarkRange = el.querySelector(".aside-rate__active");

        userMarkRange.style.width = `${userMark * 20}%`;
    });
}