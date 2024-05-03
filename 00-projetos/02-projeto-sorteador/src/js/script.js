function generateNumber() {
  const inputMinValue = Math.ceil(document.querySelector(".input-min").value);
  const inputMaxValue = Math.floor(document.querySelector(".input-max").value);

  const result =
    Math.floor(Math.random() * (inputMaxValue - inputMinValue + 1)) +
    inputMinValue;

  alert(`O NÚMERO SORTEADO FOI: ${result}`);
}
