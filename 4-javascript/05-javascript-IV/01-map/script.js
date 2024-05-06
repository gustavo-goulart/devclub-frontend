/*
 O Map aceita até 3 parâmetros:

const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx )


	1) O Map vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos mapeando. Item OBRIGATÓRIO.
	2) O indíce é a posição atual que estamos mapeando. Item OPCIONAL.
	3) Uma cópia do array original. Item OPCIONAL.

*/

// const number = [1, 2, 3, 4, 5, 6, 7];

//forma 1
// const double = number.map((item) => {
//   const newItem = item * 2;
//   return newItem;
// });

//forma 2 arrow-function
// const double = number.map((item) => item * 2);

// console.log(number);
// console.log(double);

// const list = [
//   { name: "Gustavo", vip: true },
//   { name: "Maria", vip: false },
//   { name: "Thiago", vip: true },
//   { name: "Ana", vip: true },
//   { name: "Carlos", vip: false },
//   { name: "Ana", vip: true },
//   { name: "Josue", vip: false },
// ];

// //criando um novo OBJETO
// const newList = list.map((user) => {
//   const newUser = {
//     name: user.name,
//     braceletColor: user.vip ? "black" : "green", //operador ternário
//   };

//   return newUser;
// });

// console.log(newList);

const students = [
  { name: "Gustavo", testGrade: 7 },
  { name: "Maria", testGrade: 5 },
  { name: "Thiago", testGrade: 8 },
  { name: "Ana", testGrade: 9 },
  { name: "Carlos", testGrade: 3 },
  { name: "Ana", testGrade: 2 },
  { name: "Josue", testGrade: 10 },
];

//criar um novo array para APROVADO OU REPROVADO
const newStudents = students.map((student) => {
  return {
    name: student.name,
    studentStatus:
      student.testGrade >= 5
        ? "APROVADO"
        : student.testGrade <= 4
        ? "RECUPERAÇÃO"
        : "REPROVADO",
  };
});

console.log(newStudents);
