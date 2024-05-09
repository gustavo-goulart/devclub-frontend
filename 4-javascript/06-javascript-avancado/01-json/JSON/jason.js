/* 
JSON - JavaScript Object Notation

-Padrão de troca e armazenamento de informações;
-Padrão Lógico e simples;
-Leve para ser enviado e recebido;
-Simples e fácil de entender;
-Derivado do JavaScript;
-Utiliza o formato chave / valor

*/

const user = {
  nome: "Gustavo",
  idade: 42,
  filhos: 1,
  casado: true,
  hobbies: ["Viajar", "Codar", "Filmes"],
};

//Converter o objeto para JSON
const userJson = JSON.stringify(user);
console.log(userJson);

//Converter o JSON para objeto
const jsonToJs = JSON.parse(userJson);
console.log(jsonToJs);
