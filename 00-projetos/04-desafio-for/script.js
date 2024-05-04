let inputContact = document.querySelector("input");

let displayContact = document.querySelector("p");

const contacts = [
  { name: "Gustavo", number: "(41)99122-9884" },
  { name: "Maria", number: "(42)99122-9884" },
  { name: "José", number: "(54)99122-9884" },
];

function searchContact() {
  for (let i = 0; i < contacts.length; i++) {
    if (inputContact.value.toLowerCase() === contacts[i].name.toLowerCase()) {
      displayContact.innerHTML = `Contato encontrado: ${contacts[i].name}, telefone: ${contacts[i].number}`;
      break;
    } else {
      displayContact.innerHTML = "Contato não encontrado: Tente novamente";
    }
  }
}
