//função normal
function sayMyName(name) {
  return `Seu nome é: ${name}`;
}

//arrow-function - quando tiver 1 parametro retira o parenteses da prop
const sayMyName2 = (name) => `Seu nome é: ${name}`;

console.log(sayMyName("Gustavo"));
console.log(sayMyName2("José"));
