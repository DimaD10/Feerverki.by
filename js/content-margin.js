const main = document.querySelector(".main");
const header = document.querySelector(".header");
console.log(header.offsetHeight);

main.style.paddingTop = `${header.offsetHeight}px`;