const element = document.querySelector(".paragraph-js");

//ALTERANDO O TEXTO
// element.textContent = "O novo texto é esse";

element.innerHTML = "O texto alterado com <b>NEGRITO</>";

//SÓ O HTML
console.log(element.textContent);
//LEVA EM CONTA O CSS
console.log(element.innerText);
//TRÁS TUDO
console.log(element.innerHTML);
