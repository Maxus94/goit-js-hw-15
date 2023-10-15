const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", inputHandler);
function inputHandler() {
  span.style.fontSize = `${input.value}px`;
}
