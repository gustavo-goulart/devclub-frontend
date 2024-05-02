const convertButton = document.querySelector(".convert-button");
const currencyValueToConvert = document.querySelector(
  ".currency-value-to-convert"
); // valor em R$
const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const dolarToday = 5.2;

  const convertedValue = inputCurrencyValue / dolarToday;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
}

convertButton.addEventListener("click", convertValues);
