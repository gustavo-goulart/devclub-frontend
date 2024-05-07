/*
 O Reduce aceita até 4 parâmetros:

const novoArray = arrayOriginal.reduce(
  (acumulador, valorAtual, índice, arrayOriginal) => {
			return xxxxx
}, valorInicial);


	1) O acumulador, na primeira iteração terá o valor inicial que daremos a ele.            
       Já nas demais iterações, ele terá o valor que iremos acumular nele. Item OBRIGATÓRIO.
	2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO.
	3) O índice do elemento atual. Item OPCIONAL.
	4) O array original. Item OPCIONAL.


*/
/*
const list = [1, 2, 3, 4, 5, 6, 7];

const soma = list.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(soma);
*/

const cart = [
  { productName: "Abóbora", pricePerKg: 5, kg: 1 },
  { productName: "Pepino", pricePerKg: 3.55, kg: 1.3 },
  { productName: "Limão", pricePerKg: 1.2, kg: 2 },
  { productName: "Abacate", pricePerKg: 5.4, kg: 1.67 },
  { productName: "Morango", pricePerKg: 11.9, kg: 3 },
];

const soma = cart.reduce((acumulador, value) => {
  const pricePerKgTotal = value.pricePerKg * value.kg;

  return acumulador + pricePerKgTotal;
}, 0);

console.log(soma.toFixed(2));
