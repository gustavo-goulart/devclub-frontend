/*
const novaArray = arrayOriginal.filter((valorAtual, indice, arrayOriginal) => {
seu código aqui
});
1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é
cada item, um por vez do array que estamos filtrando. Item OBRIGATÓRIO.
2) O indíce é a posição atual que estamos filtrando. Item OPCIONAL.
3) Uma cópia do array original. Item OPCIONAL.
A cada item, fazemos uma 'pergunta' ao código. Se a resposta for verdadeira
naquele item, ele guardará o valorAtual no novo array. Caso seja falso, o valor
será descartado */

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

//Quero somente números maiores que 100

/*
const newList = list.filter((number) => {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
});
*/
//Quero somente números maiores que 100
const newList = list.filter((number) => number > 100);

console.log(newList);
