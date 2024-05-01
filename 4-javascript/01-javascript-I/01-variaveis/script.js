console.log("Olá Mundo!");

var age = 27;

console.log(age);

let name = "Rodolfo";

if (true) {
  let name = "Stephani";
  console.log(name); // retornará stephani
}

console.log(name); // retornará rodolfo
// Stephani
//Rodolfo

const name1 = "Stephani";

name1 = "Rodolfo";

console.log(name1);
//TypeError: Assignment to constant variable.
