function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let markupOfDivs = [];

const inputNumberOfDivs = document.querySelector("[type=number]");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");

createButton.addEventListener("click", clickCreateHandler);

function clickCreateHandler() {
  createBoxes(inputNumberOfDivs.value);
  inputNumberOfDivs.value = null;
}
destroyButton.addEventListener("click", clickDestroyHandler);

function clickDestroyHandler() {
  destroyBoxes();
  markupOfDivs = [];
}

function createBoxes(amount) {
  let divSize = 30;
  for (let i = 0; i < amount; i++) {
    markupOfDivs.push(
      `<div style="width: ${divSize}px; height:  ${divSize}px; background-color:  ${getRandomHexColor()};"></div>`
    );
    divSize += 10;
  }
  divOfBoxes.innerHTML = markupOfDivs.join("");
}
function destroyBoxes() {
  divOfBoxes.innerHTML = "";
}
