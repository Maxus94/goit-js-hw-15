function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChangeColor = document.querySelector(".change-color");
const bodyTag = document.querySelector("body");
const spanForColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", clickHandle);
function clickHandle() {
  bodyTag.style.backgroundColor = getRandomHexColor();
  spanForColor.textContent = getRandomHexColor();
}
