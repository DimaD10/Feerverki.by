const yandexRate = document.querySelector(".yandex-rate").querySelector(".counter-rate");
const yandexRateRange = document.querySelector(".yandex-rate").querySelector(".aside-rate__active");
const googleRate = document.querySelector(".google-rate").querySelector(".counter-rate");
const googleRateRange = document.querySelector(".google-rate").querySelector(".aside-rate__active");

yandexRateRange.style.width = `${yandexRate.textContent * 20}%`;
googleRateRange.style.width = `${googleRate.textContent * 20}%`;


const userRates = document.querySelectorAll(".user-rating");

if (userRates.length) {
    userRates.forEach((el) => {
        let userMark = el.querySelector(".counter-rate").textContent;
        let userMarkRange = el.querySelector(".user-rating__active");

        userMarkRange.style.width = `${userMark * 20}%`;
    });
}