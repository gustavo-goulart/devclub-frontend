const num1 = parseFloat(prompt("Digite um número: "));
const num2 = parseFloat(prompt("Digite outro número: "));

const mostarResultado = document.querySelector("h4");

function somar(num1, num2) {
  const soma = num1 + num2;
  mostarResultado.innerHTML = `A soma entre ${num1} e ${num2} é: ${soma}`;
}

function subtrair(num1, num2) {
  const subtracao = num1 - num2;
  mostarResultado.innerHTML = `A subtração entre ${num1} e ${num2} é: ${subtracao}`;
}

function multiplicar(num1, num2) {
  const multiplicacao = num1 * num2;
  mostarResultado.innerHTML = `A multiplicação entre ${num1} e ${num2} é: ${multiplicacao}`;
}

function divisao(num1, num2) {
  const divisao = num1 / num2;
  mostarResultado.innerHTML = `A divisão entre ${num1} e ${num2} é: ${divisao}`;
}
