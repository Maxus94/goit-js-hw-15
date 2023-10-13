const input = document.querySelector("#validation-input");

input.addEventListener("blur", blurHandler);

function blurHandler() {
  // if (Number(input.dataset.length) === input.value.length){
  //     input.classList.remove("invalid")
  //     input.classList.add("valid")
  // } else {
  //     input.classList.add("invalid")
  //     input.classList.remove("valid")
  // }
  input.classList.remove("invalid", "valid");
  Number(input.dataset.length) === input.value.length
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}
