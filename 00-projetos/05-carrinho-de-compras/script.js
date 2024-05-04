/*
  Calcular desconto:
  Todos os produtos acima de R$30,00 desconto de 10% 
*/

const cart = [10, 244, 99, 2, 20, 33, 250];

let valueWithoutDiscount = 0;

let finalValueWithDiscount = 0;

let receivedADiscount = valueWithoutDiscount - finalValueWithDiscount;

function calculateDiscount(price, discount) {
  const result = (price * discount) / 100;

  return result;
}

calculateDiscount(250, 7);

cart.forEach((value) => {
  valueWithoutDiscount += value;

  receivedADiscount = valueWithoutDiscount - finalValueWithDiscount;

  if (value > 30) {
    const discount = calculateDiscount(value, 10);
    finalValueWithDiscount = finalValueWithDiscount + (value - discount);
  } else {
    //finalValueWithDiscount = finalValueWithDiscount + value;
    finalValueWithDiscount += value;
  }
});

console.log(
  `Sua compra deu um Total de: R$ ${valueWithoutDiscount.toFixed(2)}.
  \nTotal de desconto de R$ ${receivedADiscount.toFixed(2)}.
  \nTotal a pagar de R$ ${finalValueWithDiscount.toFixed(2)}`
);
