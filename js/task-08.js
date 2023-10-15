const formToControl = document.querySelector(".login-form");
let userInfo = {};
const arrayOfInputs = [...formToControl.elements].filter(
  (elem) => elem.name !== ""
);

formToControl.addEventListener("submit", formSubmitHadler);

function formSubmitHadler(evt) {
  evt.preventDefault();

  if (arrayOfInputs.some((elem) => elem.value === "")) {
    alert("всі поля повинні бути заповнені");
  } else {
    userInfo = arrayOfInputs.reduce((user, elem) => {
      user[elem.name] = elem.value;
      return user;
    }, {});
    console.log(userInfo);
    formToControl.reset();
  }
}
