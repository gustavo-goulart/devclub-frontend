// const users = [
//   { name: "Gustavo", age: 42, contact: "(41)99122-9884" },
//   { name: "Maria", age: 27, contact: "(42)99122-9884" },
//   { name: "José", age: 65, contact: "(54)99122-9884" },
//   { name: "Ana", age: 15, contact: "(84)99122-9884" },
// ];

//p

// users.forEach((item, index, array) => {
//   console.log(index);
//   console.log(item);
//   console.log(array);
// });

// users.forEach((item, index, array) => {
//   console.log(
//     `${index}) Nome: ${item.name}, idade: ${item.age}, telefone: ${item.contact}`
//   );
// });

let inputContact = document.querySelector("input");

let displayContact = document.querySelector("p");

const contacts = [
  { name: "Gustavo", number: "(41)99122-9884" },
  { name: "Maria", number: "(42)99122-9884" },
  { name: "José", number: "(54)99122-9884" },
];

function searchContact() {
  for (const contact of contacts) {
    if (inputContact.value.toLowerCase() === contact.name.toLowerCase()) {
      displayContact.innerHTML = `Contato encontrado: ${contact.name}, telefone: ${contact.number}`;
      break;
    } else {
      displayContact.innerHTML = "Contato não encontrado: Tente novamente";
    }
  }
}
