const num1 = parseInt(prompt("Digite a nota 1: "));
const num2 = parseInt(prompt("Digite a nota 2: "));
const num3 = parseInt(prompt("Digite a nota 3: "));

const mediaFinal = (num1 + num2 + num3) / 3;

console.log(
  `A média entre as notas ${num1}, ${num2}, ${num3} foi de ${mediaFinal}`
);
