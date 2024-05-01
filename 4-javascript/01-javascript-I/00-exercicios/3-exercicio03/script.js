const numero = parseFloat(prompt("Digite um número: "));

if (numero > 10) {
  alert(`O número digitado foi ${numero} ele é MAIOR que 10`);
} else if (numero === 10) {
  alert(`O número digitado foi ${numero} ele é IGUAL 10`);
} else {
  alert(`O número digitado foi ${numero} ele é MENOR que 10`);
}
