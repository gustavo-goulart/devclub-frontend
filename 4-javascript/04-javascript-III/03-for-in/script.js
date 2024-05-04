// let inputContact = document.querySelector("input");

// let displayContact = document.querySelector("p");

// const contacts = [
//   { name: "Gustavo", number: "(41)99122-9884" },
//   { name: "Maria", number: "(42)99122-9884" },
//   { name: "José", number: "(54)99122-9884" },
// ];

// function searchContact() {
//   for (const contact of contacts) {
//     if (inputContact.value.toLowerCase() === contact.name.toLowerCase()) {
//       displayContact.innerHTML = `Contato encontrado: ${contact.name}, telefone: ${contact.number}`;
//       break;
//     } else {
//       displayContact.innerHTML = "Contato não encontrado: Tente novamente";
//     }
//   }
// }

//FOR IN -> Serve para iterar (PASSAR ITEM POR ITEM) OBJETOS

const users = { name: "Gustavo", age: 42, adress: "Rua dos Bobos" };

//acessar o OBJETO - 2 maneiras
// console.log(users.name);
// console.log(users["name"]);

for (const key in users) {
  console.log(`${key} : ${users[key]}`);
}
