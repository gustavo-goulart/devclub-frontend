const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em R$
  const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

  const dolarToday = 5.07;
  const euroToday = 5.485;
  const librasToday = 6.38;
  const bitcoinValueToday = 61097.432;
  const bitcoinToday = bitcoinValueToday * dolarToday;

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

  if (currencySelect.value == "libras") {
    //Se o select estiver selecionado o valor de euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / librasToday);
  }

  if (currencySelect.value == "bitcoin") {
    //Se o select estiver selecionado o valor de euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      maximumSignificantDigits: 9,
    }).format(inputCurrencyValue / bitcoinToday);
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

  if (currencySelect.value == "libras") {
    currencyName.innerHTML = "GBP-Libras";
    currencyImage.src = "./assets/images/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "BTC-Bitcoin";
    currencyImage.src = "./assets/images/bitcoin.png";
  }

  convertValues();
}

function resetInput() {
  document.getElementById("reset").value = "";
}

convertButton.addEventListener("click", convertValues);
convertButton.addEventListener("click", resetInput);
currencySelect.addEventListener("change", changeCurrency);
