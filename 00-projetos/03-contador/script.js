let number = 0;
let contador;
let h2 = document.querySelector("h2");

function start() {
  contador = setInterval(() => {
    number++;

    h2.innerHTML = number;
  }, 1000);
}

function stop() {
  clearInterval(contador);
}
