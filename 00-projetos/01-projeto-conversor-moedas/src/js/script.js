const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em R$
  const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

  console.log(currencySelect.value);

  const dolarToday = 5.113;
  const euroToday = 5.485;

  if (currencySelect.value == "dolar") {
    //Se o select estiver selecionado o valor de dolar entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    //Se o select estiver selecionado o valor de euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/images/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/images/euro.png";
  }

  convertValues();
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
